<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from 'qrcode';
  import type { TestResult } from '../types';

  export let result: TestResult;
  export let size: number = 200;

  let canvas: HTMLCanvasElement;
  let qrDataUrl: string = '';

  onMount(async () => {
    if (canvas && result) {
      try {
        // QR 코드에 담을 URL 생성 (결과 페이지로 이동 + 자동 다운로드)
        const payload = {
          name: result.name,
          type: result.type,
          axisTally: result.axisTally,
          completedAt: new Date(result.completedAt).toISOString(),
          timestamp: Date.now()
        };

        const url = new URL('/result', window.location.origin);
        url.searchParams.set('data', encodeURIComponent(JSON.stringify(payload)));
        url.searchParams.set('autodownload', '1');

        // QR 코드 생성 (URL을 인코딩)
        qrDataUrl = await QRCode.toDataURL(canvas, url.toString(), {
          width: size,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
      } catch (error) {
        console.error('QR 코드 생성 오류:', error);
      }
    }
  });

  function downloadQR() {
    if (qrDataUrl) {
      const link = document.createElement('a');
      link.download = `mabti-result-${result.name}-${result.type}.png`;
      link.href = qrDataUrl;
      link.click();
    }
  }
</script>

<div class="text-center">
  <canvas bind:this={canvas} class="mx-auto mb-4"></canvas>
  {#if qrDataUrl}
    <button
      on:click={downloadQR}
      class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
    >
      QR 코드 다운로드
    </button>
  {/if}
</div> 