import React from 'react';

export const STRING_TABLE = {
  header_navigation_profile: "프로필",
  header_navigation_project: "프로젝트",
  header_navigation_experience: "경력",
  header_navigation_journey: "역량",
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
  blog: "https://gunandjerry.github.io/gunandjerry_blog/",//"https://ddodigi.tistory.com/",
  photo: "img/profile/face.png"
};

export const PROJECTS_DATA = [
  // F급 헌터 생존기
  {
    id: 'p_fh',
    isMain: true,
    title: 'F급 헌터 생존기',
    image: 'img/project/FRankSurvivor/banner.gif',
    images: [
        'img/project/FRankSurvivor/banner.gif',
    ],
    shortDescription: '언리얼엔진5로 제작한 6개월 중장기 팀 프로젝트로, 던전 안으로 들어가 크리쳐를 피하며 자원을 채굴하는 리썰라이크 류의 협동 생존 게임입니다.',
    implementationFeatures: ['절차적 맵 생성', '동적 미니맵 렌더링', '에디터 커스텀', 'GAS 기반 시스템', '1/3인칭 분리 및 모션 동기화', '부분 파괴 가능한 오브젝트', '메타휴먼 다루기'],
    // links: [
    //     { type: 'github', text: '소스 코드', link: 'https://github.com/yourusername/project-omega' },
    //     { type: 'blog', text: '개발 회고록 읽기', link: 'https://yourusername.github.io/blog/project-omega-retrospective' }
    // ],
    longDescription: [
      {
        id: 'p_fh_overview',
        title: '프로젝트 개요',
        content: `제목: F급 헌터 생존기 / F Rank Survivor
장르: 리썰라이크, 생존, 어드벤처
개발기간: 약 6개월 (2025년 4월 말 ~ 2025년 11월 초)
개발인원: 개발 4인 / 아트 2인 / 기획 3인
사용엔진: 언리얼 엔진
플랫폼: PC, Window
`,
        subSections: [
          // {
          //   id: 'p_fh_overview_live',
          //   title: '플레이 영상',
          //   content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          // },
          {
            id: 'p_fh_overview_desc',
            title: '게임 소개',
            content: `리썰컴퍼니 스타일의 협동 생존 게임입니다. 플레이어는 던전 안으로 들어가 크리쳐들을 피해다니며 마력석을 채굴한 뒤, 이를 돈으로 바꿔 상납금을 만들어야 합니다.

던전은 절차적으로 생성되어 매번 새로운 경험을 주며, 다양한 아이템과 크리쳐가 존재합니다. 플레이어는 스탯을 성장시키거나 특수능력을 사용할 수도 있습니다.

모든 시스템은 언리얼의 Gameplay Ability System을 기반으로 구축되어 있어, 새로운 스탯이나 행동, 효과를 추가하기 매우 용이한 구조로 되어있습니다.`,
          },
          {
            id: 'p_fh_overview_role',
            title: '맡은 역할',
            content: `프로그래밍 파트 팀장으로서의 역할을 수행하며 팀을 이끌었습니다.
엔진 사이드에선 언리얼 에디터를 편집하여 기획 파트에서 사용하기 편리하게 디테일 창을 수정하거나, 새 에셋을 에셋 메뉴에 추가했습니다.
게임 컨텐츠 사이드에선 던전 생성, 플레이어, FX·사운드 및 GAS 시스템을 사용한 기반과 구조를 작성하고 오브젝트 로직의 대부분을 작성하였으며 디버깅 작업 역시 주도하였습니다.

<img src="img/project/FRankSurvivor/work1.png" alt="게임 이미지" style="width: 70%;" />

<img src="img/project/FRankSurvivor/work2.png" alt="게임 이미지" style="width: 75%;" />

<img src="img/project/FRankSurvivor/work3.png" alt="게임 이미지" style="width: 75%;" />
`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_highlight',
        title: '주요 구현 과제',
        subSections: [
          {
            id: 'p_fh_highlight_gas',
            title: 'GAS 기반의 게임 시스템',
            content: `언리얼의 GAS를 공부한 뒤, 이 게임에 반드시 필요한 시스템이라고 생각되어 사용할 것을 적극적으로 주장하였습니다.
GAS가 추구하는 철학과 구조가 세계적인 개발자들이 내놓은 모범적인 답안이라고 느껴졌기 때문입니다. 저희 게임은 육성 요소가 있기에 다양한 어트리뷰트들을 체계적으로 관리해야 했고 여러 아이템, 특수능력마다 고유한 로직을 구현해야 했기에 개별 로직의 디커플링을 확장에 용이한 구조 위에서 확보할 필요가 있었습니다.

결론부터 말하자면 GAS를 사용한 건 이번 프로젝트에서 최고의 결정이었다고 생각합니다. 설계 단계에서의 시행착오를 크게 줄여 아낀 시간을 컨텐츠 개발에 투입할 수 있었고, GAS가 제시하는 큰 틀 위에서 어떻게 구조를 설계해야 확장과 유지보수에 용이한지 정말 많은 것을 배울 수 있었습니다.


▶ 사례1: 효율적인 태그 구조

GameplayTag는 저희 게임의 산소같은 역할을 합니다. 캐릭터의 현재 상태를 나타내는 건 물론 재생할 VFX·SFX를 선택하고 동작시킬 어빌리티를 선택하는 데에도 사용됩니다.
가장 중요한 건 <a target="_blank" href="https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%EC%96%B8%EB%A6%AC%EC%96%BC-%EC%97%94%EC%A7%84/%ED%8C%81%EA%B3%BC-%EB%85%B8%ED%95%98%EC%9A%B0/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EA%B2%8C%EC%9E%84%ED%94%8C%EB%A0%88%EC%9D%B4-%ED%83%9C%EA%B7%B8-%EA%B5%AC%EC%A1%B0.html">태그의 트리 구조를 효율적으로 설계하는 것</a>이었습니다. 특히 캐릭터의 상태를 나타낼 때 중요했는데, 예컨대 플레이어의 행동 불능은 여러 가지 이유로 나타날 수 있고, 여러 가지 종류(제약되는 행동에 따라)로 나타날 수 있었습니다. 덫 함정에 걸리게 되면 움직이는 것만 차단해야 하고, 스턴 상태가 되었을 땐 일정 시간동안 모든 행동이 차단되어야 했습니다.

각각의 행동들을 모두 계층성이 없는 개별 태그로 만들어 사용한다면 스턴 상태 GE에서 부착해야 하는 태그의 양은 수 십개에 달하고, 새로운 행동이 추가되면 하나가 더 늘어나야 했을 것입니다. 대신 저는 아래와 같은 계층 구조를 만들어 'Uncapable' 태그만을 스턴 상태 GE가 부착하도록 했습니다. 개별 GA의 호출은 BlockTag의 조상에 대해서도 방지되기 때문에 새로운 행동이 추가되어도, 예컨대 'Player->Action->PlayEmote'와 'Player->State->Uncapable->Unactionable->BlockEmote'가 추가되어도 스턴 상태 GE를 편집하지 않아도 됐습니다.

<img src="img/project/FRankSurvivor/gas1.png" alt="본문 이미지" style="width: 80%;" />


▶ 사례2: 유연하고 범용적인 어트리뷰트

플레이어의 스테이터스에는 두 가지 종류가 있습니다. 첫째는 기본이 되는 5가지 주요 능력치이고, 둘째는 주요 능력치를 계산식에 사용하여 계산되어지는 구체적인 스펙(Derived attribute)입니다. 예컨대 민첩성(1)이 오르면 이동속도(2)가 상승하고, 힘(1)이 오르면 주먹데미지(2)와 패널티 없이 소지 가능한 무게(2)가 올라야 했습니다.

처음엔 코드상에서 주요 능력치가 변할 때 연관된 모든 Derived Attribute 값을 갱신하는 방식으로 구현하였는데, 얼마 안 가 다음과 같은 문제가 발생했습니다.
1. 기획에서 Derived Attribute의 계산식을 조금씩 바꿔가며 테스트하고 싶다는 요청이 들어왔습니다.
2. 어트리뷰트 세트 클래스의 코드가 비대해져 유지보수가 점점 어려워지면서 새로운 스탯이 추가되기라도 하면 대대적인 공사가 필요했습니다.

방법을 찾아보던 중 GAS의 Mod Magnitude Calculation에 대해 알게 되었습니다. GE에서 어트리뷰트의 갱신 모디파이어로 MMC를 지정하게 되면 1차 스탯의 변화를 추적하여 계산된 값을 반환하게 되는데, 이를 통해 Derived Attribute들을 갱신시키는 영구적인 GE를 적용하는 방식을 사용하기로 결정했습니다.

먼저 어트리뷰트마다 초기화 방식을 고를 수 있게 하고, Derived Attribute의 경우 플레이어에게 상시 적용되는 GE를 거쳐 실시간으로 갱신됩니다.

<img src="img/project/FRankSurvivor/gas2.png" alt="본문 이미지" style="width: 80%;" />

이렇게 방식을 바꾸자 앞서 말한 두 가지 문제가 모두 해결되었습니다. 모든 계산식이 블루프린트로 작성되므로 기획에서도 부담 없이 식을 고쳐 테스트해볼 수 있었고, Derived Attribute마다 각각 MMC 블루프린트를 생성하여 추가만 해주면 되기 때문에 코드를 고칠 일도 없어졌습니다.


▶ 사례3: 독립적으로 실행되는 로직들

클래스와 로직의 의존성 문제는 이전까지의 프로젝트에서 가장 큰 골칫거리였습니다. 그러나 이 프로젝트에선 GAS를 사용하는 것만으로도 그런 고민에서 상당 부분 해방될 수 있었는데, Gameplay Ability 자체가 로직의 철저한 분리를 확보해줄 것을 전제로, 또 그럴 수 있는 용이한 구조로 작성되어 있었기 때문입니다.

그렇게 GAS의 도움을 받아 다음의 원칙을 지켜가며 로직을 작성한 결과 확장과 유지보수가 굉장히 편리해질 수 있었습니다.
- 동작의 주체(AvatarActor)로부터 호출되어야 하는 로직들은 개별 기능 단위로 최대한 분리시킨다. (여러 종류의 GA에서 범용적으로 사용하기 위해)
- GA의 발동에 필요한 데이터들은 최대한 발동 시점에 복사 또는 const 참조로 GA에 전달하여 사용한다. (read only 속성을 유지하여 의존성이 없는 설계를 유도)
- InputID 또는 TriggerTag를 사용해 GA를 발동시켜 발동 주체가 개별 GA에 의존하지 않게 한다.

또 한 가지 매우 유용했던 개념은 GameplayAbilityTask입니다. GA 내부에서 비동기적으로 별도의 로직을 만들어낼 수 있기 때문에 GA 자체의 코드도 깔끔하게 정리할 수 있었습니다.
예컨대 플레이어가 말 크리쳐의 돌진기에 치이면 래그돌이 되어 뒤로 날아가는데, 다시 일어서기 시작하는 타이밍을 결정하기 위해 Pelvis 본의 월드 속도가 일정 수준 이하로 떨어지면 이벤트를 발생시키는 <a target="_blank" href="https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%96%B4%EB%B9%8C%EB%A6%AC%ED%8B%B0-%ED%83%9C%EC%8A%A4%ED%81%AC.html">태스크 어빌리티를 작성</a>하여 구현할 수 있었습니다.
`,
            buttons: [
              {
                  text: '블로그: 효율적인 태그 구조에 대한 공부',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%EC%96%B8%EB%A6%AC%EC%96%BC-%EC%97%94%EC%A7%84/%ED%8C%81%EA%B3%BC-%EB%85%B8%ED%95%98%EC%9A%B0/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EA%B2%8C%EC%9E%84%ED%94%8C%EB%A0%88%EC%9D%B4-%ED%83%9C%EA%B7%B8-%EA%B5%AC%EC%A1%B0.html',
                  type: 'blog'
              },
              {
                  text: '블로그: 커스텀 어빌리티 태스크 작성하기',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%96%B4%EB%B9%8C%EB%A6%AC%ED%8B%B0-%ED%83%9C%EC%8A%A4%ED%81%AC.html',
                  type: 'blog'
              },
            ],
          },
          {
            id: 'p_fh_highlight_procedural_dungeon',
            title: '절차적 생성: 오픈소스 라이브러리 개조하기',
            content: `절차적으로 생성되는 던전은 이 게임의 핵심입니다. 구현의 난이도도 높고 던전의 형태 자체가 게임의 밸런스, 재미와 직결되기 때문에 가장 부담이 컸던 작업이었습니다.

처음에는 자체적으로 만들어보는 걸 고려했으나, 촉박한 시간과 기획에서 요구하는 기능 수준을 생각할 때 이는 불가능하다고 판단하였습니다. 대신 3D 그리드를 기반으로 DFS/BFS를 사용해 레벨을 이어붙이는 기능을 제공하는 오픈소스 라이브러리를 기반으로 저희 게임만의 절차적 던전 생성기를 제작하였습니다.


▶ 오프소스 라이브러리의 구조

라이브러리가 제공하는 기능만으론 원하는 바를 구현할 수 없었기 때문에 수정과 확장은 필수적이었습니다.
이를 위해선 우선 라이브러리가 작동하는 구조를 자세히 분석할 필요가 있었습니다. 다음은 그렇게 분석한 작동 구조의 대략적인 플로우 차트입니다.

<img src="img/project/FRankSurvivor/pd1.png" alt="본문 이미지" style="width: 75%;" />

라이브러리는 크게 두 단계로 이루어지고 있었습니다.
첫 단계(Init State)에선 DFS/BFS 방식으로 그대로 스트리밍이 가능한 레벨들의 그래프를 구성하고,
다음 단계(Generate State)에선 여러 틱에 걸쳐 언리얼의 레벨 스트리밍으로 룸들을 실제로 로드합니다. 플로우 차트에선 최종적으로 도달하는 'Level Streaming' 노드에 해당합니다.


▶ 라이브러리 확장하기

이미 훌륭한 라이브러리였지만 저희에겐 추가적인 기능들이 필요했습니다.
- 일정한 크기 범위의 던전이 '반드시' 생성되는 것이 보장되어야 했습니다.
- 룸과 룸이 연결될 수 있는 조건, 통로의 타입, 특정 타입의 룸들 간의 최소 거리, 시작 룸으로부터 코어 룸의 최소 거리 등 복잡하고 세세한 연결 규칙을 지정할 수 있어야 했습니다.
- 어떤 룸은 코어 룸으로서 반드시 일정 개수가 배치되는 것이 보장되어야 했습니다.
- 순환(사이클) 경로는 크리쳐로부터 도망다녀야 하는 게임의 특성상 충분히 제공되어야 했습니다.
- 던전의 구조적인 조건을 충족하고 모든 코어룸이 제대로 배치된 유효한 던전인지 검사가 필요했습니다.

이런 요구사항들은 기존의 구조에선 해결할 수 없었고, 저는 아래와 같이 라이브러리를 수정 및 확장했습니다.

<img src="img/project/FRankSurvivor/pd2.png" alt="본문 이미지" style="width: 75%;" />

추가된 노드들의 의미와 역할을 간략하게 말씀드리자면 다음과 같습니다.

<img src="img/project/FRankSurvivor/pd3.png" alt="본문 이미지" style="width: 40%;" />

가장 중요한 건 룸과 룸이 연결될 수 있는 규칙을 설정하는 것이었습니다.

룸을 디자인하는 아트 팀원은 연결 통로의 디자인이 다양해질 수 있기를 원했고, 던전 구조의 밸런스를 담당하는 기획 팀원은 룸 타입별로 세부적인 연결 규칙(타입별 기본적인 확률부터 최소 거리, 시작 위치로부터의 거리 등)을 설정할 수 있기를 원했습니다.

<img src="img/project/FRankSurvivor/pd4.png" alt="본문 이미지" style="width: 50%;" />

이런 규칙들을 에셋을 통해 간단하게 수정하고 적용할 수 있도록 하여 타 파트에서 로우 로직에 대해 전혀 신경쓰지 않고 원하는 대로 수정할 수 있도록 했습니다.

또, 코어룸들은 반드시 일정 개수 배치가 보장되어야 하는 동시에 던전 전체에 균등하게 분포될 필요가 있었습니다.

<img src="img/project/FRankSurvivor/pd5.png" alt="본문 이미지" style="width: 25%;" />

따라서 시작할 때 배치되어야 하는 코어룸들을 늘어놓고 '0 ~ 목표 던전 크기' 사이의 랜덤한 인덱스를 배정했습니다.
이 인덱스는 코어룸의 배치 순서가 되어 던전 크기가 해당 숫자에 도달했을 때 해당 코어룸을 Ready 상태로 바꿔 다른 무엇보다 우선 배치를 시도하도록 합니다.

<img src="img/project/FRankSurvivor/pd6.png" alt="본문 이미지" style="width: 40%;" />

다음으로 저희 게임은 던전 안에서 크리쳐들로부터 도망다녀야 했는데, 만약 경로들이 일방향으로 막다른 길로 향하게 된다면 게임의 재미가 크게 떨어지게 됩니다.
그래서 룸을 배치한 뒤 추가적으로 연결 가능한 방향을 순회하여 통로를 만들 수 있다면 확률적으로 통로를 생성하는 로직을 추가해 순환(사이클) 경로를 적극적으로 생성했습니다. 

그래프의 구성이 끝나면 유효성을 검사하고, 만약 유효하지 않은 던전(예컨대, 목표한 크기 범위를 벗어나거나, 모든 코어룸의 배치에 실패했거나, 특정 층에 너무 많은 방이 몰려있는 등)이라고 판단된다면 재작성을 시도하게 됩니다.
하지만 이 과정을 무한히 반복할 수는 없었고, 만약 던전의 생성 조건이 매우 까다로워 수 차례 생성에 실패하는 경우의 예외 처리가 필요했습니다.

<img src="img/project/FRankSurvivor/pd7.png" alt="본문 이미지" style="width: 60%;" />

따라서 저는 미리 '좋은 구조'를 만들어내는 시드값을 여러 개 기록해놓고, 일정 횟수 유효한 던전 생성에 실패했다면 대신 그 중 하나를 골라 생성하도록 했습니다.

<img src="img/project/FRankSurvivor/pd8.png" alt="본문 이미지" style="width: 50%;" />

마지막으로 레벨 스트리밍이 완료되면 두 차례에 걸쳐 내부 인테리어를 진행하고, 모든 절차가 완료된 클라이언트는 레디 이벤트를 발생시키는 것으로 생성 과정이 마무리됩니다.
`,
          },
          {
            id: 'p_fh_highlight_dynamic_minimap_rendering',
            title: '실시간으로 렌더링되는 미니맵',
            content: `던전이 절차적으로 생성되는 만큼 미니맵도 동적으로 렌더링되어야 했습니다.

기획측의 요구는 총 네 가지로, (1) R.E.P.O 스타일의 미니멀한 미니맵이어야 하고, (2) 방문하지 않은 룸의 구조를 밝히지 말아야 하며, (3) 다른 플레이어를 아이콘으로 트래킹해야 하고, (4) 마지막으로 층계를 구분할 수 있기를 원했습니다.


▶ 미니멀한 미니맵

<img src="img/project/FRankSurvivor/minimap0.png" alt="본문 이미지" style="width: 25%;" />
(예시사진: 게임 R.E.P.O의 미니맵 스타일)

R.E.P.O 같은 스타일의 미니맵을 만들기 위해선 방문하지 않은 룸들은 하나로 뭉쳐서 외곽선을 그리고, 방문한 룸은 각각에 대해 외곽선을 그릴 수 있어야 했습니다.
따라서 이미 외곽선이 그려진 이미지를 단순히 가져다 붙이는 방식은 사용할 수 없었고, 대신 렌더 타겟에 실시간으로 그리는 방식을 사용하기로 결정했습니다.

외곽선은 일정 거리 떨어진 인근 픽셀과의 비교로 그려야 하는 영역을 쉽게 구할 수 있습니다. 하지만 문제는 '방문한 룸'들에 대해선 각각 외곽선을 그려야 한다는 것이었는데, 이 문제를 해결할 아이디어는 어렵지 않게 떠올릴 수 있었습니다.

방문한 룸마다 고유한 R값으로 그리는 것입니다. 이 방법을 사용해 외곽선 알고리즘에는 어떤 수정도 없이 그래도 적용할 수 있었습니다. 추가적으로 G값은 문이 있는 위치 등 부가적인 정보로 활용하기로 했습니다.

그렇게 그려진 렌더타겟의 모습은 다음과 같습니다.

<img src="img/project/FRankSurvivor/minimap1.png" alt="본문 이미지" style="width: 30%;" />

다음으로 이 렌더타겟에 대해 마터리얼을 이용해 적절한 처리를 가했습니다.

<img src="img/project/FRankSurvivor/minimap2.png" alt="본문 이미지" style="width: 70%;" />

<img src="img/project/FRankSurvivor/minimap3.png" alt="본문 이미지" style="width: 30%;" />


▶ 층계 구분하기

던전은 여러 층계로 이루어져 계단이 있는 룸을 통해 오르내릴 수 있습니다. 이 때 미니맵에서도 현재 층에 있는 룸만 그려야 했습니다.

먼저 현재 테마의 던전이 사용하는 그리드 상 한 칸의 높이를 층의 높이로 정의한 뒤, 월드 공간에서 각 룸마다 최소 층과 최대 층이 몇 층인지 계산했습니다.

<img src="img/project/FRankSurvivor/minimap4.png" alt="본문 이미지" style="width: 40%;" />

이후 미니맵을 그릴 때 로컬 플레이어의 무릎 정도의 높이를 기준으로 층을 판별한 뒤 해당 층에 존재하는 룸들을 추려 그리도록 했습니다. 이 때 각 층에서 해당 룸을 그릴 지 말 지, 그려져야 한다면 어떤 모양으로 그릴 지 커스텀이 가능하게 하여 유연성을 제공하였습니다.


최종적으로 후처리를 입히고 룸 아이콘이나 트래킹할 액터의 아이콘을 붙여 완성한 미니맵의 모습입니다.

<img src="img/project/FRankSurvivor/3.gif" alt="본문 이미지" style="width: 30%;" />
`,
            buttons: [
              {
                  text: '블로그에서 더 자세히 보기',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EB%8F%99%EC%A0%81-%EC%83%9D%EC%84%B1-%EB%AF%B8%EB%8B%88%EB%A7%B5.html',
                  type: 'blog'
              }
            ],
          },
          {
            id: 'p_fh_highlight_editor_custom',
            title: '디테일 패널 커스터마이징',
            content: `던전을 생성하고 인테리어를 꾸미는 과정에서 기획의 의도를 자유롭게 반영하기 위해 다양한 옵션이 제공하고, 헷갈리지 않게 이들을 총괄적으로 관리할 수 있게 데이터 에셋을 구성하였습니다.

그런데 Details 패널의 기본 레이아웃에선 프로퍼티가 행마다 하나씩 놓이고, 배열은 인덱스를 각각 눌러 하위 섹션을 열어야 했기 때문에 한 눈에 현황을 파악하기가 힘들었습니다. 

<img src="img/project/FRankSurvivor/detail1.png" alt="본문 이미지" style="width: 60%;" />

그래서 에디터 편집용 모듈을 추가하고 FPropertyEditorModule에 커스텀 프로퍼티 레이아웃을 추가하여 모든 프로퍼티를 인덱스 헤더의 ValueContent에 나열하도록 수정하였습니다.

<img src="img/project/FRankSurvivor/details2.png" alt="본문 이미지" style="width: 60%;" />

이를 통해 구성 현황을 한 눈에 파악하며 밸런스를 맞춰 옵션을 변경하기가 매우 편리해질 수 있었습니다.
`,
			      buttons: [
              {
                  text: '블로그에서 더 자세히 보기',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/details-property-customization.html',
                  type: 'blog'
              }
            ],
          },
//           {
//             id: 'p_fh_highlight_7',
//             title: 'MovementComponent 개조하기',
//             content: `스프린트와 스태미너 시스템을 만들면서 언리얼의 MovementComponent를 개조했습니다.
// 사용자가 'StartSprint()'를 호출하면 컴포넌트는 미리 계산된 2차 어트리뷰트인 RunSpeed로 최대 속도를 갱신하며, 이 때 실제 키 입력과 지면에서의 일정 수준 이상의 속도가 발생하면 스태미너를 감소시키는 태그를 부착합니다.

// 뿐만 아니라 좌우, 뒤로 이동할 경우 플레이어의 방향에 따른 이동 속도 감소를 부여하며, 이 모든 과정이 MovementComponent의 예측 실행 구조와 호환되도록 구현되어 있어 클라 예측 - 서버 검증 모델로 사용이 가능합니다.`,
//           },
          {
            id: 'p_fh_highlight_8',
            title: '메타휴먼 캐릭터에 이펙트 입히기',
            content: `저희 게임은 '수준 낮은 헌터'라는 게임의 컨셉과 던전 아트의 분위기에 맞추기 위해 현실적으로 생긴 캐릭터가 필요해 메타휴먼을 플레이어 캐릭터로 사용하기로 결정했습니다.

결론부터 말해 좋은 선택은 아니었다고 생각합니다. 바디 메쉬와 따로 임포트한 옷 메쉬를 맞추기 위해 몇 번이나 임포트를 다시 해야 했고, LOD 단계가 달라 일정 거리에서 스킨이 찢어지는 버그나 UGroomComponent를 씬 캡쳐할 때 크래쉬가 나는 버그 등 숱한 버그들 때문에 작업이 상당히 지연되기도 했습니다.

문제는 캐릭터에 Dissolving 효과같은 이펙트를 입힐 때도 생겼습니다. 메타휴먼은 고퀄리티의 모듈형 캐릭터이기 때문에 하나의 캐릭터를 렌더링하는데 수 십가지의 머터리얼을 사용합니다. 그런데 점진적인 투명화와 같은 효과를 위해선 이 마터리얼들을 전부 다 수정해야 했습니다.

<img src="img/project/FRankSurvivor/metahuman1.png" alt="본문 이미지" style="width: 60%;" />
(총 21개의 머터리얼을 수정하고 110개의 머터리얼 인스턴스를 만들어야 했습니다.)

머터리얼은 Masked 블렌드와 Transcluent 블렌드로 나뉘어져 있었기 때문에 두 가지 버전의 머터리얼 함수를 작성해 사용했습니다. 그런데 UGroomComponent의 머터리얼들은 아예 Opacity를 적용할 수가 없었습니다. 찾아본 결과 언리얼 개발자의 답변에서 UGroomComponent의 경우 내부적으로 Hair Shading Model을 사용해 완전히 다른 방식으로 렌더링되기 때문에 머터리얼로 Opacity Mask를 사용할 수 없다는 사실을 알 수 있었습니다.

따라서 헤어 메쉬의 경우 색만 변화시킨 뒤 적당한 타이밍에 Visibility를 끄는 방법을 선택했습니다.

<img src="img/project/FRankSurvivor/5.gif" alt="본문 이미지" style="width: 30%;" />
`,
			      buttons: [
              {
                  text: '블로그에서 더 자세히 보기',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EB%A9%94%ED%83%80%ED%9C%B4%EB%A8%BC%EC%9D%84-%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4-%EC%BA%90%EB%A6%AD%ED%84%B0%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html',
                  type: 'blog'
              }
            ],
          },
          {
            id: 'p_fh_highlight_9',
            title: '1/3인칭의 분리, 장비 상태와 모션의 동기화',
            content: `보다 리얼한 모션을 구현하기 위해 저희는 남들이 볼 때의 3인칭 모션과 내 화면에서 보이는 1인칭 모션을 구분했습니다. 문제는 애니메이션이 다르기 때문에 두 모션간의 타이밍이 어긋날 수 있다는 점이었습니다.

이 때 기준이 되어야 하는 것은 동작의 주체인 자신이 보는 1인칭 모션이었고, 따라서 모션을 재생하는 GameplayCue를 작성하여 1인칭 모션의 노티파이나 시간대를 기준으로 3인칭 모션의 프레임을 조절, 두 모션의 타이밍이 일치하도록 맞추었습니다.

또한 인벤토리 슬롯을 변경하면 기존 아이템을 집어넣거나 꺼내서 드는 모션이 재생되고, 그 상태도 모든 클라이언트에게 동기화되도록 했습니다. 이를 위해 우선 아이템마다 범용 마네킹의 손 슬롯의 어느 위치에 있어야 하는지, 어느 손으로 들어야 하고 어떤 홀딩 모션을 취하는지 모두 정의해놓은 데이터테이블을 만들어 사용했습니다.

또 아이템을 사용해 소모하거나, 사용하던 아이템의 내구도가 닳아 부서질 경우 보다 자연스러운 동작을 위해 메쉬를 캐싱해 아이템이 슬롯에서 사라졌어도 특정 시점까지 메쉬를 해제하지 않도록 했습니다. 예컨대 포션을 사용하면 마시는 모션을 재생하고 다시 손을 내려놓기 시작하는 타이밍까지 캐싱된 메쉬가 해제되지 않습니다.

<img src="img/project/FRankSurvivor/SwapTools.gif" alt="본문 이미지" style="width: 30%;" />
`,
            buttons: [
              {
                  text: '블로그에서 더 자세히 보기',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EC%9E%A5%EB%B9%84-%EC%8A%A4%EC%99%91,-%EC%B0%A9%EC%9A%A9-%EB%AA%A8%EC%85%98-%EB%8F%99%EA%B8%B0%ED%99%94.html',
                  type: 'blog'
              }
            ],
          },
          {
            id: 'p_fh_highlight_interaction',
            title: '상호작용 시스템',
            content: `상호작용은 플레이어의 경험에 중요한 요소이기 때문에 여러모로 공을 많이 들였습니다.
우선 플레이어가 바라보고 있는 방향으로 Sweep을 통해 액터를 판별하며, 상호작용이 가능한 액터만을 추림으로써 반응성을 높였고, 상호작용 컴포넌트를 통해 액터마다 최대 거리나 상호작용 키, 툴팁 등을 커스텀할 수 있게 했습니다.

레벨이 어두운 경우 플레이어가 무엇과 상호작용할 수 있는지 알기 어려울 수 있으므로, 플레이어의 주변 반경에 들어온 상호작용 가능한 액터에 부드러운 아웃라인을 입혔습니다.
스텐실 버퍼에 일정 구간을 사용해 현재 Opcacity를 전달하는 방식으로, 실제 아웃라인 애니메이션은 상호작용 컴포넌트가 처리합니다.

<img src="img/project/FRankSurvivor/7.gif" alt="본문 이미지" style="width: 30%;" />
`,
            buttons: [
              {
                  text: '블로그에서 더 자세히 보기',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9,-interactable-component.html',
                  type: 'blog'
              }
            ],
          },
          {
            id: 'p_fh_highlight_destructible_prop',
            title: '파괴 가능한 프롭',
            content: `언리얼의 카오스 디스트럭션을 사용해 부술 수 있는 오브젝트를 만들었습니다.
여기서도 역시 GAS를 사용하여 프롭에 체력 어트리뷰트를 부착하고 플레이어의 공격에 의해 체력이 깎이면 카오스 필드를 작동시켜 프롭을 부수게 됩니다.

<img src="img/project/FRankSurvivor/8.gif" alt="본문 이미지" style="width: 30%;" />
`,
            buttons: [
              {
                  text: '블로그에서 더 자세히 보기',
                  link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/chaos-destruction%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8-%EB%B6%80%EC%88%98%EA%B8%B0.html',
                  type: 'blog'
              }
            ],
          },
          {
            id: 'p_fh_highlight_16',
            title: '시각적 이펙트 개선하기',
            content: `곡괭이로 오브젝트를 부수거나 피격당하는 상황에서 나이아가라 이펙트만 재생하니 너무 타격감이 없고 밋밋했습니다.

이를 개선하기 위해 먼저 FloatCurve를 따라 카메라의 Rotation과 Pov를 변환하는 간단한 커스텀 카메라 쉐이크 클래스를 작성하여 카메라가 흔들리는 느낌을 주었습니다. 특히 코어 오브젝트를 파괴했을 때 던전 전체가 흔들리는 느낌을 준 건 지스타에서 많은 플레이어분들의 좋은 반응을 얻을 수 있었습니다.
그리고 추가적으로 화면 효과 에셋을 구매한 뒤 플레이어의 카메라를 따라다니는 Plane에 효과를 재생시키는 Vignette Manager를 작성하였습니다.

사운드 + 나이아가라 이펙트 + 카메라 쉐이크 + 비네트 매니저를 조합하여 보다 실감나고 타격감 있는 시각적 효과를 보여줄 수 있었습니다.

<img src="img/project/FRankSurvivor/VFX.gif" alt="본문 이미지" style="width: 30%;" />
`,
          },
          {
            id: 'p_fh_highlight_17',
            title: '사운드 시스템',
            content: `사운드 서브시스템을 만들어 편리하게 사운드를 재생하고 관리할 수 있도록 했습니다. 게임 설정과 연동하기 위한 별도의 세팅이 되어 있으며, 특정한 위치에 3D 음향을 발생시키거나 로컬 플레이어에게 2D 음향을 재생하는 동작을 두 개의 블루프린트 노드만으로 수행할 수 있습니다.

모든 음향은 옵션으로 다른 클라이언트에게 전파하거나 노이즈를 발생시켜 크리쳐 AI가 감지하게 할 수 있으며, 필요한 경우 FName으로 재생된 사운드의 핸들을 생성하고 원하는 시점에 페이드아웃 시킬 수도 있습니다.`,
          },
//           {
//             id: 'p_fh_highlight_18',
//             title: '기타',
//             content: `이번 프로젝트에서 구현한 것이 매우 많아 모두 적지는 못 하지만, 이외에도 PhysicsConstraint를 사용해 부드럽게 열리고 닫히는 문이나 상자, 메타휴먼 래그돌화와 크리쳐의 돌진에 맞았을 때 날아가는 로직, 던전 내부의 공포감을 높이는 디스턴스 포그, 타 파트에서 쉽게 수정이 가능한 피직스 마터리얼 기반의 사운드 분기 시스템 등을 구현하였습니다.
// `,
//           },
// 공부하고 배운 내용 짤막하게 제시? : 언리얼 인사이트, 애니메이션 리타게팅, 엔진 코드 분석 사례 등
        ],
        showDivider: true,
      },
//       {
//         id: 'p_fh_troubleshooting',
//         title: '트러블슈팅',
//         subSections: [
//           {
//             id: 'p_fh_troubleshooting_1',
//             title: 'MovementComponent 동기화 관리',
//             content: `
// `,
//           },
//           {
//             id: 'p_fh_troubleshooting_2',
//             title: 'CDO 생성 이후 추가된 블루프린트 노드를 다루는 법',
//             content: `
// `,
//           },
//           {
//             id: 'p_fh_troubleshooting_3',
//             title: '메타휴먼 LOD 문제',
//             content: `
// `,
//           },
//           {
//             id: 'p_fh_troubleshooting_4',
//             title: 'ULevelStreaming 동적 해제 문제',
//             content: `
// `,
//           },
//           {
//             id: 'p_fh_troubleshooting_5',
//             title: 'UGroomComponent 렌더링 문제',
//             content: `
// `,
//           },
//           {
//             id: 'p_fh_troubleshooting_6',
//             title: '카메라의 업데이트 순서 문제',
//             content: `
// `,
//           },
//         ],
//         showDivider: true,
//       },
//       {
//         id: 'p_fh_lesson',
//         title: '반성과 개선점',
//         subSections: [
//           {
//             id: 'p_fh_lesson_1',
//             title: '이것저것',
//             content: `
// `,
//           },
//         ],
//       },
    ],
    technologies: ['언리얼5', '언리얼 네트워크', '4인 멀티플레이', '1인칭', '리썰라이크', '생존'],
    liveLink: '',
    blogLink: '',
  },


  // 포션 아틀리에
  {
    id: 'p_pa',
    isMain: true,
    title: 'Potion Atlier',
    image: 'img/project/PotionAtlier/banner.gif',
    images: [
        'img/project/PotionAtlier/banner.gif',
    ],
    shortDescription: '3D 자체엔진으로 제작한 4주 단기 팀 프로젝트로, 포션을 제작해 판매하는 캐쥬얼한 타이쿤 게임입니다.',
    implementationFeatures: ['3D 자체엔진', 'PhysX 물리 시스템', 'UI 스텐실 마스킹', '부드러운 조작', '컨텐츠 전반', '튜토리얼'],
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://youtu.be/v2JbL4FlbQM?si=GtCIvaJ0p6GOYd10' }
    ],
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

주문서가 들어오면 알맞은 재료를 꺼내고, 손질하고, 끓여서 포션을 만들어 주문을 처리해야 합니다. 손님들은 참을성이 없으며 너무 오래 끓이면 제조에 실패합니다. 종종 마법에 걸린 테이블이 손님을 날려버리려고 하는 것도 막아야 합니다.`,
          },
          {
            id: 'p_pa_overview_role',
            title: '맡은 역할',
//             content: `▶ 물리(PhysX) : Primitive-shape 콜라이더, 메쉬 콜라이더, Raycast, Sweep test, 물리 처리 컴포넌트 등
// ▶ 캐릭터 조작: 부드러운 이동, 상호작용, 스태미너 시스템
// ▶ 엔진 성능 개선 및 디버깅
// ▶ UI 렌더링 / 스텐실 마스킹 / 텍스트 렌더링 등
// ▶ QTE 미니게임 3종
// ▶ 튜토리얼
// ▶ 기물 오브젝트: 솥, 배치대, 작업대, 쓰레기통, 카운터 등의 작동 로직 및 오브젝트 프리팹 만들기
// ▶ 레벨 에디팅을 위한 컴포넌트: 격자 이동, UI 조절, 
// ▶ 특수 효과: 날아가는 노움, 오브젝트 상호작용 이펙트, UI 및 기물 스케일 애니메이션 등
// ▶ 말풍선 등 기타 컨텐츠


// <img src="img/project/PotionAtlier/3.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
            content: `엔진 사이드에선 물리, UI, 텍스트, 에디터 툴, 디버깅과 성능 개선을 수행하였습니다.
게임 컨텐츠 사이드에선 컨텐츠 전반을 구현하였습니다.

<img src="img/project/PotionAtlier/Work/EngineSide.png" alt="게임 이미지" style="width: 60%;" />

<img src="img/project/PotionAtlier/Work/ClientSide.png" alt="게임 이미지" style="width: 75%;" />
`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_pa_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_pa_highlight_physics',
            title: 'PhysX 물리 컴포넌트 구현하기',
            content: `NVDIA사에서 제작한 물리엔진인 PhysX를 공부하여 여러 종류의 콜라이더 컴포넌트 / 물리 기반 캐릭터 이동 컴포넌트 / Scene Query 함수를 구현하고 게임에 사용하였습니다.

물리 컴포넌트가 부착된 액터는 PhysX Scene의 피직스 액터와 1:1로 대응되고 관리됩니다. 컴포넌트가 동적으로, 순서에 상관 없이 부착될 수 있어야 했기에 다음과 같이 두 가지 경로로 피직스 신에 대응하는 피직스 액터가 생성되도록 했습니다.

<img src="img/project/PotionAtlier/4.png" alt="본문 이미지" style="width: 60%;" />

콜라이더에는 정육면체, 캡슐, 스페어 콜라이더와 메쉬의 정점 데이터를 사용한 메쉬 콜라이더를 구현하였습니다. 콜라이더의 초기 사이즈는 메쉬의 바운드 박스를 기준으로 정해지지만 원하는 대로 크기, 앵커 등을 자유롭게 바꿀 수 있습니다.

<img src="img/project/PotionAtlier/BoxCollider.gif" alt="본문 이미지" style="width: 35%;" />

모든 액터는 물리 레이어를 설정할 수 있으며, 두 레이어 사이의 물리 반응을 블록(밀어내기), 오버랩(이벤트만 발생), 무시 중 하나로 설정할 수 있습니다.

플레이어의 상호작용에는 Sweep 쿼리를 사용합니다. 반응성을 개선하기 위해 레이캐스트가 아닌 적당한 크기의 스페어와 오버랩된 가장 가까운 기물에 대해 상호작용 함수를 호출하도록 했습니다.

<img src="img/project/PotionAtlier/6.gif" alt="본문 이미지" style="width: 35%;" />

Character Controller 컴포넌트를 구현하여 RigidBody가 입혀진 캐릭터를 손쉽게 이동시킬 수 있습니다. 착지상태 판단, 이동, 점프, 경사면을 부드럽게 올라가고 내려가는 기능 등을 구현하였습니다.
`,
          },
          {
            id: 'p_pa_highlight_uistencil',
            title: 'UI 스텐실 마스킹',
            content: `UI 이미지의 둥근 모서리를 처리하기 위해 커스텀 스텐실 버퍼를 통한 UI 마스킹을 구현하였습니다.
마스크로 사용될 텍스쳐는 렌더링되는 대신 스텐실 버퍼에 자신의 마스크 ID를 비트플래그로 기록하며, 이후 마스크 위에 그려지도록 설정된 텍스쳐는 스텐실 버퍼에 지정된 비트 플래그가 켜져있는 경우에만 그려집니다.

<img src="img/project/PotionAtlier/5.gif" alt="본문 이미지" style="width: 30%;" />
`,
          },
          {
            id: 'p_pa_highlight_playermovement',
            title: '부드러운 조작감 구현하기',
            content: `단순히 키가 눌린 방향으로 이동 벡터를 가하는 투박한 방식은 조작감이 매우 좋지 않았기 때문에 조작감을 높힐 방법을 연구했습니다.

우선 캐릭터의 회전은 이동과 함께 부드럽게 이루어지는게 보기 좋았고, 회전 속도가 등속적일 경우 미끄러지는 느낌이 심하게 나기 때문에 '현재 바라보고 있는 방향'과 '이동 방향'의 차이가 클 수록 이동속도를 줄이는 식((t/pi)^2)을 사용했습니다. 그러자 이동할 방향을 돌아 바라본 뒤 이동하는 느낌이 들어 조작감이 상당히 부드러워질 수 있었습니다.

회전은 캐릭터의 전방 벡터와 이동 방향 벡터 간의 외적으로 시계 방향과 반시계 방향 중 각도가 더 작은 쪽으로 회전합니다. 대쉬를 사용하면 그렇게 얻어진 최종 이동량에 가중치를 곱하는 방식으로 속도가 빨라지게 됩니다.

<img src="img/project/PotionAtlier/movement.gif" alt="본문 이미지" style="width: 30%;" />
`,
          },
          {
            id: 'p_pa_highlight_uiinteract',
            title: 'UI와 상호작용하기',
            content: `UI 오브젝트는 Z Order에 따라 렌더링의 마지막 과정에 그려질 뿐, 특수한 오브젝트는 아닙니다. 대신 EventListener 컴포넌트를 통해 플레이어의 클릭에 반응하도록 처리했습니다.

플레이어가 화면을 클릭하면 현재 활성화된 EventListener 중 클릭 지점이 자신의 바운딩 볼륨 내부에 놓이는 액터만을 추립니다. 이후 UI -> Non-UI 순서로 Order 체크를 진행하여 가장 상단에 있는 오브젝트의 EventListener가 클릭 이벤트를 가져가는 방식입니다.

아쉬운 것은 시간이 부족해 내부 판별을 단순 순회로 진행했다는 것입니다. 뷰포트를 나누어 쿼드 트리를 활용한다면 훨씬 효율적으로 검사를 수행할 수 있을 듯 합니다.

<img src="img/project/PotionAtlier/uiorder.png" alt="본문 이미지" style="width: 40%;" />
`,
          },
          {
            id: 'p_pa_highlight_tutorial',
            title: '메인 로직으로부터 분리된 튜토리얼',
            content: `이전 미니 프로젝트에서의 반면교사로 메인 로직과 분리될 수 있는 튜토리얼 시스템을 만들기 위해 고민했고, 이벤트 기반의 시스템을 만들게 되었습니다.

먼저 캐릭터의 조작과 같은 플레이어의 동작은 모두 구현 단계에서 기능 단위로 독립되도록 설계하였고, 동작이 발생하면 언리얼의 Delegate처럼 등록된 콜백을 호출하는 이벤트 대리자를 동작시킵니다.

튜토리얼 매니저는 연관된 액터에 콜백 함수를 등록해놓고, 이벤트가 발생하길 기다립니다. 필요하다면 연관된 액터가 노출하는 함수를 호출해 기능 일부를 켜고 끌 수 있도록 되어있습니다.

<img src="img/project/PotionAtlier/tuto.gif" alt="본문 이미지" style="width: 50%;" />
`,
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

<img src="img/project/PotionAtlier/7.png" alt="본문 이미지" style="width: 40%;" />

일반적으로 텍스트 그리프 렌더링, 데칼 텍스쳐 렌더링 등 해상도나 거리가 달라져도 부드러운 테두리를 렌더링할 필요가 있을 때 사용하지만, UI 마스킹에도 사용할 수 있겠다는 생각이 들었고 찾아본 결과 이미 사용되고 있는 방법이었습니다.
SDF 텍스쳐를 마스크로 사용하면 해당 텍스쳐의 거리 값을 약간 조절하여 그려지는 픽셀의 알파값으로 사용할 수 있습니다. 이렇게 되면 추가적인 데이터가 필요 없이 부드러운 경계면을 가진 마스킹을 구현할 수 있을 듯 합니다.
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

<img src="img/project/PotionAtlier/8.png" alt="본문 이미지" style="width: 20%;" />
`,
          }
        ],
      },
    ],
    technologies: ['3D 자체엔진', '싱글플레이', '타이쿤', '캐쥬얼'],
  },


  // 레일웨이투헬
  {
    id: 'p_rh',
    isMain: true,
    title: 'Railway to Hell',
    image: 'img/project/RailwayToHell/banner.gif',
    images: [
        'img/project/RailwayToHell/banner.gif',
    ],
    shortDescription: '2D 자체엔진으로 제작한 3주 단기 팀 프로젝트로, 타일 위치 이동으로 공격을 회피하거나 아군 공격을 유도해 적들을 물리치는 전략 퍼즐 게임입니다.',
    implementationFeatures: ['2D 자체엔진', '비동기 리소스 로딩', '입력처리, 플레이어 조작', '카메라 쉐이크 이펙트', '타이머 함수', '턴 기반 동작'],
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://youtu.be/H3ri3R9NwEg?si=e5JUkvO0QaWvkzq2' }
    ],
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


<img src="img/project/RailwayToHell/3.png" alt="게임 이미지" style="width: 80%;" />
`,
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
            content: `이전까지 꾸준히 개발해 나가던 2D 게임 엔진을 사용했습니다. 엔진이 필수적으로 지원해야 하는 전반적인 기능들은 이미 준비가 된 상태였고, 저희 게임이 2D 물리나 기능이 많은 에디터를 요구하지는 않았기 때문에 비교적 빠르게 컨텐츠 제작으로 넘어갈 수 있었습니다.\n따라서 게임 엔진은 기능 추가보다는 주로 버그 수정이나 UI를 위한 기능 추가 정도가 이루어졌습니다.`,
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

<img src="img/project/RailwayToHell/4.png" alt="본문 이미지" style="width: 50%;" />
`,
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

<img src="img/project/RailwayToHell/5.png" alt="본문 이미지" style="width: 40%;" />
`,
          }
        ],
      },
    ],
    technologies: ['2D 자체엔진', '싱글플레이', '전략', '퍼즐'],
  },


  // 바운싱 이모지 게임
  {
    id: 'p_be',
    title: 'Bouncing Emoji Game',
    image: 'img/project/BounceEmoji/banner.gif',
    shortDescription: '수박 게임에 말랑말랑한 탄성을 접목시킨 퍼즐 게임입니다. 유니티 엔진으로 제작한 개인 프로젝트입니다.',
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://www.youtube.com/watch?v=1kLIHAhSvVM' }
    ],
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
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/1kLIHAhSvVM?si=uRIMVK5bqpi_ROIi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_be_overview_desc',
            title: '게임 소개',
            content: `최근 'Suika Game'으로 유행한, 같은 크기의 원형 오브젝트를 합치는 퍼즐 장르의 게임입니다. 기존의 게임과의 차별점을 두기 위해 오브젝트에 Spring joint로 구현한 탄성 시스템을 적용하였습니다.

같은 크기의 이모지가 충돌할 경우 다음 단계의 이모지로 합쳐지며 점수를 얻습니다. 이모지는 총 10단계의 레벨이 존재하며 박스의 전면 영역을 초과할 경우 게임 오버 처리됩니다. 게임의 목표는 높은 점수를 얻는 것입니다.`,
          },
        ],
        showDivider: true,
      },
      {
        id: 'p_be_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_be_highlight_1',
            title: 'SpringJoint로 탄성 구현하기',
            content: `오브젝트에 여러 개의 본을 심고, 본마다 Spring joint와 Circle collider를 부착하여 탄성을 구현했습니다.

<img src="img/project/BounceEmoji/2.png" alt="게임 이미지" style="width: 40%;" />
`,
          },
          {
            id: 'p_be_highlight_2',
            title: '이모지를 부드럽게 합치기',
            content: `이모지가 서로 충돌할 때, 두 이모지의 현재 레벨을 검사하여 같은 경우 더 큰 하나의 이모지로 합쳐지게 됩니다.
이 때 시각적으로 부드럽게 합쳐져야 하며, 다음 물리 틱에서 주변의 이모지들이 자연스럽게 밀려나고 충돌해야 하기 때문에 (1) 여러 프레임에 걸친 스케일링 애니메이션을 사용하고, (2) 두 이모지의 충돌점으로부터 합쳐진 이모지가 생기도록 하여 부드러운 움직임이 가능하도록 했습니다.`,
          }
        ],
        showDivider: true,
      },
    ],
    technologies: ['유니티', '싱글플레이', '퍼즐', '수박 게임'],
  },


  // 드로잉 퍼즐
  {
    id: 'p_dp',
    title: 'Drawing Puzzle',
    image: 'img/project/DrawingPuzzle/banner.gif',
    shortDescription: '그려낸 모양에 물리를 입혀 퍼즐을 푸는 프로토타입 게임입니다. 유니티 엔진으로 제작한 개인 프로젝트입니다.',
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://www.youtube.com/watch?v=uH11PwM16ic' }
    ],
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
            content: `<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/uH11PwM16ic?si=7fzwJBssUf03xPmx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          },
          {
            id: 'p_dp_overview_desc',
            title: '게임 소개',
            content: `실시간 라인 콜라이더 생성을 활용한 퍼즐 게임입니다.
