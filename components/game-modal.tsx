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
      '퍼즐': 'bg-green-900/40 text-green-300 border border-green-500/30',
      '퍼즐게임': 'bg-green-900/40 text-green-300 border border-green-500/30',
      '레이싱': 'bg-red-900/40 text-red-300 border border-red-500/30',
      'RPG': 'bg-purple-900/40 text-purple-300 border border-purple-500/30',
      '전략': 'bg-blue-900/40 text-blue-300 border border-blue-500/30',
      '어드벤처': 'bg-orange-900/40 text-orange-300 border border-orange-500/30',
      '보드게임': 'bg-indigo-900/40 text-indigo-300 border border-indigo-500/30',
      '시뮬레이션': 'bg-teal-900/40 text-teal-300 border border-teal-500/30',
      '서바이벌': 'bg-gray-800/40 text-gray-300 border border-gray-500/30',
      '방치형': 'bg-cyan-900/40 text-cyan-300 border border-cyan-500/30',
      '턴제': 'bg-yellow-900/40 text-yellow-300 border border-yellow-500/30',
      '탄막': 'bg-red-900/40 text-red-300 border border-red-500/30',
      '잠입': 'bg-slate-800/40 text-slate-300 border border-slate-500/30',
      '로그라이크': 'bg-violet-900/40 text-violet-300 border border-violet-500/30'
    }
    
    const genreKey = Object.keys(colors).find(key => genre.includes(key))
    return genreKey ? colors[genreKey as keyof typeof colors] : 'bg-gray-800/40 text-gray-300 border border-gray-500/30'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-slate-800 rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden border border-slate-600/50">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-600/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-white">{game.name}</h2>
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
                <div className="flex flex-wrap gap-2">
                  {game.genre.split(',').map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/40 text-slate-300 border border-slate-500/30"
                    >
                      {genre.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Game Details */}
          <div className="p-8 space-y-8 pb-12">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">게임 소개</h3>
              <p className="text-slate-300 leading-relaxed">{game.description}</p>
            </div>

            {/* Media Gallery - Only show if webp exists */}
            {game.media && game.media.some(media => media.type === 'webp') && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">게임 플레이</h3>
                <div className="grid gap-4 grid-cols-1">
                  {game.media.filter(media => media.type === 'webp').map((media, index) => (
                    <div key={index} className="bg-slate-700/20 rounded-lg overflow-hidden border border-slate-600/30">
                      <div className="relative h-[600px]">
                        <img
                          src={media.url}
                          alt="게임 플레이 영상"
                          className="w-full h-full object-contain bg-slate-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Theme Interpretation */}
            {game.themeInterpretation && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">주제 설명</h3>
                <p className="text-slate-300 leading-relaxed">{game.themeInterpretation}</p>
              </div>
            )}

            {/* Used Tools/Programs */}
            {game.features && game.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">사용한 툴</h3>
                <div className="flex flex-wrap gap-2">
                  {game.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-900/60 to-blue-900/60 text-purple-200 text-sm rounded-full border border-purple-500/30 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Developers */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">개발자</h3>
              <div className="flex items-center space-x-2 text-slate-300">
                <Users className="w-5 h-5 text-slate-400" />
                <span>{game.developers.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 