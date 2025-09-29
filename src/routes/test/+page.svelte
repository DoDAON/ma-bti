<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { questions } from '$lib/data';
  import { initializeAxisTally, updateAxisTally, revertAxisTally, calculateProgress, generateResult } from '$lib/utils';
  import type { AxisTally, AxisScoreUnit } from '$lib/types';

  let currentQuestionIndex = 0;
  let axisTally: AxisTally;
  let name = '';
  let isLoading = true;
  // 각 질문에서 사용자가 선택한 축 점수 히스토리 (이전으로 시 롤백용)
  const answerHistory: AxisScoreUnit[][] = [];

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
    // 현재 질문의 선택을 히스토리에 저장
    answerHistory[currentQuestionIndex] = axisScores;

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

  // 이전으로 이동 (1번 질문에서는 비활성)
  function goToPreviousQuestion() {
    if (currentQuestionIndex === 0) return;
    // 직전에 반영했던 점수를 롤백
    const lastScores = answerHistory[currentQuestionIndex - 1];
    if (lastScores && lastScores.length > 0) {
      axisTally = revertAxisTally(axisTally, lastScores);
    }
    // 인덱스 이동 및 해당 히스토리 제거
    currentQuestionIndex--;
    answerHistory[currentQuestionIndex] = [];
    // 콘솔
    console.log('[MABTI] Axis Tally', {
      E: axisTally.E, I: axisTally.I,
      S: axisTally.S, N: axisTally.N,
      T: axisTally.T, F: axisTally.F,
      J: axisTally.J, P: axisTally.P
    });
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
            <div>
              <h1 class="text-xl font-bold text-gray-800">M(A)BTI 테스트</h1>
              <p class="text-sm text-gray-600">{name}님의 성향 분석</p>
            </div>
          </div>
          {#if currentQuestionIndex > 0}
            <button
              on:click={goToPreviousQuestion}
              class="px-3 py-2 rounded-lg bg-white text-green-700 hover:bg-green-50 transition"
            >
              ← 이전으로
            </button>
          {/if}
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
          {#if getCurrentQuestion().titleImage}
            <div class="flex justify-center mb-4">
              <div class="group relative bg-gray-50 border-2 border-transparent rounded-xl overflow-hidden w-60 md:w-76">
                <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <img 
                    src={getCurrentQuestion().titleImage}
                    alt="질문 타이틀 이미지"
                    class="w-full h-full object-cover"
                    on:error={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div class="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div class="text-gray-500 text-center">
                      <div class="text-2xl mb-2">🏠</div>
                      <div class="text-sm">이미지 준비중</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/if}
          <h2 class="text-2xl font-bold text-gray-800 mb-2 whitespace-pre-line">
            {getCurrentQuestion().text}
          </h2>
          {#if getCurrentQuestion().subtext}
            <p class="text-sm text-gray-500 whitespace-pre-line">{getCurrentQuestion().subtext}</p>
          {/if}
          <p class="text-gray-600 mt-2">가장 적합한 답을 선택해주세요</p>
        </div>

        <!-- 선택지 -->
        {#if getCurrentQuestion().type === 'select'}
          <div class="space-y-4">
            {#each getCurrentQuestion().choices as choice, index}
              <button
                on:click={(e) => { (e.currentTarget as HTMLButtonElement).blur(); handleChoiceSelect(choice.axisScores); }}
                class="w-full p-6 text-left bg-gray-50 hover:bg-green-50 border-2 border-transparent hover:border-green-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <div class="flex items-center space-x-4">
                  <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div class="text-lg text-gray-800 font-medium whitespace-pre-line">{choice.text}</div>
                    {#if choice.subtext}
                      <div class="text-sm text-gray-500 whitespace-pre-line">{choice.subtext}</div>
                    {/if}
                  </div>
                </div>
              </button>
            {/each}
          </div>
        {:else if getCurrentQuestion().type === 'image'}
          <div class="space-y-6">
            <!-- 2x2 그리드 (첫 4개 선택지) -->
            <div class="flex justify-center gap-4">
              <div class="flex flex-col gap-4">
                <!-- 1번, 3번 선택지 -->
                <button
                  on:click={(e) => { (e.currentTarget as HTMLButtonElement).blur(); handleChoiceSelect(getCurrentQuestion().choices[0].axisScores); }}
                  class="group relative bg-gray-50 hover:bg-green-50 border-2 border-transparent hover:border-green-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 overflow-hidden w-64"
                >
                  <!-- 이미지 영역 -->
                  <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {#if getCurrentQuestion().choices[0].imageUrl}
                      <img 
                        src={getCurrentQuestion().choices[0].imageUrl} 
                        alt={getCurrentQuestion().choices[0].text}
                        class="w-full h-full object-cover"
                        on:error={(e) => {
                          // 이미지 로드 실패 시 플레이스홀더 표시
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                        }}
                      />
                      <div class="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div class="text-gray-500 text-center">
                          <div class="text-2xl mb-2">🏠</div>
                          <div class="text-sm">이미지 준비중</div>
                        </div>
                      </div>
                    {:else}
                      <div class="text-gray-500 text-center">
                        <div class="text-4xl mb-2">🏠</div>
                        <div class="text-sm">이미지 준비중</div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- 선택지 번호 -->
                  <div class="absolute top-2 left-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-xs">
                    1
                  </div>
                  
                  <!-- 텍스트 영역 -->
                  <div class="p-3">
                    <div class="text-sm font-medium text-gray-800 text-center">{getCurrentQuestion().choices[0].text}</div>
                  </div>
                </button>
                
                <button
                  on:click={(e) => { (e.currentTarget as HTMLButtonElement).blur(); handleChoiceSelect(getCurrentQuestion().choices[2].axisScores); }}
                  class="group relative bg-gray-50 hover:bg-green-50 border-2 border-transparent hover:border-green-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 overflow-hidden w-64"
                >
                  <!-- 이미지 영역 -->
                  <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {#if getCurrentQuestion().choices[2].imageUrl}
                      <img 
                        src={getCurrentQuestion().choices[2].imageUrl} 
                        alt={getCurrentQuestion().choices[2].text}
                        class="w-full h-full object-cover"
                        on:error={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                        }}
                      />
                      <div class="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div class="text-gray-500 text-center">
                          <div class="text-2xl mb-2">🏠</div>
                          <div class="text-sm">이미지 준비중</div>
                        </div>
                      </div>
                    {:else}
                      <div class="text-gray-500 text-center">
                        <div class="text-4xl mb-2">🏠</div>
                        <div class="text-sm">이미지 준비중</div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- 선택지 번호 -->
                  <div class="absolute top-2 left-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-xs">
                    3
                  </div>
                  
                  <!-- 텍스트 영역 -->
                  <div class="p-3">
                    <div class="text-sm font-medium text-gray-800 text-center">{getCurrentQuestion().choices[2].text}</div>
                  </div>
                </button>
              </div>
              
              <div class="flex flex-col gap-4">
                <!-- 2번, 4번 선택지 -->
                <button
                  on:click={(e) => { (e.currentTarget as HTMLButtonElement).blur(); handleChoiceSelect(getCurrentQuestion().choices[1].axisScores); }}
                  class="group relative bg-gray-50 hover:bg-green-50 border-2 border-transparent hover:border-green-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 overflow-hidden w-64"
                >
                  <!-- 이미지 영역 -->
                  <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {#if getCurrentQuestion().choices[1].imageUrl}
                      <img 
                        src={getCurrentQuestion().choices[1].imageUrl} 
                        alt={getCurrentQuestion().choices[1].text}
                        class="w-full h-full object-cover"
                        on:error={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                        }}
                      />
                      <div class="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div class="text-gray-500 text-center">
                          <div class="text-2xl mb-2">🏠</div>
                          <div class="text-sm">이미지 준비중</div>
                        </div>
                      </div>
                    {:else}
                      <div class="text-gray-500 text-center">
                        <div class="text-4xl mb-2">🏠</div>
                        <div class="text-sm">이미지 준비중</div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- 선택지 번호 -->
                  <div class="absolute top-2 left-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-xs">
                    2
                  </div>
                  
                  <!-- 텍스트 영역 -->
                  <div class="p-3">
                    <div class="text-sm font-medium text-gray-800 text-center">{getCurrentQuestion().choices[1].text}</div>
                  </div>
                </button>
                
                <button
                  on:click={(e) => { (e.currentTarget as HTMLButtonElement).blur(); handleChoiceSelect(getCurrentQuestion().choices[3].axisScores); }}
                  class="group relative bg-gray-50 hover:bg-green-50 border-2 border-transparent hover:border-green-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 overflow-hidden w-64"
                >
                  <!-- 이미지 영역 -->
                  <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {#if getCurrentQuestion().choices[3].imageUrl}
                      <img 
                        src={getCurrentQuestion().choices[3].imageUrl} 
                        alt={getCurrentQuestion().choices[3].text}
                        class="w-full h-full object-cover"
                        on:error={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                        }}
                      />
                      <div class="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div class="text-gray-500 text-center">
                          <div class="text-2xl mb-2">🏠</div>
                          <div class="text-sm">이미지 준비중</div>
                        </div>
                      </div>
                    {:else}
                      <div class="text-gray-500 text-center">
                        <div class="text-4xl mb-2">🏠</div>
                        <div class="text-sm">이미지 준비중</div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- 선택지 번호 -->
                  <div class="absolute top-2 left-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-xs">
                    4
                  </div>
                  
                  <!-- 텍스트 영역 -->
                  <div class="p-3">
                    <div class="text-sm font-medium text-gray-800 text-center">{getCurrentQuestion().choices[3].text}</div>
                  </div>
                </button>
              </div>
            </div>
            
            <!-- 5번째 선택지 (중앙 배치) -->
            {#if getCurrentQuestion().choices.length > 4}
              <div class="flex justify-center">
                <button
                  on:click={(e) => { (e.currentTarget as HTMLButtonElement).blur(); handleChoiceSelect(getCurrentQuestion().choices[4].axisScores); }}
                  class="group relative bg-gray-50 hover:bg-green-50 border-2 border-transparent hover:border-green-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 overflow-hidden w-64"
                >
                  <!-- 이미지 영역 -->
                  <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {#if getCurrentQuestion().choices[4].imageUrl}
                      <img 
                        src={getCurrentQuestion().choices[4].imageUrl} 
                        alt={getCurrentQuestion().choices[4].text}
                        class="w-full h-full object-cover"
                        on:error={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                        }}
                      />
                      <div class="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div class="text-gray-500 text-center">
                          <div class="text-2xl mb-2">🏠</div>
                          <div class="text-sm">이미지 준비중</div>
                        </div>
                      </div>
                    {:else}
                      <div class="text-gray-500 text-center">
                        <div class="text-4xl mb-2">🏠</div>
                        <div class="text-sm">이미지 준비중</div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- 선택지 번호 -->
                  <div class="absolute top-2 left-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-xs">
                    5
                  </div>
                  
                  <!-- 텍스트 영역 -->
                  <div class="p-3">
                    <div class="text-sm font-medium text-gray-800 text-center">{getCurrentQuestion().choices[4].text}</div>
                  </div>
                </button>
              </div>
            {/if}
          </div>
        {/if}

        <!-- 진행 상태 -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            {questions.length}번째 질문 중 {currentQuestionIndex + 1}번째
          </p>
        </div>
      </div>
    </div>
  </div>
{/if} 