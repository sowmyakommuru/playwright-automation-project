import * as fs from 'fs';
import * as path from 'path';

export interface TestUser {
  name: string;
  email: string;
  password: string | number;
  day: string | number;
  month: string | number;
  year: string | number;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string | number;
  mobileNumber: string | number;
}

export function loadSignupData() {
  // Direct path resolution from your workspace root folder
  const csvFilePath = path.resolve(process.cwd(), 'data-loader/test-data.csv');
  
  // Read raw file content text
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
  
  // Clean empty lines and split by line break
  const lines = fileContent.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
  
  // Extract headers from the first row
  const headers = lines[0].split(',');
  
  // Map row values to custom test data objects
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const record: any = {};
    headers.forEach((header, index) => {
      record[header] = values[index];
    });
    return record;
  });
}

export function loadActiveSignupData(): TestUser[] {
  const allUsers = loadSignupData();
  return allUsers.filter(user => String(user.runTest).toLowerCase() === 'true');
}

