// utils/env.ts

// 🔍 TEMP DEBUG (SAFE – no values printed)
console.log('ENV DEBUG FROM CODE:', {
  CI: process.env.CI ? 'YES' : 'NO',
  BASE_URL: process.env.BASE_URL ? 'SET' : 'MISSING',
  USER_EMAIL: process.env.USER_EMAIL ? 'SET' : 'MISSING',
  USER_PASSWORD: process.env.USER_PASSWORD ? 'SET' : 'MISSING',
});

export const ENV = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.USER_EMAIL || '',
  password: process.env.USER_PASSWORD || '',
};

/**
 * ❌ FAIL-FAST TEMPORARILY DISABLED
 * (taaki CI logs mil sake)
 *
 * AFTER DEBUG → isko wapas enable kar denge
 */
// const isCI = !!process.env.CI;

// if (isCI) {
//   if (!ENV.baseUrl) {
//     throw new Error('❌ BASE_URL is missing');
//   }
//   if (!ENV.username || !ENV.password) {
//     throw new Error('❌ USER_EMAIL or USER_PASSWORD is missing');
//   }
// }