유저가 그림을 그리면 즉시 폴리곤 콜라이더가 생성되며, 선의 위 또는 선으로 둘러쌓인 도형의 내부에 Hinge Joint를 추가하여 다양한 관절 물리를 구현할 수 있습니다.

<img src="img/project/DrawingPuzzle/1.png" alt="게임 이미지" style="width: 80%;" />
`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_dp_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_dp_highlight_1',
            title: '실시간 라인 콜라이더',
            content: `Line Renderer를 이용하여 오브젝트를 그려내는 기능을 구현하였습니다. 과정은 다음과 같습니다.
1) 현재 커서의 위치를 기록합니다. 현재 커서와 마지막으로 기록된 좌표의 거리가 설정된 최소거리를 초과하면 해당 지점의 좌표를 기록하고 마지막 좌표를 갱신합니다.
2) 좌표를 기록할 때마다 Line Renderer의 position을 추가하면서 씬에 그려냅니다.
3) Line Renderer의 BakeMesh() 메서드로 메시를 구합니다.
4) 메시 콜라이더를 사용할 경우 연산량이 많아 메시로부터 Polygon Collider를 생성하고, Ramer-Douglas-Peucker 알고리즘을 적용하여 최적화하는 방식을 선택했습니다. 다음 주소의 프로젝트를 참고하였습니다: Automatically Create Polygon Collider 2D From 2D Mesh in Unity, H3XED (h3xed.com/programming/automatically-create-polygon-collider-2d-from-2d-mesh-in-unity)
	Polygon Collider Simplification, j-bbr, (github.com/j-bbr/PolygonColliderSimplification)
