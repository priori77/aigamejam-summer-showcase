export interface GameMedia {
  type: 'youtube' | 'image' | 'webp';
  url: string;
  title?: string;
  thumbnail?: string;
}

export interface GameRule {
  type: 'text' | 'image';
  content: string;
  title?: string;
}

export interface Game {
  id: string;
  name: string;
  genre: string;
  description: string;
  themeInterpretation?: string; // 주제 해석
  thumbnail: string;
  media: GameMedia[];
  features?: string[];
  developers: string[];
  tags: string[];
  award?: 'excellence' | 'special'; // 우수상 또는 특별상
  gameRules?: GameRule[]; // 게임 룰 소개
}

export interface GameJamEvent {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  games: Game[];
} 