<template>
  <div class="pc-card">
    <div class="w-full min-h-screen flex justify-center items-center">
      <div class="w-[300px] h-[300px] bg-slate-500 opacity-70">
        <div class="flex justify-center text-lg">
          <h1>天氣</h1>
          <fa-icon icon="sun" />
        </div>
        <div>
          <span>地區</span>
        </div>
        <div>
          <span>時間</span>
        </div>
        <div>
          <span>天氣情況</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PCcard",
};
</script>
