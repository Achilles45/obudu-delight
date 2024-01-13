<script setup>
const props = defineProps(["title","content"])
</script>

<template>
    <div class="service">
        <div class="service__header">
            <img class="service__header--img" src="../../assets/images/plant.avif" alt="">
        </div>
       <div class="service__body">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
        <router-link to="">Request Service Today &nbsp; <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></router-link>
       </div>
    </div>
</template>

<style lang="scss" scoped>
    .service{
        background: rgba(5, 50, 50, 0.4);
        min-width: 350px;
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
            padding: 2rem;
            padding-bottom: 2.7rem;
            h4{
                line-height: 1.4;
                padding-bottom: .5rem;
                font-family: "Montserrat" !important;
                // font-weight: bold;
                text-transform: capitalize;
            }
            p{
                line-height: 2;
                opacity: .7;
                font-size: .95rem;
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
</style>