/** @type {import('next').NextConfig} */
import './env.mjs'

const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'trip.s3-hcm-r1.s3cloud.vn',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
