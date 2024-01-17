<script setup>
import MetaInfo from "./MetaInfo.vue";

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const getImageUrl = (img) => {
  // This path must be correct for your file
  return new URL(`../../assets/images/${img}`, import.meta.url);
}

const img1 = getImageUrl("slider-groundnut-seeds.jpg")
const img2 = getImageUrl("slider-hydroponics.jpg")
const img3 = getImageUrl("slider-image0.jpg")
const img4 = getImageUrl("slider-image1.jpg")
const img5 = getImageUrl("slider-image2.jpg")
const img6 = getImageUrl("slider-image3.jpg")
// const img7 = getImageUrl("slider-image4.jpg")

const images = [img1, img2, img3, img4, img5, img6]

const sliders = [
    getImageUrl("../../assets/images/consulting.jpg",)
]

</script>

<template>
    <div class="hero">
        <div class="container">
            <div class="hero__text">
                <h1>Access <span>Agro Trade Opportunities</span> Globally</h1>
                <p>At the heart of Obudu, Obudu Delight is unlocking massive opportunities for growth and value generation in the agricultural industry. We simply provide you with the products, tools, techniques, and know-how to flourish in the agrospace.</p>
                <div class="hero__text__patterns">
                    <img src="../../assets/images/stroke.webp" alt="">
                </div>
                <div class="hero__text__buttons">
                    <a target="_blank" href="https://forms.gle/cvcxfrKCwhBqTJgS6" class="hero__text__buttons--request">Request A service Today &nbsp; <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a>
                    <router-link to="/contact" class="hero__text__buttons--learn">Contact Sales</router-link>
                </div>
            </div>
            <div class="hero__bottom">
                <div class="hero__bottom__metainfo">
                    <div class="hero__bottom__metainfo--top">
                        <h5>“I had a fantastic experince ordering and getting cocoa pods shipped from Nigeria to the United Kingdom. I'd recommend them any day.</h5>
                    </div>
                    <div class="hero__bottom__metainfo--bottom">
                        <h6>Achilles Usuoyibo, CEO JinoFarms Ltd</h6>
                    </div>
                </div>
                <div class="hero__bottom__content">
                    <div class="hero__bottom__content--overlay"></div>
                    <!-- <img class="hero__bottom__content--img" src="../../assets/images/banner.jpeg" alt=""> -->
                    <carousel :autoplay="2000" :wrap-around="true" :items-to-show="1.5">
                        <slide v-for="slider in images" :key="slider">
                        <img :src="slider" alt="">
                        </slide>

                        <template #addons>
                        <!-- <navigation /> -->
                        <pagination />
                        </template>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'vue3-carousel/dist/carousel.css';
// @import url("https://fonts.cdnfonts.com/css/clash-display");
@import "../../assets/variables";
@import "../../assets/variables.scss";
    .hero{
        // height: 100vh;
        padding-top: 12rem;
        margin-bottom: 0rem;

        &__text{
            max-width: 950px;
            margin: 0 auto;
            text-align: center;
            padding-bottom: 3rem;
            position: relative;

            &__patterns{
                position: absolute;
                top: 6rem;
                left: -2rem;
            }

            h1{
                // font-family: "Clash Display" !important;
                font-size: 3rem;
                font-weight: 900 !important;
                line-height: 1.3;
                color: $primary-color;
                text-transform: capitalize;
                font-family: "Gordita Bolder" !important;

                span{
                    color: #35A162;
                    font-weight: bold;
                }
            }

            p{
                max-width: 95%;
                margin: 0 auto;
                padding-top: 1rem;
                line-height: 2;
                font-size: 1.02rem;
                opacity: .6;
                color: $primary-color;
            }

            &__buttons{
                margin-top: 2rem;
                margin-bottom: 2rem;
                display: flex;
                gap: 20px;
                align-items: center;
                justify-content: center;

                &--request{
                    background: #35A162;
                    padding: 1.2rem 2rem;
                    // width: 17rem !important;
                    border-radius: 6px;
                    color: #FFF !important;
                    // font-family: "Clash Display" !important;
                }

                &--learn{
                    @extend .hero__text__buttons--request;
                    background: #FFF;
                    border: 1px solid #35A162;
                    color: #35A162 !important;
                }

            }
        }

        &__bottom{
            display: grid;
            grid-template-columns: 400px 1fr;
            grid-gap: 20px;

            &__metainfo{
                background: linear-gradient(to right, rgba(4,39,39, .96), rgba(4,39,39, .96)), url("../../assets/images/waves.svg");
                background-position: center;
                background-size: cover;
                padding: 1rem 2rem;
                border-radius: 10px;
                color: #FFF;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                height: 305px;
                margin-top: 1rem;

                &--top{
                    h5{
                        line-height: 2;
                        font-size: 1.1rem;
                    }
                }

                &--bottom{
                    h6{
                        opacity: .7;
                    }
                }
            }
            &__content{
                position: relative;
                // background: red;
                // overflow-x: scroll;
                width: 700px;
                padding-top: 1rem;

                img{
                    width: 450px;
                    // max-height: 400px;
                    border-radius: 10px;
                }

                // &--img{
                //     width: 100%;
                //     max-height: 300px;
                //     border-radius: 10px;
                // }

                &--overlay{
                    // background: linear-gradient(to right, rgba(4,39,39, .1), rgba(0,0,0,.2));
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    border-radius: 10px;
                    padding-top: 1rem;
                    // z-index: 999 !important;
                }
            }
        }
    }

       // Media Queries - Phone 
       @media only screen and (max-width: 900px){
        .hero{
            padding-top: 10rem;
            &__text{
                
                h1{
                    font-size: 2rem;
                    line-height: 1.6;
                }

                p{
                    max-width: 100%;
                    font-size: .9rem;
                }

                &__buttons{
                    flex-direction: column;

                    &--learn{
                        display: none;
                        padding: 1.2rem 4rem;;
                    }
                }
                &__patterns{
                    display: none;
                }
            }

            &__bottom{
                display: flex;
                flex-direction: column;

                &__metainfo{
                    height: 180px !important;
                    padding: 1.2rem 1.2rem !important;
                    &--top{
                        h5{
                            padding-bottom: 2rem;
                            font-size: .9rem;
                            opacity: .9;
                        }
                    }
                }

                &__content{
                    max-width: 490px !important;
                    width: 100%;
                    overflow-y: hidden !important;
                    overflow-x: hidden !important;

                    img{
                        width: 230px;
                    }
                }
            }
        }
       }
</style>