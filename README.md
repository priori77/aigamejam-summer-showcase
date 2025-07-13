# AI 게임잼 세션1

이 프로젝트는 AI 게임잼 세션1의 출품작들을 소개하는 웹사이트입니다.

## 이미지 배포 트러블슈팅

### Vercel에서 이미지가 로드되지 않는 경우

1. **설정 확인**: `next.config.js`에서 `localPatterns` 설정 확인
2. **파일 경로**: public 폴더의 이미지는 `/`로 시작하는 절대 경로 사용
3. **캐시 무효화**: Vercel 대시보드에서 캐시 클리어 또는 재배포

### 해결 방법들

1. **localPatterns 사용**: 
```javascript
// next.config.js
images: {
  localPatterns: [
    {
      pathname: '/images/**',
      search: '',
    },
  ],
}
```

2. **unoptimized 속성**: 
```jsx
<Image src="/images/game.png" alt="Game" unoptimized />
```

3. **일반 img 태그 사용**:
```jsx
<img src="/images/game.png" alt="Game" />
```

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel (배포)

## 개발 환경 설정

```bash
npm install
npm run dev
```

## 배포

이 프로젝트는 Vercel에 자동 배포됩니다. 