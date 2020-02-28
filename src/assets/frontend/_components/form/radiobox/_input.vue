<template lang="pug">
    input.input-radiobox(type='radio',
        :class = "{ 'input-error' : error }"
    )
</template>

<script>
    export default {
        props : {
            value : String,
            name : String,
            error : {
                type : Boolean,
            }
        },
    }
</script>
