<script setup>
    import Faq from "@/components/Shared/Faq.vue"
    const faqs = [
        {
            id: 1,
            question: "Are there hidden delivery charges?",
            answer: "We are very transparent in our charges. We will never ask you for another delivery charge other than the initial one paid. Except there is a request of location change, you will never have to pay another delivery charge. ",
            isActive: true
        },
        {
            id: 2,
            question: "Can I get a refund after payment?",
            answer: "If not satisfied with any of our services or products, you can request for a refund and it will be processed according to our terms and conditions as stated earlier.",
            isActive: false
        },
        {
            id: 3,
            question: "Are there current openings at the company?",
            answer: "Oops, there are currently no openings but please always check the careers page to always be updated.",
            isActive: false
        },
        // {
        //     id: 4,
        //     question: "What is the grade of sesame seeds available",
        //     answer: "We have different grade of sesame seeds. Kindly reach out to the sales department for more information.",
        //     isActive: false
        // },
        {
            id: 5,
            question: "How does it take to setup a greenhouse farm",
            answer: "The complete setup time depends on the size and availability of resources to work with.",
            isActive: false
        }
    ]
</script>

<template>
    <div class="faqs">
        <div class="container">
            <div class="faqs__content">
                <div class="faqs__content__left">
                    <h1>We've got answers to most of your questions today</h1>
                </div>
                <div class="faqs__content__right">
                    <Faq v-for="item in faqs" :key="item.id" :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @import url("https://fonts.cdnfonts.com/css/clash-display");
@import "../../assets/variables.scss";
    .faqs{
        background: $primary-color;
        margin-bottom: 4rem;
        padding-bottom: 2rem;
        &__content{
            display: grid;
            grid-template-columns: 400px 1fr;
            grid-gap: 50px;
            padding: 3rem 0;

            &__left{
                padding-top: 3rem;
                h1{
                    font-weight: bold;
                    // font-family: "Clash Display" !important;
                    color: #FFF;
                    line-height: 1.5;
                }
            }

            &__right{
                padding-top: 3rem;
            }
        }
    }


    @media only screen and (max-width: 900px){
        .faqs{
            &__content{
                display: flex;
                flex-direction: column;
                padding-top: 1rem;

                h1{
                    font-size: 1.7rem;
                    line-height: 1.6;
                }

                &__right{
                    padding-top: 0rem;
                }
            }
        }
    }
</style>