<script setup>
    import { ref } from "vue"

    const props = defineProps(["item"])

    const isItemActive = ref(props.item.isActive)

    const toggleIsActive = (item, isActive) => {
        item.isActive = !isActive;
        isItemActive.value = !isActive
        item.isActive === false
    }
</script>

<template>
    <div @click="toggleIsActive(item, item.isActive)" class="faq">
        <div v-if="!isItemActive" class="faq__plus"><font-awesome-icon :icon="['fas', 'angle-down']" /></div>
        <div v-if="isItemActive" class="faq__plus"><font-awesome-icon :icon="['fas', 'angle-up']" /></div>
        <div class="faq__content">
            <div class="faq__content__question">
                <h5>{{ item.question }}</h5>
            </div>
            <div class="faq__content__answers">
                <p v-if=isItemActive>{{ item.answer }}</p> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
    .faq{
        // background: #ECF5EE;
        background: rgba(5, 50, 50, 0.4);
        padding: 2rem 2rem;
        border-radius: 20px;
        position: relative;
        margin-bottom: 1.3rem;
        cursor: pointer;

        &__plus{
             background: $secondary-color;
             height: 35px;
             width: 35px;
             display: flex;
             justify-content: center;
             align-items: center;
             border-radius: 50px;
             font-size: 1.05rem;
             color: #FFF;
             position: absolute;
             top: 1.5rem;
             right: 2rem;
             cursor: pointer;
        }

        h5{
            color: #FFF;
            text-transform: none;
            font-size: 1.1rem;
            opacity: .9;
        }

        p{
            font-size: .95rem;
            opacity: .8;
            line-height: 2;
            color: #FFF;
            padding-top: .6rem;
        }
    }


    @media only screen and (max-width: 900px){
        .faq{
            &__plus{
                right: .5rem;
                background: transparent;
                color: $secondary-color !important;
            }
            h5{
                line-height: 1.5;
            }

            p{
                font-size: .9rem;
            }
        }
    }
</style>