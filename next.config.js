/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 로컬 이미지 패턴 설정 (public 폴더용)
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    // 리모트 이미지 패턴 설정 (외부 이미지용)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
        pathname: '/**',
      },
    ],
    // 이미지 최적화 설정
    formats: ['image/webp'],
    minimumCacheTTL: 31536000, // 1년 캐시
  },
}

module.exports = nextConfig 