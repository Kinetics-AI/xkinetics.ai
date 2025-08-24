import type { NextConfig } from "next";

// i18n
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin(
    './i18n/request.ts'
);

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opendrivelab.github.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.shields.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                pathname: '/opendrivelab/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default withNextIntl(nextConfig);
