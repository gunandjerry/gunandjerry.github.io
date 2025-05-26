
import React from 'react';

export const SECTION_IDS = {
  INTRODUCTION: 'introduction',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  // CONTACT: 'contact', // Footer serves as contact implicitly
};

export const PERSONAL_INFO = {
  name: "홍길동 (Gildong Hong)",
  title: "Game Client Developer",
  phone: "010-1234-5678",
  email: "gildong.hong.dev@example.com",
  github: "https://github.com/yourusername",
  photo: "https://picsum.photos/seed/profilepic/200/200",
  introduction: "끊임없는 학습과 도전을 즐기는 N년차 게임 클라이언트 개발자 홍길동입니다. 사용자에게 최고의 경험을 선사하는 게임을 만드는 것을 목표로 하고 있으며, 다양한 기술 스택에 대한 깊은 이해와 협업 능력을 바탕으로 프로젝트 성공에 기여합니다.",
};

export const PROJECTS_DATA = [
  {
    id: 'project-1',
    title: '프로젝트 오메가',
    image: 'https://picsum.photos/seed/omega/600/400',
    shortDescription: 'Unity 기반 모바일 RPG 게임. 실시간 전투 시스템과 길드 콘텐츠 개발 담당.',
    longDescription: [
      {
        id: 'p1-overview',
        title: '프로젝트 개요',
        content: '프로젝트 오메가는 판타지 세계관을 배경으로 하는 모바일 RPG입니다. Unity 엔진과 C#을 사용하여 개발되었으며, 뛰어난 그래픽과 몰입감 있는 스토리를 자랑합니다. 수백만 다운로드를 기록하며 성공적으로 서비스되었습니다.\n\n이 프로젝트는 대규모 멀티플레이어 환경을 지원하며, 플레이어 간의 상호작용과 경쟁을 핵심 재미 요소로 삼고 있습니다. 정기적인 업데이트와 이벤트를 통해 사용자들에게 지속적인 즐거움을 제공하는 것을 목표로 했습니다.',
        showDivider: true,
      },
      {
        id: 'p1-my-role',
        title: '담당 역할 및 주요 개발 내용',
        content: '클라이언트 개발팀의 선임 개발자로서 실시간 전투 시스템의 핵심 로직 개발을 주도했습니다. 여기에는 캐릭터의 스킬 처리, 몬스터 AI와의 상호작용, 실시간 데미지 계산 및 피드백 표시 등이 포함됩니다. 이 과정에서 복잡한 상태 관리와 성능 최적화에 많은 노력을 기울였습니다.\n\n또한, 길드 시스템 개발에 핵심적으로 참여하여 길드 생성, 가입, 길드원 관리, 길드 채팅 및 길드 전용 콘텐츠 (길드 레이드, 길드전 등) 기획 및 구현을 맡았습니다. Photon Engine을 활용한 네트워크 동기화 작업에도 깊이 관여하여 전투 중 발생할 수 있는 지연 현상을 최소화하고, 플레이어 간의 상호작용이 원활하게 이루어지도록 했습니다.',
        showDivider: true,
      },
      {
        id: 'p1-ui-ux',
        title: 'UI/UX 개선 및 최적화',
        content: '사용자 인터페이스(UI)와 사용자 경험(UX) 개선 작업에도 적극적으로 참여했습니다. 직관적인 메뉴 구성, 전투 중 정보 가시성 향상, 튜토리얼 시스템 개선 등을 통해 신규 유저의 진입 장벽을 낮추고 기존 유저의 편의성을 증대시키는 데 기여했습니다. A/B 테스트를 통해 변경 사항의 효과를 검증하고, 사용자 피드백을 적극적으로 수렴하여 반영했습니다.\n\n성능 최적화 부분에서는 Unity Profiler를 활용하여 병목 지점을 분석하고, 코드 최적화, 에셋 관리 효율화, 메모리 사용량 감소 등의 작업을 수행했습니다. 특히 저사양 기기에서도 부드러운 플레이 경험을 제공하기 위해 노력했습니다.',
        showDivider: true,
      },
      {
        id: 'p1-challenges-achievements',
        title: '기술적 도전과 성과',
        content: '개발 과정에서 다양한 기술적 도전에 직면했습니다. 특히, 다수의 플레이어가 동시에 참여하는 길드 콘텐츠에서 발생할 수 있는 동기화 문제와 성능 문제를 해결하기 위해 많은 연구와 테스트를 진행했습니다. 상태 동기화 알고리즘을 개선하고, 서버와의 데이터 교환을 최적화하여 안정성을 높였습니다.\n\n이러한 노력을 통해 안정적인 프레임률을 유지하고 사용자 만족도를 이전 대비 15% 이상 향상시키는 성과를 달성했습니다. 또한, 주기적인 코드 리뷰와 기술 공유 세션을 통해 팀 전체의 개발 역량 강화에도 기여했으며, 프로젝트의 성공적인 런칭과 안정적인 서비스 운영에 중요한 역할을 수행했습니다.',
        showDivider: false, // Example: last section might not need a divider
      }
    ],
    technologies: ['Unity', 'C#', 'Photon', 'Mobile', 'RPG', 'UI/UX', 'Optimization'],
    sourceLink: 'https://github.com/yourusername/project-omega',
  },
  {
    id: 'project-2',
    title: '샘플 양식1',
    image: 'https://picsum.photos/seed/sf1-main/600/400',
    shortDescription: 'Direct3D로 만든 간단한 게임',
    longDescription: [
      {
        id: 'sf1-s1-overview',
        title: '섹션 1: 프로젝트 소개',
        content: '이 프로젝트는 Direct3D API를 사용하여 개발된 간단한 3D 게임 프로토타입입니다. 기본적인 3D 렌더링 기술과 PhysX 물리 엔진의 기초적인 통합을 학습하고 실험하는 것을 주요 목표로 삼았습니다. 개인적인 스터디의 일환으로 진행되었으며, 복잡한 게임 로직보다는 핵심 기술 구현에 집중하였습니다.\n\n<img src="https://picsum.photos/seed/sf1-sec1-img/500/300" alt="섹션 1: 프로젝트 소개 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />',
        showDivider: true
      },
      {
        id: 'sf1-s2-graphics',
        title: '섹션 2: 그래픽 구현 상세',
        content: 'Direct3D 11을 기반으로 렌더링 파이프라인을 구축했습니다. 버텍스 셰이더와 픽셀 셰이더를 HLSL로 작성하여, 간단한 평면과 큐브 같은 기본 도형에 텍스처를 매핑하고, 기본적인 점 광원(Point Light) 효과를 적용했습니다. 또한, 사용자가 시점을 변경할 수 있도록 기본적인 1인칭 카메라 이동 및 회전 기능을 구현했습니다.\n\n<img src="https://picsum.photos/seed/sf1-sec2-img/500/300" alt="섹션 2: 그래픽 구현 상세 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />',
        showDivider: true
      },
      {
        id: 'sf1-s3-physics',
        title: '섹션 3: PhysX 물리 엔진 연동',
        content: 'NVIDIA PhysX SDK를 프로젝트에 통합하여 물리 시뮬레이션 기능을 추가했습니다. 씬(Scene) 내에 정적(Static) 및 동적(Dynamic) 강체(Rigid Body)들을 배치하고, 이들 간의 충돌 감지 및 물리적 반응을 처리하도록 했습니다. 예를 들어, 공중에 떠 있는 큐브가 중력에 의해 바닥으로 떨어지고, 다른 오브젝트와 충돌 시 튕겨나가는 등의 현상을 구현했습니다.\n\n<img src="https://picsum.photos/seed/sf1-sec3-img/500/300" alt="섹션 3: PhysX 물리 엔진 연동 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />',
        showDivider: true
      },
      {
        id: 'sf1-s4-interaction',
        title: '섹션 4: 사용자 입력 및 상호작용',
        content: '키보드 입력을 통해 플레이어가 3D 공간 내에서 기본적인 이동(전후좌우)을 할 수 있도록 구현했습니다. 마우스 입력은 카메라 시점 조작에 사용되었습니다. 추가적으로, 특정 키를 눌렀을 때 씬 내의 동적 오브젝트에 힘을 가하거나, 새로운 오브젝트를 생성하는 등의 간단한 상호작용 기능을 실험적으로 추가해보았습니다.\n\n<img src="https://picsum.photos/seed/sf1-sec4-img/500/300" alt="섹션 4: 사용자 입력 및 상호작용 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />',
        showDivider: true
      },
      {
        id: 'sf1-s5-learnings',
        title: '섹션 5: 개발 과정 및 학습점',
        content: 'Direct3D와 PhysX를 함께 사용하는 것은 처음이었기에, 두 라이브러리의 초기화 및 연동 과정에서 여러 시행착오를 겪었습니다. 특히 그래픽 객체와 물리 객체 간의 위치 및 회전 정보를 동기화하는 부분이 중요했습니다. 이 프로젝트를 통해 로우레벨 그래픽스 API의 작동 방식과 물리 엔진의 기본적인 사용법에 대한 이해를 높일 수 있었으며, 향후 더 복잡한 3D 애플리케이션 개발의 기초를 다질 수 있었습니다.\n\n<img src="https://picsum.photos/seed/sf1-sec5-img/500/300" alt="섹션 5: 개발 과정 및 학습점 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />',
        showDivider: false // Last section, no divider needed after this.
      }
    ],
    technologies: ['Direct3D', 'PhysX'],
  },
  {
    id: 'project-3',
    title: '별빛 모험가',
    image: 'https://picsum.photos/seed/starlight/600/400',
    shortDescription: 'Cocos2d-x 기반 2D 플랫포머 게임. 레벨 디자인 및 UI 시스템 구현.',
    longDescription: '별빛 모험가는 귀여운 캐릭터가 등장하는 2D 플랫포머 게임으로, Cocos2d-x와 C++를 사용하여 개발되었습니다. 다양한 테마의 레벨 디자인과 직관적인 UI/UX 시스템 구현에 참여했습니다. 특히, 저사양 기기에서도 원활하게 동작하도록 성능 최적화에 많은 노력을 기울였습니다.',
    technologies: ['Cocos2d-x', 'C++', '2D Platformer', 'Mobile'],
  },
  {
    id: 'project-4',
    title: 'VR 체스 마스터',
    image: 'https://picsum.photos/seed/vrchess/600/400',
    shortDescription: 'Unity 기반 VR 체스 게임. VR 인터랙션 및 AI 상대 로직 개발.',
    longDescription: 'VR 체스 마스터는 몰입감 높은 VR 환경에서 체스를 즐길 수 있는 게임입니다. Unity와 C#을 사용하여 개발되었으며, Oculus Quest 플랫폼을 타겟으로 VR 컨트롤러를 이용한 직관적인 인터랙션 구현과 다양한 난이도의 AI 상대 로직 개발에 참여했습니다. 사용자 테스트를 통해 지속적으로 게임 플레이를 개선했습니다.',
    technologies: ['Unity', 'C#', 'VR', 'Oculus', 'AI'],
  },
  {
    id: 'project-5',
    title: '블록 퍼즐 챌린지',
    image: 'https://picsum.photos/seed/blockpuzzle/600/400',
    shortDescription: 'Godot Engine을 활용한 캐주얼 퍼즐 게임. 게임 로직 및 다양한 퍼즐 모드 개발.',
    longDescription: '블록 퍼즐 챌린지는 Godot Engine과 GDScript를 사용하여 개발된 중독성 있는 캐주얼 퍼즐 게임입니다. 핵심 게임 로직 설계 및 시간 제한 모드, 무한 모드 등 다양한 플레이 모드를 개발했습니다. Google Play Store 출시 경험이 있습니다.',
    technologies: ['Godot Engine', 'GDScript', 'Puzzle', 'Mobile'],
    liveLink: 'https://play.google.com/store/apps/details?id=your.app.id', // Example
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 'exp-1',
    period: '2021년 3월 - 현재',
    company: '넥스트젠 게임즈',
    role: '선임 게임 클라이언트 개발자',
    description: '주요 모바일 RPG 프로젝트 "프로젝트 오메가"의 클라이언트 개발 리드. 전투 시스템, 길드 콘텐츠, UI/UX 개발 및 최적화 담당. 신규 기술 도입 및 팀원 멘토링 수행.',
    learnings: ['리더십 및 프로젝트 관리', 'Unity 심화 최적화', '실시간 네트워크 동기화', '애자일 개발 프로세스'],
  },
  {
    id: 'exp-2',
    period: '2019년 1월 - 2021년 2월',
    company: '인피니티 스튜디오',
    role: '게임 클라이언트 개발자',
    description: 'PC FPS 게임 "코드네임 제타" 개발팀 소속. Unreal Engine 4 기반 캐릭터 애니메이션, 무기 시스템, 물리 효과 개발. C++ 및 블루프린트 활용.',
    learnings: ['Unreal Engine 4 활용 능력', 'C++ 프로그래밍 심화', '3D 게임 개발 파이프라인', '퍼포먼스 프로파일링'],
  },
  {
    id: 'exp-3',
    period: '2017년 7월 - 2018년 12월',
    company: '픽셀크래프트',
    role: '주니어 게임 개발자',
    description: 'Cocos2d-x 기반 2D 모바일 게임 다수 개발 참여. 레벨 디자인, UI 구현, 버그 수정 및 QA 지원. 주로 C++ 사용.',
    learnings: ['Cocos2d-x 프레임워크', '2D 게임 개발 기초', '모바일 플랫폼 이해', '버전 관리 시스템 (Git)'],
  },
];

export const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const GitHubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

export const ExternalLinkIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
