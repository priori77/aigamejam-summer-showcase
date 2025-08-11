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
  title: '게임취업밤 2차 AI 게임잼 출품작',
  description: '게임취업밤 2차 AI 게임잼의 출품작들을 만나보세요.',
  keywords: ['AI', '게임잼', '게임취업밤'],
  openGraph: {
    title: '게임취업밤 AI 게임잼 출품작',
    description: '게임취업밤 2차 AI 게임잼의 출품작들을 만나보세요.',
    type: 'website',
    siteName: '게임취업밤 2차 AI 게임잼 출품작',
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
      <body className={inter.className}>
        <div className="min-h-screen"
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