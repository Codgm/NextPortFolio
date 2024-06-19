const s3Loader = ({ src, width, quality }) => {
    const url = new URL(`https://prod-files-secure.s3.us-west-2.amazonaws.com${src}`);
    return url.href;
  };

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.cache = false;
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    env: {
        NOTION_API_KEY: process.env.NOTION_API_KEY,
        NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
      },
    images: {
        domains: [
            'www.notion.so',
            'images.unsplash.com',
            'prod-files-secure.s3.us-west-2.amazonaws.com', 
          ],
    },
};

export default nextConfig;
