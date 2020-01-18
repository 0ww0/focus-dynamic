<template lang="pug">
    .wrapper-content
        mainCarousel
        .container
            cardCarousel
            cardCelebrate
            cardHappening
            cardNews
</template>

<script>
    import mainCarousel from './components/carousel/_main.vue'
    import cardCarousel from './components/carousel/_card.vue'
    import cardCelebrate from './components/_celebrate.vue'
    import cardHappening from './components/_happening.vue'
    import cardNews from './components/_news.vue'

    export default {
        components: {
            mainCarousel,
            cardCarousel,
            cardCelebrate,
            cardHappening,
            cardNews
        },
    }
</script>
