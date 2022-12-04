<template>
  <div>
    <pc-card :mountains="mountains" />
  </div>
</template>

<script>
export default {
  name: "MainPage",

  async asyncData({ $axios }) {
    try {
      const mountains = await $axios.$get(
        "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314"
      );
      return { mountains };
    } catch (error) {
      console.log("error");
    }
  },
};
</script>
