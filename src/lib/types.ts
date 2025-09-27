// M(A)BTI 유형 정의
export type MABTIType = 
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

// 축 정의
export type Axis = 'EI' | 'SN' | 'TF' | 'JP';
export type AxisPole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

// 축별 점수 단위 (선택지에 사용)
export interface AxisScoreUnit {
  axis: Axis;
  pole: AxisPole;
  score: number; // 0은 사용하지 않음
}

// 질문 선택지
export interface Choice {
  id: number;
  text: string;
  subtext?: string;
  imageUrl?: string; // 이미지 선택지용
  axisScores: AxisScoreUnit[]; // 문항 성격에 맞는 축에만 점수 부여
}

// 질문 타입
export type QuestionType = 'select' | 'image';

// 테스트 질문
export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  subtext?: string;
  choices: Choice[];
}

// 축 누적 점수 (전체 진행 중 유지)
export interface AxisTally {
  E: number; I: number;
  S: number; N: number;
  T: number; F: number;
  J: number; P: number;
}

// 테스트 결과
export interface TestResult {
  name: string;
  type: MABTIType;
  axisTally: AxisTally;
  completedAt: Date;
}

// 유형 설명
export interface TypeDescription {
  type: MABTIType;
  title: string;
  description: string;
  characteristics: string[];
}