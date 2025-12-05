import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FEATURES } from '../constants';
import { Feature } from '../types';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-2 block">Professional Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">
            도원작명철학원 상담 분야
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            오랜 학문적 깊이와 풍부한 상담 경험을 바탕으로, <br/>
            고객님의 삶에 실질적인 도움이 되는 해답을 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  // Dynamically access Lucide icons
  const Icon = (LucideIcons as any)[feature.iconName] || LucideIcons.Box;

  return (
    <div className="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
      <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 text-slate-700 group-hover:text-amber-600 group-hover:border-amber-200 transition-colors shadow-sm">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 font-serif mb-3 group-hover:text-amber-800 transition-colors">{feature.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};