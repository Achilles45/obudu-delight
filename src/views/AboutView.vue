<script setup>
  import Navbar from '@/components/Shared/Navbar.vue';
  import PageIntro from '@/components/Shared/PageIntro.vue';
  import Helper from '@/components/Shared/Helper.vue';
  import WhyUs from '@/components/HomeComponents/WhyUs.vue';
  import Footer from '@/components/Shared/Footer.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="about">
      <PageIntro 
        title="About Us"
        description="Unleashing through exports to the rest of the world the potential of agriculture in Africa with technology, ensuring that all exports and products meet global standards, and maintaining the natural freshness."
      />
    </div>
    <div class="container">
      <div class="about__text">
          <h1>Our mission is crystal clear -  to become a power house in the entire agricultural value chain providing <span>value for our customers, people and investors through a sustainable practices and approach</span>.</h1>
      </div>
    </div>

    <WhyUs />
    <Helper />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";
  .about {
    padding-top: 10rem;
  }

  .about__text{
    margin-top: 4rem;
    margin-bottom: 4rem;
    h1{
      font-size: 2.7rem;
      line-height: 1.6;
      color: #000;

      span{
        opacity: .5;
      }
    }
  }

   // Media Queries - Phone 
   @media only screen and (max-width: 900px) {
    .about__text {
      margin-top: 3rem;
      h1{
        font-size: 1.6rem;
        line-height: 1.7;
      }
    }
   }
</style>
