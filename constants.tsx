import React from 'react';

export const STRING_TABLE = {
  header_navigation_profile: "프로필",
  header_navigation_project: "프로젝트",
  header_navigation_journey: "성장과정",
  header_navigation_skill: "역량"
};

export const SECTION_IDS = {
  INTRODUCTION: 'introduction',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  // CONTACT: 'contact', // Footer serves as contact implicitly
};

export const PERSONAL_INFO = {
  name: "이건제",
  name_eng: "Geonje Lee",
  title: "게임 개발자(클라이언트) 지망생",
  phone: "010-2870-5895",
  email: "gunandjerry@gmail.com",
  github: "https://github.com/gunandjerry",
  blog: "https://ddodigi.tistory.com/",
  photo: "img/profile/face.png"
};

export const PROJECTS_DATA = [
  {
    id: 'p_rh',
    title: 'Railway to Hell',
    image: 'img/project/rh/2.png',
    shortDescription: '2D 자체엔진으로 제작한 전략, 퍼즐 게임. 3주 단기 팀 프로젝트입니다.',
    longDescription: [
      {
        id: 'p_rh_overview',
        title: '프로젝트 개요',
        content: `제목: Railway To Hell
장르: 전략, 퍼즐
개발기간: 3주일 (2024년 8월)
개발인원: 개발 3인 / 아트 3인 / 기획 2인
사용엔진: 자체 2D 엔진
플랫폼: PC, Window

<b><a href="https://youtu.be/H3ri3R9NwEg?si=e5JUkvO0QaWvkzq2" target="_blank" rel="noopener noreferrer">[플레이 영상 바로가기 (Youtube 링크)]</a></b>

`,
        subSections: [
          {
            id: 'p_rh_overview_desc',
            title: '게임 소개',
            content: `전략을 세워 열차 칸의 모든 적을 처치하며 나아가는 턴제 게임입니다.\n플레이어는 1데미지를 가하는 총과 대상을 한 칸 밀어내는 석궁을 사용할 수 있으며, 적들은 플레이어의 행동 이후 정해진 순서에 따라 행동하게 됩니다.\n\n단순한 공격 외에도 플레이어는 다음과 같은 행동들도 취할 수 있습니다.\n1. 석궁으로 적을 뒤로 밀어 그 뒤에 있는 적과 충돌시켜 각각 1데미지를 입힌다.\n2. 샹들리에를 떨어트려 밑에 있는 적에게 3데미지를 입힌다.\n3. 화약통을 터트려 양 쪽의 적에게 1데미지를 입히고 각각 한 칸씩 밀어낸다.\n4. 다음 턴에 적이 스폰되는 위치에 자신 또는 적을 위치시켜 1데미지를 입고 스폰을 막는다.\n\n일반 적은 총 세 가지 타입으로 이루어집니다.\n1. 근접 공격을 가하는 적\n2. 2칸 앞까지 원거리 공격을 가할 수 있는 적\n3. 사이에 장애물이 없다면 플레이어가 있는 곳까지 돌진하는 적\n\n최종 열차 칸에는 보스 몬스터가 출현하며, 일반 몬스터와 전혀 다른 공격 패턴을 보여줍니다.\n\n플레이어는 가장 먼저 행동할 수 있으며, 적의 행동은 턴이 시작할 때 모두 정해지므로 적과 자리를 바꿔 아군을 공격하도록 유도하는 등 다양한 전략적 플레이가 강요됩니다.`,
          },
          {
            id: 'p_rh_overview_role',
            title: '맡은 역할',
            content: `▶ 2D 게임 엔진 프레임워크 (게임루프, 입력, 카메라 조작, 사운드, 렌더링 등)
▶ 플레이어 캐릭터 조작 및 연출 전반
▶ 캐릭터 범용 로직: 타일 이동, 자리바꿈, 피격, 넉백, 사망 등
▶ 구조물 오브젝트 로직
▶ UI 전반 (버튼 상호작용, 9-Sliced 이미지, UI 우선순위 등)
▶ 리소스 비동기 로딩
▶ 카메라 연출
▶ 기타 컨텐츠


<img src="img/project/rh/3.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_rh_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_rh_highlight_1',
            title: '게임 제작 환경 구축하기 : 2D 게임 엔진',
            content: `이전까지 꾸준히 개발해 나가던 2D 게임 엔진을 사용했습니다. 엔진이 필수적으로 지원해야 하는 전반적인 기능들은 이미 준비가 된 상태였고, 저희 게임이 2D 물리나 기능이 많은 에디터를 요구하지는 않았기 때문에 비교적 빠르게 컨텐츠 제작으로 넘어갈 수 있었습니다.\n따라서 게임 엔진은 기능 추가보다는 주로 버그 수정이나 UI를 위한 기능 추가 정도가 이루어졌습니다.\n\n보다 자세한 내용은 블로그의 자체엔진 프로젝트 문서들을 참고해주세요.`,
          },
          {
            id: 'p_rh_highlight_2',
            title: '게임의 큰 흐름 구현하기 : 커맨드 패턴의 활용',
            content: `게임의 핵심 매커니즘은 매 턴의 시작시 모든 적들의 행동과 그 순서를 정해놓는 데에 있습니다.
순차적으로 진행되는 턴 기반에, 미리 결정된 행동의 종류를 저장해둬야 한다는 점에서 커맨드 패턴을 사용하기에 아주 적합하다고 판단했습니다.

커맨드 객체는 매우 단순한 구조로 적이 취할 행동 정보를 저장하고 있습니다. 여기서 저장해야 하는 데이터와 저장할 필요 없는 데이터를 구분해야 하는데, 이는 적이 행동을 결정한 뒤 상황을 바꿔 적들의 행동을 이용하는 전략이 게임의 핵심 요소이기 때문입니다.

예컨대 '돌진형 몬스터'가 '우측 방향으로' '돌진한다'는 정보만 저장하고 현재 위치가 어디고 어디까지 갈 수 있는 지는 저장하지 않습니다. 후자에 해당하는 정보는 실제로 커맨드를 실행할 때 현재 상황에 따라 결정되게 됩니다.

커맨드 패턴을 활용하여 게임의 메인 플로우를 매우 직관적이고 쉽게 작성할 수 있었습니다.
개략적인 흐름도는 다음과 같습니다.

<img src="img/project/rh/4.png" alt="본문 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          },
          {
            id: 'p_rh_highlight_3',
            title: '타이머 함수 기능 : 자연스러운 딜레이 입히기',
            content: `행동을 수행하는 동안 또는 행동 사이사이마다, 여러 부분에서 시간 지연을 줄 필요가 있었습니다.
게임의 메인 플로우 뿐만 아니라 스프라이트 이펙트를 재생한다던가, 열차의 흔들림을 표현하는 카메라 효과 등 다양한 곳에서 범용적으로 사용할 수 있는 기능을 개발하고자 하여 TimerFunction 기능을 엔진에 추가했습니다.

TimerFunction은 코루틴과 유사하게 동작하나 주체가 되는 오브젝트에 등록되어 관리되는 람다 함수의 래퍼 객체입니다.
시간을 정해놓고 콜백하거나, 반복 호출하거나, 지속 호출하는 등의 작업을 편리하게 수행하는 것이 골자입니다.

다만 전역적으로 참조하는 객체들의 수명을 추적하는 시스템은 결코 아니기 때문에, 자신의 주체가 되는 오브젝트 외 다른 오브젝트를 사용할 때는 주의해야 합니다.`,
          },
          {
            id: 'p_rh_highlight_4',
            title: '9-Sliced 이미지',
            content: `튜토리얼 메세지와 플레이어의 말풍선의 배경 이미지는 텍스트의 길이에 따라 적당하게 사이즈가 조절되는 것이 좋습니다.
이를 위해 9-Sliced 스프라이트를 구현했습니다. 좌, 우, 상, 하 영역의 비율을 지정하여 이미지를 9등분하고, 가로 세로로 이미지의 크기를 변경할 경우 아래 그림과 같이 중간 부분만 늘려서 이미지 테두리의 품질 저하를 줄이며 렌더링하는 방식입니다.

<img src="img/project/rh/5.png" alt="본문 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_rh_lesson',
        title: '개선할 수 있는 점',
        subSections: [
          {
            id: 'p_rh_lesson_1',
            title: '설계에 대한 고려 부족',
            content: `좋은 설계에 대한 지식도 전반적으로 부족했고 시간도 부족하다보니 뒷일을 잘 생각하지 않고 우선 빠르게 구현하는 데 치중했습니다. 그러다보니 기능을 추가하기 위해 이전에 만들어둔 구조를 바꿔야 하는 경우가 종종 발생했습니다.

예컨대 플레이어의 행동은 FSM으로 구현하였는데, 얼추 완성된 후 튜토리얼 기획이 완성되어 작업에 들어가려 했으나 기존의 구조는 튜토리얼을 위한 기능 확장에 용이하지 않았습니다. 결국 새 구조를 고민하는 시간

디자인 패턴에 대한 지식이 전반적으로 부족했고 시간도 부족했기에 게임 코드가 유지보수에 용이하다고 말하기 어렵습니다.`,
          },
          {
            id: 'p_rh_lesson_2',
            title: '리소스 관리 미흡',
            content: `리소스를 어떻게 다루어야 하는 지에 대한 지식이 부족해 시행착오가 많았습니다. DDS 포맷을 사용할 수도 없었기 때문에, 이미지가 빠르게 전환될 때는 해상도가 열화된 비트맵을 사용하거나, 애니메이션이 필요할 때 비동기적으로 로드하고 이후 즉시 해제하는 등 여러 방안을 강구해보았으나, 근본적인 해결책이 될 수는 없었습니다.

특히 스프라이트를 빠르게 전환해 재생하는 2D 스프라이트 애니메이션의 특성상 로드해야 할 이미지의 양이 매우 많았고, 이로 인해 로딩이 오래 걸리고 메모리를 많이 사용하는 문제가 가장 중요했습니다.
SSD에서 읽는 경우엔 크게 문제가 되지 않지만 HDD에서 읽는 경우 열차가 움직이는 애니메이션을 보기까지 많게는 십 수초의 로딩 시간이 필요했고, 이는 비동기적으로 필요할 때 로드하고 사용하고 언로드하는 방법으로 감당할 수 있는 수준이 아니었습니다.

3주라는 짧은 기간동안 별다른 명쾌한 해결책을 찾지 못 하고 결국 게임을 처음 시작하고 인트로 영상을 재생하는 동안 로딩을 마치고, 이후 해제하지 않고 재사용하는 방법으로 바꿨습니다.`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p1-challenges-achievements',
        title: '기술적 도전과 성과',
        content: '개발 과정에서 다양한 기술적 도전에 직면했습니다. 특히, 다수의 플레이어가 동시에 참여하는 길드 콘텐츠에서 발생할 수 있는 동기화 문제와 성능 문제를 해결하기 위해 많은 연구와 테스트를 진행했습니다. 상태 동기화 알고리즘을 개선하고, 서버와의 데이터 교환을 최적화하여 안정성을 높였습니다.\n\n이러한 노력을 통해 안정적인 프레임률을 유지하고 사용자 만족도를 이전 대비 15% 이상 향상시키는 성과를 달성했습니다. 또한, 주기적인 코드 리뷰와 기술 공유 세션을 통해 팀 전체의 개발 역량 강화에도 기여했으며, 프로젝트의 성공적인 런칭과 안정적인 서비스 운영에 중요한 역할을 수행했습니다.',
        showDivider: false, // Example: last section might not need a divider
      }
    ],
    technologies: ['자체엔진', 'C++17', 'Direct2D', 'WinAPI', 'FMOD', '2D 게임수학'],
    liveLink: 'https://youtu.be/H3ri3R9NwEg?si=e5JUkvO0QaWvkzq2',
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
        content:'이 프로젝트는 Direct3D API를 사용하여 개발된 간단한 3D 게임 프로토타입입니다. 기본적인 3D 렌더링 기술과 PhysX 물리 엔진의 기초적인 통합을 학습하고 실험하는 것을 주요 목표로 삼았습니다. 개인적인 스터디의 일환으로 진행되었으며, 복잡한 게임 로직보다는 핵심 기술 구현에 집중하였습니다.\n\n<img src="https://picsum.photos/seed/sf1-sec1-img/500/300" alt="섹션 1: 프로젝트 소개 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />',
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

export const STRENGTHS_DATA = [
  "빠른 학습 능력과 새로운 기술 습득에 대한 높은 관심",
  "복잡한 문제에 대한 분석적 접근과 효과적인 해결 능력",
  "다양한 팀원들과의 원활한 커뮤니케이션 및 적극적인 협업",
  "사용자 경험(UX)을 최우선으로 생각하는 개발 마인드셋",
  "코드 품질, 유지보수성 및 성능 최적화에 대한 깊은 이해와 노력",
  "주도적인 업무 수행 능력과 프로젝트에 대한 책임감"
];

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    skills: ["C# (Unity, .NET)", "C++ (Unreal Engine, Cocos2d-x)", "HLSL/GLSL (Shader Programming)", "GDScript (Godot)", "Python (Scripting/Tooling)"],
    icon: (props) => <CodeBracketIcon {...props} />,
  },
  {
    category: "Game Engines & Frameworks",
    skills: ["Unity (URP/HDRP, DOTS/ECS Basics)", "Unreal Engine 4/5 (Blueprints, C++)", "Cocos2d-x", "Godot Engine", "Direct3D 11/12", "PhysX"],
    icon: (props) => <CpuChipIcon {...props} />,
  },
  {
    category: "Tools & Platforms",
    skills: ["Git (Github, Gitlab, Sourcetree)", "Visual Studio, VS Code, Rider", "Photon Engine (PUN, Bolt)", "Oculus SDK, SteamVR", "Android & iOS Development", "Windows & Linux Environments", "JIRA, Confluence"],
    icon: (props) => <WrenchScrewdriverIcon {...props} />,
  },
  {
    category: "Other Expertise",
    skills: ["Agile & Scrum Methodologies", "UI/UX Design Principles & Implementation", "Performance Profiling & Optimization", "Game AI Fundamentals", "Network Programming Basics", "Software Architecture Design Patterns"],
    icon: (props) => <AcademicCapIcon {...props} />,
  }
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

export const CodeBracketIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const CpuChipIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12H21M12 3.75V3M12 21v-1.5m3.75-15H21m-3.75 0H12m2.25 2.25V7.5M12 12h.008v.008H12V12zm.008 0H12m2.242 0h.008m2.242 0H12m2.25 2.25v-.008M12 12v2.25m0 0H9.75M12 12H9.75m2.25 2.25H9.75M12 12H9.75M7.5 12h-.008V9.75H7.5V12zm4.5 4.5H7.5V12h4.5v4.5z" />
  </svg>
);

export const WrenchScrewdriverIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.246-2.395-.8-3.198l-.993-.664A2.25 2.25 0 008.626 8l-2.252 2.252a2.25 2.25 0 00-.663 1.585c0 .414.16.807.444 1.1l3.031 2.496m3.198-3.744c.39.193.69.514.826.898m-3.198-3.744L8.626 8m3.198 3.744L8.626 8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25L10.5 3A2.652 2.652 0 003 10.5l5.25 5.25m7.5-7.5L10.5 3m5.25 5.25L3 10.5" />
  </svg>
);

export const AcademicCapIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
);

export const CheckCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91A2.25 2.25 0 012.25 6.993V6.75" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.25 15.25 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1A17 17 0 013 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);