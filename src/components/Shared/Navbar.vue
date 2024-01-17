<script setup>
import { ref } from "vue"
const menu = document.getElementById("menu")

const isNavbarActive = ref(true)

const toggleNavbar = () => {
    isNavbarActive.value = !isNavbarActive.value;
}

</script>

<template>
    <div class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__content__left">
                    <a href="/"><img src="../../assets/images/logo.png" alt=""></a>
                </div>
                <div :class=" isNavbarActive ? 'header__content__right' : 'mobile' ">
                    <ul @click="toggleNavbar" class="header__content__right__content">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Our Products</a></li>
                        <!-- <li><a href="#services">Our Services</a></li> -->
                        <li class="header__content__right__content--quote"><a href="/contact">Contact Us Today</a></li>
                    </ul>
                </div>
                <div @click="toggleNavbar" id="menu" class="header__content__menu">
                    <font-awesome-icon v-if="isNavbarActive" style="font-size: 1.4rem; color: #042727;" :icon="['fas', 'bars']" />
                    <font-awesome-icon v-if="!isNavbarActive" style="font-size: 1.4rem; color: #042727;" :icon="['fas', 'xmark']" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
    .header{
        // padding: .7rem 0;
        // height: 7rem;
        // height: auto;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 999 !important;
        background: #FFF;
        // background: red;

        &__content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            // padding-top: 1rem;

            &__left{
                // display: flex;
                // align-items: center;
                
                img {
                    max-width: 200px;
                }
            }

            &__right{
                padding-top: 1rem;
                &__content{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 40px;

                    &--quote{
                        // background: #03C957;
                        background: #35A162;
                        padding: 1rem 2rem;
                        border-radius: 6px;
                        font-weight:4500;
                        font-size: .95rem;

                        a{
                            color: #FFF !important;
                        }
                    }
                }
            }

            &__menu{
                // background: orange;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                display: none;
                // padding-right: 6rem;
            }
        }
    }


    // Media Queries - Phone 
    @media only screen and (max-width: 900px){
        .header {
            position: fixed;
            // background: red;
            // height: 4rem;
            // padding: 1rem 1rem;
            // background: red;

            &__content{
                // padding-top: 1rem;

                &__left{
                    img{
                        max-width: 150px;
                        height: auto;
                    }
                }
                &__right {
                    position: absolute;
                    top: 105rem !important;
                    right: 0;
                    left: 0;
                    height: 100vh;
                    // width: 50%;
                    // width: 50%;
                    width: 100%;
                    display: none;
                   
                    &__content{
                        background: $primary-color;
                        color: #FFF;
                        display: flex;
                        align-items: flex-start;
                        justify-content: flex-start;
                        flex-direction: column;
                        height: 100%;
                        padding-top: 6rem;
                        transition: all ease-in .5s;

                        a{
                            color: #FFF !important;
                        }
                    }
                }
                &__menu{
                    display: block;
                    // padding-right: 9.5rem;
                }
            }
        }

        .mobile{
            position: absolute;
            top: 6rem;
            right: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            display: block;
        }
    }
</style>