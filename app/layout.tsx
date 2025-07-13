import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '게임취업밤 AI 게임잼  | 출품작 쇼케이스',
  keywords: ['AI', '게임잼', '게임', '인공지능', '게임 개발', '쇼케이스'],
  openGraph: {
    title: '게임취업밤 AI 게임잼 | 출품작 쇼케이스',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
} 