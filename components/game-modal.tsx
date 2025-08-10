'use client'

import { useEffect, useRef } from 'react'
import { X, Play, Users, ExternalLink, Award, Sparkles } from 'lucide-react'
import { Game, GameMedia } from '@/types/game'

interface GameModalProps {
  game: Game | null
  isOpen: boolean
  onClose: () => void
}

export default function GameModal({ game, isOpen, onClose }: GameModalProps) {
  const scrollPositionRef = useRef<number>(0)

  useEffect(() => {
    if (isOpen && game) {
      // 1. 현재 스크롤 위치 저장
      scrollPositionRef.current = window.pageYOffset

      // 2. 스크롤바 너비를 계산하여 layout shift 방지
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`

      // 3. 백그라운드 스크롤 차단 (클래스 기반)
      document.body.classList.add('modal-open')
      
      // 4. 모바일에서 터치 스크롤 차단
      const preventTouchMove = (e: TouchEvent) => {
        // 모달 내부 요소인지 확인
        const target = e.target as Element
        const modalContent = document.querySelector('[data-modal-content]')
        if (modalContent && modalContent.contains(target)) {
          // 모달 내부는 터치 허용
          return
        }
        // 모달 외부는 터치 차단
        e.preventDefault()
      }

      document.addEventListener('touchmove', preventTouchMove, { passive: false })

      // cleanup 함수: 모달이 닫힐 때 실행됨
      return () => {
        // 클래스 제거
        document.body.classList.remove('modal-open')
        document.body.style.paddingRight = ''
        document.removeEventListener('touchmove', preventTouchMove)
        // 저장된 위치로 스크롤 복원
        window.scrollTo({
          top: scrollPositionRef.current
        })
      }
    }
  }, [isOpen, game])

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

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
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 mobile-modal-container">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-slate-800 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden border border-slate-600/50 mx-auto mt-2 sm:mt-0"
        style={{ maxHeight: 'min(88vh, 88dvh)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-600/50 bg-slate-800/95 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                {/* Game Title and Award */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white truncate">{game.name}</h2>
                  {game.award && (
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-semibold w-fit ${
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
                
                {/* Genre Tags */}
                <div className="flex flex-wrap gap-2">
                  {game.genre.split(',').map((genre, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/40 text-slate-300 border border-slate-500/30"
                    >
                      {genre.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700 rounded-full transition-colors flex-shrink-0 ml-2"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div 
          className="overflow-y-auto scroll-smooth"
          style={{ maxHeight: 'min(calc(88vh - 140px), calc(88dvh - 140px))' }}
          data-modal-content
        >
          {/* Game Details */}
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 pb-16 sm:pb-8" style={{ paddingBottom: 'max(4rem, env(safe-area-inset-bottom, 1.5rem))' }}>
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
                          loading="lazy"
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
                <h3 className="text-lg font-semibold mb-3 text-white">사용한 툴/엔진</h3>
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
            <div className="mb-6">
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