5) Rigidbody2D 컴포넌트를 부착하고 몇 가지 후처리를 하여 물리효과를 구현한 드로잉 오브젝트를 생성합니다.`,
          },
          {
            id: 'p_dp_highlight_2',
            title: '라인 내부 Hinge joint',
            content: `그려진 오브젝트의 라인 또는 둘러쌓인 내부에 Hinge를 추가하는 기능을 구현하였습니다. 힌지를 설치하는 과정은 다음과 같습니다.
1) Line Renderer Physics의 특성 상 기존의 도형 내부 판별 알고리즘을 사용할 수 없었기 때문에, 대신 상하좌우로 레이캐스팅을 수행하였습니다.
2) 씬에 존재하는 모든 오브젝트를 한 번 순회하면서 최초로 모든 방향에서 충돌한 오브젝트를 Hinge의 부모 오브젝트로 삼습니다.

생성된 Hinge 위에 오브젝트를 그릴 경우, 우선 힌지마다 오브젝트의 내부에 포함되는지 위 과정대로 체크한 뒤, 해당 힌지를 앵커로 삼는 HingeJoint2D 컴포넌트를 추가해 서로 다른 오브젝트끼리 연결되게 됩니다.`,
          },
          {
            id: 'p_dp_highlight_3',
            title: '지우개, 바람, 무게 등',
            content: `이외에도 라인 오브젝트나 힌지를 제거하는 지우개(이 역시 내부 판별을 통해 라인 오브젝트의 내부 공간인지 판별할 수 있습니다), 힘을 가하는 바람 등을 구현하였습니다.
