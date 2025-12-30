// utils/env.ts

export const ENV = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.USER_EMAIL || '',
  password: process.env.USER_PASSWORD || '',
};

// 🚨 Fail fast – CI & local dono ke liye
if (!ENV.baseUrl) {
  throw new Error('❌ BASE_URL is missing');
}

if (!ENV.username || !ENV.password) {
  throw new Error('❌ USER_EMAIL or USER_PASSWORD is missing');
}
