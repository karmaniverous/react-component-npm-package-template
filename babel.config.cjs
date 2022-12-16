const { version } = require('./package.json');

process.env.NODE_PACKAGE_VERSION = version;
module.exports = () => ({
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-import-assertions',
    'lodash',
    ['module-extension', { mjs: '' }],
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_PACKAGE_VERSION'],
      },
    ],
  ],
});
