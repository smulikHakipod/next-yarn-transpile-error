/** @type {import('next').NextConfig} */

const transpiler = require('./src/tanspiler');
const t2 = require('next-transpile-modules');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

console.log(require.resolve('test-bb'), require.resolve('test-b'));

module.exports = t2(['test-bb', 'test-b'], {debug: true})(nextConfig);
