import NotFoundError from '@/errors/notFoundError';

function getEnv(key: string): string {
  const env = process.env[key];
  if (!env) {
    throw new NotFoundError(`${key} env is not found.`);
  }
  return env;
}

export default {
  appEnv: getEnv('NODE_ENV') || 'development',
  port: Number(getEnv('PORT')),
  apiBaseUrl: getEnv('API_BASE_PATH')
};
