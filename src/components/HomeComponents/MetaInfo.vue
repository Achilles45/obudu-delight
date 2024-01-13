<script>

</script>

<template>
    <div class="meta">
        <div class="container">
            <div class="meta__content">
                <div class="meta__content__left">
                    <h2>Import & Export of Agro Products</h2>
                    <p>We export and import a variety of agro related products globally. Our primary product of export and export is <strong>sesame seed</strong></p>
                    <router-link to="">Import/Export Sesame Seed</router-link>
                </div>
                <div class="meta__content__right">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente hic assumenda pariatur eaque repellendus!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .meta{
        margin: 2rem 0;
        padding: 0;
        &__content{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;

            &__left{
                background: #fafafa;
                padding: 2rem 3rem;
                border-radius: 10px;

                h2{
                    color: #042727;
                }
                p{
                    padding-bottom: 2rem;
                    padding-top: 1rem;
                }
                a{
                    background: #042727;
                    color: #FFF !important;
                    padding: 1.2rem 1.5rem;
                    border-radius: 6px;
                    margin-bottom: 4rem !important;
                }
            }

            &__right {
                @extend .meta__content__left
            }
        }
    }
</style>