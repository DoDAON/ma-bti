<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { typeDescriptions } from '$lib/data';
  import type { TestResult } from '$lib/types';
  import { getAxisPercentages } from '$lib/utils';
  import QRCode from '$lib/components/QRCode.svelte';
  import ResultImage from '$lib/components/ResultImage.svelte';

  let result: TestResult | null = null;
  let isLoading = true;
  let showQR = false;
  let shouldAutoDownload = false;
  const loadingTips: string[] = [
    '그거 아세요? 분석은 크리퍼가 터지기까지 걸리는 시간보다 더 빠르다는 것을요',
    '그거 아세요? 마크를 가장 빨리 클리어한 유저가 M(A)BTI의 분석 속도를 보고 감탄했다는 것을요',
    '그거 아세요? M(A)BTI는 네더라이트 괭이를 만드는 것보다 더 가치가 있다는 것을요',
    '그거 아세요? 좀비가 죽기 전에 한 행동이 M(A)BTI 테스트였다는 것을요',
    '그거 아세요? 핑크색 양이 출현하는 것보다 당신을 만난 것이 더 행운이라는 것을요'
  ];
  let randomTip = '';

  onMount(() => {
    // 로딩 중 안내 문구 랜덤 선택
    randomTip = loadingTips[Math.floor(Math.random() * loadingTips.length)];
    // URL에서 결과 데이터 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const resultData = urlParams.get('data');
    const auto = urlParams.get('autodownload');
    
    if (!resultData) {
      goto('/');
      return;
    }

    try {
      const parsed = JSON.parse(decodeURIComponent(resultData));
      result = {
        ...parsed,
        completedAt: new Date(parsed.completedAt)
      } as TestResult;
      shouldAutoDownload = auto === '1';
      // 로딩 화면을 최소 5초간 유지
      const timeoutId = setTimeout(() => {
        isLoading = false;
      }, 6000);

      // 언마운트/페이지 이탈 시 타이머 정리
      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.error('결과 데이터 파싱 오류:', error);
      goto('/');
    }
  });

  // 자동 다운로드 트리거: 결과 로드 완료 후 한번만 실행
  $: if (!isLoading && result && shouldAutoDownload) {
    // 약간의 지연 후 버튼 클릭과 동일한 동작을 트리거하기 위해 커스텀 이벤트 발행
    setTimeout(() => {
      const event = new CustomEvent('trigger-download');
      window.dispatchEvent(event);
      shouldAutoDownload = false;
    }, 300);
  }

  function getTypeDescription() {
    if (!result) return null;
    return typeDescriptions[result.type];
  }

  function getAxisBars() {
    if (!result) return [];
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
</script>

<svelte:head>
  <title>M(A)BTI 결과 - {result?.name}님의 성향 분석</title>
</svelte:head>

{#if isLoading}
  <div class="fixed inset-0 h-screen w-screen overflow-hidden overflow-x-hidden bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center">
    <div class="text-white text-center w-full mx-auto box-border px-4 sm:px-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md transform sm:scale-110 md:scale-125">
      <img src="/creeper.png" alt="로딩 중" class="animate-bounce h-24 w-24 sm:h-28 sm:w-28 mx-auto mb-4" style="object-fit: contain;" />
      <b class="block text-lg sm:text-xl md:text-2xl">결과를 분석하고 있습니다...</b>
      {#if randomTip}
        <p class="block w-full text-lg sm:text-base text-white/90 mt-2 text-shadow-lg break-words break-all whitespace-pre-wrap">{randomTip}</p>
      {/if}
    </div>
  </div>
{:else if result}
  <div class="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600">
    <!-- 헤더 -->
    <div class="bg-white/90 backdrop-blur-sm shadow-sm">
      <div class="max-w-4xl mx-auto px-4 py-4">
        <div class="flex items-center justify-center">
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <h1 class="text-xl font-bold text-gray-800">M(A)BTI 결과</h1>
              <p class="text-sm text-gray-600">{result.name}님의 성향 분석 완료</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 메인 콘텐츠 -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <!-- 결과 헤더 -->
        <div class="text-center mb-8">
          <img src="/images.png" alt="result icon" class="mx-auto mb-4 object-contain" style="width: 100px; height: 120px;" />
          <h2 class="text-3xl font-bold text-gray-800 mb-2">
            {result.name}님의 M(A)BTI
          </h2>
          <div class="text-6xl font-bold text-green-500 mb-4">
            {result.type}
          </div>
          <p class="text-xl text-gray-600 font-medium">
            {getTypeDescription()?.title}
          </p>
        </div>

        <!-- 유형 설명 -->
        <div class="mb-8 p-6 bg-gray-50 rounded-xl">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">유형 설명</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            {getTypeDescription()?.description}
          </p>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">주요 특징:</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-700">
              {#each getTypeDescription()?.characteristics || [] as characteristic}
                <li>{characteristic}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- 축 분포 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">성향 분포</h3>
          <div class="space-y-4">
            {#each getAxisBars() as row}
              <div class="space-y-1">
                <div class="flex justify-between text-sm text-gray-700">
                  <span>{row.label}</span>
                  <span>{row.pair}</span>
                </div>
                <div class="flex w-full h-4 rounded-full overflow-hidden bg-gray-200">
                  <div class="bg-green-500 h-full" style="width: {row.value}%"></div>
                  <div class="bg-gray-400 h-full" style="width: {row.pairValue}%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-600">
                  <span>{row.value}%</span>
                  <span>{row.pairValue}%</span>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- 테스트 정보 -->
        <div class="text-center text-sm text-gray-500">
          <p>테스트 완료: {formatDate(result.completedAt)}</p>
          <p>YUMC from Yeungnam University</p>
        </div>

        <!-- 액션 버튼 -->
        <div class="mt-8 space-y-4">
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              on:click={() => goto('/')}
              class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              다시 테스트하기
            </button>
            <button
              on:click={() => showQR = !showQR}
              class="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {showQR ? '결과로 돌아가기' : 'QR 코드 생성'}
            </button>
          </div>
          
          <!-- 이미지 다운로드 -->
          {#if result}
            <ResultImage {result} />
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- QR 코드 모달 -->
{#if showQR && result}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl p-8 max-w-md w-full">
      <div class="text-center">
        <h3 class="text-xl font-bold text-gray-800 mb-4">QR 코드</h3>
        <p class="text-gray-600 mb-4">
          이 QR 코드를 스캔하여 결과를 공유하거나 저장할 수 있습니다.
        </p>
        <div class="bg-gray-100 rounded-lg p-4 mb-4">
          {#if result}
            <QRCode {result} size={200} />
          {/if}
        </div>
        <p class="text-xs text-gray-500 mb-4">
          QR 코드는 1시간 후 만료됩니다.
        </p>
        <button
          on:click={() => showQR = false}
          class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          닫기
        </button>
      </div>
    </div>
  </div>
{/if} 