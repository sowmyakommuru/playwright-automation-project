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

  // Inspect what the server actually returns on a 400 error
  const errorText = await response.text();
  console.log("Actual 400 response body:", errorText);

  // Parse as JSON only if the API guarantees a JSON error structure
  const json = JSON.parse(errorText);
  expect(json).toHaveProperty("error");
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
  // 1. Send the unauthorized GET request
  const response = await request.get("https://postman-echo.com/basic-auth");
  
  // 2. Assert the status code is 401
  expect(response.status()).toBe(401);
  
  // 3. Extract the body as plain text (instead of json)
  const textBody = await response.text();
  
  // 4. Assert that the text matches exactly what postman-echo returns
  expect(textBody).toBe("Unauthorized");
});