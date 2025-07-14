import { Game, GameJamEvent } from '@/types/game'

export const sampleGames: Game[] = [
  {
    id: 'job-prep-simulator',
    name: '게임 회사 취업 준비생 시뮬레이터',
    genre: '어드벤처, 인디, 롤플레잉, 시뮬레이션',
    description: '포기란 없다! 당신의 끈기와 전략으로 게임 회사 취업 문을 활짝 여세요.',
    themeInterpretation: '[소재] \'게임 취업\'에 도전하는 [감정] 절실한 취준생의 감정을 담았습니다. (하지만 현실은 기획 및 시간 부족으로 절실함을 제대로 담지는 못했던 것 같습니다ㅠㅠ)',
    thumbnail: '/images/game-job-simulator.png',
    media: [
      {
        type: 'webp',
        url: '/webp/gamejob-simulator.webp'
      }
    ],
    features: ['Cursor', 'ChatGPT', 'Gemini'],
    developers: ['절실'],
    tags: ['어드벤처', '인디', '롤플레잉', '시뮬레이션', '취업'],
    award: 'excellence'
  },
  {
    id: 'devils-book',
    name: '밤의 마법사와 메카닉 기사',
    genre: '2D 횡스크롤 RPG',
    description: '밤을 끝내지 않으려는 악당 마법사 주인공이 세계를 영원한 밤으로 만들려고 할 때, 인류는 메카닉을 만들어 주인공에게 대항하려고 하는 스토리입니다. 내러티브는 거창하게 준비했으나 게임은 미완성입니다.',
    themeInterpretation: '내러티브 요소를 밤과 메카닉과 결합하여 해석하였습니다. 밤을 끝내지 않으려는 악당 마법사와 인류의 메카닉이 대립하는 구조로 주제를 풀어냈습니다.',
    thumbnail: '/images/night-knight-magician.png',
    media: [
      {
        type: 'webp',
        url: '/webp/nightwizardmechanicknight.webp'
      },
      {
        type: 'image',
        url: '/placeholder.svg?height=600&width=800',
        title: '게임 스크린샷'
      }
    ],
    features: ['Cursor', 'Unity', 'Stable Diffusion (ComfyUI)'],
    developers: ['트타'],
    tags: ['2D', '횡스크롤', 'RPG', '내러티브'],
    award: 'special'
  },
  {
    id: 'endless-night',
    name: '끝나지 않는 밤',
    genre: '텍스트 어드벤처',
    description: '미스테리한 저택에서 깨어난 주인공이 의문의 살인마를 피해 도망치는 멀티 엔딩 텍스트 어드벤처 게임입니다.',
    themeInterpretation: '밤(Night)이란 주제를 보자마자 공포 게임을 떠올렸고, 짧은 시간 안에 만들 수 있는 \'집착의 망자 -집으로부터의 탈출\'이라는 게임을 레퍼런스로 삼았습니다.',
    thumbnail: '/images/endless-night.png',
    media: [
      {
        type: 'webp',
        url: '/webp/endlessnight-intro.webp',
      }
    ],
    features: ['ChatGPT', 'HTML', 'CSS', 'JavaScript'],
    developers: ['우엉차'],
    tags: ['텍스트 어드벤처', '공포', '멀티 엔딩'],
    award: 'special'
  },
  {
    id: 'vampire-survival',
    name: '큥♡뱀파이어서바이벌',
    genre: '뱀서라이크 동인 게임',
    description: '아이돌마스터 플래티넘 스타즈 갓곡 큥♡뱀파이어걸에서 착안해서 만든 뱀파이어 서바이버즈 계열 게임입니다.',
    themeInterpretation: '평소 만들고 싶던 뱀파이어 서바이버 게임을 만들었습니다. 메카라는 키워드가 있어서 적을 메카 계열로 만들었어요.',
    thumbnail: '/images/vampire.png',
    media: [
      {
        type: 'webp',
        url: 'webp/vampiresuv.webp'
      }
    ],
    features: ['ChatGPT', 'NovelAI 4.5 Curated', 'NAIA', 'Cursor'],
    developers: ['샌드위치스테이크'],
    tags: ['뱀서라이크', '탄막', '슈팅', '동인게임'],
    award: 'special'
  },
  {
    id: 'night-night-night',
    name: '밤, 밤, 밤!',
    genre: '캐주얼, 액션 퍼즐',
    description: '견과류 밤을 조합해 더 멋진 밤을 만드는 퍼즐 게임입니다. [주의!] 너무 멋있어지면.. \'폭발\'할 수 있음. 게임 제목은 각각 견과류 밤(소재), night(피버 타임), Bomb(폭탄, 폭발) 이라는 큰 게임 특징 세 가지를 나타냅니다.',
    themeInterpretation: '게임, 취업, 밤 중 \'밤\'에 집중한 케이스입니다. \'밤\'들을 결합해 \'밤(bomb)\'을 일으키는 게임으로, 밤 + 메카닉과 소재를 엮어 보았습니다.',
    thumbnail: '/images/3chestnut.png',
    media: [
      {
        type: 'webp',
        url: 'webp/chestnut.webp'
      }
    ],
    features: ['Cursor', 'ChatGPT'],
    developers: ['여풀'],
    tags: ['퍼즐', '캐주얼', '액션', '조합'],
    award: 'special'
  },
  {
    id: 'midnight-snack-heist',
    name: '야식 몰래 가져오기',
    genre: '잠입 액션, 플랫포머',
    description: '자고 계신 부모님 몰래 소음을 적게 내며 군것질 할 것들을 방으로 가져오는 잠입 게임입니다.',
    themeInterpretation: '키워드「밤」+ 형식「재미 및 감정」으로 해석했습니다. "밤"에 어떤 재미를 느낄 수 있을까 생각해봤을 때, 밤에 부모님이 주무실 때 몰래 금지된 것을 하는 것이 재밌지 않을까 생각했습니다.',
    thumbnail: '/images/stealth-lns.png',
    media: [
      {
        type: 'webp',
        url: '/webp/night-snack.webp',
      }
    ],
    features: ['Gemini', 'ChatGPT', 'Cursor', 'Claude'],
    developers: ['제티'],
    tags: ['잠입', '액션', '플랫포머'],
    award: 'special'
  },
  {
    id: 'night-grave-robber',
    name: '밤의 도굴꾼',
    genre: '로그라이크',
    description: '밤이 되면 땅속에서 보물을 탐험하는 도굴꾼의 모험 이야기입니다!',
    themeInterpretation: '아침과 밤 할 때의 밤으로 해석했습니다!',
    thumbnail: '/images/night-graverobber.png',
    media: [
      {
        type: 'webp',
        url: '/webp/nightrobeer.webp'
      }
    ],
    features: ['Cursor', 'ChatGPT'],
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