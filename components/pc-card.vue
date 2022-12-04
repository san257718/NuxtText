<template>
  <div class="pc-card">
    <div class="w-full min-h-screen flex justify-center items-center">
      <div class="w-[300px] h-[300px] bg-slate-500 opacity-70">
        <select>
          <option>選擇地區:</option>
        </select>
        <div v-for="link in mountains.records.location" :key="link.title">
          <div class="flex justify-center text-lg">
            <h1>天氣: {{link.weatherElement[0].time[0].parameter.parameterName}}</h1>
            <!-- <p>{{ link }}</p> -->
            <fa-icon icon="sun" />
          </div>
          <div>
            <span>地區: {{link.locationName}}</span>
          </div>
          <div>
            <span>開始時間: {{link.weatherElement[0].time[0].startTime}}</span>
          </div>
          <div>
            <span>結束時間: {{link.weatherElement[0].time[0].endTime}}</span>
          </div>
        </div>
        <div>{{returnMountains}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PCcard",

  props: {
    mountains: {
      type: Object,
      required: () => {}
    }
  },

  computed: {
    returnMountains(){
      if(this.mountains) {
        console.log(this.mountains);
      }
      return ''
    }
  }
};
</script>
