<template lang="pug">
    .wrapper-content
        mainCarousel
        .container
            cardCarousel
            membership
</template>

<script>
    import mainCarousel from './components/carousel/_main.vue'
    import cardCarousel from './components/carousel/_card.vue'
    import membership from './components/_membership.vue'

    export default {
        components: {
            mainCarousel,
            cardCarousel,
            membership
        },
    }
</script>
