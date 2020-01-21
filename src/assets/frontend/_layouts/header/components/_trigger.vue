<template lang="pug">
    .trigger-holder(:class = 'isResponsive', @click = 'checkHamburger')
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

            isResponsive () {
                return this.is641 === false ? 'active' : ''
            }
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
                if(this.is641 === true){
                    this.$store.dispatch('updateState', {
                        key : 'isHamburger',
                        value : false
                    });
                }
            },

            locationHamburger () {
                if(this.is641 === false){
                    this.$store.dispatch('updateState', {
                        key : 'isHamburger',
                        value : false
                    });
                }

                this.isHamburger === false ? document.body.classList.remove('no-scroll') : document.body.classList.add('no-scroll')
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
    @import '../../../style/config.scss';

    .trigger-holder {
        i{
            font-size: 0;
        }

        &.active {
            cursor: pointer;
            margin-left: auto;
            margin-right: 20px;
            i {
                font-size: 16px;
            }
        }
    }
</style>
