import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

export const metadata: Metadata = {
  title: '게임취업밤 AI 게임잼 수상작',
  description: '게임취업밤에서 주최한 AI 게임잼의 우수상과 특별상 수상작들을 만나보세요. AI를 활용한 창의적인 게임들의 쇼케이스입니다.',
  keywords: ['AI', '게임잼', '게임', '인공지능', '게임 개발', '쇼케이스', '게임취업밤'],
  openGraph: {
    title: '게임취업밤 AI 게임잼 수상작',
    description: '게임취업밤에서 주최한 AI 게임잼의 우수상과 특별상 수상작들을 만나보세요.',
    type: 'website',
    siteName: '게임취업밤 AI 게임잼',
    images: [
      {
        url: '/images/gamejobnight.jpg',
        width: 1200,
        height: 630,
        alt: '게임취업밤 AI 게임잼 로고',
        type: 'image/jpeg'
      }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:image" content="/images/gamejobnight.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="게임취업밤 AI 게임잼 로고" />
        <meta name="twitter:image" content="/images/gamejobnight.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

      </head>
      <body className={`${inter.className} dark`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black"
             style={{
               WebkitOverflowScrolling: 'touch',
               touchAction: 'manipulation',
               overscrollBehavior: 'auto'
             }}>
          {children}
        </div>
      </body>
    </html>
  )
} 