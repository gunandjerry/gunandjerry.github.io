import React from 'react';

export const STRING_TABLE = {
  header_navigation_profile: "프로필",
  header_navigation_project: "프로젝트",
  header_navigation_journey: "성장여정",
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
    title: 'Railway to Hell (2024.08)',
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
      },
    ],
    technologies: ['자체엔진', 'C++17', 'Direct2D', 'WinAPI', 'FMOD', '2D 게임수학'],
    liveLink: 'https://youtu.be/H3ri3R9NwEg?si=e5JUkvO0QaWvkzq2',
  },




  {
    id: 'p_ap',
    title: 'Aphotica (2024.05)',
    image: 'img/project/ap/1.png',
    shortDescription: '2D 자체엔진으로 제작한 퍼즐 게임. 2주 단기 팀 프로젝트입니다.',
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

<b><a href="https://youtu.be/_Xx173pg2-g?si=wAt_g96_a6mW3o6v" target="_blank" rel="noopener noreferrer">[플레이 영상 바로가기 (Youtube 링크)]</a></b>

`,
        subSections: [
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
▶ 클라이언트 전반 (튜토리얼 제외)


<img src="img/project/ap/2.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
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

<img src="img/project/ap/3.gif" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
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

<img src="img/project/ap/4.gif" alt="게임 이미지" style="display: block; width: 30%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />
현재 프레임의 위치에 따라 캐스팅되는 레이의 길이가 달라집니다.`,
          }
        ],
      },
    ],
    technologies: ['자체엔진', 'C++14', 'GDI+', 'WinAPI', 'FMOD', '2D 게임수학'],
    liveLink: 'https://youtu.be/_Xx173pg2-g?si=wAt_g96_a6mW3o6v',
  },




  {
    id: 'p_etd',
    title: 'Emoji Tower Defense (2024.06)',
    image: 'img/project/etd/1.png',
    shortDescription: '2D 자체엔진으로 제작한 전략, 디펜스 게임. 8일 단기 개인 프로젝트입니다.',
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

<b><a href="https://youtu.be/GL2G-A6hkHw?si=BzvAoH8c2fRC3Pie" target="_blank" rel="noopener noreferrer">[플레이 영상 바로가기 (Youtube 링크)]</a></b>

`,
        subSections: [
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


<img src="img/project/etd/2.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
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

<img src="img/project/etd/3.png" alt="게임 이미지" style="display: block; width: 40%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />
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
    technologies: ['자체엔진', 'C++17', 'Direct2D', 'WinAPI', 'FMOD', '2D 게임수학'],
    liveLink: 'https://youtu.be/GL2G-A6hkHw?si=BzvAoH8c2fRC3Pie',
  },





  {
    id: 'p_jf',
    title: 'Jumping Frog (2024.04)',
    image: 'img/project/jf/1.png',
    shortDescription: '2D 자체엔진으로 제작한 플랫포머 게임. 4일 단기 개인 프로젝트입니다.',
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

<b><a href="https://youtube.com/shorts/QO94xC8n9K8?si=Ik6yl80ONWKKu8Bc" target="_blank" rel="noopener noreferrer">[플레이 영상 바로가기 (Youtube 링크)]</a></b>

`,
        subSections: [
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


<img src="img/project/jf/3.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
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

<img src="img/project/jf/4.png" alt="게임 이미지" style="display: block; width: 50%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          },
          {
            id: 'p_jf_highlight_3',
            title: '부드러운 카메라 트래킹',
            content: `유니티의 SmoothDamp 함수 로직을 참고하여 부드러운 카메라 트랙킹을 위한 Vector::SmoothDamp 함수를 작성하고 이를 통해 카메라가 캐릭터를 부드럽게 따라가도록 만들었습니다.`,
          },
        ],
      },
    ],
    technologies: ['자체엔진', 'C++14', 'GDI+', 'WinAPI', 'FMOD', '2D 게임수학'],
    liveLink: 'https://youtube.com/shorts/QO94xC8n9K8?si=Ik6yl80ONWKKu8Bc',
  },





  {
    id: 'p_xx',
    title: '',
    image: 'img/project/',
    shortDescription: '2D 자체엔진으로 제작한 전략, 퍼즐 게임. 3주 단기 팀 프로젝트입니다.',
    longDescription: [
      {
        id: 'p_xx_overview',
        title: '프로젝트 개요',
        content: `제목: 
장르: 
개발기간: 
개발인원: 
사용엔진: 
플랫폼: PC, Window

<b><a href="" target="_blank" rel="noopener noreferrer">[플레이 영상 바로가기 (Youtube 링크)]</a></b>

`,
        subSections: [
          {
            id: 'p_xx_overview_desc',
            title: '게임 소개',
            content: ``,
          },
          {
            id: 'p_xx_overview_role',
            title: '맡은 역할',
            content: `▶


<img src="img/project/.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_xx_highlight',
        title: '제작 과정 & 구현 과제',
        subSections: [
          {
            id: 'p_xx_highlight_x',
            title: '',
            content: ``,
          }
        ],
        showDivider: true,
      },
      {
        id: 'p_xx_lesson',
        title: '반성과 개선점',
        subSections: [
          {
            id: 'p_xx_lesson_x',
            title: '',
            content: ``,
          }
        ],
      },
    ],
    technologies: ['자체엔진', 'C++17', 'Direct2D', 'WinAPI', 'FMOD', '2D 게임수학'],
    liveLink: 'https://youtu.be/H3ri3R9NwEg?si=e5JUkvO0QaWvkzq2',
  }





// {
//     id: 'p_xx',
//     title: '',
//     image: 'img/project/',
//     shortDescription: '2D 자체엔진으로 제작한 전략, 퍼즐 게임. 3주 단기 팀 프로젝트입니다.',
//     longDescription: [
//       {
//         id: 'p_xx_overview',
//         title: '프로젝트 개요',
//         content: `제목: 
// 장르: 
// 개발기간: 
// 개발인원: 
// 사용엔진: 
// 플랫폼: PC, Window

// <b><a href="" target="_blank" rel="noopener noreferrer">[플레이 영상 바로가기 (Youtube 링크)]</a></b>

// `,
//         subSections: [
//           {
//             id: 'p_xx_overview_desc',
//             title: '게임 소개',
//             content: ``,
//           },
//           {
//             id: 'p_xx_overview_role',
//             title: '맡은 역할',
//             content: `▶
// <img src="img/project/.png" alt="게임 이미지" style="display: block; width: 100%; height: auto; margin-top: 1rem; margin-bottom: 1rem; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" />`,
//           }
//         ],
//         showDivider: true,
//       },
//       {
//         id: 'p_xx_highlight',
//         title: '제작 과정 & 구현 과제',
//         subSections: [
//           {
//             id: 'p_xx_highlight_x',
//             title: '',
//             content: ``,
//           }
//         ],
//       },
//       {
//         id: 'p_xx_lesson',
//         title: '반성과 개선점',
//         subSections: [
//           {
//             id: 'p_xx_lesson_x',
//             title: '',
//             content: ``,
//           }
//         ],
//       },
//     ],
//     technologies: ['자체엔진', 'C++17', 'Direct2D', 'WinAPI', 'FMOD', '2D 게임수학'],
//     liveLink: 'https://youtu.be/H3ri3R9NwEg?si=e5JUkvO0QaWvkzq2',
//   },
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