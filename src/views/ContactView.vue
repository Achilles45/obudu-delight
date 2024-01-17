<script setup>
    import Navbar from '@/components/Shared/Navbar.vue';
    import PageIntro from '@/components/Shared/PageIntro.vue';
    import Helper from '@/components/Shared/Helper.vue';
    import Footer from '@/components/Shared/Footer.vue';
</script>

<template>
    <div>
        <Navbar />
        <div class="contact">
            <PageIntro title="Top Customer Support" description="Our customer support team is always ready to attend to all your queries anytime they come out."/>
        </div>
        <div class="container">
            <div class="contact__content">
                <div class="contact__content__item">
                    <img src="../assets/images/google-maps.png" alt="">
                    <h5>Contact Office</h5>
                    <p>60 Ranch Road, Obudu, Cross River State. Nigeria</p>
                </div>

                <div class="contact__content__item">
                    <img src="../assets/images/tick.png" alt="">
                    <h5>Email Address</h5>
                    <p>sales@obududelight.com</p>
                </div>

                <div class="contact__content__item">
                    <img src="../assets/images/call.png" alt="">
                    <h5>Phone</h5>
                    <a href="tel:+2348136287422">+234 813 628 7422</a><br>
                    <a href="tel:+44 7522546504">+44 752 254 6504</a>
                </div>
            </div>
        </div>
        <Helper />
        <Footer />
    </div>
</template>

<style lang="scss" scoped>
    .contact{
        padding-top: 10rem;
    }

    .contact__content{
        padding: 5rem 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;

        &__item{
            background: #F8FAFC;
            padding: 3rem;
            border-radius: 10px;
            text-align: center;
            img{
                max-width: 50px;
                height: auto;
            }
            h5{
                padding-top: 1rem;
                padding-bottom: .5rem;
            }
            p{
                font-size: .95rem;
                opacity: .8;
                line-height: 1.67;
            }
        }
    }
</style>