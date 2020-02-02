<template>
    <div class="kop">
        {{staptekst}}
    </div>
</template>

<script>
    export default {
        name: "staptekst",
        props: ['staptekst'],
    }
</script>

<style scoped>

    .kop {
        color: #1F4B9A;
    }

    @media (min-width: 200px) {

        p {
            font-size: 0.80em;

        }

        h1 {
            font-size: 0.9em;
            line-height: 1.5;

        }

        h2 {
            font-size: 1.6em;
            line-height: 1.5;

        }

        h3 {
            font-size: 1.4em;
            line-height: 1.5;

        }


    }

    @media (min-width: 768px) {

        p {
            font-size: 1.0em;
            line-height: 1.5;


        }

        h1 {
            font-size: 1.2em;
            line-height: 1.5;

        }


        h2 {
            font-size: 2.0em;
            line-height: 1.5;

        }

        h3 {
            font-size: 1.7em;
            line-height: 1.5;

        }

    }


    @media (min-width: 1200px) {

        p {
            font-size: 1.2em;
            line-height: 1.5;

        }

        h1 {
            font-size: 1.5em;
            line-height: 1.5;


        }

        h2 {
            font-size: 2.3em;
            line-height: 1.5;

        }

        h3 {
            font-size: 2.0em;
            line-height: 1.5;

        }

        .iframe-wrapper {
            position: relative;

            padding-bottom: 56.25%;

            overflow: hidden;
        }

        .iframe-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

    }


</style>
