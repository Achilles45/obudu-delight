<script setup>

</script>

<template>
    <div class="export">
        <div class="container">
            <div class="export__header">
                <div class="export__header__heading">
                    <h1>Sales and export of sesame seeds anywhere around the globe</h1>
                </div>
                <div class="export__header__intro">
                    <p>We specializes in the sale of qulaity sesame seed at a very competitive rate and export to all our customers anywhere around the globe.</p>
                    <a>Order Sesame Seed &nbsp; <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a>
                </div>
            </div>
            <div class="export__content">
                <div class="export__content__grid">
                        <div class="export__content__grid__item"> 
                            <div class="export__content__grid__item__iconholder">
                                <span class="export__content__grid__item__iconholder__icon">
                                   1
                                </span>
                                <div class="export__content__grid__item__iconholder--span"></div>
                            </div>
                            <h6>Make Your Order</h6>
                            <p>Begin by telling us the quantity of sesame seeds you need, when and where you want it shipped to.</p>
                        </div>
                        <div class="export__content__grid__item"> 
                            <div class="export__content__grid__item__iconholder">
                                <span class="export__content__grid__item__iconholder__icon">
                                   2
                                </span>
                                <div class="export__content__grid__item__iconholder--span"></div>
                            </div>
                            <h6>Make Payment</h6>
                            <p>Proceed to make payment to confirm your order and details of the shipping plan will be sent to you.</p>
                        </div>
                        <div class="export__content__grid__item"> 
                            <div class="export__content__grid__item__iconholder">
                                <span class="export__content__grid__item__iconholder__icon">
                                   3
                                </span>
                                <div class="export__content__grid__item__iconholder--span"></div>
                            </div>
                            <h6>Product is shipped</h6>
                            <p>Your order is processed, packaged and shipped to your location of choice. And yes, it is that simple.</p>
                        </div>
                        <!-- <div class="export__content__grid__item"> 
                            <div class="export__content__grid__item__iconholder">
                                <span class="export__content__grid__item__iconholder__icon">
                                   4
                                </span>
                                <div class="export__content__grid__item__iconholder--span"></div>
                            </div>
                            <h6>Trak your order</h6>
                            <p>Add tenants, manage avaialble rental spaces, manage rental income, generate e-receipts and track your property from your dashboard</p>
                        </div> -->
                    </div><br />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/clash-display");
@import "../../assets/variables.scss";
    .export{
        padding: 3rem 0;

        &__header{
            max-width: 720px;
            // display: grid;
            // grid-template-columns: 1fr 410px;
            // grid-gap: 50px;
            padding-top: 3rem;
            padding-bottom: 1rem;
            h1{
                font-size: 2.7rem;
                color: $primary-color;
                font-weight: 400 !important;
                line-height: 1.3;
                text-transform: capitalize;
                padding-bottom: .5rem;
            }
            p{
                color: #042727;
                font-size: 1.05rem;
                opacity: .75;
                line-height: 1.8;
                max-width: 80%;
                padding-bottom: 2rem;
            }

            a{
                background: #35A162;
                padding: 1.05rem 1.5rem;
                border-radius: 6px;
                color: #FFF !important;
                transition: all ease-in .5s;
                cursor: pointer;
            }

            a:hover{
                background: $primary-color;
            }
        }

        &__content{
            &__grid{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 60px;
            padding-top: 1rem;
            // padding-bottom: 2rem;

            &__item{
                padding: 2.4rem 0rem;
                position: relative;
                z-index: 1;

                &__iconholder{
                display: flex;
                gap: 50px;
                align-items: center;

                &__icon{
                    // background: #ECF5EE;
                    background: #e3ede7;
                    height: 3rem;
                    width: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                    color: #042727;
                    font-size: 1.1rem;
                    // font-family: $font-moderat;
                }

                &--span{
                    border-bottom: 2px dashed #ECF5EE;
                    height: 2px;
                    width: 100%
                }
            }
                h6{
                    // font-family: $font;
                    font-weight: bold;
                    padding-top: 1.6rem;
                    font-size: 1.1rem;
                    color: #042727;
                    // font-family: "Clash Display" !important;
                    text-transform: capitalize;
                }
                p{
                    // font-family: $font;
                    padding-top: .5rem;
                    line-height: 1.8;
                    // color: $col-primary;
                    color: #627081;
                    font-size: .98rem;
                    opacity: 1;
                }
            }
        }
        }
    }


    @media only screen and (max-width: 900px){
        .export{

            &__header{
                max-width: 100%;
                padding-top: 0;

                h1{
                    font-size: 1.5rem;
                    line-height: 1.4;
                    padding-top: .5rem;
                }

                p{
                    max-width: 100%;
                    font-size: 1rem;
                }
            }

            &__content{
                &__grid{
                    grid-row-gap: 0px;

                    &__item{
                        padding-bottom: 0;
                        &__iconholder{
                            &__icon{
                                height: 3rem;
                                width: 3rem;
                            }
                            &--span{
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>