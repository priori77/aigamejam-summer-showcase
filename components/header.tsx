'use client'

import { Gamepad2, Trophy, Users, Calendar, Sun, Umbrella } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-sky-200/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative wave-animation">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              {/* Decorative Sun */}
              <Sun className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold gradient-text tracking-wide">게임취업밤 2차 AI 게임잼</h1>
              <p className="text-sm text-sky-700 font-medium">출품작 소개</p>
            </div>
          </div>

          {/* Navigation Stats */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm summer-card px-3 py-2 rounded-full">
              <Calendar className="w-4 h-4 text-sky-500" />
              <span className="text-sky-800 font-medium">2025.08.08 ~ 2025.08.10</span>
            </div>
            <div className="flex items-center space-x-2 text-sm summer-card px-3 py-2 rounded-full">
              <Users className="w-4 h-4 text-teal-500" />
              <span className="text-teal-800 font-medium">총 참가자 21명</span>
            </div>
            <div className="flex items-center space-x-2 text-sm summer-card px-3 py-2 rounded-full">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-800 font-medium">출품작 10개</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* 1차 게임잼 Link */}
            <a
              href="https://aigamejam-showcase.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="summer-button flex items-center space-x-2"
              title="1차 게임잼 보기"
            >
              <Trophy className="w-5 h-5" />
              <span>1차 AI 게임잼</span>
            </a>
            
            {/* Discord Link */}
            <a
              href="https://discord.gg/gamednight"
              target="_blank"
              rel="noopener noreferrer"
              className="summer-button flex items-center space-x-2"
              title="게임취업밤 Discord"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="#5865F2"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 