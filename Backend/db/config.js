const configBase = {
  port: 3306,
  user: process.env.DB_ROOT || 'root',
  database: process.env.DB_NAME || 'expedia',
};

const config = Object.assign(configBase, {
  host: process.env.DB_HOST || '127.0.0.1',
  password: process.env.DB_PASS || 'Sxd6412sxd.',
  multipleStatements: true
});

module.exports = config;
