<script setup>
    const props = defineProps(["body"])
</script>

<template>
    <div class="why__card">
        <!-- <p>{{ body }}</p> -->
        {{ body }}
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
    .why__card{
        background: $primary-color;
        color: #FFF;
        border-radius: 6px;
        padding: .8rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .9rem;
    }
</style>