<script setup>
    const props = defineProps(['name', 'description', 'thumbnail']);

    const getImgUrl = (pet) => {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
  }
</script>

<template>
    <div class="product_card">
        <div class="product_card__header">
            <img :src="`${ props.thumbnail }`"  :alt="`${ props.name } thumbnail`">
        </div>
        <div class="product_card__body">
            <h5>{{ props.name }}</h5>
            <p>{{ props.description }}</p>
            <button>Order Now</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .product_card{
        background: red;
    }
</style>