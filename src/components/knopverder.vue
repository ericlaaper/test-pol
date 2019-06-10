<template>
    <v-btn color="primary" @click="onClick">
        <slot>Verder</slot>
    </v-btn>
</template>

<script>
    export default {
        name: "knopverder",
        props: {
            onClick: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
