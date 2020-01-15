<template lang="pug">
    .trigger-holder(v-if = '!is641', @click = 'checkHamburger')
        i.fas(:class="[ isHamburger ? 'fa-times' : 'fa-bars']")
</template>

<script>
    import Media from '../../../_shares/media.js'

    export default {
        extends: Media,

        computed : {
            isHamburger () {
                return this.$store.getters.isHamburger;
            },
        },

        methods : {
            checkHamburger() {
                this.$store.dispatch('updateState', {
                    key : 'isHamburger',
                    value : !this.isHamburger
                });

                this.isHamburger === true ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
            },

            removeHamburger () {
                if(this.is1025 === true){
                    this.$store.dispatch('updateState', {
                        key : 'isHamburger',
                        value : false
                    });
                }
            },
        },

        created(){
            window.addEventListener('resize', this.removeHamburger)
        },

        beforeDestroy(){
            window.removeEventListener('resize', this.removeHamburger)
        },
    }
</script>

<style lang="scss" scoped>
    .trigger-holder {
        cursor: pointer;
        margin-left: auto;
        margin-right: 20px;
    }
</style>
