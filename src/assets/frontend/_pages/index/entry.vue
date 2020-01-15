<template lang="pug">
    .wrapper-content
        loading(v-if='loading')
</template>

<script>
    import loading from '../../_components/loader/_spin.vue'

    export default {
        components: {
            loading
        },

        data() {
            return {
                loading : false,
            }
        },

        methods : {
            loader() {
                this.loading = true

                setTimeout(() => {
                    this.loading = false
                }, 2000)
            }
        },

        created() {
            window.addEventListener('load', this.loader)
        },

        beforeDestroy() {
            window.removeEventListener('load', this.loader)
        }
    }
</script>

<style lang="scss" scoped>
</style>
