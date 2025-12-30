export const ENV = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.USER_EMAIL || '',
  password: process.env.USER_PASSWORD || '',
};

if (process.env.CI) {
  if (!ENV.baseUrl) throw new Error('BASE_URL missing');
  if (!ENV.username || !ENV.password)
    throw new Error('USER_EMAIL / USER_PASSWORD missing');
}
