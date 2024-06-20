/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/**',
            }
        ]
    },
    // 一旦これで対応
    experimental: {
        missingSuspenseWithCSRBailout: false
    }
};

export default nextConfig;
