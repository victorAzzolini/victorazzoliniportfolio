/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_USER_ID: process.env.REACT_APP_USER_ID,
    REACT_APP_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  },
};

module.exports = nextConfig;
