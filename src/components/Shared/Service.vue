<script setup>
const props = defineProps(["title", "content", "imageFileName"])

const getImageUrl = () => {
  // This path must be correct for your file
  return new URL(`../../assets/images/${props.imageFileName}`, import.meta.url);
}


</script>

<template>
    <div class="service">
        <div class="service__header">
            <!-- <img class="service__header--img" src="../../assets/images/plant.avif" alt=""> -->
            <img class="service__header--img" :src="getImageUrl()" alt="">
        </div>
       <div class="service__body">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
        <router-link to="">Request Service &nbsp; <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></router-link>
       </div>
    </div>
</template>

<style lang="scss" scoped>
    .service{
        background: rgba(5, 50, 50, 0.4);
        min-width: 300px;
        margin: 0 10px;
        color: #fff;
        border-top-left-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        &__header{
            &--img{
                max-width: 100%;
                height: auto;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
            }
        }

        &__body{
            padding: 1.5rem 1.5rem; 
            padding-bottom: 2.7rem;
            h4{
                line-height: 1.6;
                padding-bottom: .5rem;
                // font-family: "Montserrat" !important;
                // font-weight: bold;
                font-size: 1.25rem;
                text-transform: capitalize;
            }
            p{
                line-height: 2;
                opacity: .7;
                font-size: .9rem;
                padding-bottom: 1.5rem;
            }
            a{
                background: #35A162;
                padding: 1.05rem 1.5rem;
                border-radius: 6px;
                color: #FFF !important;
            }
        }
    }

       // Media Queries - Phone 
   @media only screen and (max-width: 900px){
    .service{
        min-width: 320px;

        &__body{
            padding: 2rem 1.5rem;
            padding-bottom: 3rem;
        }
    }
   }
   
</style>