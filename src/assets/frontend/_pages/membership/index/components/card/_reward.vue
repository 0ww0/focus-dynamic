<template lang="pug">
    .reward-holder
        .image
            img(:src = "url + reward.image.path")
        .content
            p.title(v-if='reward.title !== null') {{ reward.title }}
            p.desc {{ reward.description }}
</template>

<script>
    export default {
        props : {
            url: String,
            reward: Object
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../../../style/config.scss';

    .reward-holder {
        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
        align-items: center;

        height: 100%;
        padding: 10px;
        border: 1px solid;
        border-radius: 10px;
        @include border(#d4af37)

        .image {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            overflow: hidden;
        }

        .content {
            width: calc(100% - 60px);
            margin-left: 10px;
            @include fs(14)

            .title {
                @include weight(500)
            }
        }
    }
</style>
