
import React from 'react';
import { PERSONAL_INFO } from '../constants.tsx'; // Assuming PERSONAL_INFO is in constants

function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 py-12 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xl font-semibold text-teal-400 mb-4">
          새로운 기회를 찾고 있습니다!
        </p>
        <p className="mb-2">
          저의 경험과 기술이 팀에 기여할 수 있다고 생각되시면 언제든지 연락주세요.
        </p>
        <p className="mb-6">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-teal-400 hover:text-teal-300 transition-colors">
            {PERSONAL_INFO.email}
          </a>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          이 포트폴리오는 React와 Tailwind CSS로 제작되었으며, 구글 AI Builder의 도움을 받아 작성되었습니다.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
