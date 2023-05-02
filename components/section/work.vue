<template>
  <div class="flex mt-16" id="work-section">
    <div class="my-auto mx-36 w-full">
      <div class="grid grid-cols-3 w-full">
        <div class="p-6 col-span-3">
          <span class="text-2xl text-indigo-700 font-medium pb-6">
            Personal Projects 🚀
          </span>
        </div>
        <div class="p-6 flex">
          <CardProject
            title="API Whatsapp Bot"
            category="Node.js, Express"
            date="March 2023"
            description="I made the integration with a WhatsApp Cloud API, using express. This was incorporated in one of my jobs, this helped to the company to delete the use of Twilio, making cheaper the sending messages costs."
            link="https://github.com/SoloEdrei/ansa-whatsappbot"
            image="https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1800&t=st=1682991717~exp=1682992317~hmac=96597daa1f58dc67f6fcce4a50444b4175ef9b5110873f78393c6f760879b3ef"
          />
        </div>
        <div class="p-6 flex">
          <CardProject
              title="Evaluation system"
              category="Vue.js, Laravel, Vite"
              date="January 2023"
              description="In Mexico we doesn't have the correct evaluations process for us judges, so I developed a monolithic application to evaluate the first instance judge in Morelos, creating an algorithm that randomize the questions for every judge."
              link="https://github.com/devanymx/tsjm-exam"
              image="https://img.freepik.com/foto-gratis/bodegon-balanza-justicia_23-2149776027.jpg?w=1800&t=st=1682994193~exp=1682994793~hmac=5f83812d27fb8d141bdc6b490ba3f5f54598139439c979fdd2fcbbdcfdecbf4a"
          />
        </div>
        <div class="p-6 flex">
          <CardProject
              title="Innovation Basic ERP"
              category="Vue.js, Laravel, Vite"
              date="Work in Progress"
              description="I live in a system outdated country where the small and medium business doesn't have any type of system, this is the reason why I'm making a Basic ERP, where the owners could control their business online, with graphs and more."
              link="https://github.com/devanymx/fesi-erp"
              image="https://img.freepik.com/foto-gratis/tableta-explotacion-mujer-tiro-medio_23-2149151168.jpg?w=1800&t=st=1682994655~exp=1682995255~hmac=bef8ab84034fe28d347be003ba584770dae353ad5a1879096de40dce9fb194ab"
          />
        </div>
        <div class="p-6 flex">
          <CardProject
              title="Delivery Platform (API Dashboard)"
              category="Nest.js, Node.js, Prisma"
              date="Expected @ July 2023"
              description="In my country we doesn't have services as Uber Eats, Cornershop or anothers and this is a really stressful situtation because we have a tons of restaurants,
                          sometimes get food it's a really stressful thing. This punish me to made an Whatsapp Based API to send orders to restaurants."
              link="https://github.com/devanymx/ansa-dashboard-api"
              image="https://img.freepik.com/vector-gratis/servicio-entrega-concepto-mascaras_23-2148509518.jpg?w=1800&t=st=1682994671~exp=1682995271~hmac=d74c793665cdf2130bcdc98a4bf699910b44d37da6b0d1c8989603a7431a5b3e"
          />
        </div>
        <div class="p-6 flex">
          <CardProject
              title="Delivery Platform (API Whatsapp)"
              category="Express, Node.js"
              date="Expected @ July 2023"
              description="The owners of restaurant first register their user at our dashboard, then upload all their products, and what...?
                          I made an Whatsapp Bot to send to our customers the products of the restaurants, here (WhatsApp) they could create their order and this gonna be send to the business."
              link="#"
              image="https://img.freepik.com/vector-gratis/servicio-entrega-concepto-mascaras_23-2148509518.jpg?w=1800&t=st=1682994671~exp=1682995271~hmac=d74c793665cdf2130bcdc98a4bf699910b44d37da6b0d1c8989603a7431a5b3e"
          />
        </div>
        <div class="col-span-3 px-6">
          <span class="text-1xl">
            I'm currently creating tons of new apps. Stay tuned to see my progress <a href="https://medium.com/@edreiccb" class="text-indigo-700 font-medium"> medium.com/@edreiccb</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work"
}
</script>

<style scoped>

</style>