const configBase = {
  port: 3306,
  user: process.env.DB_ROOT || 'root',
  database: process.env.DB_NAME || 'Expedia',
};

const config = Object.assign(configBase, {
  host: process.env.DB_HOST || '127.0.0.1',
  password: process.env.DB_PASS || 'admin',
  multipleStatements: true
});

export default config;