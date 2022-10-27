<template>
  <div>
    <Nuxt/>   
  </div>
</template>

<script>
export default {
    head() {
      return {
        bodyAttrs: {
          class: `w-full h-screen bg-cover overflow-auto bg-no-repeat bg-index`
        }
      }
    }
}
</script>

<style>

</style>