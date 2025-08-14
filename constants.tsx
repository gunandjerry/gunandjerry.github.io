import React from 'react';

export const STRING_TABLE = {
  header_navigation_profile: "프로필",
  header_navigation_project: "프로젝트",
  header_navigation_experience: "경력",
  header_navigation_journey: "성장여정",
  header_navigation_skill: "역량"
};

export const SECTION_IDS = {
  INTRODUCTION: 'introduction',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  LEARNING_JOURNEY: 'learning-journey',
  SKILLS: 'skills',
  // CONTACT: 'contact', // Footer serves as contact implicitly
};

export const PERSONAL_INFO = {
  name: "이건제",
  name_eng: "Geonje Lee",
  title: "게임 개발자(클라이언트) 지망생",
  birthDate: "1998.12.06",
  education: [
    "한국콘텐츠진흥원 게임인재원 6기 프로그래밍 학과 (2024.03 ~ )",
    "서울과학기술대학교 행정학 학사 (2017.03 - 2023.08)",
    "건국대학교 사범대학 부속 고등학교 졸업 (2014.03 ~ 2017.02)"
  ],
  phone: "010-2870-5895",
  email: "gunandjerry@gmail.com",
  github: "https://github.com/gunandjerry",
  blog: "",//"https://ddodigi.tistory.com/",
  photo: "img/profile/face.png"
};

