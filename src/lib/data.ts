import type { Question, TypeDescription, MABTIType } from './types';

// M(A)BTI 질문 데이터
export const questions: Question[] = [
  {
    id: 1,
    type: 'select',
    text: "마인크래프트에서 새로운 서버에 처음 접속했을 때 가장 먼저 하는 일은?",
    choices: [
      {
        id: 1,
        text: "조용히 스폰 주변을 탐색하며 혼자 정착지를 찾아본다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 5 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "채팅으로 다른 플레이어들에게 인사하며 정보를 얻는다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 3,
        text: "근처 플레이어 몇 명과 소규모 그룹을 만들어 함께 시작한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 3 },
          { axis: 'EI', pole: 'I', score: 2 }
        ]
      },
      {
        id: 4,
        text: "서버 규칙과 시스템을 먼저 파악한 후 계획을 세운다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 3 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      },
      {
        id: 5,
        text: "전체 채팅에서 활발히 소통하며 많은 사람들과 친해진다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'select',
    text: "마인크래프트에서 레드스톤 회로를 배울 때 선호하는 방식은?",
    subtext: "레드스톤 회로란? 기계를 만드는 핵심 도구로 기계의 부품들이 움직이도록 설계하는 것이다",
    choices: [
      {
        id: 1,
        text: "기본 구성 요소부터 차근차근 실습하며 익힌다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 2,
        text: "전체적인 원리를 이해하고 새로운 회로를 창조해본다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "유튜브 튜토리얼을 보며 단계별로 따라 만든다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 4,
        text: "기존 회로를 분석하며 더 나은 설계를 구상한다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 5,
        text: "검증된 회로 설계를 그대로 활용한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'select',
    text: "마인크래프트에서 팀 프로젝트 중 의견 충돌이 생겼을 때 어떻게 해결하나요?",
    choices: [
      {
        id: 1,
        text: "객관적 근거와 효율성을 바탕으로 논리적으로 설득한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "모든 팀원의 마음을 헤아려 타협점을 찾는다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "데이터와 사실을 제시하여 명확한 기준을 세운다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "팀 분위기를 중시하며 화합을 우선시한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "각자의 가치관을 존중하며 개별적으로 소통한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'select',
    text: "마인크래프트에서 대규모 건축 프로젝트를 시작할 때의 접근 방식은?",
    choices: [
      {
        id: 1,
        text: "상세한 설계도를 그리고 일정을 세워 체계적으로 진행한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 5 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 2,
        text: "대략적인 콘셉트만 정하고 즉흥적으로 만들어간다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 5 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      },
      {
        id: 3,
        text: "기본 골격을 정하되 세부사항은 진행하며 결정한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 3 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      },
      {
        id: 4,
        text: "단계별 목표를 설정하고 진도를 체크하며 관리한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 5,
        text: "마감일 없이 영감이 떠오를 때마다 조금씩 작업한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 4 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      }
    ]
  },
  {
    id: 5,
    type: 'select',
    text: "마인크래프트에서 PvP 상황에 직면했을 때의 판단 기준은?",
    choices: [
      {
        id: 1,
        text: "승률과 전략적 우위를 냉정하게 계산한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "상대방의 상황을 고려하여 행동한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "게임 규칙과 공정성에 따라 합리적으로 대응한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "서로 즐거울 수 있는 방향으로 플레이한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "내 가치관에 맞는 방식으로 플레이한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'select',
    text: "마인크래프트에서 새로운 바이옴을 발견했을 때 가장 먼저 드는 생각은?",
    choices: [
      {
        id: 1,
        text: "이곳에서 얻을 수 있는 자원과 활용도를 파악한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 2,
        text: "이 바이옴만의 독특한 건축 스타일을 상상해본다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "실용적인 전초기지를 세울 최적의 위치를 찾는다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 4,
        text: "키우는 강아지와 오슬렛이 바이옴 풍경과 어울릴지 생각해본다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 5,
        text: "환경의 특성을 분석하며 체계적으로 탐사한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      }
    ]
  },
  {
    id: 7,
    type: 'select',
    text: "마인크래프트에서 긴 플레이 세션 후 휴식이 필요할 때는?",
    choices: [
      {
        id: 1,
        text: "혼자 조용한 곳에서 인테리어나 정리 작업을 한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 5 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "친구들과 수다를 떨며 캐주얼한 미니게임을 즐긴다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 3,
        text: "쉴 수 없다. 친한 친구와 둘이서 차분히 협동 작업을 한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 4 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      },
      {
        id: 4,
        text: "새로운 플레이어들과 만나 다른 이벤트에 참여한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 5,
        text: "개인 공간에서 창작 활동에 몰입한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 3 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      }
    ]
  },
  {
    id: 8,
    type: 'select',
    text: "마인크래프트에서 모드나 플러그인을 사용할 때의 기준은?",
    subtext: "모드와 플러그인이란? 마인크래프트에 새로운 요소를 추가하는 부가 요소 도구이다",
    choices: [
      {
        id: 1,
        text: "검증된 인기 모드 중에서 안정성을 확인하고 설치한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 2,
        text: "실험적이고 혁신적인 모드로 새로운 경험을 추구한다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "실용적 기능 위주로 게임플레이 개선에 도움되는 것을 선택한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 4,
        text: "내 건물을 더 이쁘고 창의적이게 확장해주는 모드를 우선한다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      },
      {
        id: 5,
        text: "많은 플레이어들이 사용하는 표준적인 모드를 따른다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      }
    ]
  },
  {
    id: 9,
    type: 'select',
    text: "마인크래프트에서 서버 이벤트나 대회에 참여할 때의 스타일은?",
    choices: [
      {
        id: 1,
        text: "사전에 전략을 세우고 철저히 준비하여 참여한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 5 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 2,
        text: "그때그때 상황을 보며 즉석에서 유연하게 대응한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 5 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      },
      {
        id: 3,
        text: "기본 계획은 세우되 상황에 따라 조정할 여지를 둔다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 3 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      },
      {
        id: 4,
        text: "시간 관리와 체계적 준비로 목표 달성에 집중한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 2 }
        ]
      },
      {
        id: 5,
        text: "흐름을 타며 여러 활동에 동시에 참여한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 4 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      }
    ]
  },
  {
    id: 10,
    type: 'select',
    text: "마인크래프트에서 가장 성취감을 느끼는 순간은?",
    choices: [
      {
        id: 1,
        text: "복잡한 기계나 시스템을 완벽하게 설계했을 때",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "다른 플레이어들이 내 작품을 보고 감동할 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "효율적인 자동화 시스템으로 생산성이 향상될 때",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "초보 플레이어를 도와 함께 성장했을 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "나만의 세계관을 구현한 독창적 작품이 완성될 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      }
    ]
  },
  {
    id: 11,
    type: 'select',
    text: "마인크래프트에서 단체를 형성하여 활동할 때 선호하는 역할은?",
    choices: [
      {
        id: 1,
        text: "뒤에서 묵묵히 자원 수집과 기반 시설을 담당한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 5 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "리더 역할을 맡아 팀원들과 소통하며 활동을 이끈다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 3,
        text: "소수 팀원과 협력하여 전문적인 프로젝트를 담당한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 4 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      },
      {
        id: 4,
        text: "홍보나 대외 활동으로 새로운 멤버를 모집한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 5,
        text: "전략 기획이나 내부 시스템 개선에 집중한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 3 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      }
    ]
  },
  {
    id: 12,
    type: 'select',
    text: "마인크래프트에서 인벤토리 관리는 어떻게 하나요?",
    choices: [
      {
        id: 1,
        text: "항상 정리정돈하며 각 아이템별로 정확한 위치를 정해둔다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 5 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 2,
        text: "필요할 때마다 찾아쓰는 방식으로 자유롭게 관리한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 5 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      },
      {
        id: 3,
        text: "기본적인 분류는 하되 손맛에 따라 달라진다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 3 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      },
      {
        id: 4,
        text: "셜커상자마다 라벨을 붙이고 체계적인 보관 시스템을 구축한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 5,
        text: "가끔 대청소를 하지만 평소에는 편한 대로 둔다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 4 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      }
    ]
  },
  {
    id: 13,
    type: 'image',
    text: "마인크래프트에서 가장 선호하는 건축 스타일은?",
    subtext: "아래 이미지 중에서 가장 마음에 드는 건축 스타일을 선택해주세요",
    choices: [
      {
        id: 1,
        text: "모던 하우스",
        imageUrl: "/images/modern-house.svg",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'TF', pole: 'T', score: 3 }
        ]
      },
      {
        id: 2,
        text: "중세 성",
        imageUrl: "/images/medieval-castle.svg",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'JP', pole: 'J', score: 3 }
        ]
      },
      {
        id: 3,
        text: "자연 친화적 오두막",
        imageUrl: "/images/nature-cabin.svg",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'TF', pole: 'F', score: 4 }
        ]
      },
      {
        id: 4,
        text: "미래적 도시",
        imageUrl: "/images/futuristic-city.svg",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'TF', pole: 'T', score: 3 }
        ]
      },
      {
        id: 5,
        text: "아기자기한 마을",
        imageUrl: "/images/cozy-village.svg",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'JP', pole: 'P', score: 3 }
        ]
      }
    ]
  }
];

// M(A)BTI 유형 설명
export const typeDescriptions: Record<MABTIType, TypeDescription> = {
  INTJ: {
    type: 'INTJ',
    title: '마스터 플래너',
    description: '마인크래프트에서 거대한 도시나 복잡한 자동화 시스템을 설계하는 전략가입니다. 모든 블록 하나하나까지 계산된 완벽한 구조물을 만들어내며, 장기적 비전을 가지고 체계적으로 프로젝트를 완성시킵니다.',
    characteristics: ['완벽주의적 설계', '장기 프로젝트 선호', '자동화 시스템 구축', '독립적 창조 활동']
  },
  INTP: {
    type: 'INTP',
    title: '레드스톤 박사',
    description: '레드스톤 회로와 복잡한 기계 장치 제작에 몰두하는 기술자입니다. 게임 내 메커니즘을 깊이 연구하고 혁신적인 장치를 발명하며, 효율성보다는 창의적이고 독창적인 해결책을 추구합니다.',
    characteristics: ['메커니즘 연구', '독창적 발명', '이론적 실험', '기술적 혁신']
  },
  ENTJ: {
    type: 'ENTJ',
    title: '서버 제왕',
    description: '대규모 서버나 길드를 이끌며 거대한 건설 프로젝트를 지휘하는 천생 리더입니다. 자원 관리와 인력 배치에 탁월하며, 웅장한 성이나 도시를 건설하여 자신만의 왕국을 건설합니다.',
    characteristics: ['대규모 조직 운영', '자원 효율 극대화', '웅장한 건축물', '전략적 확장']
  },
  ENTP: {
    type: 'ENTP',
    title: '실험적 건축가',
    description: '기존의 틀을 깨는 혁신적이고 도전적인 건축물을 만드는 창조자입니다. 새로운 건축 기법을 시도하고, 예상치 못한 재료 조합으로 독특한 구조물을 만들어내며, 끊임없이 새로운 아이디어를 실험합니다.',
    characteristics: ['파격적 디자인', '새로운 기법 도전', '아이디어 융합', '트렌드 선도']
  },
  INFJ: {
    type: 'INFJ',
    title: '스토리텔러',
    description: '마인크래프트에서 의미 있는 이야기와 세계관을 구현하는 세계 창조자입니다. 아름답고 서사적인 건축물을 통해 감동적인 스토리를 전달하며, 다른 플레이어들에게 영감을 주는 공간을 만들어냅니다.',
    characteristics: ['서사적 건축', '감성적 디자인', '세계관 구축', '영감 제공']
  },
  INFP: {
    type: 'INFP',
    title: '꿈의 조각가',
    description: '개인적인 감정과 이상을 건축물에 투영하는 예술가입니다. 아름다운 정원, 환상적인 성, 시적인 풍경을 만들며, 자신만의 독특한 미적 감각으로 마음을 움직이는 작품을 창조합니다.',
    characteristics: ['감성적 표현', '개성적 미학', '환상적 건축', '자아 성찰']
  },
  ENFJ: {
    type: 'ENFJ',
    title: '공동체 리더',
    description: '플레이어들을 하나로 모으는 카리스마 있는 지도자입니다. 모든 사람이 참여할 수 있는 공공 건축물과 커뮤니티 공간을 만들며, 팀워크를 통해 모두가 만족할 수 있는 결과물을 만들어냅니다.',
    characteristics: ['포용적 리더십', '공공시설 건설', '팀 결속력 강화', '화합 추구']
  },
  ENFP: {
    type: 'ENFP',
    title: '모험 기획자',
    description: '매번 새로운 테마와 컨셉으로 다채로운 프로젝트를 진행하는 에너지 넘치는 플레이어입니다. 테마파크, 미니게임, 이벤트 공간을 만들어 다른 사람들과 즐거운 경험을 공유하며, 끊임없이 재미있는 아이디어를 실현합니다.',
    characteristics: ['다양한 테마 시도', '엔터테인먼트 중심', '사교적 공간 창조', '즉흥적 창작']
  },
  ISTJ: {
    type: 'ISTJ',
    title: '효율성 마스터',
    description: '최적화된 농장과 체계적인 저장 시설을 구축하는 관리의 달인입니다. 모든 자원을 효율적으로 관리하고, 실용적이면서도 견고한 건축물로 안정적인 마인크래프트 생활을 영위합니다.',
    characteristics: ['자원 최적화', '체계적 관리', '실용적 건축', '안정적 운영']
  },
  ISFJ: {
    type: 'ISFJ',
    title: '따뜻한 건축가',
    description: '아늑하고 편안한 공간을 만드는 것에 특화된 보살피는 건축가입니다. 모든 플레이어가 안전하고 편안함을 느낄 수 있는 집과 휴식 공간을 만들며, 세심한 배려가 담긴 인테리어로 따뜻함을 전달합니다.',
    characteristics: ['아늑한 공간 창조', '세심한 인테리어', '안전한 환경', '배려 깊은 설계']
  },
  ESTJ: {
    type: 'ESTJ',
    title: '건설 현장 감독',
    description: '질서정연하고 체계적인 도시 계획을 수립하는 조직의 리더입니다. 명확한 규칙과 표준에 따라 건축하며, 효율적인 인프라와 질서 있는 도시 구조로 안정적이고 발전된 마인크래프트 세계를 만듭니다.',
    characteristics: ['체계적 도시 계획', '규칙 기반 건설', '인프라 구축', '질서 정연한 관리']
  },
  ESFJ: {
    type: 'ESFJ',
    title: '커뮤니티 메이커',
    description: '모든 플레이어가 함께 어울릴 수 있는 사교 공간을 만드는 사회적 건축가입니다. 축제장, 광장, 모임장소 등을 만들어 커뮤니티의 중심이 되며, 모두가 즐겁게 참여할 수 있는 이벤트와 활동을 기획합니다.',
    characteristics: ['사교 공간 설계', '이벤트 기획', '커뮤니티 중심', '참여 유도']
  },
  ISTP: {
    type: 'ISTP',
    title: '서바이벌 스페셜리스트',
    description: '최소한의 자원으로 최대한의 효과를 내는 생존 전문가입니다. 어떤 상황에서도 즉석에서 필요한 도구와 구조물을 만들어내며, 실용성과 기능성을 최우선으로 하는 적응력 뛰어난 플레이어입니다.',
    characteristics: ['즉석 문제 해결', '자원 절약술', '기능성 우선', '상황 적응력']
  },
  ISFP: {
    type: 'ISFP',
    title: '자연 예술가',
    description: '자연과 조화를 이루는 아름다운 건축물을 만드는 감성적인 예술가입니다. 지형을 살린 자연친화적 건축과 아름다운 조경으로 마인크래프트 세계에 예술적 가치를 더하며, 개성 있는 작품을 조용히 창조합니다.',
    characteristics: ['자연 친화적 건축', '조경 예술', '개성적 작품', '감성적 디자인']
  },
  ESTP: {
    type: 'ESTP',
    title: '액션 빌더',
    description: '스릴 넘치는 모험과 도전이 가득한 구조물을 만드는 행동파입니다. 점프맵, 파쿠르 코스, PvP 아레나 등 역동적이고 도전적인 콘텐츠를 제작하며, 직접 뛰어들어 테스트하고 개선하는 실행력의 소유자입니다.',
    characteristics: ['도전적 콘텐츠', '즉시 실행', '스릴 추구', '체험 중심']
  },
  ESFP: {
    type: 'ESFP',
    title: '파티 기획자',
    description: '화려하고 즐거운 분위기의 건축물로 축제 같은 마인크래프트를 만드는 엔터테이너입니다. 디스코, 놀이공원, 파티장 등을 만들어 모든 플레이어가 함께 즐길 수 있는 재미있고 활기찬 공간을 창조합니다.',
    characteristics: ['축제적 분위기', '화려한 장식', '엔터테인먼트 공간', '즐거움 전파']
  }
};

// MBTI 궁합 데이터
export const compatibilityData: Record<MABTIType, { 긍정: MABTIType; 부정: MABTIType }> = {
  "INFP": {
    "긍정": "ENFJ",
    "부정": "ESTJ"
  },
  "ENFP": {
    "긍정": "INFJ",
    "부정": "ISTJ"
  },
  "INFJ": {
    "긍정": "ENTP",
    "부정": "ESTP"
  },
  "ENFJ": {
    "긍정": "INFP",
    "부정": "ISTP"
  },
  "INTJ": {
    "긍정": "ENFP",
    "부정": "ESFP"
  },
  "ENTJ": {
    "긍정": "INFP",
    "부정": "ISFP"
  },
  "INTP": {
    "긍정": "ENTJ",
    "부정": "ESFJ"
  },
  "ENTP": {
    "긍정": "INFJ",
    "부정": "ISFJ"
  },
  "ISFP": {
    "긍정": "ENFJ",
    "부정": "ENTJ"
  },
  "ESFP": {
    "긍정": "ISFJ",
    "부정": "INTJ"
  },
  "ISFJ": {
    "긍정": "ESFP",
    "부정": "ENTP"
  },
  "ESFJ": {
    "긍정": "ISFP",
    "부정": "INTP"
  },
  "ISTP": {
    "긍정": "ESFJ",
    "부정": "ENFJ"
  },
  "ESTP": {
    "긍정": "ISFJ",
    "부정": "INFJ"
  },
  "ISTJ": {
    "긍정": "ESFJ",
    "부정": "ENFP"
  },
  "ESTJ": {
    "긍정": "ISTP",
    "부정": "INFP"
  }
};