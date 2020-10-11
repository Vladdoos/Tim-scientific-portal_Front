<template>
    <div class="container">
        <section class="news">
            <div class="news">
                <div class="news-filters-items">
                    <div class="news-filters-item"></div>
                    <div class="news-filters-item"></div>
                    <div class="news-filters-item"></div>
                    <div class="news-filters-item"></div>
                    <div class="news-filters-item"></div>
                </div>

                <div class="section-header">
                    <h1 class="section-header-text"> Новости программы</h1>
                </div>

                <div class="news-items">
                    <div class="news-item">
                        <img src="../../../../assets/image/news1.png" alt="">
                        <p>Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи
                            значительно
                        </p>
                        <div>
                            <p>02.10.2020</p>
                            <button>Узнать больше</button>
                        </div>
                    </div>

                    <div class="news-item">
                        <img src="../../../../assets/image/news2.png" alt="">
                        <p>Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи
                            значительно
                        </p>
                        <div>
                            <p>02.10.2020</p>
                            <button>Узнать больше</button>
                        </div>
                    </div>

                    <div class="news-item">
                        <img src="../../../../assets/image/news3.png" alt="">
                        <p>Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи
                            значительно
                        </p>
                        <div>
                            <p>02.10.2020</p>
                            <button>Узнать больше</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style>
    .news {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .news-filters-items {
        display: flex;
        width: 100%;
        padding: 0 195px;
        justify-content: space-between;
        align-items: center;
        /* Отступ временный пока не найдем исходники и не доделаем дизайн */
        margin: 60px 0 0 0;

    }

    /* Картинки в фигме кривые, нужны исходники без тени */
    /* PS либо я долб и не смог экспортировать с фигмы */

    .news-filters-item {
        width: 134.89px;
        height: 116.15px;
        background-image: url("./../../../../assets/image/filter1.png");
        background-size: cover;
    }

    .news-filters-item:nth-child(2) {
        background-image: url("./../../../../assets/image/filter2.png");
    }
    .news-filters-item:nth-child(3) {
        background-image: url("./../../../../assets/image/filter3.png");
    }
    .news-filters-item:nth-child(4) {
        background-image: url("./../../../../assets/image/filter4.png");
    }
    .news-filters-item:nth-child(5) {
        background-image: url("./../../../../assets/image/filter5.png");
    }

    .news-items {
        display: flex;
        justify-content: space-between;
        margin-bottom: 100px;
        padding: 7px 208px;
        width: 100%;
    }

    .news-item {
        background-color: #2D3833;
        height: 332.8705749511719px;
        padding: 17px 14px;
        width: 284.48822021484375px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 20px 19px 15px rgba(0, 0, 0, 0.49);
    }

    .news-item igm {
        width: 257px;
        border-radius: 4px;
    }

    .news-item p {
        /* text-align: justify; */
        color: white;
        font-size: 15px;
    }

    .news-item div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .news-item div p {
        margin-left: 5px;
        color: rgba(248, 242, 242, 0.79);
    }

    .news-item div button {
        width: 103px;
        height: 29px;
        border: none;
        border-radius: none;
        font-size: 10px;
        background-color: #468B3C;
        color: white;
        font-weight: 800;

    }
</style>