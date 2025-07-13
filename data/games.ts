import { Game, GameJamEvent } from '@/types/game'

export const sampleGames: Game[] = [
  {
    id: 'job-prep-simulator',
    name: '게임 회사 취업 준비생 시뮬레이터',
    genre: '시뮬레이션',
    description: '게임 업계 취업을 꿈꾸는 준비생의 일상을 체험해보는 시뮬레이션 게임입니다.',
    thumbnail: '/images/game-job-simulator.png',
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: '게임 회사 취업 준비생 시뮬레이터 플레이 영상',
        thumbnail: '/placeholder.svg?height=180&width=320'
      },
      {
        type: 'image',
        url: '/images/game-job-simulator.png',
        title: '게임 스크린샷'
      }
    ],
    developers: ['절실'],
    tags: ['시뮬레이션', '현실', '취업'],
    award: 'excellence'
  },
  {
    id: 'devils-book',
    name: '밤의 마법사과 메카닉 기사',
    genre: '서바이벌',
    description: 'description',
    thumbnail: '/images/night-knight-magician.png',
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: '밤의 마법사와 메카닉 기사 트레일러'
      },
      {
        type: 'image',
        url: '/placeholder.svg?height=600&width=800',
        title: '게임 스크린샷'
      }
    ],
    developers: ['트타'],
    tags: ['sample', 'sample', 'sample'],
    award: 'special'
  },
  {
    id: 'endless-night',
    name: '끝나지 않는 밤',
    genre: '방치형/턴제',
    description: 'description',
    thumbnail: '/images/endless-night.png',
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'NightMechanic 게임플레이'
      },
      {
        type: 'webp',
        url: '/placeholder.svg?height=400&width=600',
        title: '메카닉 작업 화면'
      }
    ],
    developers: ['우엉차'],
    tags: ['방치형', '턴제', '전략'],
    award: 'special'
  },
  {
    id: 'vampire-survival',
    name: '큥♡뱀파이어서바이벌',
    genre: '탄막',
    description: 'description',
    thumbnail: '/images/vampire.png',
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: '큥♡뱀파이어서바이벌 액션 영상'
      },
      {
        type: 'image',
        url: '/placeholder.svg?height=600&width=800',
        title: '탄막 액션 스크린샷'
      }
    ],
    developers: ['샌드위치스테이크'],
    tags: ['탄막', '슈팅'],
    award: 'special'
  },
  {
    id: 'night-night-night',
    name: '밤, 밤, 밤!',
    genre: '퍼즐게임',
    description: 'description',
    thumbnail: '/images/3chestnut.png',
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: '밤, 밤, 밤! 퍼즐 소개',
        thumbnail: '/placeholder.svg?height=180&width=320'
      },
      {
        type: 'image',
        url: '/placeholder.svg?height=600&width=800',
        title: '퍼즐 스테이지'
      }
    ],
    developers: ['여풀'],
    tags: ['퍼즐', '논리', '밤'],
    award: 'special'
  },
  {
    id: 'midnight-snack-heist',
    name: '야식 몰래 가져오기',
    genre: '잠입',
    description: 'description',
    thumbnail: '/images/stealth-lns.png',
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: '야식 몰래 가져오기 잠입 플레이',
        thumbnail: '/placeholder.svg?height=180&width=320'
      },
      {
        type: 'webp',
        url: '/placeholder.svg?height=400&width=600',
        title: '잠입 액션 장면'
      }
    ],
    developers: ['제티'],
    tags: ['잠입', '액션'],
    award: 'special'
  },
  {
    id: 'night-grave-robber',
    name: '밤의 도굴꾼',
    genre: '로그라이크',
    description: 'description',
    thumbnail: '/images/night-graverobber.png',
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: '밤의 도굴꾼 던전 탐험'
      },
      {
        type: 'image',
        url: '/placeholder.svg?height=600&width=800',
        title: '던전 탐험 스크린샷'
      }
    ],
    developers: ['타코', '쉽지않다'],
    tags: ['로그라이크', '탐험', '보물'],
    award: 'excellence'
  }
]

export const gameJamEvent: GameJamEvent = {
  title: '게임취업밤 AI 게임잼',
  description: '인공지능과 게임 개발의 만남! 창의적인 아이디어와 최신 AI 기술을 활용한 혁신적인 게임들이 한자리에 모였습니다.',
  startDate: '2025-06-21',
  endDate: '2025-06-21',
  participants: 10,
  games: sampleGames
} 