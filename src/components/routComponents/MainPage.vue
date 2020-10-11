<template>
        <Header/>
        <MainPageBody/>
        <Footer/>
</template>

<script>
    import Header from "../unitComponents/pattern/header/Header";
    import MainPageBody from "../unitComponents/body/controls/MainPageBody";
    import Footer from "../unitComponents/pattern/footer/Footer";

    export default {
        name: "MainPage",
        components: {
            Header,
            MainPageBody,
            Footer
        }
    }
</script>

<style>

</style>