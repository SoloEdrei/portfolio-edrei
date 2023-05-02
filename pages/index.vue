<template>
<div class="main h-head snap-y scroll-pt-16 snap-proximity scroller ">
  <SectionMain/>
  <div class="h-screen snap-start snap-always">
    <SectionAbout/>
    <SectionWork/>
    <SectionSkills/>
    <SectionCalendly/>
    <SectionFooter/>
  </div>
</div>
</template>

<script setup>
const title = ref('Edrei Portfolio')
const description = ref('Hello, Im Edrei, a backend developer waiting to be hired.')
// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>