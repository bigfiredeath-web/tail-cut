# tail-cut (AI 꼬리물기 자동 단속 & 신고 웹앱)

## 개요
'tail cut'은 차량 블랙박스 영상을 분석하여 교차로 꼬리물기 위반을 자동으로 탐지하고, 억울한 상황(예외 케이스)을 필터링한 후, 안전신문고 신고 양식까지 자동 생성해 주는 서비스입니다.

## 기술 스택
- **Frontend**: React, Vite, Tailwind CSS, Lucide React
- **Backend**: Vercel Serverless Function (`api/generate.js`)
- **AI Model**: `@google/genai` (gemini-3.1-flash-lite)

## 실행 방법 (Local Development)

1. 패키지 설치:
   ```bash
   npm install
   ```

2. 환경변수 설정:
   `.env.local` 파일 생성 후 Gemini API Key 설정
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. 로컬 서버 실행:
   ```bash
   npm run dev
   ```

## Vercel 배포 방법

1. GitHub에 코드를 올려 Vercel과 연동합니다.
2. Vercel Project Settings -> Environment Variables에서 `GEMINI_API_KEY`를 추가합니다.
3. Deploy 완료 후 사용 가능합니다.