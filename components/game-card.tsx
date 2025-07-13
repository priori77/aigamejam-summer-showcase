'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Users, ExternalLink, Award, Sparkles } from 'lucide-react'
import { Game } from '@/types/game'

interface GameCardProps {
  game: Game
  onCardClick: (game: Game) => void
}

export default function GameCard({ game, onCardClick }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden game-card-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(game)}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Game Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Play Button Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-white/90 rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
            <Play className="w-8 h-8 text-purple-600 fill-current" />
          </div>
        </div>

        {/* Award Badge */}
        {game.award && (
          <div className="absolute bottom-4 left-4">
            <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
              game.award === 'excellence' 
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' 
                : 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
            }`}>
              {game.award === 'excellence' ? (
                <Award className="w-3 h-3" />
              ) : (
                <Sparkles className="w-3 h-3" />
              )}
              <span>{game.award === 'excellence' ? '우수상' : '특별상'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
            {game.name}
          </h3>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {game.description}
        </p>

        {/* Features */}
        {game.features && game.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {game.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md"
                >
                  {feature}
                </span>
              ))}
              {game.features.length > 3 && (
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md">
                  +{game.features.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Developers */}
        <div className="flex items-center text-sm text-gray-500">
          <Users className="w-4 h-4 mr-2" />
          <span>
            {game.developers.slice(0, 2).join(', ')}
            {game.developers.length > 2 && ` 외 ${game.developers.length - 2}명`}
          </span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300 transition-colors duration-300 pointer-events-none" />
      
      {/* Decorative SVG Elements */}
      <svg
        className="absolute top-2 right-2 w-8 h-8 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
  )
} 