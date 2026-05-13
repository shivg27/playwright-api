import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const config = {
  baseURL: process.env.BASE_URL || '',
  apiKey: process.env.API_KEY || '',
};