export const PROJECTS_DATA = [
  // F급 헌터 생존기
  {
    id: 'p_fh',
    isMain: true,
    title: 'F Rank Survivor (언리얼/리썰라이크/멀티플레이)',
    image: 'img/project/FRankSurvivor/banner.gif',
    images: [
        'img/project/FRankSurvivor/banner.gif',
    ],
    shortDescription: '6개월 장기 팀 프로젝트입니다. 작성중...',
    implementationFeatures: ['실시간 전투 시스템', '길드 콘텐츠 개발', '네트워크 동기화', 'UI/UX 개선 및 최적화'],
    longDescription: [
      {
        id: 'p_fh_overview',
        title: '프로젝트 개요',
        content: `제목: F급 헌터 생존기 / F Rank Survivor
장르: 리썰라이크, 생존, 어드벤처
개발기간: 6개월 (2025년 5월 ~ 10월)
개발인원: 개발 4인 / 아트 1인 / 기획 2인
사용엔진: 언리얼 엔진
플랫폼: PC, Window
`,
        subSections: [
          {
            id: 'p_fh_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_fh_overview_desc',
            title: '게임 소개',
            content: `작성중...`,
          },
          {
            id: 'p_fh_overview_role',
            title: '맡은 역할',
            content: `▶ 작성중...

<img src="img/project/FRankSurvivor/banner.gif" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_fh_highlight_1',
            title: '에디터 커스텀 UI',
            content: `
<img src="img/project/FRankSurvivor/banner.gif" alt="본문 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />

`,
          },
          {
            id: 'p_fh_highlight_2',
            title: '동적 던전 생성과 최적화',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_3',
            title: '동적 생성 미니맵',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_4',
            title: 'MovementComponent 개조하기',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_5',
            title: 'GAS: 기반 만들기',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_6',
            title: 'GAS: 플레이어 해부하기',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_7',
            title: 'GAS: 상속과 태그 구조',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_8',
            title: '메타휴먼에 특수효과 입히기',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_9',
            title: '1인칭과 3인칭을 분리하기',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_10',
            title: '장비 상태와 모션의 동기화',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_11',
            title: '상호작용 개선하기',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_12',
            title: '래그돌 충격 효과',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_13',
            title: '카오스 디스트럭션',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_14',
            title: '시각적 하이라이팅',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_15',
            title: '커스텀 카메라 쉐이크',
            content: `
`,
          },
          {
            id: 'p_fh_highlight_16',
            title: '시각적 이펙트 개선하기',
            content: `Vignette + CameraShake + Niagra
`,
          },
          {
            id: 'p_fh_highlight_17',
            title: '사운드 시스템',
            content: `
`,
          },
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_troubleshooting',
        title: '트러블슈팅',
        subSections: [
          {
            id: 'p_fh_troubleshooting_1',
            title: 'MovementComponent 동기화 관리',
            content: `
`,
          },
          {
            id: 'p_fh_troubleshooting_2',
            title: 'CDO 생성 이후 추가된 블루프린트 노드를 다루는 법',
            content: `
`,
          },
          {
            id: 'p_fh_troubleshooting_3',
            title: '메타휴먼 LOD 문제',
            content: `
`,
          },
          {
            id: 'p_fh_troubleshooting_4',
            title: 'ULevelStreaming 동적 해제 문제',
            content: `
`,
          },
          {
            id: 'p_fh_troubleshooting_5',
            title: 'UGroomComponent 렌더링 문제',
            content: `
`,
          },
          {
            id: 'p_fh_troubleshooting_6',
            title: '카메라의 업데이트 순서 문제',
            content: `
`,
          },
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_lesson',
        title: '반성과 개선점',
        subSections: [
          {
            id: 'p_fh_lesson_1',
            title: '이것저것',
            content: `
`,
          },
        ],
      },
    ],
    technologies: ['언리얼5', '언리얼 네트워크', '카오스 피직스', '메타휴먼'],
    liveLink: '',
  },


  // 포션 아틀리에
  {
    id: 'p_pa',
    isMain: true,
    title: 'Potion Atlier (3D/캐쥬얼/타이쿤)',
    image: 'img/project/PotionAtlier/banner.gif',
    images: [
        'img/project/PotionAtlier/banner.gif',
    ],
    shortDescription: '4주 단기 팀 프로젝트입니다. 인게임 컨텐츠, 물리, 특수효과, UI 렌더링 등을 담당했습니다.',
    implementationFeatures: ['실시간 전투 시스템', '길드 콘텐츠 개발', '네트워크 동기화', 'UI/UX 개선 및 최적화'],
    longDescription: [
      {
        id: 'p_pa_overview',
        title: '프로젝트 개요',
        content: `제목: Potion Atlier
장르: 타이쿤
개발기간: 4주일 (2025년 1월 ~ 2월)
개발인원: 개발 4인 / 아트 3인 / 기획 3인
사용엔진: 자체 3D 엔진
플랫폼: PC, Window
`,
        subSections: [
          {
            id: 'p_pa_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/v2JbL4FlbQM?si=_wRq8rtjiGXRymDr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_pa_overview_desc',
            title: '게임 소개',
            content: `포션 가게를 경영하는 아기자기한 3D 타이쿤 게임입니다. 제한된 시간 안에 최대한 많은 포션을 판매하는 것이 목적입니다.

게임의 진행 방식은 다음과 같습니다.
1. 게임이 시작되면 노움들이 차례차례 입장하여 포션을 주문합니다. 화면 좌상단에 주문서가 들어옵니다.
2. 원재료 상자에서 재료를 꺼내, 썰거나 갈거나 짜는 QTE 작업대를 통해 가공하여 솥에 넣고 포션을 제작합니다.
3. 카운터에 포션을 가져가 주문을 처리합니다.

주어진 시간이 끝나면 수익에 따라 평점이 매겨지고 다음 레벨로 진행됩니다.

조작키는 이동과 상호작용, 특수한 상황에 사용하는 빗자루 때리기 키만으로 이루어집니다. 조작도 간단하고 포션의 제조 과정도 단순하지만, 계속해서 몰려와 재촉하는 손님들과 끓는 시간이 초과되면 양조에 실패하는 솥, 주기적으로 등장하여 손님을 날려버리는 카운터 기믹 등 플레이어의 정신을 어지럽히는 요소들에 의해 우왕좌왕하게 되는 걸 의도했습니다.`,
          },
          {
            id: 'p_pa_overview_role',
            title: '맡은 역할',
            content: `▶ 물리(PhysX) : Primitive-shape 콜라이더, 메쉬 콜라이더, Raycast, Sweep test, 물리 처리 컴포넌트 등
▶ 캐릭터 조작: 부드러운 이동, 상호작용, 스태미너 시스템
▶ 엔진 성능 개선 및 디버깅
▶ UI 렌더링 / 스텐실 마스킹 / 텍스트 렌더링 등
▶ QTE 미니게임 3종
▶ 튜토리얼
▶ 기물 오브젝트: 솥, 배치대, 작업대, 쓰레기통, 카운터 등의 작동 로직 및 오브젝트 프리팹 만들기
▶ 레벨 에디팅을 위한 컴포넌트: 격자 이동, UI 조절, 
▶ 특수 효과: 날아가는 노움, 오브젝트 상호작용 이펙트, UI 및 기물 스케일 애니메이션 등
▶ 말풍선 등 기타 컨텐츠


<img src="img/project/PotionAtlier/3.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_pa_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_pa_highlight_1',
            title: 'PhysX 물리 컴포넌트 구현하기',
            content: `NVDIA사에서 제작한 물리엔진인 PhysX를 공부하여 여러 종류의 콜라이더 컴포넌트 / 물리 기반 캐릭터 이동 컴포넌트 / 레이(또는 shape) 캐스팅 함수 등을 구현하고 게임에 사용하였습니다.

물리를 추가하고 커스텀하기 쉽게 컴포넌트를 부착하는 방식으로 PhysX의 Physics Scene과 월드 씬을 동기화할 수 있도록 했습니다. 더 자세하게는 PxScene의 PxActor에 대응하는 Physics Actor 객체를 1:1로 생성하고 관리하는 방식입니다.
컴포넌트는 동적으로, 순서에 상관없이 부착할 수 있어야 하므로 다음과 같이 두 가지 경우로 처리 로직이 분리됩니다.

<img src="img/project/PotionAtlier/4.png" alt="본문 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />
콜라이더의 경우 정육면체, 캡슐, 스페어, 메쉬 콜라이더를 지원합니다. 게임에선 작업대 기물은 정육면체, 플레이어는 캡슐, 상점 레벨은 메쉬 콜라이더를 사용했습니다.

게임에서는 활용처가 마땅치 않았으나, 물리 레이어를 구분하여 레이어 간에 충돌(밀어내기), 오버랩(이벤트만 발생), 무시 상호작용 설정이 가능하게 구현하였습니다.

플레이어의 경우엔 Character Controller 컴포넌트를 구현하여 조작할 수 있게 했습니다. 기본적으로 유니티 엔진의 캐릭터 컨트롤러를 모방하였으며, 착지상태 판단, 이동과 점프, 경사면 처리를 통해 경사면에서 이동하기 등을 구현하였습니다.
`,
          },
          {
            id: 'p_pa_highlight_2',
            title: '부드러운 조작감 구현하기',
            content: `캐릭터의 이동과 조작에 대해 자세하게 구현해본 것은 처음이었는데, 단순히 이동 벡터를 가하며 캐릭터를 해당 방향으로 회전시키는 투박한 방식은 조작감이 최악이었습니다.
어떻게 하면 캐릭터가 부드럽게 조작되는 인상을 줄 수 있을 지 고민한 결과, 다음과 같은 기능을 넣게 되었습니다.

▶ 이동 방향과 현재 바라보고 있는 방향의 각이 클 수록 이동속도를 줄입니다. (t/pi)^2 정도의 간단한 수식만으로도 상당히 자연스러웠습니다.
▶ 조작키가 눌리면 외적을 통해 더 작은 각에 해당하는 방향으로 부드럽게 회전합니다.
▶ 대쉬를 사용하면 최종 이동량에 가중치를 곱합니다.`,
          },
          {
            id: 'p_pa_highlight_3',
            title: 'UI 스텐실 마스킹',
            content: `UI 이미지의 둥근 모서리를 처리하기 위해 커스텀 스텐실 버퍼를 통한 UI 마스킹을 구현하였습니다.
마스크로 사용될 텍스쳐는 렌더링되는 대신 스텐실 버퍼에 자신의 마스크 ID를 비트플래그로 기록하며, 이후 마스크 위에 그려지도록 설정된 텍스쳐는 스텐실 버퍼에 지정된 비트 플래그가 켜져있는 경우에만 그려지도록 처리하였습니다.

<img src="img/project/PotionAtlier/5.gif" alt="본문 이미지" style="display: block; width: 50%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          },
          {
            id: 'p_pa_highlight_4',
            title: '튜토리얼',
            content: `이전 미니 프로젝트에서는 클래스 구조에 대한 고민이 부족했고, 튜토리얼을 넣기 위해 기존 클래스를 수정하고 의존성을 추가해야만 했습니다.
이번에는 그 경험을 반면교사로 튜토리얼 시스템이 어떻게 동작할 지 미리 고려하면서 클래스를 설계했습니다.

플레이어와 기물 오브젝트들은 특정 동작을 취할 때 이벤트를 발생시키고 필요하다면 등록된 콜백 이벤트를 호출합니다. 튜토리얼 매니저는 이런 이벤트가 발생하면 해당 이벤트의 정보가 담긴 커맨드를 자신의 커맨드 큐에 삽입하도록 하는 콜백 함수를 등록하고, 매 업데이트마다 커맨드 큐를 확인하는 방식으로 동작하게 됩니다.
커맨드 큐를 통해 한 차례 중개하는 이유는 이벤트들을 커맨드를 통해 일관된 방식으로 처리하여 구조를 간단하게 만들기 위해서입니다.

<img src="img/project/PotionAtlier/6.gif" alt="본문 이미지" style="display: block; width: 40%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_pa_lesson',
        title: '반성과 개선점',
        subSections: [
          {
            id: 'p_pa_lesson_1',
            title: '픽셀 단위로 마스킹되는 스텐실 마스킹의 대안 - SDF 마스킹',
            content: `이 게임에서 사용한 UI 마스킹은 스텐실 버퍼에 비트플래그를 기록하고 마스크 위에 그려질 UI를 특정 비트 플래그가 켜진 픽셀 위에서만 그려지도록 한 가장 단순한 마스킹 기법입니다.
이 방식의 가장 큰 문제는 단순히 픽셀 버리기(discard)로 구현되기 때문에 경계 부분에 앨리어싱을 적용할 수 없다는 점입니다.

게임 제작 기간이 끝난 뒤 이 문제를 어떻게 해결할 수 있을 지 고민해 보았습니다. 나온 결론은 G버퍼의 남는 4바이트 영역을 레이어 ID를 나타내는 비트 플래그 영역과 알파값을 기록하는 알파 마스크 영역으로 나누어 사용하면 어떨가 하는 것이었습니다.
문제는 역시 G 버퍼를 사용하는 만큼 비용 부담이 크다는 것입니다. 또, 마스크로 사용하는 텍스쳐는 단순히 어떤 픽셀이 마스크에 포함되는지 알려주는 역할만 수행하므로 이 또한 낭비였습니다.

그러던 중 SDF(Signed Distance Field)에 대해 알게 되었습니다. SDF는 픽셀마다 색이 칠해지는 경계로부터 얼만큼 떨어져있는지 거리를 기록해둔 특수한 텍스쳐로, 테두리 바로 위를 0.5로 기준으로 삼는다면 색이 칠해지는 영역의 내부는 0~0.5, 외부는 0.5~1 사이의 거리값을 가지게 됩니다.

<img src="img/project/PotionAtlier/7.png" alt="본문 이미지" style="display: block; width: 60%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />
일반적으로 텍스트 그리프 렌더링, 데칼 텍스쳐 렌더링 등 해상도나 거리가 달라져도 부드러운 테두리를 렌더링할 필요가 있을 때 사용하지만, UI 마스킹에도 사용할 수 있겠다는 생각이 들었고 찾아본 결과 이미 사용되고 있는 방법이었습니다.
SDF 텍스쳐를 마스크로 사용하면 해당 텍스쳐의 거리 값을 약간 조절하여 그려지는 픽셀의 알파값으로 사용할 수 있습니다. 이렇게 되면 추가적인 데이터가 필요 없이 부드러운 경계면을 가진 마스킹을 구현할 수 있습니다.
`,
          },
          {
            id: 'p_pa_lesson_2',
            title: '정적 리플렉션을 통한 에디팅',
            content: `게임을 제작하면서 가장 불편했던 점은 직렬화 문제였습니다. 에디터를 통해 컴포넌트를 탈부착하거나 프로퍼티를 수정할 수 있는 상태가 아니었고 단순 바이너리 직렬화를 사용했기에 툭하면 다른 작업자가 코드를 바꿔 바이너리를 읽지 못 하는 경우들이 발생했습니다.

개발이 끝난 뒤 가장 먼저 C++의 정적 리플렉션을 통해 에디터 상에서 컴포넌트를 탈부착하고 프로퍼티를 수정할 방법을 찾게 되었습니다. 기본적으로 C++은 거대한 런타임 시스템 기반이 아니므로 엄밀한 의미의 리플렉션은 구현할 수 없지만, 타입 구조를 저장해놓고 사용하는 정적 리플렉션은 상당히 쉽게 구현할 수 있었습니다.

엔진이 로드될 때 컴포넌트 레지스트리에는 간단한 컴포넌트의 정보와 컴포넌트를 생성해 반환하는 함수 객체를 등록하게 되며, 이후 에디터에서 컴포넌트를 부착하면 레지스트리를 통해 컴포넌트 인스턴스를 생성해 반환하면 됩니다.

아이디어를 설명하는 간단한 예시 코드는 다음과 같습니다.
<code-block title="컴포넌트 리플렉션 구현 예시" language="cpp">
class ComponentRegistry
{
	std::unordered_map<std::string, std::function<class Component*()>> registry;
public:
	static ComponentFactory& GetInstance();

	// 컴포넌트를 레지스트리에 등록한다.
	template <typename T>
	bool _RegisterComponent(std::string_view component_name);
	{
		if (registry.find(component_name.data()) == registry.end())
		{
			registry[component_name.data()] = []() -> T* { return new T; };
		}
	
		return true;
	}

	// 컴포넌트 인스턴스를 생성해 반환한다.
	template <typename T>
	class T* CreateComponent(std::string_view component_name)
	{
		auto iter = registry.find(component_name.data());
		if (iter != registry.end())
		{
			return iter->second();
		}

		return nullptr;
	}
	Component* CreateComponent(std::string_view component_name)
	{
		return static_cast<Component*>(CreateComponent<Component>(component_name));
	}
};

// 등록에 사용할 매크로
#define RegisterComponent(comp) \
	inline static bool is_registered = ComponentRegistry::GetInstance()._RegisterComponent<comp>(#comp);

// 간단한 방법으로 에디터에 컴포넌트를 등록할 수 있다.
class SomeComponent : public Component
{
	RegisterComponent(SomeComponnet)
	...
}
</code-block>
다음은 자체 엔진에 존재하는 컴포넌트들을 컴포넌트 레지스트리에 등록하여 출력한 모습입니다.

<img src="img/project/PotionAtlier/8.png" alt="본문 이미지" style="display: block; width: 30%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />
`,
          }
        ],
      },
    ],
    technologies: ['자체엔진', 'C++20', 'Direct3D11', 'PhysX', 'WinAPI', 'FMOD'],
    liveLink: 'https://youtu.be/v2JbL4FlbQM?si=GtCIvaJ0p6GOYd10',
  },


  

  // 레일웨이투헬
  {
    id: 'p_rh',
    isMain: true,
    title: 'Railway to Hell (2D/전략/퍼즐)',
    image: 'img/project/RailwayToHell/banner.gif',
    images: [
        'img/project/RailwayToHell/banner.gif',
    ],
    shortDescription: '3주 단기 팀 프로젝트입니다. 게임엔진, 조작, 게임 범용 로직, UI, 특수효과 등을 담당했습니다.',
    implementationFeatures: ['실시간 전투 시스템', '길드 콘텐츠 개발', '네트워크 동기화', 'UI/UX 개선 및 최적화'],
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
`,
        subSections: [
          {
            id: 'p_rh_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/H3ri3R9NwEg?si=IvPL0-jz1M4fDDJu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
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


<img src="img/project/RailwayToHell/3.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
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

<img src="img/project/RailwayToHell/4.png" alt="본문 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
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

<img src="img/project/RailwayToHell/5.png" alt="본문 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
      },
    ],
    technologies: ['자체엔진', 'C++17', 'Direct2D', 'WinAPI', 'FMOD'],
    liveLink: 'https://youtu.be/H3ri3R9NwEg?si=e5JUkvO0QaWvkzq2',
  },


  // 바운싱 이모지 게임
  {
    id: 'p_be',
    title: 'Bouncing Emoji Game',
    image: 'img/project/BounceEmoji/banner.gif',
    shortDescription: '유니티 엔진으로 제작한 퍼즐 게임. 단기 개인 프로젝트입니다.',
    longDescription: [
      {
        id: 'p_be_overview',
        title: '프로젝트 개요',
        content: `제목: (가제) Bouncing Emoji Game
장르: 퍼즐
개발인원: 1인
사용엔진: 유니티 엔진
플랫폼: PC, Window
`,
        subSections: [
          {
            id: 'p_be_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_be_overview_desc',
            title: '게임 소개',
            content: ``,
          },
          {
            id: 'p_be_overview_role',
            title: '맡은 역할',
            content: `▶


<img src="img/project/.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_be_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_be_highlight_x',
            title: '',
            content: ``,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_be_lesson',
        title: '반성과 개선점',
        subSections: [
          {
            id: 'p_be_lesson_x',
            title: '',
            content: ``,
          }
        ],
      },
    ],
    technologies: ['유니티', 'C#', 'SoftBody'],
    liveLink: '',
  },


  // 드로잉 퍼즐
  {
    id: 'p_dp',
    title: 'Drawing Puzzle',
    image: 'img/project/DrawingPuzzle/banner.gif',
    shortDescription: '유니티 엔진으로 제작한 퍼즐 게임. 단기 개인 프로젝트입니다.',
    longDescription: [
      {
        id: 'p_dp_overview',
        title: '프로젝트 개요',
        content: `제목: (가제) Drawing Puzzle
장르: 퍼즐
개발인원: 1인
사용엔진: 유니티 엔진
플랫폼: PC, Window
`,
        subSections: [
          {
            id: 'p_df_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_dp_overview_desc',
            title: '게임 소개',
            content: ``,
          },
          {
            id: 'p_dp_overview_role',
            title: '맡은 역할',
            content: `▶


<img src="img/project/.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_dp_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_dp_highlight_x',
            title: '',
            content: ``,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_dp_lesson',
        title: '반성과 개선점',
        subSections: [
          {
            id: 'p_dp_lesson_x',
            title: '',
            content: ``,
          }
        ],
      },
    ],
    technologies: ['유니티', 'C#', '2D 게임수학'],
    liveLink: '',
  },


  // 아포티카
  {
    id: 'p_ap',
    title: 'Aphotica (2D/리듬/퍼즐)',
    image: 'img/project/Aphotica/banner.gif',
    shortDescription: '2주 단기 팀 프로젝트입니다. 게임엔진, 게임 컨텐츠 전반을 담당했습니다.',
    longDescription: [
      {
        id: 'p_ap_overview',
        title: '프로젝트 개요',
        content: `제목: Aphotica
장르: 퍼즐
개발기간: 2주일 (2024년 5월)
개발인원: 개발 2인 / 아트 2인 / 기획 3인
사용엔진: 자체 2D 엔진
플랫폼: PC, Window
`,
        subSections: [
          {
            id: 'p_ap_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/_Xx173pg2-g?si=R4R8VzZOVf_sPk3F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_ap_overview_desc',
            title: '게임 소개',
            content: `자체 2D 엔진으로 제작한 2주 팀 프로젝트입니다. 게임 프레임워크는 모두 혼자 제작했으며, 렌더링에는 GDI+, 오디오에는 FMOD를 사용했습니다.

자동으로 움직이는 문어는 색 블록과 충돌할 경우 해당 색을 흡수하며, 두 가지 색을 섞을 수 있습니다.
플레이어는 타이밍에 맞게 스페이스바를 눌러 세 가지 색 슬롯을 전환해가며 특수 블록이 요구하는 색을 만들어야 합니다.

특수 블록이 요구하는 색을 제 때 만들지 못 하면 (1) 섬광이 터지며 일정 시간동안 색을 흡수하지 못 하거나, (2) 화면이 흔들리며 일정 시간동안 슬롯이 무작위로 바뀌거나, (3) 게임오버됩니다.`,
          },
          {
            id: 'p_ap_overview_role',
            title: '맡은 역할',
            content: `▶ 2D 자체 엔진
▶ 레벨 에디팅
▶ 튜토리얼 제외 컨텐츠 전반


<img src="img/project/Aphotica/2.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_ap_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_ap_highlight_1',
            title: '박자와 충돌 타이밍 맞추기 / 레벨 에디터',
            content: `가장 중요한 과제는 충돌 타이밍과 노래 박자를 맞추는 것이었습니다. 이를 위해 다음과 같은 작업을 수행했습니다.
1. 정확한 타이밍의 충돌을 위해 충돌이 일어날 경우 overlap된 크기만큼 예상 경로로 이동하기
2. 블록을 배치하고 문어의 속도를 조절할 수 있는 레벨 에디터를 만들어 제공하기

문어의 이동 방향은 항상 사선방향으로 반사벡터 공식을 쓸 것도 없이 간단하게 반사된 뒤에 이동할 방향을 결정할 수 있습니다. 충돌이 발생하면 겹친 영역만큼 반사된 방향으로 밀어냄으로써 아주 미세한 오차만 남길 수 있었습니다. 맵(곡)의 길이가 길어봐야 수 분에 불과했으므로 플레이어는 오차를 전혀 느낄 수 없습니다.

또, 기획이 직접 노래와 싱크를 맞춰가며 블록을 배치할 필요가 있었으므로 레벨 에디터를 만들어 제공했습니다.
레벨 에디터로 맵을 구성한 뒤 직렬화하여 저장하면, 인게임에서 해당 맵 파일을 읽어 맵을 구성하는 방식입니다.

기획에서 충돌 타이밍을 세부 조정하기를 원했기 때문에, 블록의 크기를 맵 그리드 한 칸보다 크게 설정하고, 한 영역을 9등분하여 중심을 지정할 수 있도록 했습니다.

<img src="img/project/Aphotica/3.gif" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          },
          {
            id: 'p_ap_highlight_2',
            title: '일정 시간동안 적용되는 효과 구현',
            content: `특수 블록과 충돌할 때 알맞은 색을 만들어두지 못 하면 일정 시간동안 화면이 흔들리거나, 화면이 밝아졌다 서서히 돌아오거나, 슬롯을 마음대로 전환하지 못 하게 되는 등 효과를 적용시켜야 했습니다.

이를 위해 씬에 등록할 수 있는 TimerFunction 객체를 작성하였습니다. 람다함수 또는 함수포인터를 통해 간단하게 추가할 수 있으며, 주체 오브젝트가 자신과 관련된 TimerFunction을 기록해놓고 씬에서 제거될 때 모든 타이머 함수를 제거함으로써 댕글링 포인터가 발생하지 못 하게 막았습니다.`,
          },
          {
            id: 'p_ap_highlight_3',
            title: '충돌 예측 애니메이션',
            content: `박자와 충돌 타이밍을 맞추기 위해 문어는 항상 일정한 속도로 이동해야만 했습니다. 문제는 문어의 충돌 애니메이션을 충돌 시점부터 재생하는 경우 이미 멀어지고 있을 때 충돌하는 애니메이션이 재생된다는 것입니다.

따라서 더 자연스러운 느낌을 주기 위해 얼마 후에 충돌한다는 정보를 미리 구해서 애니메이션을 예측 실행했습니다. 이 때 부드러운 애니메이션 전환을 위해선 우선 이전의 애니메이션 프레임이 모두 끝날 때까지 기다렸다가 실행해야 했고, 충돌 애니메이션이 실행될 수 있는 간격을 계산해 레이캐스팅을 통해 충돌하기 전에 애니메이션을 재생하도록 했습니다.

<img src="img/project/Aphotica/4.gif" alt="게임 이미지" style="display: block; width: 30%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />
현재 프레임의 위치에 따라 캐스팅되는 레이의 길이가 달라집니다.`,
          }
        ],
      },
    ],
    technologies: ['자체엔진', 'C++14', 'GDI+', 'WinAPI', 'FMOD'],
    liveLink: 'https://youtu.be/_Xx173pg2-g?si=wAt_g96_a6mW3o6v',
  },


  // 이모지 타워 디펜스
  {
    id: 'p_etd',
    title: 'Emoji Tower Defense (2D/타워디펜스)',
    image: 'img/project/EmojiTowerDefense/banner.gif',
    shortDescription: '8일 단기 개인 프로젝트입니다.',
    longDescription: [
      {
        id: 'p_etd_overview',
        title: '프로젝트 개요',
        content: `제목: Emoji Tower Defense
장르: 전략, 디펜스
개발기간: 8일 (2024년 6월)
개발인원: 1인
사용엔진: 자체 2D 엔진
플랫폼: PC, Window
`,
        subSections: [
          {
            id: 'p_etd_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" <iframe width="560" height="315" src="https://www.youtube.com/embed/GL2G-A6hkHw?si=bjyu42wSpevpC8Zu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_etd_overview_desc',
            title: '게임 소개',
            content: `Direct2D 자체 엔진을 제작하고 엔진 기능 시연을 위해 짧은 기간동안 만들었던 타워 디펜스 게임입니다.

적의 타입에는 일반 적, 스파이크나 글루를 밟지 않는 비행형 적과
레이더 타워 업그레이드를 통해 감지할 수 있는 은신형 적 타입이 있습니다.

타워의 타입으로는 타겟을 향해 공격하는 거너, 이속 지연과 데미지를 입히는 글루 거너, 범위 공격을 수행하는 캐논, 자동으로 회전하며 사격하는 터렛, 일정 시간마다 돈을 추가하는 농장, 주변 타워의 공격 속도 증가나 은식 적의 감지 등을 수행하는 레이더, 마우스 커서 방향으로 사격하는 머신거너, 주변 길에 스파이크를 뿌리는 스파이크 팩토리가 있습니다.

이외에도 범위 내에서 가장 앞 또는 뒤, 혹은 가장 강한 적을 공격 대상으로 지정하는 기능이나, 업그레이드를 통한 타워의 기능 향상 등을 구현하였습니다.`,
          },
          {
            id: 'p_etd_overview_role',
            title: '맡은 역할',
            content: `배경, UI 프레임, 아이콘, 음악은 오픈소스를 사용했으며, 그 외에는 모두 혼자 제작했습니다.


<img src="img/project/EmojiTowerDefense/2.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_etd_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_etd_highlight_1',
            title: '경로를 따라 이동하는 적',
            content: `경로를 따라 이동하도록 하는 방법은 매우 다양하지만, 이 게임의 경우 단순히 정해진 길을 일정한 속도로 이동하기만 하면 됩니다.
각 직선 경로의 시작점, 끝점의 좌표를 기록하고 선형보간으로 이동, 보간계수가 1 이상이 되면 다음 직선 경로로 전환하는 방식으로 구현했습니다.

이 방식의 장점은 (1) 프레임이 어떻든 항상 경로 상에서만 이동하는 것이 보장되고, (2) 현재 위치를 예측하고 계산하는 것이 매우 쉽다는 점입니다.`,
          },
          {
            id: 'p_etd_highlight_2',
            title: '적의 위치 예측하여 사격하기',
            content: `앞서 선형보간을 통해 이동시키는 것의 장점으로 위치 예측이 쉽다는 것을 들었습니다. 실제로 거너와 같은 특정 타워는 자신이 발사한 총알의 속도를 고려하여 자신이 타겟팅한 적의 이동을 예측해 해당 방향으로 사격을 가해야 합니다.

<img src="img/project/EmojiTowerDefense/3.png" alt="게임 이미지" style="display: block; width: 40%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />
이 때 사격을 시작할 때의 거리와 총알의 속도를 계산하면 도달까지의 시간을 측정할 수 있고, 선형보간을 통해 이동하므로 그 시간만큼 지났을 때 적이 어디에 가있을지 예측하는 것이 매우 쉽습니다. 거너는 이런 방식으로 적의 현재 위치가 아닌 미래의 위치에 사격을 가합니다.
물론 경로의 모양이 복잡하면 이런 단순한 계산은 정확성이 떨어질 수밖에 없습니다.
            `,
          },
          {
            id: 'p_etd_highlight_3',
            title: '공격 방법 결정하기',
            content: `모든 타워는 공격 범위 안에서 가장 앞에 있는 적, 가장 뒤에 있는 적, 가장 강한 적을 공격 대상으로 설정할 수 있습니다.
적 오브젝트의 콜라이더 컴포넌트들을 대상으로 공격 범위 영역에 충돌하는지 체크하고, 충돌하는 적 목록을 구한 뒤 경로상의 위치 정보와 레벨 정보를 통해 상황에 맞는 정렬을 수행하여 공격 대상을 결정하도록 하였습니다.`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_etd_lesson',
        title: '반성과 개선점',
        subSections: [
          {
            id: 'p_etd_lesson_1',
            title: '확장성 있는 설계 - 적과 효과를 분리시키기',
            content: `글루 거너의 글루를 맞은 적은 일정한 시간동안 속도가 떨어져야 합니다. 이를 게임에서는 적 오브젝트가 직접 관리하게 했는데, 이러면 다른 방식으로 적에게 영향을 주는 타워나 효과를 추가한다고 할 때마다 매번 적 클래스를 수정해야만 할 것입니다.

대신 '효과'를 주관하는 인스턴스를 생성해볼 수 있을 것입니다. 이러한 인스턴스는 전역적으로 존재하는 관리자를 통해 혹은 적 오브젝트의 배열에 담겨 존재하게끔 하고, 시간이 만료되었을 때 알아서 가리키는 적의 속도를 복구시키는 방식으로 작동하면 됩니다.
이런 방법을 사용하면 어떤 효과나 공격이 새로 추가되던 적이 가지고 있어야 할 어트리뷰트만 가지고 있다면, 이를 수정하는 효과 인스턴스를 만드는 방식으로 쉽게 확장이 가능해집니다.`,
          }
        ],
      },
    ],
    technologies: ['자체엔진', 'C++17', 'Direct2D', 'WinAPI', 'FMOD'],
    liveLink: 'https://youtu.be/GL2G-A6hkHw?si=BzvAoH8c2fRC3Pie',
  },


  // 점핑 프로그
  {
    id: 'p_jf',
    title: 'Jumping Frog (2D/플랫포머)',
    image: 'img/project/JumpingFrog/banner.gif',
    shortDescription: '4일 단기 개인 프로젝트입니다.',
    longDescription: [
      {
        id: 'p_jf_overview',
        title: '프로젝트 개요',
        content: `제목: Jumping Frog
장르: 플랫포머
개발기간: 약 3~4일 (2024년 04월)
개발인원: 1인
사용엔진: 자체 2D 엔진
플랫폼: PC, Window
`,
        subSections: [
          {
            id: 'p_jf_overview_live',
            title: '플레이 영상',
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/QO94xC8n9K8?si=Ik6yl80ONWKKu8Bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_jf_overview_desc',
            title: '게임 소개',
            content: `WinAPI, GDI+를 사용해 게임루프를 구현하고 그 결과물로 만들었던 간단한 플랫포머 게임입니다.
좌·우 이동과 공중 조작이 불가능하고 누르고 있으면 점프력이 높아지는 점프 조작만으로 맵을 올라 골인 지점에 도달하는 게 목표입니다.

짧은 기간동안 제작한 개인 프로젝트인 만큼 단순하지만, 게임 루프의 동작이나 애니메이션, OS API를 통한 렌더링, 간단한 물리 처리 등 여러 가지 지식들을 실제로 게임을 제작하며 깊히 이해할 수 있게 되었습니다.`,
          },
          {
            id: 'p_jf_overview_role',
            title: '맡은 역할',
            content: `스프라이트와 음악은 오픈소스를 사용하였으며 그 외에는 혼자 만들었습니다.


<img src="img/project/JumpingFrog/3.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_jf_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_jf_highlight_1',
            title: '2D 충돌 체크 및 밀어내기',
            content: `모든 오브젝트는 AABB 콜라이더 컴포넌트를 가지며, 유니티 엔진을 모방하여 RigidBody2D 컴포넌트가 부착된 캐릭터 오브젝트에는 중력을 적용하고 충돌체크 후 적절한 위치로 밀어내는 후처리가 이루어지도록 했습니다.
단순한 데모 수준의 엔진인 만큼 고도의 물리적 처리를 수행하지는 않으며, 충돌이 발생하면 겹친 영역을 구해 그 반대 방향으로 밀어내는 방식을 사용합니다.

게임에선 사용하지 않았지만 원과 원, AxisAlignedBox와 원 간의 충돌이나 삼각형의 세 꼭지점 좌표가 주어질 때 외적을 통해 특정 점이 삼각형의 외부에 있는지 내부에 있는지 판별하는 기능도 구현하였습니다.`,
          },
          {
            id: 'p_jf_highlight_2',
            title: '오브젝트 배치하기',
            content: `에디터가 없었기 때문에 모든 오브젝트는 2차원 배열을 타일셋으로 활용하여 배치되었습니다.
1x1 크기의 블록들을 각각 오브젝트로 배치하여 맵을 구성할 경우 비용이 너무 커지므로, 맵 타일셋에서 같은 타입이 연속되는 경우 하나의 길거나 큰(1 x n 또는 n x n) 오브젝트로 배치하고, 스프라이트를 반복해 그리는 방식을 사용했습니다.

<img src="img/project/JumpingFrog/4.png" alt="게임 이미지" style="display: block; width: 50%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          },
          {
            id: 'p_jf_highlight_3',
            title: '부드러운 카메라 트래킹',
            content: `유니티의 SmoothDamp 함수 로직을 참고하여 부드러운 카메라 트랙킹을 위한 Vector::SmoothDamp 함수를 작성하고 이를 통해 카메라가 캐릭터를 부드럽게 따라가도록 만들었습니다.`,
          },
        ],
      },
    ],
    technologies: ['자체엔진', 'C++14', 'GDI+', 'WinAPI', 'FMOD'],
    liveLink: 'https://youtube.com/shorts/QO94xC8n9K8?si=Ik6yl80ONWKKu8Bc',
  },
];



// <25-08-12> 사용하지 않음
export const CALL_TO_ACTION_DATA = [
  {
    id: 'cta-blog',
    title: '3D 자체엔진 개발기 보러가기',
    description: '간단한 3D 엔진을 직접 만들어보았습니다. Direct3D11, PhysX, FMOD가 사용되었으며 PBR+IBL 렌더링, 캐릭터 컨트롤러, 세부적인 물리 설정을 지원합니다.',
    image: 'img/banner/oguri.jpg',
    href: 'https://github.com/yourusername'
  },
  {
    id: 'cta-portfolio',
    title: '언리얼 삽질기 보러가기',
    description: '중장기 프로젝트를 수행하며 언리얼5에 대해 깊히 공부했습니다. 수 십개의 트러블 슈팅을 경험했으며 GAS, 메타휴먼, 카오스 디스트럭션을 비롯한 언리얼의 차세대 기능들에 대해 숙달되었습니다.',
    image: 'img/banner/gorusi.jpg',
    href: '#'
  }
];


// <25-08-12> 사용하지 않음
export const EXPERIENCE_DATA = [
  {
    id: 'exp-1',
    period: '2024년 3월 - 2025년 11월',
    company: '게임인재원',
    role: '게임인재원 6기 프로그래밍 교육생',
    description: '게임 개발에 필요한 저반 지식 학습부터 멘토링과 수 차례에 걸친 팀 프로젝트 경험. 모든 교육 과정을 우수한 성적으로 수료함.',
    learnings: ['C/C++, 3D 렌더링, 3D 수학', '리더십 및 프로젝트 관리', '게임 네트워크 기초', '언리얼 엔진 등'],
  }
];



// <25-08-13> 사용하지 않음
export const LEARNING_JOURNEY_DATA = {
  title: "성장 여정", // not use
  subTitle: "", // not use
  sections: [
    {
      id: 'lj-1',
      subTitle: "2년간의 집중적인 교육, 수 차례의 팀 프로젝트",
      paragraphs: [
        "C/C++, 선형대수학, 게임 알고리즘, 셰이더, 컴퓨터 그래픽스 기술들의 원리와 실무 지식, 고수준 렌더링 기술, 게임 엔진의 동작 원리, 효율적인 설계법과 최적화 기법, SIMD에 이르기까지 게임을 제작하는데 필요한 기초와 심화 지식을 익히고 실습했습니다.",
        "또한 네 차례의 단기 팀 프로젝트와 한 차례의 장기 팀 프로젝트를 경험하며 게임을 만들며 협업을 하는 방법과 노하우를 익혔고, "
      ],
      images: [
        "img/sample/gorusi.jpg",
        "img/sample/gorusi.jpg",
        "img/sample/gorusi.jpg",
      ],
      button: {
        text: "공부 기록 보러가기",
        description: "기술 블로그에서 수 백 페이지의 공부 기록을 구경해보세요.",
        link: ""
      }
    },
    {
      id: 'lj-2',
      subTitle: "고수준 렌더링과 물리가 탑재된 자체 엔진 제작",
      paragraphs: [
        "창을 띄우고 간단한 게임 루프를 돌리는 것부터 시작해 컴포넌트와 상속 기반의 게임 엔진을 만들어 PBR·IBL 렌더링을 구현하고, PhysX를 탑재해 물리 컴포넌트를 작성하고, 애니메이션을 블렌딩하고, 포스트 프로세싱을 입히고, FSM·BT로 AI를 만드는 등 자체 엔진을 조금씩 발전시켜 나갔습니다.",
        "이 모든 과정은 스스로 배우고 깨닫고 구현하기를 반복하는 과정이었으며, 단순히 시키는 대로 받아적고 남의 코드를 베끼는 수준과는 차원이 다른 이해를 가지고 있다고 자부합니다.",
      ],
      images: [
        "img/sample/gorusi.jpg",
        "img/sample/gorusi.jpg",
        "img/sample/gorusi.jpg",
      ],
      button: {
        text: "자체 엔진 개발기 보러가기",
        description: "자체 엔진을 발전시켜나가며 깨달은 것과 부딪혔던 난관을 해결해나간 과정이 적혀있습니다.",
        link: ""
      }
    },
    {
      id: 'lj-3',
      subTitle: "언리얼 엔진에 대한 깊은 이해와 숙련도",
      paragraphs: [
        "가장 중요한 장기 팀 프로젝트는 언리얼 엔진으로 제작되었으며, 그 과정에서 언리얼과 언리얼 네트워크의 동작 과정을 자세하게 들여다보고 터득했습니다. Slate를 사용해 에디터를 개조하거나 플러그인을 제작하고, 언리얼 컴포넌트를 상속해 게임에 맞게 바꾸었으며, 멀티플레이 게임을 만들며 네트워크를 오고 가는 복잡한 로직을 숱하게 구현해보았습니다.",
        "Gameplay Ability System, Custom Primitive Data, Chaos Destruction, Chaos Cloth, MetaHuman, Procedural Content Generation과 같은 언리얼이 제공하는 최신의 기능들에 대한 상당한 수준의 이해 역시 가지고 있습니다."
      ],
      images: [
        "img/sample/gorusi.jpg",
        "img/sample/gorusi.jpg",
        "img/sample/gorusi.jpg",
      ],
      button: {
        text: "언리얼 엔진 공부 및 구현 기록 보러가기",
        description: "언리얼 엔진의 동작 방식과 네트워크 플로우에 대한 분석, GAS를 사용한 게임 기반의 제작, 커스텀 에디터 UI와 동적으로 생성되는 던전과 미니맵 등 수 많은 구현 기록들을 보실 수 있습니다.",
        link: "https://github.com/yourusername/blog/tag/growth"
      }
    }
  ],
};




export const STRENGTHS_DATA = [
  "소통능력 어필",
  "컨텐츠 구현능력 어필(빠르고 정확함/강한몰입)",
  "꾸준함 어필",
  "여러 차례의 협업 경험",
  "시간 관리, 작업 명세화",
  "쉽게 설명함?/교육가능",
  "아이디어/의사개진을 통한 퀄업사례?"
  // "빠른 학습 능력과 새로운 기술 습득에 대한 높은 관심",
  // "복잡한 문제에 대한 분석적 접근과 효과적인 해결 능력",
  // "다양한 팀원들과의 원활한 커뮤니케이션 및 적극적인 협업",
  // "사용자 경험(UX)을 최우선으로 생각하는 개발 마인드셋",
  // "코드 품질, 유지보수성 및 성능 최적화에 대한 깊은 이해와 노력",
  // "주도적인 업무 수행 능력과 프로젝트에 대한 책임감"
];

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    skills: ["C", "C++20", "Unreal C++", "C#", "Python", "HLSL"],
    icon: (props) => <CodeBracketIcon {...props} />,
  },
  {
    category: "Game Engines & Frameworks",
    skills: ["Unreal Engine 5", "Unity Engine", "Direct3D11", "PhysX", "Direct2D", "WinAPI", "FMOD", "Assimp", "ImGUI"],
    icon: (props) => <CpuChipIcon {...props} />,
  },
  {
    category: "Tools & Platforms",
    skills: ["Git(Github)", "Subversion", "VS IDE", "CMake", "vcpkg"],
    icon: (props) => <WrenchScrewdriverIcon {...props} />,
  },
  {
    category: "Other Expertise",
    skills: ["작업 명세화", "3D 게임수학", "3D 렌더링 파이프라인", "게임 디자인 패턴", "UI/UX 디자인 이론", "Unreal Performance Profiling"],
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

export const DocumentTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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

export const CalendarDaysIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
  </svg>
);