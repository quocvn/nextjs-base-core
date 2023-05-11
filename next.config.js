/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com', 'preview.colorlib.com'],
  },
}

module.exports = nextConfig