또 라인 오브젝트를 그린 뒤 마우스를 떼지 않고 대기하면 오브젝트의 무게가 높아지는 기능도 구현하였습니다.

<img src="img/project/DrawingPuzzle/2.png" alt="게임 이미지" style="width: 80%;" />
`,
          }
        ],
        showDivider: true,
      }
    ],
    technologies: ['유니티', '싱글플레이', '퍼즐'],
  },


  // 아포티카
  {
    id: 'p_ap',
    title: 'Aphotica',
    image: 'img/project/Aphotica/banner.gif',
    shortDescription: '부딪힌 블록의 색을 흡수하고, 흡수한 색을 혼합하며 풀어나가는 퍼즐 게임입니다. 2주 단기 팀 프로젝트로 엔진, 레벨에디터, 컨텐츠 전반을 담당하였습니다.',
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://youtu.be/_Xx173pg2-g?si=wAt_g96_a6mW3o6v' }
    ],
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


<img src="img/project/Aphotica/2.png" alt="게임 이미지" style="width: 80%;" />
`,
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

<img src="img/project/Aphotica/3.gif" alt="게임 이미지" style="width: 40%;" />
`,
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

<img src="img/project/Aphotica/4.gif" alt="게임 이미지" style="width: 30%;" />

현재 프레임의 위치에 따라 캐스팅되는 레이의 길이가 달라집니다.`,
          }
        ],
      },
    ],
    technologies: ['2D 자체엔진', '리듬', '퍼즐'],
  },


  // 이모지 타워 디펜스
  {
    id: 'p_etd',
    title: 'Emoji Tower Defense',
    image: 'img/project/EmojiTowerDefense/banner.gif',
    shortDescription: '풍선 타워 디펜스를 모방한 타워 디펜스 게임입니다. 자체 2D 엔진으로 제작한 8일 단기 개인 프로젝트입니다.',
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://youtu.be/GL2G-A6hkHw?si=BzvAoH8c2fRC3Pie' }
    ],
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


