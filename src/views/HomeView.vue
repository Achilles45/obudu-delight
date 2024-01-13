<script setup>
import Navbar from "@/components/Shared/Navbar.vue"
// import Banner from "@/components/HomeComponents/Banner.vue"
import Hero from "@/components/HomeComponents/Hero.vue"
import Intro from "@/components/HomeComponents/Intro.vue"
import MetaInfo from "@/components/HomeComponents/MetaInfo.vue"
import Services from "@/components/HomeComponents/Services.vue"
import Export from "@/components/HomeComponents/Export.vue"
import Helper from "@/components/Shared/Helper.vue"
import Faqs from "@/components/HomeComponents/Faqs.vue"
</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <Intro />
    <Services />
    <Export />
    <Faqs />
    <Helper />
  </div>
</template>
