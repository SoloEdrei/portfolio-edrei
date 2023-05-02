<template>
  <a :href="link" target="_blank">
    <article class="flex flex-col items-start justify-between">
      <div class="relative w-full">
        <img :src="image" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div class="max-w-xl">
        <div class="mt-8 flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">{{ date }}</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ category }}</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span class="absolute inset-0"></span>
              {{ title }}
            </a>
          </h3>
          <p class="mt-5 line-clamp-7 text-sm leading-6 text-gray-600">{{ description }}</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img src="https://media.licdn.com/dms/image/C4E03AQGkB8EhX5U-kw/profile-displayphoto-shrink_800_800/0/1612895303300?e=1688601600&v=beta&t=9T8HFCHgyQZFK-hbVZoH86-NH51ZXiEo9Veg4emiw3Q" alt="" class="h-10 w-10 rounded-full bg-gray-100">
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a href="#">
                <span class="absolute inset-0"></span>
                Edrei Cruz
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  name: "project",
  props: ['image', 'title', 'category', 'date', 'description', 'link']
}
</script>

<style scoped>

</style>