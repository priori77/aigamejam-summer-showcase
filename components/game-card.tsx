'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Users, ExternalLink, Sun, Waves } from 'lucide-react'
import { Game } from '@/types/game'

interface GameCardProps {
  game: Game
  onCardClick: (game: Game) => void
}

export default function GameCard({ game, onCardClick }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative summer-card overflow-hidden game-card-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(game)}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-teal-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Game Thumbnail */}
      <div className="relative h-64 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          unoptimized
        />
        
        {/* Play Button Overlay */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-white/90 rounded-full p-4 transform transition-transform duration-300 hover:scale-110 shadow-lg">
            <Play className="w-8 h-8 text-sky-500 fill-current" />
          </div>
        </div>

      </div>

      {/* Card Content */}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg md:text-xl font-extrabold text-slate-800 group-hover:text-sky-600 transition-colors tracking-wide whitespace-pre-line">
            {game.name}
          </h3>
          <ExternalLink className="w-5 h-5 text-sky-400 group-hover:text-sky-600 transition-colors" />
        </div>

        <p className="text-slate-600 text-sm mb-3 line-clamp-2 font-medium">
          {game.description}
        </p>

        {/* Features */}
        {game.features && game.features.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-2">
              {game.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full border border-sky-200 font-medium"
                >
                  {feature}
                </span>
              ))}
              {game.features.length > 3 && (
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full border border-teal-200 font-medium">
                  +{game.features.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Developers */}
        <div className="flex items-start text-sm text-slate-600 font-medium">
          <Users className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
          <span className="line-clamp-2">
            {game.developers.join(', ')}
          </span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sky-400/50 transition-colors duration-300 pointer-events-none" />
      
      {/* Decorative Summer Elements */}
      <Sun className="absolute top-2 right-2 w-8 h-8 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 float-animation" />
      <Waves className="absolute bottom-0 left-0 w-full h-8 text-teal-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
} 