import React, { useState } from 'react';
import { Upload, AlertTriangle, CheckCircle, Video, FileText, Send, Loader2, ShieldAlert, Sparkles, Check, AlertCircle } from 'lucide-react';
import LandingPage from './components/LandingPage';

export default function App() {
  const [view, setView] = useState('landing');
  const [videoSrc, setVideoSrc] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [reportDone, setReportDone] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setAnalysisResult(null);
      setReportDone(false);
    }
  };

  const analyzeVideo = async () => {
    if (!videoSrc) return;
    setAnalyzing(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl: videoSrc }),
      });
      const data = await response.json();
      if (data.error) {
        alert('AI 분석 중 오류가 발생했습니다: ' + data.error);
      } else {
        setAnalysisResult(data);
      }
    } catch (err) {
      console.error(err);
      alert('서버 통신 오류가 발생했습니다.');
    } finally {
      setAnalyzing(false);
    }
  };

  const handleReport = () => {
    setReportDone(true);
  };

  if (view === 'landing') {
    return <LandingPage onStart={() => setView('app')} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <div className="bg-red-600 text-white p-2 rounded-lg font-black text-xl flex items-center justify-center w-9 h-9">
              T
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">tail<span className="text-red-500">cut</span></span>
          </div>
          <button 
            onClick={() => setView('landing')} 
            className="text-sm text-slate-400 hover:text-white transition cursor-pointer"
          >
            메인으로 돌아가기
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Upload & Video Player */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <Video className="w-5 h-5 text-red-500" />
              블랙박스 영상 연동 및 업로드
            </h2>

            {!videoSrc ? (
              <label className="border-2 border-dashed border-slate-700 hover:border-red-500/50 hover:bg-slate-800/80 transition-all rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer min-h-[260px] group">
                <div className="w-16 h-16 rounded-full bg-slate-700/50 group-hover:bg-red-500/10 flex items-center justify-center mb-4 text-slate-400 group-hover:text-red-500 transition">
                  <Upload className="w-8 h-8" />
                </div>
                <p className="font-medium text-slate-200 mb-1">블랙박스 영상을 Drag & Drop 하거나 클릭하세요</p>
                <p className="text-xs text-slate-400">MP4, MOV, AVI 지원 (최대 100MB)</p>
                <input type="file" accept="video/*" className="hidden" onChange={handleFileUpload} />
              </label>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-slate-700">
                  <video src={videoSrc} controls className="w-full h-full object-contain" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer border border-slate-700 rounded-lg px-3 py-1.5 transition">
                    다른 영상 선택
                    <input type="file" accept="video/*" className="hidden" onChange={handleFileUpload} />
                  </label>
                  <button
                    onClick={analyzeVideo}
                    disabled={analyzing}
                    className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition shadow-lg shadow-red-600/20 disabled:opacity-50 cursor-pointer"
                  >
                    {analyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        AI 분석 중...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        꼬리물기 AI 분석 시작
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Workflow steps overview */}
          <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">AI 처리 과정</h3>
            <div className="space-y-3">
              {[
                { step: "01", title: "꼬리물기 자동 탐지", desc: "교차로 진입 및 정체 상황 인공지능 분석" },
                { step: "02", title: "억울함/예외상황 필터링", desc: "부득이한 정체 및 신호 변동 등 정밀 검증" },
                { step: "03", title: "증거 영상/사진 자동 편집", desc: "위반 핵심 프레임 및 번호판 시점 자동 캡처" },
                { step: "04", title: "번호판 & 위반 정보 추출", desc: "차량 번호, 위반 시각, 정확한 장소 텍스트화" },
                { step: "05", title: "안전신문고 자동 매핑", desc: "신고 서식에 맞는 자동 데이터 세팅" }
              ].map((st, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/40">
                  <span className="text-xs font-mono font-bold text-red-400 bg-red-950/60 px-2 py-1 rounded border border-red-900/50">
                    {st.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-200">{st.title}</p>
                    <p className="text-xs text-slate-400">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis Result & Report Form */}
        <div className="flex flex-col gap-6">
          {!analysisResult && !analyzing && (
            <div className="h-full min-h-[300px] bg-slate-800/20 border border-slate-800 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <ShieldAlert className="w-12 h-12 text-slate-600 mb-3" />
              <p className="text-slate-400 font-medium">영상을 업로드하고 [AI 분석 시작]을 눌러주세요</p>
              <p className="text-xs text-slate-500 mt-1">Gemini AI가 위반 여부를 정밀 분석합니다</p>
            </div>
          )}

          {analyzing && (
            <div className="h-full min-h-[300px] bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-10 h-10 text-red-500 animate-spin mb-4" />
              <p className="text-slate-200 font-medium text-lg">Gemini AI가 프레임별 분석을 진행 중입니다...</p>
              <p className="text-xs text-slate-400 mt-2">교차로 진입 시점, 신호 상태, 번호판 식별 진행 중</p>
            </div>
          )}

          {analysisResult && !analyzing && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 shadow-xl space-y-6">
              {/* Status Banner */}
              <div className={`p-4 rounded-xl flex items-center gap-3 border ${
                analysisResult.violationDetected 
                  ? 'bg-red-950/40 border-red-800/60 text-red-200' 
                  : 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
              }`}>
                {analysisResult.violationDetected ? (
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                )}
                <div>
                  <h4 className="font-bold text-base">
                    {analysisResult.violationDetected ? "꼬리물기 위반 감지됨" : "위반 미감지 (또는 정상 통행)"}
                  </h4>
                  <p className="text-xs opacity-80">{analysisResult.summary}</p>
                </div>
              </div>

              {/* Filter / Exception Check */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  예외상황 / 억울함 검증 (AI Filter)
                </h4>
                <p className="text-sm text-slate-300">{analysisResult.exceptionReason}</p>
              </div>

              {/* Extracted Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase text-slate-400">추출된 위반 정보</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                    <span className="text-xs text-slate-500 block">차량 번호</span>
                    <span className="font-semibold text-slate-100">{analysisResult.licensePlate || "미식별"}</span>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                    <span className="text-xs text-slate-500 block">위반 일시</span>
                    <span className="font-semibold text-slate-100">{analysisResult.timestamp || "미상"}</span>
                  </div>
                  <div className="col-span-2 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                    <span className="text-xs text-slate-500 block">위반 위치</span>
                    <span className="font-semibold text-slate-100">{analysisResult.location || "위치 정보 없음"}</span>
                  </div>
                </div>
              </div>

              {/* Safety Report Form Mapping */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-red-400" />
                  안전신문고 신고 양식 자동 생성
                </h4>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-line select-all">
                  {analysisResult.safetyReportText}
                </div>
              </div>

              {/* Submit Action */}
              {!reportDone ? (
                <button
                  onClick={handleReport}
                  disabled={!analysisResult.violationDetected}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  안전신문고 자동 제보 전송
                </button>
              ) : (
                <div className="bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 p-4 rounded-xl text-center font-medium flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  안전신문고에 성공적으로 제보가 접수되었습니다.
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}