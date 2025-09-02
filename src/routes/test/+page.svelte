<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { questions } from '$lib/data';
  import { initializeAxisTally, updateAxisTally, calculateProgress, generateResult } from '$lib/utils';
  import type { AxisTally, AxisScoreUnit } from '$lib/types';

  let currentQuestionIndex = 0;
  let axisTally: AxisTally;
  let name = '';
  let isLoading = true;

  onMount(() => {
    // URL에서 이름 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    name = urlParams.get('name') || '';
    
    if (!name) {
      goto('/');
      return;
    }

    // 축 점수 초기화
    axisTally = initializeAxisTally();
    isLoading = false;
  });

  function handleChoiceSelect(axisScores: AxisScoreUnit[]) {
    // 축 점수 업데이트
    axisTally = updateAxisTally(axisTally, axisScores);

    // 현재 축 누적 점수 콘솔 출력
    console.log('[MABTI] Axis Tally', {
      E: axisTally.E, I: axisTally.I,
      S: axisTally.S, N: axisTally.N,
      T: axisTally.T, F: axisTally.F,
      J: axisTally.J, P: axisTally.P
    });
    
    // 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
    } else {
      // 테스트 완료 - 결과 페이지로 이동
      const result = generateResult(name, axisTally);
      const resultData = encodeURIComponent(JSON.stringify(result));
      goto(`/result?data=${resultData}`);
    }
  }

  function getProgressPercentage() {
    return calculateProgress(currentQuestionIndex + 1, questions.length);
  }

  function getCurrentQuestion() {
    return questions[currentQuestionIndex];
  }
</script>

<svelte:head>
  <title>M(A)BTI 테스트 - {name}님의 성향 분석</title>
</svelte:head>

{#if isLoading}
  <div class="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center">
    <div class="text-white text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p>테스트를 준비하고 있습니다...</p>
    </div>
  </div>
{:else}
  <div class="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600">
    <!-- 헤더 -->
    <div class="bg-white/90 backdrop-blur-sm shadow-sm">
      <div class="max-w-4xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <button
              on:click={() => goto('/')}
              class="text-green-600 hover:text-green-700 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div>
              <h1 class="text-xl font-bold text-gray-800">M(A)BTI 테스트</h1>
              <p class="text-sm text-gray-600">{name}님의 성향 분석</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-600">질문 {currentQuestionIndex + 1} / {questions.length}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 진행 바 -->
    <div class="max-w-4xl mx-auto px-4 py-4">
      <div class="bg-white/20 backdrop-blur-sm rounded-full h-3 overflow-hidden">
        <div
          class="bg-white h-full transition-all duration-500 ease-out"
          style="width: {getProgressPercentage()}%"
        ></div>
      </div>
    </div>

    <!-- 메인 콘텐츠 -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <!-- 질문 -->
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            {getCurrentQuestion().text}
          </h2>
          <p class="text-gray-600">가장 적합한 답을 선택해주세요</p>
        </div>

        <!-- 선택지 -->
        <div class="space-y-4">
          {#each getCurrentQuestion().choices as choice, index}
            <button
              on:click={() => handleChoiceSelect(choice.axisScores)}
              class="w-full p-6 text-left bg-gray-50 hover:bg-green-50 border-2 border-transparent hover:border-green-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <span class="text-lg text-gray-800 font-medium">{choice.text}</span>
              </div>
            </button>
          {/each}
        </div>

        <!-- 진행 상태 -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            {currentQuestionIndex + 1}번째 질문 중 {questions.length}번째
          </p>
        </div>
      </div>
    </div>
  </div>
{/if} 