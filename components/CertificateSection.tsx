import React from 'react';
import { Award, CheckCircle2, Scroll } from 'lucide-react';
import { Button } from './Button';

export const CertificateSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 -skew-x-12 translate-x-32 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="flex-1 w-full">
            <div className="relative group">
              {/* Decorative borders */}
              <div className="absolute -inset-4 border border-amber-500/30 rounded-lg transform rotate-2 transition-transform group-hover:rotate-1"></div>
              <div className="absolute -inset-4 border border-slate-700 rounded-lg transform -rotate-2 transition-transform group-hover:-rotate-1"></div>
              
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/50 border border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 z-10"></div>
                <img 
                  src="https://postfiles.pstatic.net/MjAxODA2MTJfMjE2/MDAxNTI4Nzg1MzM5Njcw.zI1ZgE3ac_SN1PtDHuSpvdva-P0rngK-Ix8EIH7jOi4g.43NIgzV-CfUQEwfYHLZkQmUu-fBIw0TTM4DJRYcjOPgg.JPEG.ocean3885/IMG_2108.jpg?type=w3840" 
                  alt="도원작명철학원 작명 인증서" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-4 rounded-full shadow-lg border-4 border-slate-900 z-20 flex flex-col items-center justify-center w-24 h-24 animate-fade-in-up">
                <Award className="w-8 h-8 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Premium</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-900/30 border border-amber-700/50 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Scroll className="w-3 h-3" />
              Official Certificate
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
              평생을 간직할 <br/>
              <span className="text-amber-500">고품격 작명 인증서</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              이름은 단순한 글자가 아닙니다. 한 사람의 인생을 지탱하는 뿌리입니다.
              도원작명철학원은 그 소중한 가치를 담아, 정성을 다한 이름 풀이와 함께 
              품격 있는 인증서를 발급해 드립니다.
            </p>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600/20 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">정통 성명학 기반 상세 해설</h4>
                  <p className="text-sm text-slate-500">자원오행, 발음오행, 수리획수 등 이름에 담긴 길한 기운을 상세히 풀이해 드립니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600/20 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">도원 원장 친필 직인</h4>
                  <p className="text-sm text-slate-500">한 자 한 자 정성을 담아 지은 이름임을 증명하는 원장의 직인이 날인됩니다.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600/20 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">최고급 케이스 증정</h4>
                  <p className="text-sm text-slate-500">소중한 분에게 선물하기 좋도록 고급스러운 케이스에 담아 전달해 드립니다.</p>
                </div>
              </li>
            </ul>

            <Button variant="primary" size="lg">
              작명 상담 신청하기
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};