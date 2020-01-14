<template lang="pug">
    .siema-holder.banner
        siema.siema(ref="siema", :current.sync="curSlide", :options="options", auto-play, @init='init', @change='change', :ready='false')
            slot
        .siema-group
            button.siema-button.prev(@click="prev", v-if='slider > 1')
                i.fas.fa-chevron-left.fa-2x.co-white
            button.siema-button.next(@click="next", v-if='slider > 1')
                i.fas.fa-chevron-right.fa-2x.co-white
        .siema-dot
</template>

<script>
    export default {

        data() {
            return {
                options: {
                    loop: true,
                    duration: 250,
                    draggable: true,
                    multipleDrag: true,
                    threshold: 200,
                },
                curSlide: 0,
                slide: 0,
            }
        },

        computed : {
            slider () {
                return this.slide;
            }
        },

        methods : {
            init : function() {
                this.updatePagination();
            },

            change : function() {
                this.updatePagination();
            },

            prev : function() {
                return this.$refs.siema.prev()
            },

            next : function() {
                return this.$refs.siema.next()
            },

            pagination : function() {

                if(this.slide < 2){
                    return
                }

                let dotholder = document.getElementsByClassName('siema-dot')
                const dot = document.createElement('div');
                dot.className = 'dot'
                dotholder[0].appendChild(dot);

                for (let i = 0; i < this.slide; i++){
                    const btn = document.createElement('i');
                    btn.className = 'fas fa-circle'
                    btn.addEventListener('click', () => this.$refs.siema.goTo(i));
                    dot.appendChild(btn)
                }
            },

            updatePagination : function() {
                let btn = document.querySelectorAll('.siema-dot i')
                for(let i = 0; i < btn.length; i++) {
                    const addOrRemove = this.curSlide === i ? 'add' : 'remove';
                    btn[i].classList[addOrRemove]('active');
                }
            },
        },

        mounted () {
            let slide = document.getElementsByClassName('siema-wrapper')
            this.slide = slide.length
            if(this.slide > 1){
                this.$refs.siema.init()
            }
            this.pagination()
        },
    }
</script>

<style lang='scss' scoped>
    @import '../../style/config.scss';

    .banner{
        width: 100%;
        max-width: 1440px;
        padding-left: 0;
        padding-right: 0;
        margin-left: auto;
        margin-right: auto;

        @include media(hd-up){
            padding-left: em(25);
            padding-right: em(25);
        }
    }

    .siema-holder {
        position: relative;
    }

    .siema {
        width: 100%;
        height: 100%;
    }

    .siema-button {
        position: absolute;
        top: 50%;
        bottom: 50%;
        margin: auto;

        width: 45px;
        height: 100px;
        border: none;
        border-radius: 10px;
        outline: none;
        user-select: none;
        cursor: pointer;

        &.prev{
            left: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            @include media(hd-up) {
                left: em(25);
            }

            i{
                margin-right: 5px;
            }
        }

        &.next{
            right: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;

            @include media(hd-up) {
                right: em(25);
            }

            i{
                margin-left: 5px;
            }
        }

        @include background($black, 0.7)
    }

</style>

<style lang='scss'>
    @import '../../style/config.scss';

    .siema-wrapper {
        position: relative;
    }

    .siema-dot {
        position: relative;
        display: block;
        width: 100%;
        height: 50px;
        text-align: center;
        margin-top: -49px;
        padding-bottom: 20px;
        pointer-events: none;

        .dot {
            display: inline-block;
            border-radius: 15px;
            padding: 0px 15px 5px;
            pointer-events: auto;

            @include background($dark, .8)
        }

        i {
            margin: 0 10px;
            line-height: em(8);
            cursor: pointer;

            @include fs(8)
            @include color($black, .8)


            &.active {
                @include color($white)
            }
        }

    }
</style>
