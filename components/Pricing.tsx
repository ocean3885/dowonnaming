import React from 'react';
import { Check, Star } from 'lucide-react';
import { PLANS } from '../constants';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            상담 안내
          </h2>
          <p className="text-slate-400">
            정성을 다하는 상담으로 고객님의 미래를 밝혀드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-amber-900/20 border-2 border-amber-600 shadow-2xl scale-105 z-10 backdrop-blur-sm' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="currentColor" /> BEST CHOICE
                </div>
              )}

              <div className="mb-8 pt-4">
                <h3 className="text-xl font-bold font-serif text-amber-50 mb-3">{plan.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white tracking-tight">{plan.price}</span>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-8"></div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-amber-500/20 p-0.5">
                        <Check className="h-3 w-3 text-amber-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.recommended ? 'primary' : 'outline'} 
                className={`w-full ${!plan.recommended ? 'border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white hover:bg-transparent' : ''}`}
              >
                상담 신청하기
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};