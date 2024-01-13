<script setup>
</script>

<template>
    <div class="banner">
        <div class="container">
            <div class="banner__content">
                <div class="banner__content__text">
                    <h1>Access Agro Trade <span>Opportunities</span> Seamlessly</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, libero cupiditate harum asperiores praesentium consequuntur vitae atque maiores tempora facere.</p>

                    <div class="banner__content__text__buttons">
                    <router-link to="/">Request a Service today</router-link>
                    <router-link to="/">Learn More</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div >
</template>

<style lang="scss" scoped>
    .banner{
        background: linear-gradient(to right, rgba(2, 11, 11, 0.95), rgba(2, 15, 15, .85)), url("../../assets/images/banner.jpeg");
        background-size: cover;
        background-position: center;
        height: 100vh;

       &__content{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        padding-top: 6rem;

        &__text{
            max-width: 1100px;
            text-align: center;

            h1{
                font-weight: 700;
                padding-bottom: 1.5rem;
                line-height: 1.5;
                font-size: 4rem;
                padding-top: 2rem;

                span {
                    color: #03C957;
                }
            }

            p{
                line-height: 2;
                opacity: .9;
            }
        }
       }
    }
</style>