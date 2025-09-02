import type { Question, TypeDescription, MABTIType } from './types';

// M(A)BTI 질문 데이터
export const questions: Question[] = [
  {
    id: 1,
    text: "마인크래프트에서 새로운 월드를 시작할 때 가장 먼저 하는 일은?",
    choices: [
      {
        id: 1,
        text: "집을 지어서 안전한 거주지를 확보한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 3 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "주변 환경을 탐험하며 자원을 수집한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 2 }
        ]
      },
      {
        id: 3,
        text: "농작물을 심어서 지속 가능한 식량 공급을 만든다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 3 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      },
      {
        id: 4,
        text: "레드스톤을 이용한 복잡한 기계를 설계한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 4 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 5,
        text: "다른 플레이어들과 함께 협력하여 마을을 건설한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 2 }
        ]
      }
    ]
  },
  {
    id: 2,
    text: "야간에 몬스터가 나타났을 때 당신의 반응은?",
    choices: [
      {
        id: 1,
        text: "즉시 전투에 임하여 몬스터를 처치한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 2,
        text: "전략적으로 몬스터를 유인하여 함정에 빠뜨린다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 3,
        text: "안전한 곳으로 도망가서 다음 날까지 기다린다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 4,
        text: "다른 플레이어들에게 도움을 요청한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "몬스터와 대화를 시도하여 평화적으로 해결한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    text: "마인크래프트에서 가장 즐거운 활동은?",
    choices: [
      {
        id: 1,
        text: "대규모 건축 프로젝트를 완성하는 것",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 2,
        text: "새로운 생물들과 상호작용하는 것",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "복잡한 레드스톤 회로를 만드는 것",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      },
      {
        id: 4,
        text: "다른 플레이어들과 함께 모험하는 것",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 3 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      },
      {
        id: 5,
        text: "자원을 효율적으로 수집하고 관리하는 것",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      }
    ]
  },
  {
    id: 4,
    text: "새로운 업데이트가 나왔을 때 당신의 반응은?",
    choices: [
      {
        id: 1,
        text: "즉시 새로운 기능들을 테스트해본다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 5 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      },
      {
        id: 2,
        text: "업데이트 노트를 꼼꼼히 읽고 분석한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 5 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 3,
        text: "다른 플레이어들과 새로운 기능에 대해 토론한다",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 3 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      },
      {
        id: 4,
        text: "기존 플레이 스타일에 새로운 기능을 통합한다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 3 },
          { axis: 'JP', pole: 'P', score: 2 }
        ]
      },
      {
        id: 5,
        text: "새로운 기능을 활용한 최적화 전략을 세운다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      }
    ]
  },
  {
    id: 5,
    text: "마인크래프트에서 실패했을 때 당신의 대처 방법은?",
    choices: [
      {
        id: 1,
        text: "실패 원인을 분석하고 개선 방안을 찾는다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "다른 플레이어들에게 조언을 구한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 3,
        text: "잠시 쉬고 새로운 접근 방법을 시도한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 4,
        text: "체계적으로 단계별로 문제를 해결한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 5,
        text: "실패를 새로운 기회로 보고 다른 방향을 시도한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      }
    ]
  },
  {
    id: 6,
    text: "마인크래프트에서 가장 중요하게 생각하는 것은?",
    choices: [
      {
        id: 1,
        text: "효율성과 최적화",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 2 }
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
        text: "협력과 팀워크",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 3 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      },
      {
        id: 4,
        text: "안정성과 보안",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 5,
        text: "모험과 새로운 경험",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      }
    ]
  },
  {
    id: 7,
    text: "마인크래프트에서 다른 플레이어와의 관계는?",
    choices: [
      {
        id: 1,
        text: "독립적으로 플레이하는 것을 선호한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 5 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "팀의 리더 역할을 맡는다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 3,
        text: "다른 플레이어들을 돕고 지원한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 2 }
        ]
      },
      {
        id: 4,
        text: "즐거운 분위기를 만들어낸다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 2 }
        ]
      },
      {
        id: 5,
        text: "필요할 때만 협력하고 대부분은 혼자 플레이한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 4 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      }
    ]
  },
  {
    id: 8,
    text: "마인크래프트에서 문제가 발생했을 때 당신의 해결 방식은?",
    choices: [
      {
        id: 1,
        text: "논리적으로 분석하여 체계적으로 해결한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "직관적으로 해결책을 찾는다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 3,
        text: "경험을 바탕으로 빠르게 해결한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "다른 사람들의 의견을 듣고 결정한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "기존의 검증된 방법을 사용한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      }
    ]
  },
  {
    id: 9,
    text: "마인크래프트에서 가장 만족스러운 순간은?",
    choices: [
      {
        id: 1,
        text: "복잡한 프로젝트를 완성했을 때",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 5 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 2,
        text: "새로운 아이디어를 실현했을 때",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 5 },
          { axis: 'JP', pole: 'J', score: 1 }
        ]
      },
      {
        id: 3,
        text: "다른 플레이어들과 함께 성공했을 때",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 2 }
        ]
      },
      {
        id: 4,
        text: "아름다운 건축물을 만들었을 때",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 4 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      },
      {
        id: 5,
        text: "어려운 도전을 극복했을 때",
        axisScores: [
          { axis: 'JP', pole: 'P', score: 4 },
          { axis: 'JP', pole: 'J', score: 2 }
        ]
      }
    ]
  },
  {
    id: 10,
    text: "마인크래프트에서 당신의 플레이 스타일을 한 마디로 표현하면?",
    choices: [
      {
        id: 1,
        text: "전략적이고 계획적인 플레이어",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "창의적이고 혁신적인 플레이어",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 3,
        text: "협력적이고 지원적인 플레이어",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 4,
        text: "모험적이고 적응력 있는 플레이어",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 3 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 5,
        text: "균형잡히고 실용적인 플레이어",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 3 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      }
    ]
  }
];

