<template>
    <div class="container">
        <ComponentHeader/>
        <MainBodyPage/>
        <FooterMainPage/>
    </div>
</template>

<script>
    import ComponentHeader from "../unitComponents/MainPage/Header/component-header";
    import MainBodyPage from "../unitComponents/MainPage/Body/body-MainPage";
    import FooterMainPage from "../unitComponents/MainPage/Footer/footer-MainPage";

    export default {
        name: "page-main",
        components: {
            ComponentHeader,
            MainBodyPage,
            FooterMainPage
        }
    }
</script>

<style scoped>

</style>