<template>
    <v-btn flat @click="onClick">
        <slot>Terug</slot>
    </v-btn>
</template>

<script>
    export default {
        name: "knopterug",
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
