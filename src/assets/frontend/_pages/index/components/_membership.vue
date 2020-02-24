<template lang="pug">
    .membership-holder
        heading(:text = 'head', subheader)
        card(stretch, :xmedia = 'false')
            cardWrapper(:card = 'isResponsive', :order= 'isOrder')
                imageCard(:image = 'membership', :url = 'url')
            cardWrapper(:card = 'isResponsive')
                paragraph(:content = 'membership.description')
                    groupButton(position='left')
                        linkButton(name = 'Learn More', outline, color = 'theme', :link = 'membership.linkLM')
                        linkButton(name = 'Join Now', outline, color = 'theme', :link = 'membership.linkJN')
</template>

<script>
    import Media from './../../../_shares/media.js'
    import heading from './../../../_components/text/_heading.vue'
    import card from './../../../_components/card/_card.vue'
    import cardWrapper from './../../../_components/card/_wrapper.vue'
    import imageCard from './card/_image.vue'
    import paragraph from './text/_paragraph.vue'
    import groupButton from '../../../_components/button/_group.vue'
    import linkButton from '../../../_components/button/_link.vue'

    export default {
        extends: Media,

        props : {
            membership : Object,
            url : String
        },

        components : {
            heading,
            card,
            cardWrapper,
            imageCard,
            paragraph,
            groupButton,
            linkButton
        },

        data() {
            return {
                head: {
                    title : 'Membership',
                    align: 'left'
                }
            }
        },

        computed : {
            isResponsive () {
                if (this.is801) {
                    return 'half'
                } else {
                    return 'full'
                }
            },

            isOrder : function() {
                return this.is801 ? 2 : 0
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .membership-holder {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    /deep/ .button {
        @include fs(12)
        @include weight(500)
    }
</style>
