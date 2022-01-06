/** @type {import('next').NextConfig} */

console.info(`API_URL=${process.env.API_URL}`);
console.info(`APP_URL=${process.env.APP_URL}`);
console.info(`APP_VERSION=${process.env.npm_package_version}`);

module.exports = {
  reactStrictMode: true,
};
