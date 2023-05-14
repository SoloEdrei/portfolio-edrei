<template>
  <nav class="bg-white sticky top-0 border-b-2 border-indigo-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a href="#main-section" class="hover:bg-indigo-700 hover:text-teal-100 rounded-md px-6 py-3 text-sm font-medium" aria-current="page">Home</a>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0 space-x-4">
            <a href="https://docs.google.com/document/d/1CbqdTKP_VpajH5NUZA5dhA1x0XTeflIt/edit?usp=sharing&ouid=113222657194001848689&rtpof=true&sd=true" target="_blank" class="hover:bg-indigo-700 hover:text-teal-100 rounded-md px-6 py-3 text-sm font-medium">My CV</a>
            <a href="#contact-section" class="bg-indigo-700 text-teal-100 rounded-md px-6 py-3 text-sm font-medium">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "HeaderNav",
}
</script>

<style scoped>

</style>
