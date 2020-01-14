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
                window.onload = function() {
		            this.loading = true
	            };

                setTimeout(() => {
                    this.loading = false
                }, 3000)
            }
        },

        mounted() {
            this.loader()
        }
    }
</script>

<style lang="scss" scoped>
</style>
