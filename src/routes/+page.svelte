<script lang="ts">
  import { goto } from '$app/navigation';

  let name = '';
  let isNameValid = false;

  $: isNameValid = name.trim().length >= 2;

  function handleStartTest(event?: Event) {
    event?.preventDefault();
    if (!isNameValid) return;

    const url = new URL('/test', window.location.origin);
    url.searchParams.set('name', name.trim());
    goto(url);
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && isNameValid) {
      handleStartTest();
    }
  }
</script>

<svelte:head>
  <title>M(A)BTI - 마인크래프트 플레이 성향 테스트</title>
  <meta name="description" content="마인크래프트 플레이 스타일을 통해 알아보는 당신의 M(A)BTI 유형" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center p-4">
  <div class="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
    <!-- 로고/아이콘 -->
    <div class="mb-8">
      <div class="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
        <span class="text-3xl">⛏️</span>
      </div>
      <h1 class="text-3xl font-bold text-gray-800 mb-2">M(A)BTI</h1>
      <p class="text-gray-600 text-lg">마인크래프트 플레이 성향 테스트</p>
    </div>

    <!-- 설명 -->
    <div class="mb-8 text-left">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">당신의 마인크래프트 플레이 스타일은?</h2>
      <p class="text-gray-600 mb-4">
        마인크래프트에서의 선택과 행동을 통해 알아보는 당신만의 성향 유형을 발견해보세요.
      </p>
      <ul class="text-sm text-gray-600 space-y-2">
        <li class="flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          총 10개의 질문으로 구성
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          약 5분 소요
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          16가지 M(A)BTI 유형 중 하나로 결과 도출
        </li>
      </ul>
    </div>

    <!-- 이름 입력 -->
    <div class="mb-8">
      <label for="name" class="block text-left text-sm font-medium text-gray-700 mb-2">
        당신의 이름을 입력해주세요
      </label>
      <input
        id="name"
        type="text"
        bind:value={name}
        on:keypress={handleKeyPress}
        placeholder="이름을 입력하세요"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-center text-lg"
        maxlength="20"
      />
    </div>

    <!-- 시작 버튼 -->
    <button
      on:click={handleStartTest}
      disabled={!isNameValid}
      class="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
    >
      테스트 시작하기
    </button>

    <!-- 푸터 -->
    <div class="mt-8 text-xs text-gray-500">
      <p>개인정보는 저장되지 않으며, 테스트 결과는 즉시 생성됩니다.</p>
    </div>
  </div>
</div>
