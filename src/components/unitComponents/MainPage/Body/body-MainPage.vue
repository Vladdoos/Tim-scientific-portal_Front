<template>
    <main class="content">
        <BannerMain/>
        <SuccessModule/>
        <DirectionOfResearch/>
        <News/>
    </main>
</template>

<script>
    import BannerMain from "./BodyBannerMain";
    import SuccessModule from "./BodySuccessModule";
    import DirectionOfResearch from "./BodyDirectionOfResearch";
    import News from "./BodyNews";

    export default {
        name: "MainBodyPage",
        components: {
            News,
            DirectionOfResearch,
            SuccessModule,
            BannerMain
        }
    }
</script>

<style scoped>

</style>