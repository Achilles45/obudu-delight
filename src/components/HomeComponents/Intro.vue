<script setup>
import WhyCard from '../Shared/WhyCard.vue';
</script>

<template>
    <div class="why">
        <div class="container">
            <div class="why__text">
                <h3>We buy, sell, package, and deliver agro allied products to our customers around the world. We facilitate training and farm set-up, we also liaise with interested individuals to tap<span> into the inherent wealth in the agro sector with access to modern technologies and know-how.</span></h3>
            </div>

            <div class="why__slider">
                <div class="why__slider__track">
                    <div class="why__slider__track__slide">
                        <WhyCard body="Buy quality sesame seeds"  
                        />
                    </div>
                    <div class="why__slider__track__slide">
                        <WhyCard body="Ship your orders globally"  
                        />
                    </div>
                    <div class="why__slider__track__slide">
                        <WhyCard body="Sell agro allied products"  
                        />
                    </div>
                    <div class="why__slider__track__slide">
                        <WhyCard body="Completely farm setup"  
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/variables.scss";
    // @import "../../styles/abstracts/mixins";

.why {
  background: #FFF;
  padding: 5rem 0;
  // padding: 2rem 7.2rem;

  &__text {
    max-width: 100%;
    // padding-bottom: 3rem;
    h3{
      font-size: 2rem;
      line-height: 2;
      color: #000;

      span{
        opacity: .5;
      }
    }
  }

  &__slider{
    // height: 350px;
    width: 83%;
    display: grid;
    // place-items: center;
    overflow-x: hidden !important;
    // background: red;
    padding-bottom: 2rem;
    font-size: .9rem;
    padding-left: 4rem;

    &__track{
      display: flex;
      width: calc(250px * 4);
      // :hover{
      //   animation-play-state: paused !important;
      // }

      &__slide{
        // height: 350px;
        width: 300px;
        display: flex;
        align-items: center;
        padding: 15px 0;
        animation-name: scroll;
        animation-direction: alternate;
        animation-duration: 5s;
        animation-iteration-count: infinite;
      }
    }
  }

  &__slider::before,
  &__slider::after {
    position: absolute;
    content: "";
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255,255,255, 0) 100%);
    width: 15%;
    z-index: 2;
  }

  &__slider::before{
    left: 0;
    top: 0;
  }


// Animation
@keyframes scroll {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-50px * 3));
  }
}

   // Media Queries - Phone 
   @media only screen and (max-width: 900px){
        @keyframes scroll {
      0%{
        transform: translateX(0);
      }
      100%{
        transform: translateX(calc(-200px * 3));
      }
  }

   }
}


   // Media Queries - Phone 
   @media only screen and (max-width: 900px){
    .why{
      padding-top: 0;
      padding-bottom: .5rem;
      &__text{
        max-width: 100% !important;

        h3{
          font-size: 1.2rem;
          line-height: 1.9;
          padding-bottom: 1rem;
          padding-top: 4rem;
        }
      }

      &__slider{
        width: auto;
        padding-left: 1rem;

        &__track{
          width: calc(230px * 4);

          &__slide{
            animation-duration: 10s;
          }
        }
      }
    }
   }
</style>