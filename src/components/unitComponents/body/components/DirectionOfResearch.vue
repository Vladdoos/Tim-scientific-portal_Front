<template>
    <div class="container">
        <section class="direction-on-research">
            <div class="section-header">
                <h1 class="section-header-text">Направление исследований</h1>
            </div>

            <div class="directions">
                <div class="directions__description">
                    <h2>Рожь как смысл жизни</h2>
                    <p>Раскрыто значение пищевой продукции из зерна озимой ржи, которая должна стать неотъемлемой частью
                        здорового питания населения России. Зерно ржи включает богатейший спектр питательных веществ,
                        благодаря чему ржаной хлеб -полноценный продукт питания для человека. </p>
                </div>
                <div class="directions__promo">
                    <div class="direction__text">
                        <h2>Рожь как смысл жизни</h2>
                        <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "DirectionOfResearch"
    }
</script>

<style>
    .direction-on-research {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .directions {
        display: flex;
        width: 100%;
        height: 453px;
        justify-content: center;
    }

    .directions__description {

        background-color: rgba(38, 46, 47, 1);
        width: 421px;
        color: white;
        padding: 35px 30px;
        margin-right: 15px;
        color: rgba(248, 242, 242, 1);
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 23px;

    }

    .directions h2 {
        font-size: 19px;
        margin-bottom: 10px;
        text-shadow: 15px 7px 20px 0px rgba(0, 0, 0, 0.43);
        font-weight: bold;

    }

    .directions__promo {
        width: 630px;
        background-image: url("./../../../../assets/image/image 47.png");
        background-size: cover;
        background-position: center;
        position: relative;

    }

    .direction__text {
        height: 200px;
        width: 400px;
        background-color: rgba(38, 46, 47, 1);
        position: absolute;
        top: 22px;
        right: 49px;
        padding: 13px 20px;
        color: white;
        box-shadow: 15px 13px 10px rgba(0, 0, 0, 0.45);
    }
</style>