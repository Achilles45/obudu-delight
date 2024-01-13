<script setup>
import WhyCard from '../Shared/WhyCard.vue';
</script>

<template>
    <div class="why">
        <div class="container">
            <div class="why__text">
                <h3>We buy, sell and deliver agro allied products to our customers around the world. Also access modern technologies and know-how while setting up your farm. </h3>
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
    max-width: 70%;
    // padding-bottom: 3rem;
    h3 {
      line-height: 1.7;
      padding-top: 2rem;
      font-weight: bold !important;
      color: $primary-color;
      font-size: 1.6rem;
      padding-bottom: 0;
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

@keyframes scroll2 {
  0%{
    transform: translateX(calc(-250px * 3));
  }
  100%{
    transform: translateX(0);
  }
}
}
</style>