import React, { useState } from 'react';
import { Sparkles, ScrollText, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { generateSlogan } from '../services/geminiService';

export const Hero: React.FC = () => {
  const [concern, setConcern] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleGenerate = async () => {
    if (!concern.trim()) return;
    setIsGenerating(true);
    setAdvice(null);
    try {
      const result = await generateSlogan(concern);
      setAdvice(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#fdfbf7]">
      {/* Abstract Background Patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 z-0 hidden lg:block skew-x-12 translate-x-20"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-semibold mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              30년 전통의 명품 작명소
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-slate-900 leading-tight mb-6">
              이름 하나로 <br/>
              <span className="text-amber-700 relative inline-block">
                운명
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>이 바뀝니다
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              타고난 사주팔자는 바꿀 수 없지만, 불리는 이름은 선택할 수 있습니다.
              부족한 기운은 채우고 넘치는 기운은 다스려, 당신의 삶에 귀한 복이 깃들도록 돕겠습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" className="shadow-xl shadow-amber-900/10">
                무료 이름 풀이 신청
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowDemo(!showDemo)}
              >
                <Sparkles className="mr-2 h-5 w-5 text-amber-600" />
                AI 운세 조언 듣기
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-5 h-5 text-amber-600" /> 한국역술인협회 정회원
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-5 h-5 text-amber-600" /> 1:1 심층 상담
              </div>
            </div>

            {/* AI Advisor Demo */}
            {showDemo && (
              <div className="mt-8 bg-white p-6 rounded-xl border border-stone-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 max-w-md mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <ScrollText className="w-5 h-5 text-amber-700" />
                  <h3 className="text-lg font-bold text-slate-800 font-serif">도원 AI의 한마디</h3>
                </div>
                <p className="text-slate-500 text-sm mb-4">현재 가장 고민되는 일이나 마음가짐을 입력해보세요.</p>
                
                <div className="flex gap-2 mb-4">
                  <input 
                    type="text" 
                    placeholder="예: 진로 고민, 결혼 시기, 재물운" 
                    className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 rounded px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  />
                  <Button onClick={handleGenerate} isLoading={isGenerating} size="sm" className="whitespace-nowrap">
                    조언 구하기
                  </Button>
                </div>

                {advice && (
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r">
                    <p className="text-slate-800 font-serif font-medium leading-relaxed">"{advice}"</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Director Image */}
          <div className="flex-1 order-1 lg:order-2 relative">
            <div className="relative w-full max-w-md mx-auto lg:mr-0">
               {/* Decorative Frame */}
               <div className="absolute inset-0 border-2 border-amber-700/20 rounded-t-[10rem] translate-x-4 translate-y-4 z-0"></div>
               
               {/* Main Image Container */}
               <div className="relative rounded-t-[10rem] overflow-hidden shadow-2xl bg-slate-900 aspect-[3/4] z-10">
                 <img 
                    src="https://myungridan-gil.com/static/section/img/37.jpg" 
                    alt="도원 원장님" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <p className="text-amber-400 font-serif text-lg mb-1">도원(道元) 원장</p>
                    <p className="text-xs text-slate-300 leading-relaxed opacity-90">
                      동양철학 박사 수료<br/>
                      전국 역술인 대회 대상 수상<br/>
                      신생아 작명 5,000건 이상
                    </p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};