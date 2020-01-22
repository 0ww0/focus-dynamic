<template lang="pug">
    .wrapper-content
        router-view(:key="$route.fullPath")
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
</style>
