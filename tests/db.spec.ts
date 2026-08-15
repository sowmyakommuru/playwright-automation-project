import { test, expect } from '@playwright/test';

// @ts-ignore
import oracledb from 'oracledb'; 

test('Direct Database Verification', async () => {
  // Connect via real database credentials
  const connection = await oracledb.getConnection({
    user          : "admin",
    password      : "YourSecurePassword123",
    connectString : "your_oci_db_high"
  });

  const result = await connection.execute('SELECT * FROM users WHERE id = :id', [101]);
  expect(result.rows.length).toBe(1);

  await connection.close();
});