// M(A)BTI 유형 설명
export const typeDescriptions: Record<MABTIType, TypeDescription> = {
  INTJ: {
    type: 'INTJ',
    title: '건축가형',
    description: '마인크래프트에서 복잡한 시스템을 설계하고 효율적인 건축물을 만드는 것을 선호합니다. 전략적 사고와 논리적 접근으로 게임을 플레이합니다.',
    characteristics: ['전략적 계획', '효율성 추구', '독립적 플레이', '복잡한 시스템 설계']
  },
  INTP: {
    type: 'INTP',
    title: '논리학자형',
    description: '레드스톤과 복잡한 기계를 만드는 것을 즐기며, 게임의 메커니즘을 깊이 이해하고 분석합니다. 창의적인 문제 해결을 선호합니다.',
    characteristics: ['논리적 분석', '창의적 해결책', '기계 설계', '이론적 접근']
  },
  ENTJ: {
    type: 'ENTJ',
    title: '지휘관형',
    description: '대규모 프로젝트를 주도하고 다른 플레이어들을 이끄는 리더십을 발휘합니다. 효율성과 목표 달성에 중점을 둡니다.',
    characteristics: ['리더십', '목표 지향', '효율성', '대규모 프로젝트']
  },
  ENTP: {
    type: 'ENTP',
    title: '변론가형',
    description: '새로운 아이디어를 실험하고 혁신적인 건축물을 만듭니다. 도전적이고 창의적인 플레이를 즐깁니다.',
    characteristics: ['혁신적 사고', '실험 정신', '창의성', '적응력']
  },
  INFJ: {
    type: 'INFJ',
    title: '옹호자형',
    description: '아름다운 건축물을 만들고 다른 플레이어들을 돕는 것을 선호합니다. 의미 있는 경험과 협력을 중시합니다.',
    characteristics: ['예술적 감각', '협력 정신', '의미 추구', '공감 능력']
  },
  INFP: {
    type: 'INFP',
    title: '중재자형',
    description: '창의적이고 독특한 건축물을 만들며, 게임에서 아름다움과 의미를 찾습니다. 개인적인 표현을 중요시합니다.',
    characteristics: ['창의성', '개성 표현', '아름다움 추구', '이상주의']
  },
  ENFJ: {
    type: 'ENFJ',
    title: '선도자형',
    description: '다른 플레이어들을 이끌고 팀워크를 만들어내는 리더입니다. 협력과 공동 성취를 중시합니다.',
    characteristics: ['팀 리더십', '협력', '동기 부여', '공동체 의식']
  },
  ENFP: {
    type: 'ENFP',
    title: '활동가형',
    description: '다양한 활동을 시도하고 새로운 경험을 추구합니다. 다른 플레이어들과의 상호작용을 즐깁니다.',
    characteristics: ['다양성 추구', '사회성', '열정', '새로운 경험']
  },
  ISTJ: {
    type: 'ISTJ',
    title: '현실주의자형',
    description: '체계적이고 안정적인 플레이를 선호합니다. 효율적인 자원 관리와 실용적인 건축을 중시합니다.',
    characteristics: ['체계적 접근', '안정성', '효율성', '실용성']
  },
  ISFJ: {
    type: 'ISFJ',
    title: '수호자형',
    description: '안전하고 편안한 환경을 만들고 다른 플레이어들을 보호합니다. 전통적이고 안정적인 플레이를 선호합니다.',
    characteristics: ['보호 본능', '안정성', '전통적 접근', '배려']
  },
  ESTJ: {
    type: 'ESTJ',
    title: '경영자형',
    description: '조직적이고 체계적인 프로젝트를 주도합니다. 효율성과 규칙을 중시하여 게임을 플레이합니다.',
    characteristics: ['조직력', '규칙 준수', '효율성', '책임감']
  },
  ESFJ: {
    type: 'ESFJ',
    title: '집정관형',
    description: '다른 플레이어들과 협력하여 공동체를 만드는 것을 선호합니다. 조화와 협력을 중시합니다.',
    characteristics: ['협력', '공동체 의식', '조화', '지원']
  },
  ISTP: {
    type: 'ISTP',
    title: '만능재주꾼형',
    description: '실용적이고 적응력 있는 플레이를 선호합니다. 문제 해결과 기술적 도전을 즐깁니다.',
    characteristics: ['적응력', '문제 해결', '기술적 능력', '실용성']
  },
  ISFP: {
    type: 'ISFP',
    title: '모험가형',
    description: '아름다운 건축물을 만들고 게임의 미적 요소를 즐깁니다. 개인적이고 창의적인 플레이를 선호합니다.',
    characteristics: ['예술적 감각', '개성', '창의성', '독립성']
  },
  ESTP: {
    type: 'ESTP',
    title: '사업가형',
    description: '즉흥적이고 모험적인 플레이를 선호합니다. 새로운 도전과 실험을 즐깁니다.',
    characteristics: ['즉흥성', '모험', '실험', '적응력']
  },
  ESFP: {
    type: 'ESFP',
    title: '연예인형',
    description: '즐거운 분위기를 만들고 다른 플레이어들과 함께하는 것을 선호합니다. 재미와 사회적 상호작용을 중시합니다.',
    characteristics: ['사교성', '즐거움', '협력', '적응력']
  }
}; 