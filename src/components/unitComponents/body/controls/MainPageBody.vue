<template>
    <main class="content">
        <Banner />
        <SuccessModule />
        <DirectionOfResearch />
        <News />
    </main>
</template>

<script>
    import Banner from "./../components/Banner";
    import SuccessModule from "./../components/SuccessModule";
    import DirectionOfResearch from "./../components/DirectionOfResearch";
    import News from "./../components/News";

    export default {
        name: "MainPageBody",
        components: {
            News,
            DirectionOfResearch,
            SuccessModule,
            Banner
        }
    }
</script>

<style>
    
    /* Убираем нижнюю границу у хэдера, т.к. следующий за ним блок имеет ширину 100vw */
    body .container .header {
        border: none;
    }

</style>