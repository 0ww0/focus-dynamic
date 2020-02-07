<template lang="pug">
.happening-component
    .card-component(@click.prevent = "showModal('happening')")
        .image
            img(:src = "url + happening.image.path", :alt = "happening.title")
        .text
            p.label {{ happening.outlets.name }}
            p.title {{ happening.title }}
            p.date {{ getDate }}
    modal(ref='happening', overlayTheme = 'dark')
        happening(:modal = 'happening', :getDate = 'getDate')
</template>

<script>
    import modal from './../../modal/_modal.vue'
    import happening from './../../modal/type/_happening.vue'

    export default {
        props : {
            happening : Object,
            url : {
                type: String,
                default: 'http://backend.waswar.net'
            }
        },

        components : {
            modal,
            happening
        },

        computed : {
            getDate() {
                if((this.happening.dateStart !== null && this.happening.dateEnd !== null) || this.happening.recurringDate === null) {
                    return this.happening.dateStart + ' - ' + this.happening.dateEnd
                } else {
                    return this.happening.recurringDate
                }
            }
        },

        methods : {
            showModal(ref) {
                if (this.$refs[ref]) {
                    this.$refs[ref].open()
                } else {
                    throw new Error('Ref not defined: ' + ref)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../style/config.scss';

    .card-component{
        overflow: hidden;
        width: calc(100%);
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: column nowrap;

        .image {
            width: 100%;
            height: calc(100% - 80px);
            flex: 1;
            img{
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        .text {
            width: 100%;
            align-self: flex-end;
            padding-top: 10px;
            padding-bottom: 10px;

            &.left {
                text-align: left;
            }

            &.center {
                text-align: center;
            }

            &.right {
                text-align: right;
            }

            .label {
                @include fs(12)
                @include color($black, .8)
                font-weight: 300;
            }

            .title {
                @include fs(14)
                letter-spacing: .1em;
                font-weight: 500;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }

            .date {
                @include fs(12)
                font-weight: 300;
            }
        }
    }
</style>
