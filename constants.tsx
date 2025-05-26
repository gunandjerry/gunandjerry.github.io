
import React from 'react';
import { Project, TimelineEvent, ContactInfo, TimelineEventStatus } from './types';

// SVG Icons
export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const BlogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.875c0-.621.504-1.125 1.125-1.125H6.75M12 7.5V9m0 3V9m0 3v2.25m0 3v2.25m0 0V15m0 0V9" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

export const GraduationCapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.25c2.472 0 4.796-.426 6.852-1.193a60.437 60.437 0 00-.49-6.347m-11.862 0A60.437 60.437 0 0112 8.25c2.472 0 4.796.426 6.852 1.193m-11.862 0h11.862M4.26 10.147A3 3 0 013 7.147V6a3 3 0 013-3h12a3 3 0 013 3v1.147a3 3 0 01-1.26 2.247M12 18.75a.75.75 0 01.75.75v.008c0 .414-.336.75-.75.75h-.008a.75.75 0 01-.75-.75v-.008c0-.414.336-.75.75-.75h.008zM12 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const RocketLaunchIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56v4.82a6 6 0 01-1.858 4.18M14.37 15.59a6 6 0 01-2.56 5.84m-2.286-6.84a6 6 0 00-4.181 1.858M18 10.5h.008v.008H18V10.5zm-3.75 0h.008v.008H14.25V10.5zm-3.75 0h.008v.008H10.5V10.5zm-3.75 0h.008v.008H6.75V10.5zm-3.75 0h.008v.008H3V10.5zm1.875-3.75h.008v.008H4.875V6.75zm3.75 0h.008v.008H8.625V6.75zm3.75 0h.008v.008H12.375V6.75zm3.75 0h.008v.008H16.125V6.75zm3.75 0h.008v.008H19.875V6.75z" />
</svg>
);


// Contact Information
export const CONTACT_INFO: ContactInfo = {
  name: "홍길동",
  email: "gildong.hong@example.com",
  phone: "010-1234-5678",
  githubUrl: "https://github.com/gildonghong",
  blogUrl: "https://gildong.tistory.com",
  linkedinUrl: "https://linkedin.com/in/gildonghong" // Optional
};

// Sample Project Data
export const PROJECTS_DATA: Project[] = [
  {
    id: "project1",
    title: "SF 로그라이크 게임 'Cosmic Drift'",
    shortDescription: "Unity 엔진 기반의 3D 우주 탐험 로그라이크 게임입니다. 절차적으로 생성되는 은하계를 탐험하세요.",
    longDescription: (
      <>
        <p className="mb-4">
          'Cosmic Drift'는 플레이어가 자신만의 우주선을 조종하여 미지의 은하계를 탐험하는 3D 로그라이크 게임입니다. 각 탐험은 새롭게 생성되는 성계, 위험한 소행성 지대, 고대 외계 유물, 그리고 적대적인 우주 해적들로 가득합니다.
        </p>
        <p className="mb-2"><strong className="text-blue-400">주요 기능:</strong></p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-300">
          <li>절차적 맵 생성 (銀河系, 星系, 행성)</li>
          <li>다양한 종류의 우주선 및 커스터마이징 시스템</li>
          <li>실시간 우주 전투 및 탄막 회피 요소</li>
          <li>로그라이크 특유의 영구적 죽음과 메타 프로그레션</li>
          <li>아이템 파밍 및 스킬 트리 시스템</li>
        </ul>
        <p className="mb-4">
          이 프로젝트를 통해 Unity 엔진의 고급 기능(예: URP, Shader Graph, Cinemachine)과 C# 프로그래밍, 게임 디자인 원칙, 그리고 버전 관리 시스템(Git) 사용에 대한 깊이 있는 경험을 쌓았습니다.
        </p>
      </>
    ),
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    technologies: ["Unity", "C#", "URP", "Shader Graph", "Blender", "Git"],
    role: "개인 개발 (기획, 프로그래밍, 일부 아트)",
    duration: "2023.01 - 2023.06 (6개월)",
    sourceCodeUrl: "https://github.com/gildonghong/cosmic-drift",
  },
  {
    id: "project2",
    title: "AI 기반 NPC 시스템 개발",
    shortDescription: "게임 내 NPC들의 행동 패턴을 다양화하고 현실감을 높이기 위한 AI 시스템 연구 및 프로토타입 개발.",
    longDescription: (
      <>
        <p className="mb-4">
          기존 게임 NPC들의 예측 가능한 행동 패턴을 개선하고자, 머신러닝(강화학습) 및 행동 트리(Behavior Tree)를 활용한 지능형 NPC 시스템 프로토타입을 개발했습니다.
        </p>
        <p className="mb-2"><strong className="text-blue-400">연구 목표 및 성과:</strong></p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-300">
          <li>환경 변화에 적응하는 동적 행동 패턴 구현</li>
          <li>플레이어 행동 예측 및 대응 로직 설계</li>
          <li>다수의 NPC 간 상호작용 및 그룹 행동 시뮬레이션</li>
          <li>Unity ML-Agents를 활용한 강화학습 모델 훈련</li>
        </ul>
        <p className="mb-4">
          이 프로젝트는 게임 AI의 복잡성과 가능성을 탐구하는 좋은 기회가 되었으며, Python과의 연동, 데이터 분석 및 모델 최적화 과정을 경험했습니다.
        </p>
      </>
    ),
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    technologies: ["Unity", "C#", "Python", "ML-Agents", "Behavior Trees"],
    role: "개인 연구 프로젝트",
    duration: "2023.07 - 2023.10 (4개월)",
  },
  {
    id: "project3",
    title: "모바일 퍼즐 게임 'Block Stacker'",
    shortDescription: "간단한 조작으로 즐길 수 있는 중독성 강한 모바일 블록 쌓기 퍼즐 게임.",
    longDescription: (
      <>
        <p className="mb-4">
          'Block Stacker'는 남녀노소 누구나 쉽게 즐길 수 있는 캐주얼 모바일 퍼즐 게임입니다. 화면을 탭하여 떨어지는 블록을 정확한 타이밍에 쌓아 올리는 것이 목표입니다.
        </p>
        <p className="mb-2"><strong className="text-blue-400">특징:</strong></p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-300">
          <li>직관적인 원터치 컨트롤</li>
          <li>다양한 테마와 블록 스킨</li>
          <li>점점 빨라지는 난이도로 도전 욕구 자극</li>
          <li>Google Play Games 연동 (리더보드, 업적) - 계획</li>
        </ul>
        <p className="mb-4">
          모바일 환경 최적화, 터치 입력 처리, 그리고 간단하지만 몰입도 높은 게임 루프 설계에 중점을 두었습니다. AdMob 광고 통합을 통해 수익화 모델도 실험해 보았습니다.
        </p>
      </>
    ),
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    technologies: ["Unity", "C#", "Mobile Optimization", "AdMob"],
    role: "개인 개발",
    duration: "2022.09 - 2022.12 (4개월)",
    projectUrl: "https://play.google.com/store/apps/details?id=com.example.blockstacker", // 가상 URL
  },
];

