<template>
  <div class="flex my-8" id="contact-section">
    <div class="my-auto mx-36 w-full">
      <div class="grid grid-cols-1 w-full p-6">
        <div class="text-center">
          <span class="text-2xl text-indigo-700 font-medium mb-10">
            Contact me ❤️
          </span>
        </div>
        <div class="my-10">
          <div class="flex">
            <div class="mx-auto">
              <div>Email: <a href="mailto:contact@edrei.dev" class="text-indigo-700 font-medium">contact@edrei.dev</a></div>
              <div>Medium: <a href="https://medium.com/@edreiccb" class="text-indigo-700 font-medium">@edreiccb</a></div>
              <div>LinkedIn: <a href="https://linkedin.com/in/edreic" class="text-indigo-700 font-medium">Edrei Cruz</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const rootElement = ref()
const options = {
  url: 'https://calendly.com/edreidev/lets-to-talk',
}
</script>
<script>
export default {
  name: "calendly"
}
</script>

<style scoped>

</style>