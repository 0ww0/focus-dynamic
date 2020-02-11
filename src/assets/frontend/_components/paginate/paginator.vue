<template lang="pug">
    .paginator-component(v-if='startPage !== endPage')
        button.prev(:disabled = 'isInFirstPage',
            @click = "onClickPreviousPage()") Previous
        button.list(v-for="page in pages",
            :disabled = "page.isDisabled"
            @click = "onClickPage(page.name)",
            :class = "{ active : isPageActive(page.name) }") {{ page.name }}
        button.next(:disabled ='isInLastPage',
            @click="onClickNextPage()") Next
</template>

<script>
    export default {
        props : {
            field: Object
        },

        data() {
            return {
                maxVisibleButton : 3
            }
        },

        computed : {
            isField() {
                return this.field.page
            },

            isTotalField() {
                return this.field.pages.length
            },

            startPage() {
                if (this.isField === 1) {
                    return 1;
                }

              if (this.isField === this.isTotalField) {
                return this.isTotalField - this.maxVisibleButton + 1;
              }

              return this.isField - 1;
            },

            endPage() {
                return Math.min(this.startPage + this.maxVisibleButton - 1, this.isTotalField);
            },

            pages() {
                const range = [];

                for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
                    if(i !== 0) {
                        range.push({
                            name: i,
                            isDisabled: i === this.isField
                        });
                    }
              }
              return range;
            },

            isInFirstPage() {
                return this.isField === 1;
            },

            isInLastPage() {
                return this.isField === this.field.pages.length
            },
        },

        methods : {
            onClickFirstPage() {
                this.$emit('pagechanged', 1);
            },

            onClickPreviousPage() {
                this.$emit('pagechanged', this.isField - 1)
            },

            onClickPage(page) {
                this.$emit('pagechanged', page)
            },

            onClickNextPage() {
                this.$emit('pagechanged', this.isField + 1)
            },

            onClickLastPage() {
                this.$emit('pagechanged', this.isTotalField);
            },

            isPageActive(page) {
                return this.isField === page
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/config.scss';

    .paginator-component {
        @include fs(12)
        line-height: 1.5;
        user-select: none;
    }

    button {
        outline: 0;
        border: 1px solid;
        padding: 5px;
        @include background($white)
        border-radius: 2px;
        margin: 0 2.5px;
        &:first-child{
            margin-left: 0;
        }

        &:last-child{
            margin-right: 0;
        }

        &:not(:disabled) {
            @include color($black, .8);
            &:hover{
                @include color($black)
                text-decoration: underline;
            }
        }
    }

</style>
