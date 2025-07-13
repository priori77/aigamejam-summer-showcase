'use client'

import { useState } from 'react'
import Header from '@/components/header'
import GameCard from '@/components/game-card'
import GameModal from '@/components/game-modal'
import { sampleGames, gameJamEvent } from '@/data/games'
import { Game } from '@/types/game'
import { Sparkles, Award, Code, Lightbulb } from 'lucide-react'

export default function HomePage() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (game: Game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }

  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative">
            {/* Background Decorative SVG */}
            <svg
              className="absolute inset-0 w-full h-full text-purple-400/30 opacity-60"
              viewBox="0 0 800 400"
              fill="none"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="150" cy="100" r="60" fill="currentColor" opacity="0.15" />
              <circle cx="650" cy="120" r="40" fill="currentColor" opacity="0.2" />
              <circle cx="400" cy="80" r="50" fill="currentColor" opacity="0.15" />
            </svg>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold night-gradient-text mb-6">
                {gameJamEvent.title}
              </h1>
              

              {/* Decorative AI Elements */}
             
               
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">출품작 소개</h2>
          </div>

          {/* 우수상 섹션 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">우수상</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleGames.filter(game => game.award === 'excellence').map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>

          {/* 특별상 섹션 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">특별상</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleGames.filter(game => game.award === 'special').map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 py-12 border-t border-slate-700">
          <div className="text-center">
            <div className="flex justify-center mb-6">
            </div>
            <p className="text-sm text-slate-400">
             게임취업밤 AI 게임잼
            </p>
          </div>
        </footer>
      </main>

      {/* Game Modal */}
      <GameModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
} 