// Sample Timeline Data
export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: "event1",
    date: "2021년",
    title: "C++ 및 자료구조/알고리즘 학습",
    description: "프로그래밍의 기초를 다지고, 문제 해결 능력을 키우기 위해 C++ 언어와 핵심적인 자료구조 및 알고리즘을 학습했습니다.",
    status: TimelineEventStatus.COMPLETED,
    icon: <GraduationCapIcon className="w-6 h-6 text-green-400"/>,
  },
  {
    id: "event2",
    date: "2022년 상반기",
    title: "Unity 엔진 및 C# 입문",
    description: "본격적으로 게임 개발의 세계에 발을 들여, Unity 엔진의 기본적인 사용법과 C# 프로그래밍을 익혔습니다. 간단한 2D 게임들을 만들어보며 엔진에 대한 이해도를 높였습니다.",
    status: TimelineEventStatus.COMPLETED,
    icon: <CodeBracketIcon className="w-6 h-6 text-green-400"/>,
  },
  {
    id: "event3",
    date: "2022년 하반기",
    title: "첫 모바일 게임 'Block Stacker' 개발",
    description: "학습한 내용을 바탕으로 첫 번째 개인 프로젝트인 모바일 퍼즐 게임 'Block Stacker'를 기획하고 출시했습니다. (가상 출시)",
    status: TimelineEventStatus.COMPLETED,
    icon: <RocketLaunchIcon className="w-6 h-6 text-green-400"/>,
  },
  {
    id: "event4",
    date: "2023년",
    title: "3D 게임 개발 및 AI 연구",
    description: "'Cosmic Drift' 프로젝트를 통해 3D 게임 개발 역량을 심화시키고, Unity ML-Agents를 활용한 AI NPC 시스템을 연구했습니다.",
    status: TimelineEventStatus.COMPLETED,
    icon: <CodeBracketIcon className="w-6 h-6 text-green-400"/>,
  },
  {
    id: "event5",
    date: "현재",
    title: "Unreal Engine 학습 및 포트폴리오 강화",
    description: "Unity 외에 다른 주요 엔진인 Unreal Engine을 학습하며 C++ 활용 능력을 더욱 향상시키고 있습니다. 또한, 네트워킹, 최적화 등 심화 주제를 공부하며 포트폴리오 프로젝트를 개선하고 있습니다.",
    status: TimelineEventStatus.IN_PROGRESS,
    icon: <CodeBracketIcon className="w-6 h-6 text-yellow-400"/>,
  },
  {
    id: "event6",
    date: "향후 계획",
    title: "게임 클라이언트 개발자 취업 및 전문성 심화",
    description: "쌓아온 지식과 경험을 바탕으로 게임 회사에 클라이언트 개발자로 합류하여, 실제 상용 게임 개발에 참여하고 싶습니다. 그래픽스 파이프라인, 멀티플레이어 게임 개발 등 전문 분야를 더욱 깊이 있게 파고들 계획입니다.",
    status: TimelineEventStatus.PLANNED,
    icon: <RocketLaunchIcon className="w-6 h-6 text-purple-400"/>,
  },
];
