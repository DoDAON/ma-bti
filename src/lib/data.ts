import type { Question, TypeDescription, MABTIType } from './types';

// M(A)BTI 질문 데이터
export const questions: Question[] = [
  {
    id: 1,
    text: "마인크래프트에서 새로운 월드를 시작할 때 가장 먼저 하는 일은?",
    choices: [
      {
        id: 1,
        text: "혼자서 조용히 집을 짓고 주변을 정리한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 5 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "다른 플레이어들과 함께 마을을 건설한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 3,
        text: "주변을 탐험하며 새로운 지역을 찾아간다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 3 },
          { axis: 'EI', pole: 'I', score: 2 }
        ]
      },
      {
        id: 4,
        text: "계획을 세우고 체계적으로 자원을 수집한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 3 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      },
      {
        id: 5,
        text: "채팅으로 다른 플레이어들과 소통하며 정보를 교환한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    text: "마인크래프트에서 정보를 수집할 때 주로 어떤 방식을 사용하나요?",
    choices: [
      {
        id: 1,
        text: "위키나 가이드를 보며 정확한 데이터를 확인한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 2,
        text: "직접 실험해보며 새로운 가능성을 탐구한다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "경험이 많은 플레이어들에게 조언을 구한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 4,
        text: "기존 방법을 개선할 새로운 아이디어를 생각해본다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 5,
        text: "검증된 방법을 반복적으로 사용한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    text: "마인크래프트에서 중요한 결정을 내릴 때 무엇을 우선시하나요?",
    choices: [
      {
        id: 1,
        text: "효율성과 논리적 분석을 통한 최적해",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "다른 플레이어들의 감정과 만족도",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "객관적 데이터와 수치적 근거",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 4,
        text: "팀의 화합과 공동체 이익",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 5,
        text: "개인의 가치관과 신념",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      }
    ]
  },
  {
    id: 4,
    text: "마인크래프트에서 프로젝트를 진행할 때 선호하는 방식은?",
    choices: [
      {
        id: 1,
        text: "미리 계획을 세우고 단계적으로 완성한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 5 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 2,
        text: "즉흥적으로 아이디어를 떠올리며 자유롭게 진행한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 5 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      },
      {
        id: 3,
        text: "기본 틀을 정하고 상황에 따라 유연하게 변경한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 3 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      },
      {
        id: 4,
        text: "체크리스트를 만들어 체계적으로 관리한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 5,
        text: "마감기한을 정하고 시간 관리를 철저히 한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      }
    ]
  },
  {
    id: 5,
    text: "마인크래프트에서 갈등 상황이 발생했을 때 어떻게 대응하나요?",
    choices: [
      {
        id: 1,
        text: "사실과 규칙을 바탕으로 논리적으로 해결한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "모든 사람의 입장을 듣고 감정을 배려한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "공정한 기준을 적용하여 일관되게 처리한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "중재자 역할을 하며 화해를 유도한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "개입을 최소화하고 개별적으로 소통한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      }
    ]
  },
  {
    id: 6,
    text: "마인크래프트에서 건축할 때 가장 중요하게 생각하는 요소는?",
    choices: [
      {
        id: 1,
        text: "기능성과 효율성",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 2,
        text: "창의성과 독창성",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "안정성과 견고함",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 4,
        text: "미적 아름다움과 조화",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 3 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      },
      {
        id: 5,
        text: "혁신적 아이디어와 미래 가능성",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      }
    ]
  },
  {
    id: 7,
    text: "마인크래프트에서 에너지를 어떻게 충전하나요?",
    choices: [
      {
        id: 1,
        text: "혼자만의 시간을 가지며 조용히 플레이한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 5 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "다른 플레이어들과 활발하게 상호작용한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 3,
        text: "깊이 있는 대화를 소수의 친구와 나눈다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 4 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      },
      {
        id: 4,
        text: "새로운 사람들을 만나 네트워킹한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 5,
        text: "내면의 아이디어를 구체화하는 시간을 갖는다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 3 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      }
    ]
  },
  {
    id: 8,
    text: "마인크래프트에서 새로운 기능을 학습할 때 선호하는 방법은?",
    choices: [
      {
        id: 1,
        text: "단계별 가이드를 따라 차근차근 익힌다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 2,
        text: "전체적인 개념을 이해하고 응용법을 탐구한다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "실제 예시를 보며 구체적으로 실습한다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 4,
        text: "다양한 가능성을 시도해보며 패턴을 찾는다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      },
      {
        id: 5,
        text: "경험 많은 플레이어의 노하우를 배운다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      }
    ]
  },
  {
    id: 9,
    text: "마인크래프트에서 목표를 달성하는 방식은?",
    choices: [
      {
        id: 1,
        text: "마감일을 정하고 계획대로 차질 없이 진행한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 5 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 2,
        text: "영감이 떠오를 때마다 집중적으로 작업한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 5 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      },
      {
        id: 3,
        text: "우선순위를 정하고 체계적으로 관리한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 2 }
        ]
      },
      {
        id: 4,
        text: "여러 프로젝트를 동시에 진행하며 유연하게 대응한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 4 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      },
      {
        id: 5,
        text: "상황 변화에 맞춰 목표를 조정해가며 진행한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 3 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      }
    ]
  },
  {
    id: 10,
    text: "마인크래프트에서 가장 만족스러운 순간은?",
    choices: [
      {
        id: 1,
        text: "논리적 분석을 통해 복잡한 문제를 해결했을 때",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "다른 플레이어들과 함께 감동을 나누었을 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "효율적인 시스템을 구축하여 성과를 얻었을 때",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "누군가에게 도움이 되는 일을 해냈을 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "개인적 가치를 실현하는 작품을 완성했을 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
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