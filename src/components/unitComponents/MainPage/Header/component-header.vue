<template>
    <header class="header">
        <img src="../../../../static/image/logo.png" alt="logo" class="header__logo">
        <Navigation/>
        <Authorization/>
        <Search/>
    </header>
</template>

<script>
    import Search from "./HeaderSearch";
    import Navigation from "./HeaderNavigation";
    import Authorization from "./HeaderAuthorization";

    export default {
        name: "component-header",
        components: {
            Search,
            Navigation,
            Authorization}
    }
</script>

<style scoped>

</style>