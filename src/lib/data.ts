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
    text: "마인크래프트에서 인테리어를 할 때 선호하는 방식은?",
    choices: [
      {
        id: 1,
        text: "회로를 이용해서 모든걸 자동화시킨다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "모던한 스타일로 깔끔하게 꾸민다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 3 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 3,
        text: "마인크래프트에 존재하는 모든걸 수집해 가져다 놓는다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 1 },
          { axis: 'SN', pole: 'N', score: 5 }
        ]
      },
      {
        id: 4,
        text: "귀여운게 최고다!",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 1 },
          { axis: 'TF', pole: 'F', score: 5 }
        ]
      },
      {
        id: 5,
        text: "작업대, 화로, 상자가 끝이다. 뭐가 더 필요하지?",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'select',
    text: "친구들과 함께 마크를 하다가 다툼이 생겼을 때 어떻게 해결하나요?",
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
        text: "친구들의 마음을 헤아려 타협점을 찾는다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "팩트로 뚜드려팬다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "일단 싸우지 말자고 제안한다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "개인 1:1 면담시간을 가져본다",
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
    text: "마인크래프트에서 건축을 할 때 내 접근방식은?",
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
        text: "유튜브를 보며 단계별로 따라해본다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 4 },
          { axis: 'JP', pole: 'P', score: 1 }
        ]
      },
      {
        id: 5,
        text: "내 영감에 따라 짓는다",
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
    text: "마인크래프트에서 친구가 맞다이를 뜨자고 한다! 이때 내 행동은?",
    choices: [
      {
        id: 1,
        text: "어떻게하면 잘 이겼다고 소문이 날 지 냉정하게 계산한다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "친구의 상황을 고려해 살짝씩 봐준다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 3 },
          { axis: 'TF', pole: 'T', score: 2 }
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
        text: "나는 평화주의자이기 때문에 싸우지 않는다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'select',
    text: "마인크래프트 세계를 여행하다 장관이 펼쳐졌다. 가장 먼저 드는 생각은?",
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
        text: "이 풍경을 살릴 수 있는 예쁜 건축 스타일을 상상해본다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "오 예쁘다! (다시 원래 목적지로 간다)",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 4,
        text: "와 ㅁㅊ (스크린샷을 찍고 그 쪽으로 간다)",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 5,
        text: "아무 생각이 안든다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'TF', pole: 'T', score: 3 }
        ]
      }
    ]
  },
  {
    id: 7,
    type: 'select',
    text: "긴 광질을 끝내고 나왔다. 휴식을 취할 때 무엇을 할까?",
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
        text: "친구들과 수다를 떨며 같이 스크린샷을 찍고 논다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
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
        text: "다른 친구를 더 불러서 복작복작하게 만든다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 5,
        text: "게임을 끈다",
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
    text: "마인크래프트에서 해보고 싶은 모드는?",
    subtext: "모드란? 마인크래프트에 새로운 요소를 추가하는 도구이다",
    choices: [
      {
        id: 1,
        text: "딱히 모드를 추가하고 싶지 않다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 5 },
          { axis: 'SN', pole: 'N', score: 1 }
        ]
      },
      {
        id: 2,
        text: "외계인 같이 귀엽고 새로운 게 나오는 모드를 추가하면 재밌을 것 같다",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 5 },
          { axis: 'SN', pole: 'S', score: 1 }
        ]
      },
      {
        id: 3,
        text: "플레이가 좀 더 편리해지는 기능이 추가되는 모드가 좋을 것 같다",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 4 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 4,
        text: "건축을 좀 더 예쁘고 현실감있게 할 수 있는 모드가 좋을 것 같다",
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
    text: "마인크래프트 스킨을 고를 때 나만의 기준은?",
    choices: [
      {
        id: 1,
        text: "튜닝의 끝은 순정! 그냥 기본 스킨을 쓴다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'SN', pole: 'S', score: 5 }
        ]
      },
      {
        id: 2,
        text: "웃기게 생기면 쓴다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 2 },
          { axis: 'EI', pole: 'E', score: 4 }
        ]
      },
      {
        id: 3,
        text: "예쁘거나 간지나게 생기면 쓴다",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'SN', pole: 'N', score: 2 }
        ]
      },
      {
        id: 4,
        text: "단순하게 생긴 게 좋다",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 3 },
          { axis: 'SN', pole: 'S', score: 2 }
        ]
      },
      {
        id: 5,
        text: "화려하고 눈에 잘 띄는게 좋다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'TF', pole: 'F', score: 2 }
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
        text: "효율적인 자동화 시스템으로 생산성이 향상될 때",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 5 },
          { axis: 'TF', pole: 'F', score: 1 }
        ]
      },
      {
        id: 2,
        text: "친구들이 내 건축물을 보고 감탄할 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 5 },
          { axis: 'TF', pole: 'T', score: 1 }
        ]
      },
      {
        id: 3,
        text: "큰 동굴의 구석구석 모든 공간을 탐험완료했을 때",
        axisScores: [
          { axis: 'TF', pole: 'T', score: 4 },
          { axis: 'TF', pole: 'F', score: 2 }
        ]
      },
      {
        id: 4,
        text: "강아지, 고양이, 앵무새를 길들이는 데 성공했을 때",
        axisScores: [
          { axis: 'TF', pole: 'F', score: 4 },
          { axis: 'TF', pole: 'T', score: 2 }
        ]
      },
      {
        id: 5,
        text: "마인크래프트의 엔딩을 봤을 때",
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
    text: "친구와 멀티플레이를 할 때 주로 담당하는 역할은?",
    choices: [
      {
        id: 1,
        text: "멀티플레이를 안좋아한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 5 },
          { axis: 'EI', pole: 'E', score: 1 }
        ]
      },
      {
        id: 2,
        text: "친구들에게 뭔가를 자꾸 시킨다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 5 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 3,
        text: "뒤에서 묵묵히 자원 수집을 한다",
        axisScores: [
          { axis: 'EI', pole: 'I', score: 4 },
          { axis: 'EI', pole: 'E', score: 2 }
        ]
      },
      {
        id: 4,
        text: "잼얘(수다)를 담당한다",
        axisScores: [
          { axis: 'EI', pole: 'E', score: 4 },
          { axis: 'EI', pole: 'I', score: 1 }
        ]
      },
      {
        id: 5,
        text: "건축가가 된다",
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
        text: "그냥 바닥에다가 던져놓는다",
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
        text: "처음엔 분류해놓다가 점점 어지렵혀진다",
        axisScores: [
          { axis: 'JP', pole: 'J', score: 2 },
          { axis: 'JP', pole: 'P', score: 3 }
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
        text: "리치맨 하우스",
        imageUrl: "/images/medieval-castle.svg",
        axisScores: [
          { axis: 'SN', pole: 'S', score: 3 },
          { axis: 'JP', pole: 'P', score: 4 }
        ]
      },
      {
        id: 3,
        text: "자연 친화적 오두막",
        imageUrl: "/images/nature-cabin.svg",
        axisScores: [
          { axis: 'SN', pole: 'N', score: 3 },
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