<script setup>

</script>

<template>
    <div class="helper">
        <div class="container">
            <div class="helper__content">
                <img class="helper__content__img" src="../../assets/images/stroke.webp" alt="">
                <div class="helper__content__text">
                   <div>
                    <h3>You've seen all the processes and it's so simple and seamless. Start your agro allied project with us today!</h3>
                    <router-link to="">Request A Service Today &nbsp; <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></router-link>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
    .helper{
        margin-bottom: 3rem;
        &__content{
            background: linear-gradient(to right, rgba(4,39,39, .97), rgba(4,39,39, .97)), url("../../assets/images/waves.svg");
            background-position: center;
            background-size: cover;
            padding: 2rem 3rem;
            color: #FFF;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            position: relative;
            border-radius: 10px;

        &__img{
            position: absolute;
            left: 0;
            top: -140px;
        }

        &__text{
            // display: grid;
            // // grid-template-columns: 500px 1fr;
            // padding-bottom: 3rem;
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
            padding-bottom: 4rem;
            h3{
                // @include section__header__text;
                color: #FFF;
                padding-bottom: 3.5rem;
                padding-top: 3rem;
                opacity: .9;
                line-height: 1.7;
            }
            p{
                // @include section__header__paragraph;
                padding-bottom: 2rem;
                color: #FFF;
                font-size: 1rem;
                line-height: 2;
                opacity: .8;
            }
            a{
                color: $primary-color !important;
                background: #FFF;
                padding: 1.3rem 2.5rem;
                border-radius: 6px;
                font-weight: bold;
                font-size: .95rem;
            }
        }
    }
    }


    // Media Queries - Phone 
    @media only screen and (max-width: 900px) {
        .helper {
            &__content{
                padding: 2rem 2rem;
                &__text{
                    display: flex;
                    flex-direction: column;

                    h4{
                        font-size: 1.3rem;
                        line-height: 2;
                    }

                }
            }
        }
    }
</style>