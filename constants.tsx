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
  title: "신입 클라이언트 개발자",
  birthDate: "1998.12.06",
  academic: [
    "서울과학기술대학교 행정학 학사 (2017.03 - 2023.08)",
    "건국대학교 사범대학 부속 고등학교 졸업 (2014.03 ~ 2017.02)"
  ],
  education: [
    "한국콘텐츠진흥원 게임인재원 6기 프로그래밍 학과 (2024.03 ~ )",
  ],
  phone: "010-2870-5895",
  email: "gunandjerry@gmail.com",
  github: "https://github.com/gunandjerry",
  blog: "https://gunandjerry.github.io/gunandjerry_blog/",//"https://ddodigi.tistory.com/",
  photo: "img/profile/face.png"
};


//<video-gif src="https://www.w3schools.com/html/mov_bbb.mp4" title="PhysX Simulation Demo" />

export const PROJECTS_DATA = [
  // F급 헌터 생존기
  {
    id: 'p_fh',
    isMain: true,
    title: 'F급 헌터 생존기',
    technologies: ['언리얼5', '언리얼 네트워크', '4인 멀티플레이', '1인칭', '리썰라이크', '생존'],
    images: [
        'img/project/FRankSurvivor/Banner.mp4',
    ],
    shortDescription: '언리얼엔진5로 제작한 6개월 중장기 팀 프로젝트로, 던전 안으로 들어가 크리쳐를 피하며 자원을 채굴하는 리썰라이크 류의 협동 생존 게임입니다.',
    implementationFeatures: ['절차적 맵 생성', '동적 미니맵 렌더링', '에디터 커스텀', 'GAS 기반 시스템', '1/3인칭 분리 및 모션 동기화', '부분 파괴 가능한 오브젝트', '메타휴먼 다루기'],
    longDescription: [
      {
        id: 'p_fh_overview',
        title: '프로젝트 개요',
        content: `<table>
  <tr>
    <td>제작기간</td>
    <td>7개월</td>
  </tr>
  <tr>
    <td>제작인원</td>
    <td>개발 4인 / 아트 1인 / 기획 2인</td>
  </tr>
  <tr>
    <td>사용엔진</td>
    <td>언리얼 엔진 5</td>
  </tr>
  <tr>
    <td>맡은역할</td>
    <td>프로그래밍 팀장, 컨텐츠 개발 등</td>
  </tr>
</table>
`,
        showDivider: true,
        // buttons: [
        //       {
        //           text: '영상 보러가기',
        //           link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EB%8F%99%EC%A0%81-%EC%83%9D%EC%84%B1-%EB%AF%B8%EB%8B%88%EB%A7%B5.html',
        //           type: 'live'
        //       }
        // ],
      },
      {
        id: 'p_fh_highlight',
        title: '주요 구현 내용',
        subSections: [
          {
            id: 'p_fh_highlight_gas',
            title: 'GAS 기반 시스템',
            content: `저희 게임에는 육성 요소가 있고 여러 아이템, 특수능력마다 <b>의존성이 분리된</b> 독립적인 로직을 구현할 필요가 있어 Gameplay Ability System을 적극적으로 사용하였습니다.


▶ 사례1: 효율적인 태그 구조

GameplayTag를 통해 플레이어의 상태를 나타낼 때 어떻게 하면 의존성을 줄일 수 있을지 고민했습니다.

예컨대 플레이어의 특정한 행동을 막는 각각의 태그들을 수평적으로 늘어놓고 운용하게 되면 이들을 모두 일일이 관리해줘야 해 유지보수가 어려워질 수밖에 없었습니다.

대신 <b>상위 태그가 하위 태그의 개념을 포괄하는 계층 구조</b>를 설계하여 사용할 태그의 레벨을 선택할 수 있게 함으로써 의존성을 훨씬 줄일 수 있었습니다.

<img src="img/project/FRankSurvivor/gas1.png" alt="본문 이미지" style="width: 80%;" />

▶ 사례2: 자동으로 계산되는 스테이터스

플레이어의 스테이터스는 (1) 기반이 되는 1차 스탯과 (2) 1차 스탯을 계산식에 사용하는 2차 스탯으로 나뉩니다.
처음엔 어트리뷰트 세트의 소스코드에서 1차 스탯이 변할 때 2차 스탯을 갱신하는 방법을 사용했으나, 얼마 안 가 다음과 같은 문제가 발생했습니다.

1. 기획에서 2차 스탯의 계산식을 바꿔가며 테스트하기 어려움
2. 어트리뷰트 세트 클래스가 비대해져 유지보수가 어려워짐

따라서 기존의 로직 대신 1차 스탯의 변화를 추적하는 <b>Mod Magnitude Calculation</b>을 사용해 2차 스탯을 갱신시키는 Infinite GE를 사용하였습니다.
이를 통해 각각의 2차 스탯 계산식을 분리할 수 있었음은 물론 블루프린트로 기획에서도 계산식을 쉽게 수정하며 테스트할 수 있었습니다.


▶ 사례3: 디커플링된 로직들

GAS를 적극적으로 사용하는 것으로 의존성을 크게 줄일 수 있었습니다.
먼저 플레이어의 행동들은 모두 개별적인 Gameplay Ability로 작성하였으며, 이 때 다음의 원칙을 지켰습니다.

1. 동작의 주체로부터 호출되어야 하는 로직들은 기능 단위로 최대한 분리 / 여러 종류의 GA에서 범용적으로 사용할 수 있도록 함.
2. GA의 발동에 필요한 데이터는 최대한 발동 시점에 복사 또는 const 참조로 전달.
3. InputID 또는 Trigger tag를 사용해 GA를 발동시킴으로써 발동 주체가 개별 GA에 대해 몰라도 되도록 함.

여기에 더해 <a target="_blank" href="https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%96%B4%EB%B9%8C%EB%A6%AC%ED%8B%B0-%ED%83%9C%EC%8A%A4%ED%81%AC.html">커스텀 GameplayAbilityTask를 작성</a>하여 GA 코드 자체도 깔끔하게 정리할 수 있었습니다.
`,
            // buttons: [
            //   {
            //       text: '블로그: 효율적인 태그 구조에 대한 공부',
            //       link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%EC%96%B8%EB%A6%AC%EC%96%BC-%EC%97%94%EC%A7%84/%ED%8C%81%EA%B3%BC-%EB%85%B8%ED%95%98%EC%9A%B0/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EA%B2%8C%EC%9E%84%ED%94%8C%EB%A0%88%EC%9D%B4-%ED%83%9C%EA%B7%B8-%EA%B5%AC%EC%A1%B0.html',
            //       type: 'blog'
            //   },
            //   {
            //       text: '블로그: 커스텀 어빌리티 태스크 작성하기',
            //       link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EB%AA%A9%EB%A1%9D/%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%96%B4%EB%B9%8C%EB%A6%AC%ED%8B%B0-%ED%83%9C%EC%8A%A4%ED%81%AC.html',
            //       type: 'blog'
            //   },
            // ],
          },
          {
            id: 'p_fh_highlight_procedural_dungeon',
            title: '랜덤 맵 생성',
            content: `플레이어들이 매번 새로운 구조의 던전을 경험할 수 있도록 <a target="_blank" href="https://github.com/BenPyton/ProceduralDungeon">절차적 레벨 스트리밍 오픈소스 플러그인(BenPyton/ProceduralDungeon v3.5.1/MIT License)</a>을 기반으로 <b>랜덤하게 생성되는 던전</b>을 구현하였습니다.

플러그인이 제공하는 기능만으론 원하는 바를 구현할 수 없었기 때문에 먼저 <a target="_blank" href="https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EC%B0%B8%EA%B3%A0%EC%9E%90%EB%A3%8C/procedural-dungeon-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EB%B6%84%EC%84%9D.html">플러그인의 구조를 분석</a>하여 기능을 확장시켰습니다.

<collapsible title="오픈소스 플러그인 원본 구조 (클릭하여 펼치기)">
<img src="img/project/FRankSurvivor/pd1.png" alt="본문 이미지" style="width: 90%;" />
</collapsible>
<collapsible title="확장된 구조 (클릭하여 펼치기)">
<img src="img/project/FRankSurvivor/pd2.png" alt="본문 이미지" style="width: 90%;" />
</collapsible>
방과 방의 세부적인 연결 규칙을 설정하거나, 필수 룸을 던전 전체에 퍼트리거나, 통로의 타입과 디자인을 결정할 수 있도록 하는 등 여러 기능을 확장하였습니다.

<video-gif src="img/project/FRankSurvivor/RandomMapGen.mp4" title="demo" width="30%"/>`,
          },
          {
            id: 'p_fh_highlight_dynamic_minimap_rendering',
            title: '실시간 미니맵 렌더링',
            content: `던전이 절차적으로 생성되는 만큼 미니맵도 <b>동적으로 렌더링</b>되어야 했습니다.
기획측에선 (1) R.E.P.O 스타일의 미니멀한 느낌을 줄 것, (2) 방문하지 않은 룸의 구조를 가릴 것, (3) 다른 플레이어를 아이콘으로 트래킹 할 것, (4) 층계를 구분할 수 있을 것을 요구했습니다.


▶ 색상값 활용하기

렌더 타겟에 그려지는 방 도식의 색상값을 이용하는 아이디어가 떠올랐고 다음의 방법으로 R.E.P.O 스타일의 추상화된 미니맵을 그릴 수 있었습니다.

- 누군가 방문한 방은 고유한 R 값을 배정받음.
- 인근 픽셀과 R값의 오차가 발생하는 곳에 아웃라인을 그림.
- G값은 문 등 다른 요소에 대한 정보로 사용함.

<collapsible title="미니맵이 그려지는 과정 (클릭하여 펼치기)">렌더 타겟에 1차적으로 그려진 미니맵

<img src="img/project/FRankSurvivor/minimap1.png" alt="본문 이미지" style="width: 30%;" />

머터리얼을 통해 가공합니다.

<img src="img/project/FRankSurvivor/minimap2.png" alt="본문 이미지" style="width: 70%;" />

<img src="img/project/FRankSurvivor/minimap3.png" alt="본문 이미지" style="width: 30%;" />
</collapsible>

▶ 층계 구분하기

던전은 여러 층계로 이루어질 수 있었기에 던전이 사용하는 그리드 상 한 칸의 높이를 층의 높이로 정의한 뒤, 월드 공간에서 각 룸마다 최소 층과 최대 층이 몇 층인지 계산했습니다.

<img src="img/project/FRankSurvivor/minimap4.png" alt="본문 이미지" style="width: 40%;" />

이후 미니맵을 그릴 때 로컬 플레이어의 무릎 정도의 높이를 기준으로 층을 판별한 뒤 해당 층에 존재하는 룸들을 추려 그리도록 했습니다. 이 때 각 층에서 해당 룸을 그릴 지 말 지, 그려져야 한다면 어떤 모양으로 그릴 지 커스텀이 가능하게 하여 유연성을 제공하였습니다.


<img src="img/project/FRankSurvivor/3.gif" alt="본문 이미지" style="width: 30%;" />`,
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
            content: `던전 생성, 인테리어 과정에서 아트와 기획의 의도를 반영하기 위해 다양한 옵션을 제공하였는데, Details 패널의 기본 레이아웃은 한 눈에 현황을 파악하기 어려웠습니다.

<img src="img/project/FRankSurvivor/detail1.png" alt="본문 이미지" style="width: 60%;" />

이에 에디터 편집용 모듈을 추가하고 FPropertyEditorModule에 커스텀 프로퍼티 레이아웃을 추가하여 모든 프로퍼티를 인덱스 헤더의 ValueContent에 나열하도록 수정하였습니다.

<img src="img/project/FRankSurvivor/details2.png" alt="본문 이미지" style="width: 60%;" />

이를 통해 구성 현황을 한 눈에 파악하여 옵션을 변경하기가 매우 편리해질 수 있었습니다.
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
            id: 'p_fh_highlight_etc',
            title: '기타 컨텐츠 구현',
            content: `이외에도 인게임 컨텐츠의 절반 이상을 구현하였습니다.

▶ 메타휴먼 캐릭터 이펙트
메타휴먼이 사용하는 머터리얼을 수정하여 Dissolving 이펙트 등을 구현하였습니다. 별개의 렌더링 프로세스를 사용하는 UGroomComponent의 경우 Opacity를 적용할 수 없어 적절한 시점에 Visiblity를 끄는 방식으로 구현되었습니다.

<img src="img/project/FRankSurvivor/5.gif" alt="본문 이미지" style="width: 30%;" />

▶ 스태미너 시스템, Movement Component 확장
CharacterMovementComponent를 확장하여 스프린트 모드를 추가하고, 스프린트 중에 스태미너를 감소시키는 시스템을제작하였습니다.

<video-gif src="img/project/FRankSurvivor/StaminaSystem.mp4" title="demo" width="30%"/>

▶ 1/3인칭 애니메이션의 분리와 착용장비 · 모션 동기화
플레이어의 애니메이션은 로컬 시점(1인칭)과 타자 시점(3인칭)을 분리하여 제작하였습니다.

<video-gif src="img/project/FRankSurvivor/animsync.mp4" title="demo" width="70%"/>

▶ 상호작용 시스템
멀티 키를 받고 짧게 누르기 / 길게 누르기 분기가 가능한 상호작용 시스템을 제작하였습니다.
스텐실 값을 Opacity로 활용하여 상호작용 가능한 오브젝트에 대해 부드럽게 등장하고 사라지는 아웃라인을 구현하였습니다.

<img src="img/project/FRankSurvivor/7.gif" alt="본문 이미지" style="width: 30%;" />

▶ 시각적 이펙트 개선하기
FloatCurve를 따라 카메라의 Rotation, Pov 값을 조절하는 커스텀 카메라 쉐이크, 플레이어의 뷰포트 크기로 생성되어 카메라를 따라다니는 Vignette Effect Manager를 제작하였습니다.

<video-gif src="img/project/FRankSurvivor/VisualEffect.mp4" title="demo" width="30%"/>

▶ 사운드 매니저
TMap을 사용해 사운드의 재생/정지를 임의로 관리하고 AIPerception 컴포넌트가 감지할 수 있는 노이즈를 발생시키는 전역 매니저 객체를 제작하였습니다.


▶ 파괴 가능한 오브젝트
카오스 디스트럭션 시스템을 사용하여 플레이어의 공격에 의해 파괴되는 오브젝트를 제작하였습니다.

<video-gif src="img/project/FRankSurvivor/ChaosDestruction.mp4" title="demo" width="30%"/>

▶ 플레이어와 상호작용하는 오브젝트
MediaPlayer를 사용한 튜토리얼 영상을 재생하는 TV 등 플레이어와 상호작용하여 움직이는 다양한 액터를 제작하였습니다.

<video-gif src="img/project/FRankSurvivor/InteractableObjects.mp4" title="demo" width="30%"/>

▶ PhysicsConstraint를 활용한 문과 상자

<video-gif src="img/project/FRankSurvivor/door.mp4" title="demo" width="40%"/>

▶ 랜덤 프롭 배치 포인트 / 미리보기

<video-gif src="img/project/FRankSurvivor/spawnpoint.mp4" title="demo" width="70%"/>`,
          },
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_bottom',
        title: '더보기',
        content: ``,
        showDivider: false,
      },
    ],
    links: [
        { type: 'blog', text: '언리얼 엔진 공부 기록', link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%EC%96%B8%EB%A6%AC%EC%96%BC-%EC%97%94%EC%A7%84/%EC%96%B8%EB%A6%AC%EC%96%BC-%EC%97%94%EC%A7%84-%EA%B3%B5%EB%B6%80-%EA%B8%B0%EB%A1%9D-%EC%9D%B8%EB%8D%B1%EC%8A%A4.html' },
        { type: 'blog', text: 'F급 헌터 생존기 구현 기록', link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%A1%9D-%EC%9D%B8%EB%8D%B1%EC%8A%A4.html' },
        { type: 'blog', text: 'F급 헌터 생존기 디버깅 기록', link: 'https://gunandjerry.github.io/gunandjerry_blog/0-%EB%B0%9C%ED%96%89%EC%99%84%EB%A3%8C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/2504_f%EA%B8%89%ED%97%8C%ED%84%B0%EC%83%9D%EC%A1%B4%EA%B8%B0/%EB%94%94%EB%B2%84%EA%B9%85-%EA%B8%B0%EB%A1%9D-%EC%9D%B8%EB%8D%B1%EC%8A%A4.html' },
    ],
  },


  // 포션 아틀리에
  {
    id: 'p_pa',
    isMain: true,
    title: 'Potion Atlier',
    technologies: ['3D 자체엔진', '싱글플레이', '타이쿤', '캐쥬얼'],
    images: [
        'img/project/PotionAtlier/Banner.mp4',
    ],
    shortDescription: '3D 자체엔진으로 제작한 4주 단기 팀 프로젝트로, 포션을 제작해 판매하는 캐쥬얼한 타이쿤 게임입니다.',
    implementationFeatures: ['3D 자체엔진', 'PhysX 물리컴포넌트', 'UI 스텐실 마스킹', '상호작용과 QTE', '부드러운 조작', '튜토리얼'],
    longDescription: [
      {
        id: 'p_pa_overview',
        title: '프로젝트 개요',
        content: `<table>
  <tr>
    <td>제작기간</td>
    <td>4주일 (2025년 1월 ~ 2월)</td>
  </tr>
  <tr>
    <td>제작인원</td>
    <td>개발 4인 / 아트 3인 / 기획 3인</td>
  </tr>
  <tr>
    <td>사용엔진</td>
    <td>자체 3D 엔진</td>
  </tr>
  <tr>
    <td>맡은역할</td>
    <td>엔진 물리·UI 파트, 컨텐츠 전반</td>
  </tr>
</table>
`,
        showDivider: true,
      },
      {
        id: 'p_pa_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_pa_highlight_physics',
            title: 'PhysX 물리 컴포넌트',
            content: `<b>물리 컴포넌트</b>를 자유롭게 부착하는 것으로 PhysX의 기능을 쉽게 이용할 수 있도록 했습니다.

<img src="img/project/PotionAtlier/physComp.png" alt="본문 이미지" style="width: 80%;" />
컴포넌트의 부착 순서에 상관 없이 조합에 따라 적절한(Static 또는 Dynamic) PhysActor를 피직스 신에 생성하고, 게임 루프의 PhysicsUpdate를 추가하여 게임 신과 물리 신이 서로 소통할 수 있도록 구현하였습니다.


▶ 콜라이더

<video-gif src="img/project/PotionAtlier/BoxColliderOnly.mp4" title="demo" width="40%"/>
<a target="_blank" href="https://github.com/gunandjerry/PUBLIC_4Q_PotionAtlier/tree/01b088306917e6f32ddbfad98de669cd3c835712/D3D11_Engine/Source/Component/Collider">Capsule, Box, Sphere, Mesh 콜라이더 컴포넌트</a>를 구현하였습니다.

편의를 위해 Owner 오브젝트와 그 자식의 메쉬 바운드를 계산해 크기를 자동으로 조절할 수 있도록 했고, Mesh Collider 또한 PxCookTriangleMesh() 함수를 사용해 메쉬의 모양 그대로 콜라이더를 생성합니다.

또한 물리 레이어를 커스텀할 수 있도록 해 서로 충돌하지 않아야 하거나 씬 쿼리에서 제외되어야 할 경우를 처리할 수 있도록 했습니다.


▶ 캐릭터 컨트롤러, 리지드바디

<video-gif src="img/project/PotionAtlier/PlayerControllerOnly.mp4" title="demo" width="40%"/>
유니티를 모방하여 <a target="_blank" href="https://github.com/gunandjerry/PUBLIC_4Q_PotionAtlier/tree/01b088306917e6f32ddbfad98de669cd3c835712/D3D11_Engine/Source/Component/CharacterController">캐릭터를 조작하기 위한 캐릭터 컨트롤러</a>와 <a target="_blank" href="https://github.com/gunandjerry/PUBLIC_4Q_PotionAtlier/tree/01b088306917e6f32ddbfad98de669cd3c835712/D3D11_Engine/Source/Component/Rigidbody">물리적 성질을 다루기 위한 Rigidbody 컴포넌트</a>를 구현하였습니다.


▶ 씬 쿼리

<img src="img/project/PotionAtlier/6.gif" alt="본문 이미지" style="width: 35%;" />
<a target="_blank" href="https://github.com/gunandjerry/PUBLIC_4Q_PotionAtlier/blob/01b088306917e6f32ddbfad98de669cd3c835712/D3D11_Engine/Source/Physics/PhysicsManager.cpp#L283-L443">Raycast와 Sweep 쿼리를 구현</a>하였습니다. 플레이어의 상호작용은 Sweep 쿼리를 사용합니다.
`,
          },
          {
            id: 'p_pa_highlight_uistencil',
            title: 'UI 스텐실 마스킹',
            content: `UI 이미지의 둥근 모서리를 처리하기 위해 <b>커스텀 스텐실 버퍼</b>를 사용해 UI 마스킹을 구현하였습니다.
마스크로 사용될 텍스쳐는 렌더링되는 대신 스텐실 버퍼에 자신의 마스크 ID를 비트플래그로 기록하며, 이후 마스크 위에 그려지도록 설정된 텍스쳐는 스텐실 버퍼에 지정된 비트 플래그가 켜져있는 경우에만 그려집니다.

<img src="img/project/PotionAtlier/5.gif" alt="본문 이미지" style="width: 30%;" />`,
          },
          {
            id: 'p_pa_highlight_playermovement',
            title: '부드러운 조작감 구현하기',
            content: `캐릭터의 조작감이 너무 뻣뻣하다는 피드백을 받고 부드럽게 조작되는 인상을 주기 위해 다음과 같은 방법을 사용했습니다.
1. 이동 방향과 현재 바라보는 방향의 각도 차이가 클 수록 이동속도를 줄임.
2. 외적을 사용해 좌측과 우측 회전 중 이동 방향으로 빨리 도달할 수 있는 방향으로 회전함.
3. 대쉬를 사용하면 최종 이동량에 가중치로 곱연산을 가함.

<img src="img/project/PotionAtlier/movement.gif" alt="본문 이미지" style="width: 30%;" />`,
          },
          {
            id: 'p_pa_highlight_tutorial',
            title: '튜토리얼',
            content: `게임의 <b>메인 로직과 디커플링</b>된 튜토리얼 시스템을 구현하였습니다.

플레이어의 모든 동작을 기능 단위로 분리시킨 뒤, 플레이어의 행동마다 이벤트를 발생시켜 독립적으로 작동하는 튜토리얼 매니저가 해당 이벤트를 감지하여 튜토리얼을 진행시키는 방식입니다.

<video-gif src="img/project/PotionAtlier/Tutorial_PlayerController_Stamina.mp4" title="demo" width="50%"/>`,
          },
          {
            id: 'p_pa_highlight_etc',
            title: '기타 컨텐츠 구현',
            content: `요리 QTE, 대쉬와 스태미너, 상호작용 가능한 기물, 날아가는 노움 기믹, 말풍선과 텍스트 렌더링, UI 상호작용, 에디터 격자 배치 시스템 등 컨텐츠 전반을 개발하였습니다.
`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_pa_bottom',
        title: '더보기',
        content: ``,
        showDivider: false,
      },
    ],
    links: [
        { type: 'live', text: '게임플레이 영상', link: 'https://youtu.be/v2JbL4FlbQM?si=Go-37POIfkfaz-rR' }
    ],
  },



  // 레일웨이투헬
  {
    id: 'p_rh',
    isMain: true,
    title: 'Railway to Hell',
    technologies: ['2D 자체엔진', '싱글플레이', '전략', '퍼즐'],
    images: [
        'img/project/RailwayToHell/Banner.mp4',
    ],
    shortDescription: '2D 자체엔진으로 제작한 3주 단기 팀 프로젝트로, 타일 위치 이동으로 공격을 회피하거나 아군 공격을 유도해 적들을 물리치는 전략 퍼즐 게임입니다.',
    implementationFeatures: ['2D 자체엔진', '비동기 로딩', '입력처리, UI 상호작용', '카메라 쉐이크', '타이머 함수', '9-Sliced 이미지'],
    longDescription: [
      {
        id: 'p_rh_overview',
        title: '프로젝트 개요',
        content: `<table>
  <tr>
    <td>제작기간</td>
    <td>3주일 (2024년 8월)</td>
  </tr>
  <tr>
    <td>제작인원</td>
    <td>개발 3인 / 아트 3인 / 기획 2인</td>
  </tr>
  <tr>
    <td>사용엔진</td>
    <td>자체 2D 엔진</td>
  </tr>
  <tr>
    <td>맡은역할</td>
    <td>게임엔진, 조작, 플레이어, 게임플로우, 효과 등</td>
  </tr>
</table>
`,
        showDivider: true,
      },
      {
        id: 'p_rh_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_rh_highlight_1',
            title: '2D 게임 엔진',
            content: `<a target="_blank" href="https://github.com/gunandjerry/PUBLIC_DogeEngine/blob/4a592786e4cae2ae60b731c64f8e10d415fb24c6/DogeEngine/Core.cpp#L350-L386">게임루프부터</a> 렌더링(Direct2D), <a target="_blank" href="https://github.com/gunandjerry/PUBLIC_DogeEngine/blob/4a592786e4cae2ae60b731c64f8e10d415fb24c6/DogeEngine/InputManager.h">입력 처리</a>, <a target="_blank" href="https://github.com/gunandjerry/PUBLIC_DogeEngine/blob/4a592786e4cae2ae60b731c64f8e10d415fb24c6/DogeEngine/Camera.h">카메라 조작</a>, <a target="_blank" href="https://github.com/gunandjerry/PUBLIC_DogeEngine/blob/4a592786e4cae2ae60b731c64f8e10d415fb24c6/DogeEngine/AudioManager.h">사운드 시스템(FMOD)</a>, <a target="_blank" href="https://github.com/gunandjerry/PUBLIC_DogeEngine/blob/4a592786e4cae2ae60b731c64f8e10d415fb24c6/DogeEngine/Animation2D.h">스프라이트 애니메이션</a> 등 게임 제작에 필요한 기능들을 모두 직접 제작하였습니다.
`,
          },
          {
            id: 'p_rh_highlight_2',
            title: '게임 플로우 / 액션',
            content: `게임은 (1) 적들의 행동을 결정 (2) 플레이어의 행동 수행 (3) 속도가 빠른 순으로 적들이 미리 결정된 행동을 수행하는 방식으로 진행됩니다.

전체 진행은 간단한 커맨드 큐를 통해 구현되어 있으며, 매 순서마다 수행하는 동작은 미리 구현해둔 범용 조작 함수를 조합하여 쉽게 구현할 수 있도록 하였습니다.

<video-gif src="img/project/RailwayToHell/GameFlow.mp4" title="demo" width="50%"/>`,
          },
          {
            id: 'p_rh_highlight_3',
            title: '타이머 함수를 통한 딜레이',
            content: `<a target="_blank" href="https://github.com/gunandjerry/PUBLIC_DogeEngine/blob/4a592786e4cae2ae60b731c64f8e10d415fb24c6/DogeEngine/TimerFunctionManager.h">동작과 동작 사이에 적절한 딜레이를 넣거나 히트 스톱을 구현하기 위해 범용적으로 사용할 수 있는 타이머 함수를 구현</a>하였습니다.

주체가 되는 오브젝트에 달려 생성된 뒤 게임 루프 안에서 시간을 누적하다 등록된 함수를 호출하는 방식입니다.
`,
          },
          {
            id: 'p_rh_highlight_4',
            title: '9-Sliced 이미지',
            content: `말풍선, 튜토리얼 UI 등 텍스트 길이에 따라 적당하게 사이즈가 조절되는 UI가 필요하다는 요청을 받아 9-Sliced 이미지를 구현하였습니다.

DirectWrite를 사용해 그려지는 텍스트의 바운드 크기를 구해 말풍선 등의 크기를 적절하게 조절할 수 있습니다.

<video-gif src="img/project/RailwayToHell/9sliced.mp4" title="demo" width="50%"/>`,
          },
          {
            id: 'p_rh_highlight_etc',
            title: '기타 컨텐츠 구현',
            content: `▶ 유니티의 SmoothDamp를 모방하여 부드럽게 카메라를 흔드는 효과
▶ UI 렌더링 오더와 클릭 이벤트 처리
▶ 비동기 로딩 스크린 / 리소스 지연 로딩
▶ 화약통, 샹들리에 기믹 등
`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_bottom',
        title: '더보기',
        content: ``,
        showDivider: false,
      },
    ],
    links: [
        { type: 'live', text: '게임플레이 영상', link: 'https://youtu.be/H3ri3R9NwEg?si=Wt1hbTA5dwxCib-v' }
    ],
  },


  // 바운싱 이모지 게임
  {
    id: 'p_be',
    title: 'Bouncing Emoji Game',
    technologies: ['유니티', '싱글플레이', '퍼즐', '수박 게임'],
    image: 'img/project/BounceEmoji/banner.gif',
    shortDescription: '수박 게임에 말랑말랑한 탄성을 접목시킨 퍼즐 게임입니다. 유니티 엔진으로 제작한 개인 프로젝트입니다.',
    longDescription: [
      {
        id: 'p_be_overview',
        title: '프로젝트 개요',
        content: `<table>
  <tr>
    <td>제작기간</td>
    <td>1일</td>
  </tr>
  <tr>
    <td>제작인원</td>
    <td>1인</td>
  </tr>
  <tr>
    <td>사용엔진</td>
    <td>유니티엔진 2022</td>
  </tr>
</table>
`,
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

<img src="img/project/BounceEmoji/2.png" alt="게임 이미지" style="width: 30%;" />`,
          },
          {
            id: 'p_be_highlight_2',
            title: '이모지를 부드럽게 합치기',
            content: `이모지가 서로 충돌할 때, 두 이모지의 현재 레벨을 검사하여 같은 경우 더 큰 하나의 이모지로 부드럽게 합쳐지는 로직을 구현했습니다.

이모지가 하나로 합쳐진 뒤 주변의 이모지들이 자연스럽게 밀려나야 하기 때문에 합쳐질 두 이모지의 충돌점을 기준으로 여러 틱에 걸쳐 스케일링 애니메이션을 사용해 부드럽게 밀어내는 방법을 사용했습니다.

<img src="img/project/BounceEmoji/Sample.gif" alt="게임 이미지" style="width: 30%;" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_bottom',
        title: '더보기',
        content: ``,
        showDivider: false,
      },
    ],
    links: [
        { type: 'live', text: '게임플레이 영상', link: 'https://www.youtube.com/watch?v=1kLIHAhSvVM' }
    ],
  },


  // 드로잉 퍼즐
  {
    id: 'p_dp',
    title: 'Drawing Puzzle',
    technologies: ['유니티', '싱글플레이', '퍼즐'],
    image: 'img/project/DrawingPuzzle/banner.gif',
    shortDescription: '그려낸 모양에 물리를 입혀 퍼즐을 푸는 프로토타입 게임입니다. 유니티 엔진으로 제작한 개인 프로젝트입니다.',
    links: [
        { type: 'live', text: '유튜브 보러가기', link: 'https://www.youtube.com/watch?v=uH11PwM16ic' }
    ],
    longDescription: [
      {
        id: 'p_dp_overview',
        title: '프로젝트 개요',
        content: `<table>
  <tr>
    <td>제작기간</td>
    <td>4일</td>
  </tr>
  <tr>
    <td>제작인원</td>
    <td>1인</td>
  </tr>
  <tr>
    <td>사용엔진</td>
    <td>유니티엔진 2022</td>
  </tr>
</table>
`,
        showDivider: true,
      },
      {
        id: 'p_dp_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_dp_highlight_1',
            title: '실시간 라인 콜라이더',
            content: `Line Renderer를 이용하여 오브젝트를 그려내는 기능을 구현하였습니다.
커서의 위치를 추적해 일정 거리마다 포인트를 찍고, Line Renderer의 BakeMesh 메서드를 사용하였습니다.

이 때 단순히 메시 콜라이더를 사용하면 연산량이 너무 많아져 Polygon Collider를 생성한 뒤 <a target="_blank" href="https://www.h3xed.com/programming/automatically-create-polygon-collider-2d-from-2d-mesh-in-unity">Ramer-Douglas-Peucker 알고리즘</a>을 사용해 최적화했습니다.
`,
          },
          {
            id: 'p_dp_highlight_2',
            title: '라인 내부 판별 / Hinge Joint',
            content: `그려진 라인이 이루는 모양의 내부에 Hinge를 추가하는 기능을 구현하였습니다.
간단히 Hinge가 꽂힐 위치로부터 여러 방향으로 레이캐스팅을 수행하여 같은 라인과 충돌할 경우 내부라고 판단하는 방식입니다.
이 때 HingeJoint2D 컴포넌트는 가장 가까이에 있는 라인에 부착하고, 다른 겹쳐있는 라인은 HingeJoint2D를 통해 연결되도록 했습니다.

<img src="img/project/DrawingPuzzle/Hinge.gif" alt="게임 이미지" style="width: 40%;" />`,
          },
          {
            id: 'p_dp_highlight_3',
            title: '기타 컨텐츠',
            content: `고정되는 라인, 힘을 가하는 바람, 지우개 도구를 구현하였습니다.
라인을 그린 뒤 마우스를 떼지 않고 있으면 라인의 무게가 늘어나는 기능을 구현하였습니다.
`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_fh_bottom',
        title: '더보기',
        content: ``,
        showDivider: false,
      },
    ],
  },


  // 아포티카
  {
    id: 'p_ap',
    title: 'Aphotica',
    technologies: ['2D 자체엔진', '리듬', '퍼즐'],
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

문어의 이동 방향은 항상 사선방향으로 반사벡터 공식을 쓸 것도 없이 간단하게 반사된 뒤에 이동할 방향을 결정할 수 있습니다. 충돌이 발생하면 겹친 영역만큼 반사된 방향으로 밀어냄으로써 싱크 오차를 최소화하였습니다.

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
            content: `박자와 충돌 타이밍을 맞추기 위해 문어는 항상 일정한 속도로 이동해야만 했습니다. 그런데 문어의 충돌 애니메이션을 충돌 시점부터 재생하는 경우 이미 멀어지고 있을 때 충돌하는 애니메이션이 재생되는 문제가 있었습니다.

따라서 더 자연스러운 느낌을 주기 위해 얼마 후에 충돌한다는 정보를 미리 구해서 애니메이션을 예측 실행했습니다. 이 때 부드러운 애니메이션 전환을 위해선 우선 이전의 애니메이션 프레임이 모두 끝날 때까지 기다렸다가 실행해야 했고, 충돌 애니메이션이 실행될 수 있는 간격을 계산해 레이캐스팅을 통해 충돌하기 전에 애니메이션을 재생하도록 했습니다.

<img src="img/project/Aphotica/4.gif" alt="게임 이미지" style="width: 30%;" />

현재 프레임의 위치에 따라 캐스팅되는 레이의 길이가 달라집니다.`,
          }
        ],
      },
    ],
  },


  // 이모지 타워 디펜스
  {
    id: 'p_etd',
    title: 'Emoji Tower Defense',
    technologies: ['2D 자체엔진', '싱글플레이', '타워디펜스'],
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
            content: `각 직선 경로의 시작점, 끝점의 좌표를 기록하고 선형보간으로 이동, 보간계수가 1 이상이 되면 다음 직선 경로로 전환하는 방식으로 구현했습니다.

이 방식의 장점은 (1) 프레임이 어떻든 항상 경로 상에서만 이동하는 것이 보장되고, (2) 현재 위치를 예측하고 계산하는 것이 매우 쉽다는 점입니다.`,
          },
          {
            id: 'p_etd_highlight_2',
            title: '적의 위치 예측하여 사격하기',
            content: `거너와 같은 특정 타워는 자신이 발사한 총알의 속도를 고려하여 자신이 타겟팅한 적의 이동을 예측해 해당 방향으로 사격을 가해야 했습니다.

<img src="img/project/EmojiTowerDefense/3.png" alt="게임 이미지" style="width: 30%;" />

이 때 사격을 시작할 때의 거리와 총알의 속도를 계산하면 도달까지의 시간을 측정할 수 있고, 선형보간을 통해 이동하므로 그 시간만큼 지났을 때 적이 어디에 가있을지 쉽게 예측할 수 있었습니다. 거너는 이런 방식으로 적의 현재 위치가 아닌 미래의 위치에 사격을 가합니다.
`,
          },
          {
            id: 'p_etd_highlight_3',
            title: '공격 방법 결정하기',
            content: `모든 타워는 공격 범위 안에서 가장 앞에 있는 적, 가장 뒤에 있는 적, 가장 강한 적을 공격 대상으로 설정할 수 있습니다.
적 오브젝트의 콜라이더 컴포넌트들을 대상으로 공격 범위 영역에 충돌하는지 체크하고, 충돌하는 적 목록을 구한 뒤 경로상의 위치 정보와 레벨 정보를 통해 상황에 맞는 정렬을 수행하여 공격 대상을 결정하도록 하였습니다.`,
          }
        ],
        showDivider: false,
      },
//       {
//         id: 'p_etd_lesson',
//         title: '반성과 개선점',
//         subSections: [
//           {
//             id: 'p_etd_lesson_1',
//             title: '확장성 있는 설계 - 적과 효과를 분리시키기',
//             content: `글루 거너의 글루를 맞은 적은 일정한 시간동안 속도가 떨어져야 합니다. 이를 게임에서는 적 오브젝트가 직접 관리하게 했는데, 이러면 다른 방식으로 적에게 영향을 주는 타워나 효과를 추가한다고 할 때마다 매번 적 클래스를 수정해야만 할 것입니다.

// 대신 '효과'를 주관하는 인스턴스를 생성해볼 수 있을 것입니다. 이러한 인스턴스는 전역적으로 존재하는 관리자를 통해 혹은 적 오브젝트의 배열에 담겨 존재하게끔 하고, 시간이 만료되었을 때 알아서 가리키는 적의 속도를 복구시키는 방식으로 작동하면 됩니다.
// 이런 방법을 사용하면 어떤 효과나 공격이 새로 추가되던 적이 가지고 있어야 할 어트리뷰트만 가지고 있다면, 이를 수정하는 효과 인스턴스를 만드는 방식으로 쉽게 확장이 가능해집니다.`,
//           }
//         ],
//       },
    ],
  },


  // 점핑 프로그
  {
    id: 'p_jf',
    title: 'Jumping Frog',
    technologies: ['2D 자체엔진', '싱글플레이', '플랫포머', '점프킹'],
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
`,
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
충돌이 발생하면 겹친 영역을 구해 그 반대 방향으로 밀어내는 방식입니다.

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

export const PlayIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);