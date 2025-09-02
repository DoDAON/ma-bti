import type { MABTIType, TestResult, AxisTally, AxisScoreUnit } from './types';

// 축 점수 초기화
export const initializeAxisTally = (): AxisTally => ({
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
});

// 선택지의 축 점수들을 누적
export const updateAxisTally = (current: AxisTally, axisScores: AxisScoreUnit[]): AxisTally => {
  const next: AxisTally = { ...current };
  for (const unit of axisScores) {
    if (unit.score <= 0) continue; // 0점은 없음
    switch (unit.pole) {
      case 'E': next.E += unit.score; break;
      case 'I': next.I += unit.score; break;
      case 'S': next.S += unit.score; break;
      case 'N': next.N += unit.score; break;
      case 'T': next.T += unit.score; break;
      case 'F': next.F += unit.score; break;
      case 'J': next.J += unit.score; break;
      case 'P': next.P += unit.score; break;
    }
  }
  return next;
};

// 축 누적에서 최종 유형 계산
export const deriveTypeFromAxis = (tally: AxisTally): MABTIType => {
  const ei = tally.E >= tally.I ? 'E' : 'I';
  const sn = tally.S >= tally.N ? 'S' : 'N';
  const tf = tally.T >= tally.F ? 'T' : 'F';
  const jp = tally.J >= tally.P ? 'J' : 'P';
  return `${ei}${sn}${tf}${jp}` as MABTIType;
};

// 축 백분율 계산 (시각화용)
export const getAxisPercentages = (tally: AxisTally): AxisTally => {
  const result: AxisTally = { ...tally };
  const pairs: Array<[keyof AxisTally, keyof AxisTally]> = [
    ['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']
  ];
  for (const [a, b] of pairs) {
    const total = (tally[a] || 0) + (tally[b] || 0);
    if (total === 0) {
      result[a] = 50;
      result[b] = 50;
    } else {
      result[a] = Math.round((tally[a] / total) * 100);
      result[b] = 100 - result[a];
    }
  }
  return result;
};

// 결과 생성
export const generateResult = (name: string, axisTally: AxisTally): TestResult => {
  const type = deriveTypeFromAxis(axisTally);
  return {
    name,
    type,
    axisTally,
    completedAt: new Date()
  };
};

// 진행률 계산
export const calculateProgress = (currentQuestion: number, totalQuestions: number): number => {
  return Math.round((currentQuestion / totalQuestions) * 100);
};

// QR 코드 데이터 생성
export const generateQRData = (result: TestResult): string => {
  const data = {
    name: result.name,
    type: result.type,
    axisTally: result.axisTally,
    completedAt: new Date(result.completedAt).toISOString()
  };
  
  return JSON.stringify(data);
}; 