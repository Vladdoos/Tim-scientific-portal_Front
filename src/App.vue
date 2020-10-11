<template>
  <MainPage />
</template>

<script>
  import MainPage from "./components/routComponents/MainPage";
  export default {
    name: 'App',
    components: {
      MainPage
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto;
    background-color: #A2D199;
  }

  a {
    z-index: 20;
  }

  .container {
    width: 1366px;
    margin: auto;
    background-color: #A2D199;
  }

  .content {
    min-height: calc(100vh - 377px)
  }

  [class$="nav"] ul li a:link,
  [class$="nav"] ul li a:visited,
  [class$="nav"] ul li a:active,
  [class$="nav"] ul li a:hover {
    text-decoration: none;
    color: black
  }

  /* Должны ли быть стили снизу глобальными? */
  .section-header {
        width: 1067px;
        height: 103px;
        margin: 40px 0;
        border: 4px solid #4B5F4F;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.12em;
    }

    .section-header-text {
        font-size: 40px;
        margin: 0;
    }
</style>