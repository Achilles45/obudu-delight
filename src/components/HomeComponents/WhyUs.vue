<script setup>

</script>

<template>
    <div class="why__us">
        <div class="container">
            <div class="why__us__header">
                <div class="why__us__header__text">
                    <h1>Why Our Customers Loves Us</h1>
                    <p>We pride ourselves in providing top notch agro related services along side sales and export of quality agro allied products. We deliver quality & excellence always. </p>
                </div>
            </div>
            <div class="why__us__grid">
                <div class="why__us__grid__item">
                    <div class="why__us__grid__item--header">
                        <img src="../../assets/images/quality.png" alt="">
                    </div>
                    <div class="why__us__grid__item--body">
                        <h5>Quality Products</h5>
                        <p>At the core of all we do is making sure we delivery quality agro allied products and services. Order any of our products or services, be sure of quality only & everytime.</p>
                    </div>
                </div>

                <div class="why__us__grid__item">
                    <div class="why__us__grid__item--header">
                        <img src="../../assets/images/planet-earth.png" alt="">
                    </div>
                    <div class="why__us__grid__item--body">
                        <h5>Efficient Shipping</h5>
                        <p>Our logistics arm does the hard work of making sure we deliver our produts to our customers anywhere around the globe with effective communication.</p>
                    </div>
                </div>

                <div class="why__us__grid__item">
                    <div class="why__us__grid__item--header">
                        <img src="../../assets/images/swipe-card.png" alt="">
                    </div>
                    <div class="why__us__grid__item--body">
                        <h5>Competitive Pricing</h5>
                        <p>All our products and services are competitively priced and we make sure you get the best possible bargain out there. Our pricing is designed for anyone really.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
    .why__us{
        margin-bottom: 6rem !important;

        &__header{
            text-align: center;
            &__text{
                max-width: 600px;
                margin: 0 auto;
            }

            h1{
                padding-top: 1rem;
                color: $primary-color;
            }

            p{
                color: $primary-color;
                line-height: 2;
                opacity: .8;
                padding-bottom: 1rem;
            }
        }

        &__grid{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 40px;
            padding-top: 2rem;

            &__item{
                text-align: center;

                &--header{
                    img{
                        max-width: 100px;
                        height: auto;
                    }
                }

                &--body{
                    padding-top: 1.5rem;
                    h5{
                        color: $primary-color;
                        padding-bottom: .5rem;
                    }
                    p{
                        color: $primary-color;
                        line-height: 1.8;
                        opacity: .8;
                        font-size: .95rem;

                    }
                }
            }
        }
    }


    // Media Queries - Phone 
   @media only screen and (max-width: 900px) {
    .why__us {
        margin-bottom: 6rem !important;
        &__header{
            &__text{
                max-width: 100%;

                h1{
                    font-size: 1.6rem;
                    padding-top: 0;
                    padding-bottom: .5rem;
                }
            }
        }
    }
   }
</style>