'use client'

import { useState } from 'react'
import Header from '@/components/header'
import GameCard from '@/components/game-card'
import GameModal from '@/components/game-modal'
import { sampleGames, gameJamEvent } from '@/data/games'
import { Game } from '@/types/game'
import { Sparkles, Award, Code, Lightbulb, Sun, Umbrella, Waves, Fish } from 'lucide-react'

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
      
      <main className="container mx-auto px-4 py-8" 
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'manipulation',
              overscrollBehavior: 'auto'
            }}>
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative">
            {/* Summer Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <Sun className="absolute top-10 right-20 w-32 h-32 text-yellow-300/30 animate-pulse" />
              <Umbrella className="absolute bottom-10 left-20 w-24 h-24 text-teal-300/20 float-animation" />
              <Waves className="absolute bottom-0 w-full h-32 text-sky-300/20" />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6 gap-4">
                <Sun className="w-12 h-12 text-yellow-400 animate-pulse" />
                <Fish className="w-12 h-12 text-teal-400 wave-animation" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold summer-gradient-text mb-6 tracking-wide">
                {gameJamEvent.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-800 tracking-wide mb-4">출품작 소개</h2>
          </div>

          {/* All Games Grid - Optimized for 10 games */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
            {sampleGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 py-12 border-t border-sky-200">
          <div className="text-center">
            <div className="flex justify-center mb-6 gap-4">
              <Sun className="w-8 h-8 text-yellow-400 animate-pulse" />
              <Umbrella className="w-8 h-8 text-teal-400 float-animation" />
            </div>
            <p className="text-sm text-sky-600 font-medium">
             게임취업밤 2차 AI 게임잼 출품작
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