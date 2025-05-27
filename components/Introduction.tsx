import React, { useState } from 'react';
import { MailIcon, PhoneIcon } from '../constants.tsx';

function Introduction({ id, personalInfo }) {
  const [copiedEmailMessage, setCopiedEmailMessage] = useState('');
  const [copiedPhoneMessage, setCopiedPhoneMessage] = useState('');

  const handleCopy = async (textToCopy: string, type: 'email' | 'phone') => {
    if (!navigator.clipboard) {
      // Fallback for browsers that don't support navigator.clipboard
      // Or display a message asking the user to copy manually
      const message = type === 'email' ? '이메일 복사 실패. 수동으로 복사해주세요.' : '전화번호 복사 실패. 수동으로 복사해주세요.';
      if (type === 'email') setCopiedEmailMessage(message);
      else setCopiedPhoneMessage(message);
      setTimeout(() => {
        if (type === 'email') setCopiedEmailMessage('');
        else setCopiedPhoneMessage('');
      }, 3000);
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      if (type === 'email') {
        setCopiedEmailMessage('복사 완료!');
        setTimeout(() => setCopiedEmailMessage(''), 2000);
      } else if (type === 'phone') {
        setCopiedPhoneMessage('복사 완료!');
        setTimeout(() => setCopiedPhoneMessage(''), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
      const failMessage = type === 'email' ? '복사 실패' : '복사 실패';
      if (type === 'email') {
        setCopiedEmailMessage(failMessage);
        setTimeout(() => setCopiedEmailMessage(''), 2000);
      } else if (type === 'phone') {
        setCopiedPhoneMessage(failMessage);
        setTimeout(() => setCopiedPhoneMessage(''), 2000);
      }
    }
  };

  return (
    <section id={id} className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-12">
          <img 
            src={personalInfo.photo} 
            alt={personalInfo.name} 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-teal-500/50" 
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400 mb-4">
            안녕하세요! {personalInfo.name}입니다.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            꾸준하고, 집요하고, 체계적이며, 누구보다 게임 산업의 전망에 대해 강한 확신을 가지고 있는 게임 개발자 지망생입니다.<br></br>
            2년간의 집중적인 교육을 통해 게임 개발에 필요한 저반의 지식을 익히고 실무형 프로젝트를 수행하며 구현 능력을 키워왔으며, 그 과정에서 단 한 차례도 포기하지 않고 꾸준히 좋은 성적을 내어 왔습니다.<br></br>
            또한 여러 차례의 팀 프로젝트를 수행하며 소통과 협업의 중요성을 몸소 체험하고 그 노하우를 익혀왔습니다.
          </p>

          {/* Contact Info with Copy Functionality */}
          <div className="mt-6 text-sm space-y-3">
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="flex items-center text-slate-400 hover:text-teal-400 transition-colors group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md p-1 -ml-1"
              aria-label={`Copy email address ${personalInfo.email}`}
              role="button"
              tabIndex={0}
            >
              <MailIcon className="w-5 h-5 mr-2.5 text-teal-500 group-hover:text-teal-400 transition-colors flex-shrink-0" />
              <span className="flex-grow">{personalInfo.email}</span>
              {copiedEmailMessage && (
                <span className="ml-2 text-xs text-teal-400 font-medium">
                  {copiedEmailMessage}
                </span>
              )}
              {!copiedEmailMessage && (
                  <span className="ml-2 text-xs text-slate-500 group-hover:text-teal-500 transition-opacity opacity-0 group-hover:opacity-100 font-medium">
                      (클릭하여 복사)
                  </span>
              )}
            </button>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="flex items-center text-slate-400 hover:text-teal-400 transition-colors group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md p-1 -ml-1"
              aria-label={`Copy phone number ${personalInfo.phone}`}
              role="button"
              tabIndex={0}
            >
              <PhoneIcon className="w-5 h-5 mr-2.5 text-teal-500 group-hover:text-teal-400 transition-colors flex-shrink-0" />
              <span className="flex-grow">{personalInfo.phone}</span>
              {copiedPhoneMessage && (
                <span className="ml-2 text-xs text-teal-400 font-medium">
                  {copiedPhoneMessage}
                </span>
              )}
              {!copiedPhoneMessage && (
                  <span className="ml-2 text-xs text-slate-500 group-hover:text-teal-500 transition-opacity opacity-0 group-hover:opacity-100 font-medium">
                      (클릭하여 복사)
                  </span>
              )}
            </button>
          </div>

          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href={`mailto:${personalInfo.email}`} className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              이메일 보내기
            </a>
            <a href={personalInfo.blog} target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              블로그 구경하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
