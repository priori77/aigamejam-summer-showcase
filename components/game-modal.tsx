'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Play, Users, ExternalLink, Award, Sparkles, Sun, Umbrella, BookOpen, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Game, GameMedia } from '@/types/game'

interface GameModalProps {
  game: Game | null
  isOpen: boolean
  onClose: () => void
}

export default function GameModal({ game, isOpen, onClose }: GameModalProps) {
  const scrollPositionRef = useRef<number>(0)
  const [activeTab, setActiveTab] = useState<'info' | 'rules'>('info')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Reset tab to info when modal opens
    if (isOpen) {
      setActiveTab('info')
      setCurrentImageIndex(0)
    }
    
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
      '퍼즐': 'bg-green-100 text-green-700 border border-green-200',
      '퍼즐게임': 'bg-green-100 text-green-700 border border-green-200',
      '레이싱': 'bg-red-100 text-red-700 border border-red-200',
      'RPG': 'bg-purple-100 text-purple-700 border border-purple-200',
      '전략': 'bg-blue-100 text-blue-700 border border-blue-200',
      '어드벤처': 'bg-orange-100 text-orange-700 border border-orange-200',
      '보드게임': 'bg-indigo-100 text-indigo-700 border border-indigo-200',
      '시뮬레이션': 'bg-teal-100 text-teal-700 border border-teal-200',
      '서바이벌': 'bg-gray-100 text-gray-700 border border-gray-200',
      '방치형': 'bg-cyan-100 text-cyan-700 border border-cyan-200',
      '턴제': 'bg-yellow-100 text-yellow-700 border border-yellow-200',
      '탄막': 'bg-red-100 text-red-700 border border-red-200',
      '잠입': 'bg-slate-100 text-slate-700 border border-slate-200',
      '로그라이크': 'bg-violet-100 text-violet-700 border border-violet-200'
    }
    
    const genreKey = Object.keys(colors).find(key => genre.includes(key))
    return genreKey ? colors[genreKey as keyof typeof colors] : 'bg-gray-100 text-gray-700 border border-gray-200'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 mobile-modal-container">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden border border-sky-200/50 mx-auto mt-2 sm:mt-0"
        style={{ maxHeight: 'min(92vh, 92dvh)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-sky-200/50 bg-gradient-to-r from-sky-50 to-teal-50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg wave-animation">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                {/* Game Title and Award */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 truncate tracking-wide">{game.name}</h2>
                  {game.award && (
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold w-fit shadow-md ${
                      game.award === 'excellence' 
                        ? 'bg-gradient-to-r from-yellow-300 to-yellow-400 text-slate-800' 
                        : 'bg-gradient-to-r from-teal-300 to-teal-400 text-slate-800'
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
                      className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-700 border border-sky-200"
                    >
                      {genre.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-sky-100 rounded-full transition-colors flex-shrink-0 ml-2"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-sky-200/50 bg-sky-50/50">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
              activeTab === 'info' 
                ? 'text-sky-700 border-b-2 border-sky-500 bg-white' 
                : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>게임 정보</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
              activeTab === 'rules' 
                ? 'text-sky-700 border-b-2 border-sky-500 bg-white' 
                : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Gamepad2 className="w-4 h-4" />
              <span>게임 룰</span>
            </div>
          </button>
        </div>

        {/* Content */}
        <div 
          className="overflow-y-auto scroll-smooth"
          style={{ maxHeight: 'min(calc(92vh - 180px), calc(92dvh - 180px))' }}
          data-modal-content
        >
          {/* Tab Content */}
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 pb-16 sm:pb-8" style={{ paddingBottom: 'max(4rem, env(safe-area-inset-bottom, 1.5rem))' }}>
            {activeTab === 'info' ? (
              <>
                {/* Game Info Tab */}
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-sky-800 tracking-wide">게임 소개</h3>
                  <p className="text-slate-700 leading-relaxed font-medium">{game.description}</p>
                </div>

                {/* Media Gallery - Only show if webp exists */}
                {game.media && game.media.some(media => media.type === 'webp') && (
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-sky-800 tracking-wide">게임 플레이</h3>
                    <div className="grid gap-4 grid-cols-1">
                      {game.media.filter(media => media.type === 'webp').map((media, index) => (
                        <div key={index} className="summer-card overflow-hidden">
                          <div className="relative h-[600px]">
                            <img
                              src={media.url}
                              alt="게임 플레이 영상"
                              className="w-full h-full object-contain bg-sky-50 rounded-lg"
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
                    <h3 className="text-lg font-bold mb-3 text-sky-800 tracking-wide">주제 설명</h3>
                    <p className="text-slate-700 leading-relaxed font-medium">{game.themeInterpretation}</p>
                  </div>
                )}

                {/* Used Tools/Programs */}
                {game.features && game.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-sky-800 tracking-wide">사용한 툴/엔진</h3>
                    <div className="flex flex-wrap gap-2">
                      {game.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gradient-to-r from-sky-100 to-teal-100 text-sky-700 text-sm rounded-full border border-sky-200 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Developers */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-sky-800 tracking-wide">개발자</h3>
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <Users className="w-5 h-5 text-teal-500" />
                    <span>{game.developers.join(', ')}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Game Rules Tab */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-sky-800 tracking-wide">게임 설명</h3>
                  {game.gameRules && game.gameRules.length > 0 ? (
                    <div className="space-y-6">
                      {/* Check if there are multiple image rules */}
                      {game.gameRules.filter(rule => rule.type === 'image').length > 1 ? (
                        <div className="relative">
                          {/* Image Slider */}
                          <div className="summer-card p-4">
                            {game.gameRules.filter(r => r.type === 'image')[currentImageIndex].title && (
                              <h4 className="font-bold text-sky-700 mb-3">{game.gameRules.filter(r => r.type === 'image')[currentImageIndex].title}</h4>
                            )}
                            <div className="relative rounded-lg overflow-hidden bg-sky-50 p-4">
                              <img
                                src={game.gameRules.filter(r => r.type === 'image')[currentImageIndex].content}
                                alt={game.gameRules.filter(r => r.type === 'image')[currentImageIndex].title || '게임 룰 이미지'}
                                className="w-full h-auto object-contain max-h-[700px] mx-auto"
                                loading="lazy"
                              />
                              
                              {/* Navigation Buttons */}
                              <button
                                onClick={() => setCurrentImageIndex(prev => 
                                  prev === 0 ? game.gameRules!.filter(r => r.type === 'image').length - 1 : prev - 1
                                )}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                                aria-label="이전 이미지"
                              >
                                <ChevronLeft className="w-6 h-6 text-sky-600" />
                              </button>
                              
                              <button
                                onClick={() => setCurrentImageIndex(prev => 
                                  prev === game.gameRules!.filter(r => r.type === 'image').length - 1 ? 0 : prev + 1
                                )}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                                aria-label="다음 이미지"
                              >
                                <ChevronRight className="w-6 h-6 text-sky-600" />
                              </button>
                            </div>
                            
                            {/* Image Indicator */}
                            <div className="flex justify-center gap-2 mt-4">
                              {game.gameRules.filter(rule => rule.type === 'image').map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentImageIndex(idx)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    idx === currentImageIndex ? 'bg-sky-600 w-6' : 'bg-sky-300'
                                  }`}
                                  aria-label={`이미지 ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Single image or text rules */
                        game.gameRules.map((rule, index) => (
                          <div key={index} className="summer-card p-4">
                            {rule.title && (
                              <h4 className="font-bold text-sky-700 mb-3">{rule.title}</h4>
                            )}
                            {rule.type === 'text' ? (
                              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{rule.content}</p>
                            ) : (
                              <div className="rounded-lg overflow-hidden bg-sky-50 p-4">
                                <img
                                  src={rule.content}
                                  alt={rule.title || '게임 룰 이미지'}
                                  className="w-full h-auto object-contain max-h-[700px] mx-auto"
                                  loading="lazy"
                                />
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Gamepad2 className="w-16 h-16 text-sky-300 mx-auto mb-4" />
                      <p className="text-slate-500">게임 룰 정보가 준비 중입니다.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 