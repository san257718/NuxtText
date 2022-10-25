<template>
  <div>
    <div v-for="mountain in mountains.records.location" :key="mountain.title">
      <div>{{ mountain.locationName }}</div>
      <div>
        {{ mountain.weatherElement[0].time[0].parameter.parameterName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",

  data() {
    return {
      mountains: [],
    };
  },

  // async fetch() {
  //   this.mountains = await fetch(
  //     "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314"
  //   ).then((res) => res.json());
  // },

  // async asyncData() {
  //   let { data } = await axios.get(
  //     `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314`
  //   );
  //   return { data };
  // },
};
</script>
