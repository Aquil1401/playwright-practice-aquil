// utils/env.ts

export const ENV = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.USER_EMAIL || '',
  password: process.env.USER_PASSWORD || '',
};

// 🔒 Fail fast only in CI
if (process.env.CI) {
  if (!ENV.baseUrl) {
    throw new Error('❌ BASE_URL is missing');
  }

  if (!ENV.username || !ENV.password) {
    throw new Error('❌ USER_EMAIL or USER_PASSWORD is missing');
  }
}
