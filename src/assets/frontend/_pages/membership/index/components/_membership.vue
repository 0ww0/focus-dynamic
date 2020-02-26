<template lang="pug">
    .membership-holder
        imageCard(:image = 'membership', :url = 'url')
        paragraphText(:content = 'membership.description')
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive', v-for = '(data, index) in reward', :key = 'index')
                rewardCard(:reward = 'data', :url = 'url')
        
</template>

<script>
    import Media from '../../../../_shares/media.js'
    import imageCard from './card/_image.vue'
    import paragraphText from './text/_paragraph.vue'
    import rewardCard from './card/_reward.vue'
    import card from '../../../../_components/card/_card.vue'
    import cardWrapper from '../../../../_components/card/_wrapper.vue'

    export default {
        extends : Media,

        props : {
            membership : Object,
            reward: Array,
            url : String
        },

        components : {
            imageCard,
            paragraphText,
            rewardCard,
            card,
            cardWrapper
        },

        computed : {
            isResponsive () {
                if (this.is801) {
                    return 'one-third'
                } else if (this.is481) {
                    return 'half'
                }else {
                    return 'full'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .membership-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>
