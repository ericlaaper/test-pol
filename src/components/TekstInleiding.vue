<template>
    <div class="regulier">
        <p>
            {{tekst1}}
            <br>
            {{tekst2}}
        </p>

    </div>
</template>

<script>
    export default {
        name: "TekstInleiding",
        props: ['tekst1', 'tekst2'],
    }
</script>

<style scoped>

    .regulier {
        color: #607D8B;

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
