function required(name) {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required env var: ${name}`);
  return val;
}

const config = {
  port:        parseInt(process.env.PORT || '3000', 10),
  nodeEnv:     process.env.NODE_ENV || 'development',
  db: {
    url:       required('DATABASE_URL'),
  },
  jwt_secret: required('JWT_SECRET'),
  jwt_secret_refresh: required('JWT_REFRESH_SECRET')
};

export default config;