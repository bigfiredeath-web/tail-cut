import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Camera, FileCheck2 } from 'lucide-react';

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
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
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          AI 기반 꼬리물기 자동 단속 솔루션
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          도로 위 꼬리물기,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">AI가 빠르게</span> 정확히 판별합니다.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          블랙박스 영상만 올리세요. Gemini AI가 꼬리물기 판별부터 억울함 필터링, 번호판 추출, 안전신문고 양식 작성까지 자동으로 처리합니다.
        </p>
        <button
          onClick={onStart}
          className="group bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-red-900/30 flex items-center gap-3 hover:gap-4 cursor-pointer"
        >
          블랙박스 영상 분석 시작하기
          <ArrowRight className="w-5 h-5 transition-all" />
        </button>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 text-left w-full">
          <div className="p-5 bg-slate-900/60 border border-slate-800/80 rounded-xl">
            <Cpu className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-slate-200 mb-1">AI 꼬리물기 탐지</h3>
            <p className="text-xs text-slate-400">교차로 상황과 신호, 차선 정체를 정밀 분석합니다.</p>
          </div>
          <div className="p-5 bg-slate-900/60 border border-slate-800/80 rounded-xl">
            <ShieldCheck className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-slate-200 mb-1">억울함 정밀 필터링</h3>
            <p className="text-xs text-slate-400">피치 못할 사정이나 예외적 교통 상황을 사전 차단합니다.</p>
          </div>
          <div className="p-5 bg-slate-900/60 border border-slate-800/80 rounded-xl">
            <Camera className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="font-bold text-slate-200 mb-1">자동 증거 Extraction</h3>
            <p className="text-xs text-slate-400">위반 핵심 프레임 및 번호판, 시간/장소를 자동 추출합니다.</p>
          </div>
          <div className="p-5 bg-slate-900/60 border border-slate-800/80 rounded-xl">
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