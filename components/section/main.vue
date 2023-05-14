<template>
  <div class="flex h-full" id="main-section">
    <div class="my-auto mx-36 w-full">
      <div class="grid grid-cols-2 sm:grid-cols-1 w-full">
        <div class="p-6 flex">
          <div class="my-auto">
            <div class="block">
              Backend Developer
            </div>
            <div class="block text-5xl text-indigo-700 font-medium py-6">
              Atl Edrei Cruz Castillo
            </div>
            <div class="text-justify">
              I’m a backend developer with 4 years of experience, working with Node.js, Laravel and Vue.js. I’ve been assigned for many projects of blue chips companies, I’ve experience in business systems like ERPs, POS, Business Intelligence and E-Commerce.
            </div>
            <div class="block mt-16">
              <a href="#contact-section" class="bg-indigo-700 text-teal-100 rounded-md px-6 py-3 text-sm font-medium">Contact Me</a>
            </div>
          </div>
        </div>
        <div class="p-6">
          <div class="h-full w-full flex">
            <img src="~/assets/images/profile.png" class="w-full" alt="">
          </div>
        </div>
        <div class="col-span-2 flex pt-16">
          <div class="m-auto">
            <a href="#about-section" class="text-center">
              <img src="~/assets/images/icons/arrow-down.svg" class="bounce" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection"
}
</script>

<style scoped>

</style>