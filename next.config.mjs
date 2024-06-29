
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
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/photo-1534972195531-d756b9bfa9f2/**',
            },
            {
                protocol: 'https',
                hostname: 'www.notion.so',
                port: '',
                pathname: 'images/page-cover/woodcuts_16.jpg',
            },
            {
                protocol: 'https',
                hostname: 'www.notion.so',
                port:'',
                pathname: 'images/page-cover/nasa_multi-axis_gimbal_rig.jpg',
            },
        ],   
    },
};
export default nextConfig;
