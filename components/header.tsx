'use client'

import { Gamepad2, Trophy, Users, Calendar } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              {/* Decorative SVG */}
              <svg
                className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">게임취업밤 AI 게임잼</h1>
              <p className="text-sm text-muted-foreground">출품작 쇼케이스</p>
            </div>
          </div>

          {/* Navigation Stats */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span className="text-muted-foreground">2025.06.21</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-muted-foreground">총 참가자 14명</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="text-muted-foreground">수상작 7개</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="hidden lg:block">
            <svg
              className="w-16 h-8 text-purple-200"
              fill="currentColor"
              viewBox="0 0 100 40"
            >
              <path d="M10,20 Q30,5 50,20 T90,20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
              <circle cx="20" cy="18" r="2" />
              <circle cx="40" cy="22" r="1.5" />
              <circle cx="60" cy="16" r="2.5" />
              <circle cx="80" cy="24" r="1" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
} 