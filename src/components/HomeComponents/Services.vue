<script setup>
import Service from "../Shared/Service.vue";
</script>

<template>
    <div id="services" class="services">
        <div class="container">
            <div class="services__header">
                <h1>We're your partner of choice to help you build a successful <span> agro business with our tools & techniques </span> at your fingertips.</h1> 
            </div>
            <div class="services__slider">
                <Service 
                    title="Export/import of agro related products" 
                    content="We facilitate import and export of agro related products at competitive pricing and get products shipped anywhere around the globe." 
                    imageFileName="services-exportation.jpg"
                />
                <Service 
                    title="Complete Farm Setup" 
                    content="Our team of experts can help you do the dirty work of setting up your farm while you get reports. From soil analysis to surverys, our team follows best pratices to provide quality services." 
                    imageFileName="slider-image3.jpg"
                />
                <Service 
                    title="Greenhouse Farming" 
                    content="Technology is at the core of our services. We set up greenhouse farms and technologies for businesses and individuals to facilitate healthier food production and profit maximization." 
                    imageFileName="greenhouse.jpg"
                />
                <Service 
                    title="Genral Consulting" 
                    content="Our team is always ready to help you in any area of agriculture. With years of experience, we advice you on best practices for effective service delivery and profit maximization." 
                    imageFileName="consulting.jpg"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/clash-display");
@import "../../assets/variables.scss";
    .services{
        background: $primary-color;
        // margin-top: 5rem;
        color: #FFF;
        padding: 5rem 0;

        &__header{
            max-width: 1050px;
            padding-bottom: 4rem;

            h1{
                font-size: 3.2rem;
                line-height: 1.4;
                font-weight: bolder;

                span{
                    color: #35A162;
                }
            }
        }

        &__slider{
            display: flex;
            overflow-x: auto;
            min-width: 100%;
            padding-bottom: 3rem;
        }::-webkit-scrollbar{
            display: none;
        }
    }


   // Media Queries - Phone 
   @media only screen and (max-width: 900px){
    .services{
        padding: 3rem 0;
        margin-top: 1rem;
        &__header{
            max-width: 100%;

            h1{
                font-size: 1.7rem;
                line-height: 1.8;
                padding-top: 1rem;
            }
        }
    }
   }
</style>