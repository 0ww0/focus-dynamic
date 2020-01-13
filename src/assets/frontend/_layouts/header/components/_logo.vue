<template lang="pug">
    .logo-holder
        a(:href='logo.link')
            img(:src="logo.image")
</template>

<script>
    export default {
        data() {
            return {
                logo : {
                    link : '../index.html',
                    image : '../assets/images/logo/logo-black.png'
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../../../style/config.scss';

    .logo-holder{
        width: 100%;
        max-width: 300px;
        user-select: none;
        margin: 0 auto;
    }
</style>
