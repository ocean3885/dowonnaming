import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-600">
                  <span className="font-bold font-serif">道</span>
              </div>
              <span className="font-bold text-xl text-white font-serif">도원작명철학원</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              정통 명리학의 지혜로 당신의 삶을 비추는 등불이 되겠습니다.<br/>
              작명, 사주, 궁합, 택일 등 인생의 중요한 순간을 함께 고민합니다.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 font-serif">상담 문의</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                        <span className="block text-slate-300 font-medium">전화 상담</span>
                        <span>010-1234-5678</span>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                        <span className="block text-slate-300 font-medium">오시는 길</span>
                        <span>서울시 종로구 인사동길 12, 도원빌딩 3층</span>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-600 mt-0.5" />
                    <span>dowon_naming@example.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 font-serif">운영 시간</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                        <span className="block text-slate-300 font-medium">평일</span>
                        <span>10:00 - 19:00</span>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <div className="w-5"></div>
                    <div>
                        <span className="block text-slate-300 font-medium">주말/공휴일</span>
                        <span>예약제 운영</span>
                    </div>
                </li>
                <li className="pt-2 text-xs text-amber-700">
                    * 방문 전 반드시 전화 예약 부탁드립니다.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Dowon Naming Philosophy Center. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-600">
            <a href="#" className="hover:text-amber-500 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-amber-500 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};