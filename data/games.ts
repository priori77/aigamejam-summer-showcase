import { Game, GameJamEvent } from '@/types/game'

export const sampleGames: Game[] = [
  {
    id: 'working-holiday',
    name: 'Workin\'\ Holiday',
    genre: '2D 도트 탑뷰 클리커, 타이쿤',
    description: '여름의 꽃 휴가.. 누군가는 일한다!',
    thumbnail: '/images/working-holiday-thumbnail.png',
    media: [
      {
        type: 'webp',
        url: '/webp/working-holiday-play.webp'
      }
    ],
    features: ['Cursor', 'ChatGPT', 'Unity'],
    developers: ['Harry', '전갱잉'],
    tags: ['2D 도트 탑뷰 클리커', '타이쿤'],
    gameRules: [
      {
        type: 'image',
        content: '/images/working-holiday-guide.png'
      }
    ]
  },
  {
    id: 'vacation-island',
    name: '바캉스 아일랜드: 더위 탈출 프로젝트',
    genre: '퍼즐, 머지',
    description: '바캉스 아일랜드에서 무서운 폭염을 피하세요!',
    thumbnail: '/images/vacation-island.png',
    media: [
      {
        type: 'webp',
        url: '/webp/vacation-island-play-2.webp',
      }
    ],
    features: ['ChatGPT'],
    developers: ['FLORA', '벨코즈', '노벰버'],
    tags: ['텍스트 어드벤처', '공포', '멀티 엔딩'],
    gameRules: [
      {
        type: 'image',
        content: '/images/vacation-island-guide.png'
      }
    ]
  },
  {
    id: 'weird-vacation-road',
    name: '이상한 휴가길',
    genre: '캐주얼 런닝 액션',
    description: '무더운 휴가철, 휴양지로 향하는 가족이 겪는 이상하고도 아찔한 여정',
    thumbnail: '/images/weird-vacation-road.png',
    media: [
      {
        type: 'webp',
        url: 'webp/weird-vacation-road-play.webp'
      }
    ],
    features: ['ChatGPT', 'Unity'],
    developers: ['열시미', '사과나무', '무지무지'],
    tags: ['캐주얼 런닝 액션'],
    gameRules: [
      {
        type: 'image',
        content: '/images/weird-vacation-road-guide-1.png'
      },
      {
        type: 'image',
        content: '/images/weird-vacation-road-guide-2.png'
      },
      {
        type: 'image',
        content: '/images/weird-vacation-road-guide-3.png'
      },
      {
        type: 'image',
        content: '/images/weird-vacation-road-guide-4.png'
      }
    ]
  },
  {
    id: 'takevacationandrun',
    name: '휴가받고 달려잇',
    genre: '2D 횡스크롤 플랫포머',
    description: '이번 여행 최대한 뽕 뽑아야해!',
    thumbnail: '/images/takevacationandrun.png',
    media: [
      {
        type: 'webp',
        url: 'webp/takevacationandrun-play.webp'
      }
    ],
    features: ['ChatGPT', 'Unity'],
    developers: ['느부갓네살', '로토', '승승'],
    tags: ['2D 횡스크롤 플랫포머'],
    gameRules: [
      {
        type: 'image',
        content: '/images/takevacationandrun-guide.png'
      }
    ]
  },
  {
    id: 'shutter-island',
    name: 'SHUTTER ISLE',
    genre: '캐주얼 힐링, 멀티 엔딩 스토리, 메타 픽션',
    description: '제 휴가는 휴가처럼 안보이나요?',
    thumbnail: '/images/shutter-island.png',
    media: [
      {
        type: 'webp',
        url: '/webp/shutterisland-play.webp',
      }
    ],
    features: ['Gemini', 'ChatGPT', 'Cursor', 'Claude'],
    developers: ['inf', 'Soo', '이비'],
    tags: ['캐주얼 힐링', '멀티 엔딩 스토리', '메타 픽션'],
    gameRules: [
      {
        type: 'image',
        content: '/images/shutter-island-guide-1.png'
      },
      {
        type: 'image',
        content: '/images/shutter-island-guide-2.png'
      }
    ]
  },
  {
    id: 'today-rest',
    name: '오늘은 쉼',
    genre: '은신 시뮬레이션',
    description: '바캉스에서 쉬고 싶은 주인공의 "몰래 쉬기" 시뮬레이션!',
    thumbnail: '/images/today-rest.jpg',
    media: [
      {
        type: 'webp',
        url: '/webp/today-rest-play.webp'
      }
    ],
    features: ['ChatGPT', 'Unity'],
    developers: ['비비두두밥', '애으리', '이갱', '죠스바'],
    tags: ['은신 시뮬레이션'],
    gameRules: [
      {
        type: 'image',
        content: '/images/today-rest-guide.jpg'
      }
    ]
  },
  {
    id: 'can-fit',
    name: '이게 다 들어간다고?',
    genre: '인벤토리 관리 시뮬레이션',
    description: '짐을 최대한 많이 넣고 성공적인 휴가를 만들어보세요!',
    thumbnail: '/images/can-fit.png',
    media: [
      {
        type: 'webp',
        url: '/webp/can-fit.webp'
      }
    ],
    features: ['Gemini CLI', 'ChatGPT'],
    developers: ['절실'],
    tags: ['인벤토리 관리 시뮬레이션'],
    gameRules: [
      {
        type: 'image',
        content: '/images/can-fit-guide.png'
      }
    ]
  },
  {
    id: 'heat-waytowork',
    name: '폭염 속 출근 전쟁',
    genre: '생존 탐색형 어드벤처',
    description: '40도가 넘는 폭염에도 매일 출근하는 직장인의 숙명! 폭염 속 출근 전쟁에서 살아남으세요!',
    thumbnail: '/images/heat-waytowork.jpg',
    media: [
      {
        type: 'webp',
        url: '/webp/heat-waytowork.webp'
      },
      {
        type: 'image',
        url: '/placeholder.svg?height=600&width=800',
        title: '게임 스크린샷'
      }
    ],
    features: ['ChatGPT', 'Cursor'],
    developers: ['쉽지않다'],
    tags: ['BLALTRO 라이크', '덱 빌딩'],
    gameRules: [
      {
        type: 'image',
        content: '/images/heat-waytowork-guide.jpg'
      }
    ]
  }
  ,
  {
    id: 'H@NA FUDA',
    name: 'H@NA FUDA',
    genre: 'BLALTRO 라이크, 덱 빌딩',
    description: 'BALATRO 라이크 THE iDOLM@STER 동인게임입니다.',
    thumbnail: '/images/hana-fuda.png',
    media: [
      {
        type: 'webp',
        url: '/webp/hanafuda.webp'
      },
      {
        type: 'image',
        url: '/placeholder.svg?height=600&width=800',
        title: '게임 스크린샷'
      }
    ],
    features: ['ChatGPT', 'NovelAI 4.5 Curated', 'NAIA', 'Cursor'],
    developers: ['샌드위치스테이크'],
    tags: ['BLALTRO 라이크', '덱 빌딩'],
    gameRules: [
      {
        type: 'image',
        content: '/images/hana-fuda-guide.png'
      }
    ]
  }
]

export const gameJamEvent: GameJamEvent = {
  title: '게임취업밤 2차 AI 게임잼',
  description: '인공지능과 게임 개발의 만남! 창의적인 아이디어와 최신 AI 기술을 활용한 혁신적인 게임들이 한자리에 모였습니다.',
  startDate: '2025-08-08',
  endDate: '2025-08-10',
  participants: 10,
  games: sampleGames
} 