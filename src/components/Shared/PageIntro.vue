<script setup>
    const props = defineProps(["title", "description"])
</script>

<template>
    <div class="container">
        <div class="page_intro">
            <div class="page_intro__content">
                <div class="page_intro__content__text">
                    <h1>{{ props.title }}</h1>
                    <p>{{ props.description }}</p>
                    <a href="/products">See Our Products &nbsp; <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a>
                </div>
                <div class="page_intro__content__right">
                    <img src="../../assets/images/hand.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
    .page_intro{
        // background: #F8FAFC;
        background: #EFF9EF;
        border-radius: 10px;
        &__content{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 60px;
            padding: 6rem 3rem;
            position: relative;

            &__right{
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                overflow-y: hidden;
                bottom: 0;
            }

            img{
                max-width: 600px;
                height: auto;
            }

            &__text{
                h1{
                    color: $primary-color;
                }

                p{
                    font-size: 1rem;
                    opacity: .9;
                    line-height: 1.7;
                    padding-bottom: 1.5rem;
                    padding-top: .5rem;
                }

                a{
                    background: $secondary-color;
                    padding: 1.2rem 2.5rem;
                    border-radius: 6px;
                    color: #FFF !important;
                }
            }
        }
    }


        // Media Queries - Phone 
        @media only screen and (max-width: 900px){
            .page_intro{
                &__content{
                    display: grid;
                    grid-template-columns: 1fr;
                    padding: 3rem 2.5rem;
                    &__right{
                        display: none;
                    }
                }
            }
        }
</style>