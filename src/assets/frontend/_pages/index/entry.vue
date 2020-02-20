<template lang="pug">
    .wrapper-content
        mainCarousel
        .container
            cardCarousel
            membership
            contact
</template>

<script>
    import mainCarousel from './components/_main.vue'
    import cardCarousel from './components/_card.vue'
    import membership from './components/_membership.vue'
    import contact from './components/_contact.vue'

    export default {
        components: {
            mainCarousel,
            cardCarousel,
            membership,
            contact
        },
    }
</script>
