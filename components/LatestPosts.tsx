import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const LatestPosts: React.FC = () => {
  return (
    <section id="posts" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-2 block">Dowon Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">
              도원 명리 칼럼
            </h2>
            <p className="text-slate-500 leading-relaxed">
              사주와 성명학에 대한 깊이 있는 이야기와 삶의 지혜를 나눕니다.<br className="hidden md:block"/>
              도원작명철학원의 최신 소식과 유용한 정보를 확인하세요.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-amber-700 font-medium hover:text-amber-900 transition-colors">
            전체 글 보기 <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-amber-200 shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-700 uppercase tracking-wide shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-xs mb-4">
                  <Calendar className="w-3 h-3 mr-1.5" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="pt-6 border-t border-slate-50">
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors">
                    더 읽어보기 <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-amber-700 font-medium hover:text-amber-900 transition-colors">
                전체 글 보기 <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};