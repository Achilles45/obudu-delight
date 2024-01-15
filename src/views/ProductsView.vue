<script setup>
    import Navbar from '@/components/Shared/Navbar.vue';
    import PageIntro from '@/components/Shared/PageIntro.vue';
    // import ProductCard from '@/components/Shared/ProductCard.vue';
    import Helper from '@/components/Shared/Helper.vue';
    import Footer from '@/components/Shared/Footer.vue';

    const getImgUrl = (pet) => {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
  }
</script>

<template>
    <div>
        <Navbar />
            <div class="products">
                <PageIntro 
                title="See Available Products"
                description="Get fresh & quality agro allied products at a competitive price and deliver to you just about everywhere around the globe."
                />
            </div>
            <div class="container">
                <div class="products__content">
                   <div class="products__content__text">
                        <h2>Order Quality Agro Products Today</h2>
                        <p>You can now order and get your quality agro products delivered to you. We sell on qulaity and our customers can testify</p>
                   </div>
                    <div class="products__content__grid">
                        <!-- <ProductCard 
                            title="Groundnut"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus."
                            thumbnail="getImgUrl()"
                            /> -->

                            <div class="products__content__grid__item">
                                <div class="products__content__grid__item--header">
                                    <img src="../assets/images/product-groundnut.jpg" alt="Groundnut">
                                </div>
                                <div class="products__content__grid__item--body">
                                    <h5>Groundnut</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, minima.</p>
                                    <button>Order Now</button>
                                </div>
                            </div>

                            <div class="products__content__grid__item">
                                <div class="products__content__grid__item--header">
                                    <img src="../assets/images/product-melon-seed-oil.jpg" alt="Groundnut">
                                </div>
                                <div class="products__content__grid__item--body">
                                    <h5>Melon Seed Oil</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, minima.</p>
                                    <button>Order Now</button>
                                </div>
                            </div>

                            <div class="products__content__grid__item">
                                <div class="products__content__grid__item--header">
                                    <img src="../assets/images/product-melon-seeds1.jpg" alt="Groundnut">
                                </div>
                                <div class="products__content__grid__item--body">
                                    <h5>Melon Seeds</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, minima.</p>
                                    <button>Order Now</button>
                                </div>
                            </div>

                            <div class="products__content__grid__item">
                                <div class="products__content__grid__item--header">
                                    <img src="../assets/images/product-sesame-seed-1.jpg" alt="Groundnut">
                                </div>
                                <div class="products__content__grid__item--body">
                                    <h5>Sesame Seed</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, minima.</p>
                                    <button>Order Now</button>
                                </div>
                            </div>

                            <div class="products__content__grid__item">
                                <div class="products__content__grid__item--header">
                                    <img class="products__content__grid__item--header--oilimg" src="../assets/images/product-sesame-seed-oil.jpg" alt="Groundnut">
                                </div>
                                <div class="products__content__grid__item--body">
                                    <h5>Sesame Seed Oil</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, minima.</p>
                                    <button>Order Now</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <Helper />
            <Footer />
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";
    .products {
        padding-top: 10rem;
    }

    .products__content{
        padding-top: 3rem;
        padding-bottom: 6rem;

        &__text{
            max-width: 600px;

            h2{
                color: $primary-color;
            }

            p{
                color: $primary-color;
                font-size: 1rem;
                line-height: 1.7;
                opacity: .8;
            }
        }



        &__grid{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 50px;
            padding-top: 2rem;

            &__item{
                text-align: center;
                &--header{
                    &--oilimg{
                        max-width: 350px !important;
                        height: 230px !important; 
                    }
                }
                img{
                    max-width: 300px;
                    height: 100%;
                    border-radius: 6px;
                }
                &--body{
                    h5{
                        padding-top: 2rem;
                    }
                    p{
                        padding-top: .3rem;
                        color: $primary-color;
                        opacity: .7;
                        line-height: 1.7;
                        padding-bottom: 1rem;
                    }
                    button{
                        background: $secondary-color;
                        color: #FFF;
                        padding: .7rem 2rem;
                        border-radius: 4px;
                        border: none;
                        transition: all ease-in .5s;
                    }
                    button:hover{
                        background: $primary-color;
                    }
                }
            }
        }
    }


        // Media Queries - Phone 
        @media only screen and (max-width: 900px){
            .products__content{

                &__text{
                        h2{
                            font-size: 1.4rem;
                        }
                        p{
                            font-size: .92rem;
                        }
                    }

                &__grid{
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    grid-gap: 10px;

                    &__item{
                        img{
                            max-width: 160px;
                        }

                        &--body{
                            button{
                                margin-bottom: 2rem;
                            }
                        }
                    }
                }
            }
        }
</style>