<template>
    <footer class="footer">
        <SocialNetworks/>
        <Navigation/>
    </footer>
</template>

<script>
    import SocialNetworks from "./FooterSocialNetworks";
    import Navigation from "./FooterNavigation";

    export default {
        name: "footer-MainPage",
        components: {
            Navigation,
            SocialNetworks
        }
    }
</script>

<style scoped>

</style>