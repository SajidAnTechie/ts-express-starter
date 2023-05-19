export default {
  appEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT),
  apiBaseUrl: process.env.API_BASE_PATH
};
