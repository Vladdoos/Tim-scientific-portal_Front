<template>
    <div class="container">
        <section class="success-module">
            <div class="section-header">
                <h1 class="section-header-text">Успехи программы</h1>
            </div>
            <div class="courusel">
                <img src="../../../../assets/image/Карусель.png" alt="" class="">
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "SuccessModule"
    }
</script>

<style>
    .success-module {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .success-module h1 {
        text-align: center;
        text-shadow: 15px 7px 20px 0px rgba(0, 0, 0, 0.43);

    }
</style>