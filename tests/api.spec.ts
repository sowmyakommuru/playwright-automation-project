import { test, expect } from "@playwright/test";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

// -----------------------------
// 1. GET SUCCESS (200)
// -----------------------------
test("GET 200 – Valid weather request", async ({ request }) => {
  const response = await request.get(
    `${BASE_URL}?latitude=40.0&longitude=-83.0&current_weather=true`
  );

  expect(response.status()).toBe(200);

  const json = await response.json();

  // Top-level fields
  expect(json).toHaveProperty("latitude");
  expect(json).toHaveProperty("longitude");
  expect(json).toHaveProperty("elevation");
  expect(json).toHaveProperty("timezone");

  // Nested objects
  expect(json).toHaveProperty("current_weather");
  expect(json).toHaveProperty("current_weather_units");

  // Validate data types
  expect(typeof json.latitude).toBe("number");
  expect(typeof json.elevation).toBe("number");
  expect(typeof json.timezone).toBe("string");

  // Validate nested fields
  expect(json.current_weather).toHaveProperty("temperature");
  expect(json.current_weather).toHaveProperty("windspeed");
  expect(json.current_weather).toHaveProperty("weathercode");
});
test("GET 400 – Invalid latitude parameter", async ({ request }) => {
  const response = await request.get(
    `${BASE_URL}?latitude=abc&longitude=xyz`
  );

  expect(response.status()).toBe(400);

  const json = await response.json();

  expect(json).toHaveProperty("error");
  expect(json).toHaveProperty("reason");
  expect(json.reason).toContain("Invalid");
});
test("Negative – Top-level fields should NOT exist", async ({ request }) => {
  const response = await request.get(
    `${BASE_URL}?latitude=40.0&longitude=-83.0&current_weather=true`
  );

  const json = await response.json();

  expect(json).not.toHaveProperty("humidity");
  expect(json).not.toHaveProperty("pressure");
  expect(json).not.toHaveProperty("randomKey");
});
test("401 – Missing authentication token", async ({ request }) => {
  const response = await request.get("https://postman-echo.com/basic-auth");

  expect(response.status()).toBe(401);

  const json = await response.json();

  expect(json.authenticated).toBe(false);
  expect(json.error).toBe("Unauthorized");
});