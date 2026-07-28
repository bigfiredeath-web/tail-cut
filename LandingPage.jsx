import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Camera, FileCheck2 } from 'lucide-react';

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden">
      {/* Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white p-2 rounded-lg font-black text-xl flex items-center justify-center w-9 h-9">
              T
            </div>
            <span className="font-extrabold text-xl tracking-tight">tail<span className="text-red-500">cut</span></span>
          </div>
          <button 
            onClick={onStart}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-lg shadow-red-900/20 cursor-pointer"
          >
            시작하기
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center items-center">
        
        {/* Background Graphic Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <div className="absolute w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          
          <svg className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] text-red-500/10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="4" strokeDasharray="8 6" />
            <path d="M100 10 V190 M10 100 H190" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" opacity="0.6" />
            <rect x="70" y="70" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M60 60 L140 140 M140 60 L60 140" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
            <rect x="85" y="10" width="30" height="18" rx="3" fill="currentColor" opacity="0.5" />
            <rect x="85" y="172" width="30" height="18" rx="3" fill="currentColor" opacity="0.5" />
            <rect x="10" y="85" width="18" height="30" rx="3" fill="currentColor" opacity="0.5" />
            <rect x="172" y="85" width="18" height="30" rx="3" fill="currentColor" opacity="0.5" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-800/80 text-red-400 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            AI 기반 꼬리물기 자동 단속 솔루션
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-md">
            도로 위 꼬리물기,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600">AI가 빠르게</span> 정확히 판별합니다.
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed drop-shadow">
            블랙박스 영상만 올리세요. Gemini AI가 꼬리물기 판별부터 억울함 필터링, 번호판
            추출, 안전신문고 양식 작성까지 자동으로 처리합니다.
          </p>

          <button
            onClick={onStart}
            className="group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:-translate-y-0.5 shadow-xl shadow-red-900/40 flex items-center gap-3 cursor-pointer"
          >
            블랙박스 영상 분석 시작하기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 text-left w-full">
          <div className="p-5 bg-slate-900/70 backdrop-blur-md border border-slate-800/80 rounded-xl hover:border-red-500/30 transition">
            <Cpu className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-slate-200 mb-1">AI 꼬리물기 탐지</h3>
            <p className="text-xs text-slate-400">교차로 상황과 신호, 차선 정체를 정밀 분석합니다.</p>
          </div>
          <div className="p-5 bg-slate-900/70 backdrop-blur-md border border-slate-800/80 rounded-xl hover:border-red-500/30 transition">
            <ShieldCheck className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-slate-200 mb-1">억울함 정밀 필터링</h3>
            <p className="text-xs text-slate-400">피치 못할 사정이나 예외적 교통 상황을 사전 차단합니다.</p>
          </div>
          <div className="p-5 bg-slate-900/70 backdrop-blur-md border border-slate-800/80 rounded-xl hover:border-red-500/30 transition">
            <Camera className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-slate-200 mb-1">자동 증거 Extraction</h3>
            <p className="text-xs text-slate-400">위반 핵심 프레임 및 번호판, 시간/장소를 자동 추출합니다.</p>
          </div>
          <div className="p-5 bg-slate-900/70 backdrop-blur-md border border-slate-800/80 rounded-xl hover:border-red-500/30 transition">
            <FileCheck2 className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-slate-200 mb-1">안전신문고 매핑</h3>
            <p className="text-xs text-slate-400">신고에 필요한 양식을 한 번에 완벽히 생성합니다.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 tail cut. Powered by Google Gemini API.
      </footer>
    </div>
  );
}
