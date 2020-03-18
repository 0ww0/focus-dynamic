<template lang="pug">
    .tabs-component.tabs-text-data
        ul.tabs(:class = "{ 'container' : !fullWidth, 'tabs-border' : border, 'tabs-margin' : margin, 'tabs-scroll' : scrollable }")
            li(v-for = 'tab, index in tabs', :class="{ 'is-active' : tab.isActive}")
                a.tabs-link(ref = 'data-target', :data-target = 'tab.href', @click = 'selectTab(tab, index)')
                    p.tabs-name {{ tab.name }}
        .tabs-content
            slot
</template>

<script>
    export default {
        props : {
            fullWidth : {
                type : Boolean
            },

            border : {
                type : Boolean
            },

            margin : {
                type : Boolean
            },

            scrollable : {
                type : Boolean
            }

        },

        data () {
            return {
                tabs : []
            }
        },

        created() {
            this.tabs = this.$children;
        },

        methods : {
            selectTab(selectedTab, list) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name)
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .tabs{
        list-style: none;
        text-align: center;

        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-flow: row;
        flex-wrap: wrap;

        width: calc(100%);

        @include media(md-up) {
            flex-wrap: nowrap;
        }

        li{
            width: 100%;
            user-select: none;
            white-space: nowrap;
        }

        &-link {
            position: relative;
            display: inline-block;
            cursor: pointer;
            width: 100%;

            @include media(sm-up){
                width: auto;
            }

            &:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 4px;
                bottom: 0;
                left: 0;
                background-color: #d4af37;
                visibility: hidden;
                border-radius: 5px;
                transform: scaleX(0);
                transition: transform .3s cubic-bezier(.25,.46,.45,.94);
            }

            &:hover {
                @include color(#d4af37)

                &:after {
                    visibility: visible;
                    transform: scaleX(1);
                }
            }
        }

        &-border {
            border-bottom: 1px solid;
        }

        &-margin {
            margin-bottom: 20px;
        }

        &-name {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        &-scroll {
            flex-wrap: nowrap;
            overflow-x: auto;

            li {
                white-space: nowrap;

                &:not(:first-child) {
                    padding-left: em(15);
                }

                &:not(:last-child) {
                    padding-right: em(15);
                }
            }
        }

        .is-active {
            .tabs-link {
                @include color(#d4af37)

                &:after {
                    visibility: visible;
                    transform: scaleX(1);
                }
            }
        }
    }

</style>
