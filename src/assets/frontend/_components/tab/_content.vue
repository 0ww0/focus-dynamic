<template lang="pug">
    .tab-detail(v-show='isActive')
        .container(v-if='!fullWidth')
            slot
        slot(v-else)
</template>

<script>
    export default {
        props : {
            name : {
                type : String,
                required : true
            },

            image : {
                type: String
            },

            selected : {
                type : Boolean
            },

            fullWidth : {
                type : Boolean
            }
        },

        data() {
            return {
                isActive : false
            }
        },

        computed : {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            },
        },

        mounted() {
            this.isActive = this.selected
        }
    }
</script>
