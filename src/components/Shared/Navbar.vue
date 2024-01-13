<script setup>
</script>

<template>
    <div class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__content__left">
                    <router-link to="/"><span>Obudu Delight</span></router-link>
                </div>
                <div class="header__content__right">
                    <ul class="header__content__right__content">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/">About Us</router-link></li>
                        <li><router-link to="/">Our Products</router-link></li>
                        <li><router-link to="/">Our Services</router-link></li>
                        <li class="header__content__right__content--quote"><router-link to="/">Request A Quote Today</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
    .header{
        padding: .7rem 0;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 999 !important;
        background: #FFF;

        &__content{
            display: flex;
            justify-content: space-between;
            padding-top: 1.1rem;

            &__left{
                span {
                    font-weight: bold;
                }
            }

            &__right{
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
        }
    }
</style>