<template>
  <div class="pc-card">
    <div class="w-full min-h-screen flex justify-center items-center">
      <div class="w-[300px] h-[300px] bg-slate-500 opacity-70">
        <select v-model="citySelect">
          <option value="null">選擇地區:</option>
          <option v-for="(city, index) in citys" :key="index" :value="index">
            {{ city.city }}
          </option>
        </select>
        <div v-if="districts.weatherElement !== undefined">
          <div class="flex justify-center text-lg">
            <h1>天氣: {{ districts.weatherElement[0].time[0].parameter.parameterName }}</h1>
            <fa-icon icon="sun" />
          </div>
          <div>
            <span>地區: {{ districts.locationName }}</span>
          </div>
          <div>
            <span>開始時間: {{ districts.weatherElement[0].time[0].startTime }}</span>
          </div>
          <div>
            <span>結束時間: {{ districts.weatherElement[0].time[0].endTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PCcard",

  data() {
    return {
      citySelect: null,
      citys: [
        {
          city: "嘉義縣",
        },
        {
          city: "新北市",
        },
        {
          city: "嘉義市",
        },
        {
          city: "新竹縣",
        },
        {
          city: "新竹市",
        },
      ],
    };
  },

  props: {
    mountains: {
      type: Object,
      required: () => {},
    },
  },

  computed: {
    districts() {
      let districts = [];
      if (this.citySelect !== null) {
        // districts = this.citys[this.citySelect];
        districts = this.mountains.records.location[this.citySelect];
      }
      return districts;
    },
  },
};
</script>