<img src="img/project/EmojiTowerDefense/2.png" alt="게임 이미지" style="width: 80%;" />
`,
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

<img src="img/project/EmojiTowerDefense/3.png" alt="게임 이미지" style="width: 30%;" />

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
    technologies: ['2D 자체엔진', '싱글플레이', '타워디펜스'],
  },


  // 점핑 프로그
  {
    id: 'p_jf',
    title: 'Jumping Frog',
    image: 'img/project/JumpingFrog/banner.gif',
    shortDescription: 'GDI+ 렌더링의 자체 2D 엔진으로 제작한 4일 단기 개인 프로젝트입니다.',
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://youtube.com/shorts/QO94xC8n9K8?si=Ik6yl80ONWKKu8Bc' }
    ],
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


<img src="img/project/JumpingFrog/3.png" alt="게임 이미지" style="width: 60%;" />
`,
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

<img src="img/project/JumpingFrog/4.png" alt="게임 이미지" style="width: 50%;" />
`,
          },
          {
            id: 'p_jf_highlight_3',
            title: '부드러운 카메라 트래킹',
            content: `유니티의 SmoothDamp 함수 로직을 참고하여 부드러운 카메라 트랙킹을 위한 Vector::SmoothDamp 함수를 작성하고 이를 통해 카메라가 캐릭터를 부드럽게 따라가도록 만들었습니다.`,
          },
        ],
      },
    ],
    technologies: ['2D 자체엔진', '싱글플레이', '플랫포머', '점프킹'],
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



// <25-11-17> 강점과 역량으로 변경
export const LEARNING_JOURNEY_DATA = {
  title: "성장 여정", // not use
  subTitle: "", // not use
  sections: [
    {
      id: 'lj-1',
      subTitle: "빠르게 성장하고, 꾸준히 성실합니다",
      paragraphs: [
        "게임인재원에 다니면서 성적 1등을 놓치지 않았고, 늘 최선을 다하며 높은 성취도를 보여 교수님들께 신임을 얻었습니다. 그 결과 2024년 일본 TGS, 2025년 독일 게임스컴 견학 기회도 얻을 수 있었습니다.",
        "'빠른 성장'과 '꾸준함'은 저의 가장 강력한 무기입니다. 무엇을 시켜주셔도 끝까지 매달려 완성도를 갖춘 결과물을 만들어보이겠습니다.",
        // "C/C++, 선형대수학, 게임 알고리즘, 셰이더, 컴퓨터 그래픽스 기술들의 원리와 실무 지식, 고수준 렌더링 기술, 게임 엔진의 동작 원리, 효율적인 설계법과 최적화 기법, SIMD에 이르기까지 게임을 제작하는데 필요한 기초와 심화 지식을 익히고 실습했습니다.",
        // "또한 네 차례의 단기 팀 프로젝트와 한 차례의 장기 팀 프로젝트를 경험하며 게임을 만들며 협업을 하는 방법과 노하우를 익혔고, "
      ],
      images: [
        "img/etc/gamescom2025.png",
      ],
      // button: {
      //   text: "공부 기록 보러가기",
      //   description: "기술 블로그에서 수 백 페이지의 공부 기록을 구경해보세요.",
      //   link: ""
      // }
    },
    {
      id: 'lj-2',
      subTitle: "자체엔진과 상용엔진, 모두 다룰 수 있습니다",
      paragraphs: [
        "Direct3D11로 제작한 렌더러, HLSL로 작성한 PBR·IBL 렌더링, PhysX로 만든 물리 컴포넌트, 애니메이션 블렌딩, 포스트 프로세싱 등 바닥부터 하나씩 공부해가며 자체 엔진을 만들고 실제 게임 제작에 사용해보았습니다.",
        "또한 8개월간 언리얼 엔진을 공부하고 게임을 만들며 언리얼 엔진에 대한 이해도 터득했습니다.",
        "모든 과정은 호기심과 필요에 의해 스스로 부딪히고, 깨닫는 과정의 연속이었다고 자신있게 말씀드릴 수 있습니다. 단순한 따라하기가 아닌 생각하고 구현하는 힘을 길렀습니다."
      ],
      images: [
        "img/etc/PBR_IBL_EnvMap_Shadow_Animation.gif",
      ],
      // button: {
      //   text: "자체 엔진 개발기 보러가기",
      //   description: "자체 엔진을 발전시켜나가며 깨달은 것과 부딪혔던 난관을 해결해나간 과정이 적혀있습니다.",
      //   link: ""
      // }
    },
    // {
    //   id: 'lj-3',
    //   subTitle: "존중하는 법과 신뢰를 얻는 방법을 압니다",
    //   paragraphs: [
    //     "뭐지",
    //     "게임인재원 팀 프로젝트에서 수 차례 프로그래밍 팀장을 맡아 팀을 이끌었으며, 적극적으로 소통하고 솔선수범하며 좋은 게임을 만들기 위해 노력했습니다.",
    //     "제가 가진 지론은 타인을 존중해야 내가 존중받을 수 있고, 내가 할 수 있는 일을 묵묵히 하는 것만이 스스로의 "
    //   ],
    //   images: [
    //     "img/etc/games.png",
    //   ],
    //   // button: {
    //   //   text: "언리얼 엔진 공부 및 구현 기록 보러가기",
    //   //   description: "언리얼 엔진의 동작 방식과 네트워크 플로우에 대한 분석, GAS를 사용한 게임 기반의 제작, 커스텀 에디터 UI와 동적으로 생성되는 던전과 미니맵 등 수 많은 구현 기록들을 보실 수 있습니다.",
    //   //   link: "https://github.com/yourusername/blog/tag/growth"
    //   // }
    // }
    // 소통능력, 명확한 의사전달 어필? ~ AI 시대에도 필요한 능력
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
    category: "Experience",
    skills: ["여러 차례의 팀 프로젝트", "여러 차례의 팀장 경험"],
    icon: (props) => <ChartBarIcon {...props} />,
  },
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
    skills: ["3D 게임수학", "Direct3D12 기초", "게임 디자인 패턴", "Unreal Performance Profiling"],
    icon: (props) => <AcademicCapIcon {...props} />,
  }
];




export const ChartBarIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);


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