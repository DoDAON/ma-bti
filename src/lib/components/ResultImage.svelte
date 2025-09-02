<script lang="ts">
  import { onMount } from 'svelte';
  import html2canvas from 'html2canvas';
  import type { TestResult } from '../types';
  import { typeDescriptions } from '../data';
  import { getAxisPercentages } from '../utils';

  export let result: TestResult;

  let resultContainer: HTMLElement;
  let isGenerating = false;

  function getTypeDescription() {
    return typeDescriptions[result.type];
  }

  function getTopScores(count: number = 5) {
    // 축 중심 UI로 간소화: 상단 이미지에는 유형만 표시
    return [];
  }

  function getAxisBars() {
    const p = getAxisPercentages(result.axisTally);
    return [
      { label: 'E', value: p.E, pair: 'I', pairValue: p.I },
      { label: 'S', value: p.S, pair: 'N', pairValue: p.N },
      { label: 'T', value: p.T, pair: 'F', pairValue: p.F },
      { label: 'J', value: p.J, pair: 'P', pairValue: p.P }
    ];
  }

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  }

  async function waitForStableRender(container: HTMLElement) {
    // 폰트 로딩 완료 대기
    try {
      // @ts-ignore
      if (document.fonts && document.fonts.ready) {
        // @ts-ignore
        await document.fonts.ready;
      }
    } catch {}
    // 연속 RAF로 레이아웃 안정화 대기
    await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
    // 약간의 지연으로 스타일/이미지 최종 적용 대기
    await new Promise<void>((r) => setTimeout(() => r(), 50));
    // 컨테이너 내 이미지 로딩 대기 (현재는 이미지 없지만 안전장치)
    const images = Array.from(container.querySelectorAll('img')) as HTMLImageElement[];
    await Promise.all(images.map((img) => img.complete ? Promise.resolve<void>(undefined) : new Promise<void>((res) => {
      img.addEventListener('load', () => res());
      img.addEventListener('error', () => res());
    })));
  }

  async function downloadResultImage() {
    if (!resultContainer || isGenerating) return;

    isGenerating = true;

    try {
      await waitForStableRender(resultContainer);
      const canvas = await html2canvas(resultContainer, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        ignoreElements: (element) => {
          // oklch 색상을 사용하는 요소 무시
          const style = window.getComputedStyle(element);
          return style.color.includes('oklch') || style.backgroundColor.includes('oklch');
        }
      });

      const link = document.createElement('a');
      link.download = `mabti-result-${result.name}-${result.type}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('이미지 생성 오류:', error);
    } finally {
      isGenerating = false;
    }
  }

  // QR 스캔 진입 시 자동 다운로드 트리거 수신
  onMount(() => {
    const handler = () => {
      // 버튼과 동일한 동작 실행
      downloadResultImage();
    };
    window.addEventListener('trigger-download', handler);
    return () => {
      window.removeEventListener('trigger-download', handler);
    };
  });
</script>

<div class="mb-4">
  <button
    on:click={downloadResultImage}
    disabled={isGenerating}
    class="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
  >
    {#if isGenerating}
      이미지 생성 중...
    {:else}
      결과 이미지 다운로드
    {/if}
  </button>
</div>

<!-- 결과 이미지용 컨테이너 -->
<div bind:this={resultContainer} style="background-color: white; padding: 32px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 448px; margin: 0 auto; position: relative; font-size: 16px; -webkit-text-size-adjust: 100%; font-family: 'Segoe UI', 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', system-ui, -apple-system, sans-serif;">
  <!-- 워터마크 -->
  <div style="position: absolute; top: 1rem; right: 1rem; color: #22c55e; font-size: 0.875rem; font-weight: 600;">
    M(A)BTI
  </div>

  <!-- 결과 헤더 -->
  <div style="text-align: center; margin-bottom: 1.5rem;">
    <div style="width: 4rem; height: 4rem; background-color: #22c55e; border-radius: 50%; margin: 0 auto 0.75rem; display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 1.5rem;">⛏️</span>
    </div>
    <h2 style="font-size: 1.25rem; font-weight: bold; color: #1f2937; margin-bottom: 0.25rem;">
      {result.name}님의 M(A)BTI
    </h2>
    <div style="font-size: 2.25rem; font-weight: bold; color: #22c55e; margin-bottom: 0.5rem;">
      {result.type}
    </div>
    <p style="font-size: 1.125rem; color: #4b5563; font-weight: 500;">
      {getTypeDescription()?.title}
    </p>
  </div>

  <!-- 유형 설명 -->
  <div style="margin-bottom: 1.5rem; padding: 1rem; background-color: #f9fafb; border-radius: 0.5rem;">
    <h3 style="font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">유형 설명</h3>
    <p style="font-size: 0.875rem; color: #374151; line-height: 1.6;">
      {getTypeDescription()?.description}
    </p>
  </div>

  <!-- 축 분포 -->
  <div style="margin-bottom: 1rem;">
    <h3 style="font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-bottom: 0.75rem;">축 분포</h3>
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      {#each getAxisBars() as row}
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #374151; font-weight: 500;">
            <span>{row.label}</span>
            <span>{row.pair}</span>
          </div>
          <div style="display: flex; width: 100%; height: 0.625rem; border-radius: 9999px; overflow: hidden; background-color: #e5e7eb;">
            <div style="background-color: #22c55e; height: 100%; width: {row.value}%;"></div>
            <div style="background-color: #9ca3af; height: 100%; width: {row.pairValue}%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #6b7280;">
            <span>{row.value}%</span>
            <span>{row.pairValue}%</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- 테스트 정보 -->
  <div style="text-align: center; font-size: 0.75rem; color: #6b7280;">
    <p>테스트 완료: {formatDate(result.completedAt)}</p>
  </div>
</div> 