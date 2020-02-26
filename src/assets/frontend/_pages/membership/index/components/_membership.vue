<template lang="pug">
    .membership-holder
        imageCard(:image = 'membership', :url = 'url')
        paragraphText(:content = 'membership.description')
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive', v-for = '(data, index) in reward', :key = 'index')
                rewardCard(:reward = 'data', :url = 'url')
        groupButton
            linkButton(name = 'Terms & Conditions', :link = 'membership.linkTnc', color = 'theme')
            linkButton(name = 'Join Now', :link = 'membership.linkJN', color = 'theme')
            linkButton(name = 'Privacy Policy', :link = 'membership.linkPP', color = 'theme')
</template>

<script>
    import Media from '../../../../_shares/media.js'
    import imageCard from './card/_image.vue'
    import paragraphText from './text/_paragraph.vue'
    import rewardCard from './card/_reward.vue'
    import card from '../../../../_components/card/_card.vue'
    import cardWrapper from '../../../../_components/card/_wrapper.vue'
    import groupButton from '../../../../_components/button/_group.vue'
    import linkButton from '../../../../_components/button/_link.vue'

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
            cardWrapper,
            groupButton,
            linkButton
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
