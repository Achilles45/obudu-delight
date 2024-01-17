<script setup>

</script>

<template>
    <div class="new__footer">
        <div className="container">
            <div class="new__footer__content">
                <img src="../../assets/images/logo.png" alt="Obudu Delight">
                <div class="new__footer__content__links">
                    <div class="new__footer__content__links__item">
                        <h5>Obudu Delight</h5>
                        <ul>
                            <a href="/products">Our Products</a>
                            <a href="#services">Our Services</a>
                            <a href="/about">About Us</a>
                        </ul>
                    </div>
                    <div class="new__footer__content__links__item">
                        <h5>Our Services</h5>
                        <ul>
                            <a href="">Farm Setup</a>
                            <a href="/">Greenhouse Farming</a>
                            <a href="/">General Consulting</a>
                        </ul>
                    </div>
                    <div class="new__footer__content__links__item">
                        <h5>Contact</h5>
                        <ul>
                            <a href="mailto: support@obududelight.com">support@obududelight.com</a>
                            <a href="tel:+2348136287422">+234 813 628 7422</a>
                            <a href="tel:+44 7522546504">+44 752 254 6504</a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <p class="new__footer__helper">Obudu Delight Ltd. All Rights Reserved. &copy; 2024</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
   @import "../../assets/variables";

.new__footer {
  background: #fff;
  padding: 3rem 10rem;
  margin-bottom: 0 !important;
//   font-family: $font !important;
  color: #000;

  &__helper {
    font-size: 0.9rem;
    opacity: 0.8;
    text-align: center;
  }

  &__content {
    display: flex;
    justify-content: space-around;

    img{
        max-width: 300px;
        height: auto;
      }

    span {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      h1 {
        font-weight: 900 !important;
        color: #000;
        font-size: 2.5rem;
      }
    }

    &__links {
      display: flex;
      gap: 20px;
      width: 50%;
      justify-content: space-between;
      &__item {
        ul {
          display: flex;
          flex-direction: column;
          line-height: 2.3;
          padding-left: 0 !important;

          a {
            color: #000;
            opacity: 0.8;
            text-decoration: none;
          }
        }
        h5 {
          color: #000;
          font-size: 1.1rem;
          padding-bottom: 0.5rem;
          font-weight: 900;
        }
      }
    }
  }
}

// Media Queries - Phone 
@media only screen and (max-width: 900px){
  .new__footer {
    padding: 0 !important;
    padding-left: 1rem !important;
    flex-direction: column;
    gap: 0;
    padding-bottom: 2rem;

    &__helper {
      font-size: 0.9rem;
      opacity: 0.8;
      padding-bottom: 2rem;
    }

    img {
      display: none;
    }
    &__content {
      // flex-direction: column;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 0;


      span {
        padding-bottom: 5rem;
        h1 {
          font-size: 2rem;
        }
      }

      &__links {
        // flex-direction: column;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        width: 100%;
        gap: 10px;

        &__item {
          h5 {
            padding-bottom: 0.4rem;
          }
        }
      }
    }
  }
}

</style>