'use client'

import { useEffect } from 'react'
import { X, Play, Users, ExternalLink, Award, Sparkles } from 'lucide-react'
import { Game, GameMedia } from '@/types/game'

interface GameModalProps {
  game: Game | null
  isOpen: boolean
  onClose: () => void
}

export default function GameModal({ game, isOpen, onClose }: GameModalProps) {
  useEffect(() => {
    if (isOpen && game) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, game])

  if (!isOpen || !game) return null

  const getGenreColor = (genre: string) => {
    const colors = {
      '퍼즐': 'bg-green-100 text-green-800',
      '퍼즐게임': 'bg-green-100 text-green-800',
      '레이싱': 'bg-red-100 text-red-800',
      'RPG': 'bg-purple-100 text-purple-800',
      '전략': 'bg-blue-100 text-blue-800',
      '어드벤처': 'bg-orange-100 text-orange-800',
      '보드게임': 'bg-indigo-100 text-indigo-800',
      '시뮬레이션': 'bg-teal-100 text-teal-800',
      '서바이벌': 'bg-gray-100 text-gray-800',
      '방치형': 'bg-cyan-100 text-cyan-800',
      '턴제': 'bg-yellow-100 text-yellow-800',
      '탄막': 'bg-red-100 text-red-800',
      '잠입': 'bg-slate-100 text-slate-800',
      '로그라이크': 'bg-violet-100 text-violet-800'
    }
    
    const genreKey = Object.keys(colors).find(key => genre.includes(key))
    return genreKey ? colors[genreKey as keyof typeof colors] : 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-gray-900">{game.name}</h2>
                {game.award && (
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-semibold ${
                    game.award === 'excellence' 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' 
                      : 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
                  }`}>
                    {game.award === 'excellence' ? (
                      <Award className="w-4 h-4" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    <span>{game.award === 'excellence' ? '우수상' : '특별상'}</span>
                  </div>
                )}
              </div>
              <div className="mt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getGenreColor(game.genre)}`}>
                  {game.genre}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Game Details */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">게임 소개</h3>
              <p className="text-gray-700 leading-relaxed">{game.description}</p>
            </div>

            {/* Features */}
            {game.features && game.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">주요 기능</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {game.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Developers */}
            <div>
              <h3 className="text-lg font-semibold mb-3">개발자</h3>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-500" />
                <span>{game.developers.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 