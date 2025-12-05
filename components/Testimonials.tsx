import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">
            고객 후기
          </h2>
          <p className="text-slate-500">
            도원작명철학원을 다녀가신 분들의 진솔한 이야기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="flex flex-col p-8 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-8 right-8 text-amber-100 h-10 w-10" />
              <div className="mb-6 flex-grow">
                <p className="text-slate-700 leading-relaxed font-serif italic text-lg opacity-90">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                <img 
                  src={t.avatarUrl} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">{t.author}</h4>
                  <span className="text-xs text-amber-700 font-medium">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};