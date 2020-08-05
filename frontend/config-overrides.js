const {
  addDecoratorsLegacy,
  disableEsLint,
  override,
  addWebpackAlias,
} = require('customize-cra');

const path = require('path');
const resolve = dir => path.join(__dirname, '.', dir);

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  addWebpackAlias({
    '~': resolve('.'),
    '@modules': resolve('./src/modules'),
    '@routes': resolve('./src/routes'),
    '@utils': resolve('./src/utils'),
  })
);
