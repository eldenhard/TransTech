<template>
    <div>
        <div class="prevue">
            <h4>Новости железнодорожного транспорта</h4>
        </div>
        <div class="news">
        <div class="news__content" @click="OpenPage1()">
            <div class="news__content__header">20.04.2022 в 15:47</div>
            <div class="news__content__body">Идея покупки инновационных вагонов – цистерн возникла в компании еще летом 2020 года в связи с наличием у данного подвижного состава трех важных ...</div>
            <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
        <div class="news__content" @click="OpenPage2()">
            <div class="news__content__header">20.04.2022 в 15:35</div>
            <div class="news__content__body">Заместитель министра транспорта РФ Кирилл Богданов 18 апреля 2022 года был освобожден от должности, об этом сообщается в опубликованном ...</div>
            <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
        <div class="news__content" @click="OpenPage3()">
            <div class="news__content__header">20.04.2022 в 15:31</div>
            <div class="news__content__body">Отгрузки топлива планируется начать в конце августа 2022 года. Проект связан с освоением Сыллахского месторождения угля, расположенного на ...</div>
            <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
        <div class="news__content" @click="OpenPage4()">
            <div class="news__content__header">27.10.2021 в 10:40</div>
            <div class="news__content__body">ООО «Транспортные Технологии» — на сегодняшний день одна из самых динамично развивающихся компаний на рынке ...</div>
            <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
    </div>
    </div>

</template>

<style scoped>
.prevue{
  color: #EC2332;  
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3%;
  font-weight: 700;
}
.news{
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    position: relative;
    left:50%;
    transform: translate(-50%, 0);
}
.news__content{
    height: 250px;
    width: 20%;
    margin-bottom: 5%;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;

}

/* .news__content:hover{
  height: 252px;
  width: 23%;
  font-size: calc(17px + 1%);
} */
.news__content__header{
    color: #A6A6A6;
    padding: 3%;
    font-weight: 600;
}
.news__content__body{

    padding: 3%;
    font-weight: 600;
}
.news__content__footer button{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    background: #B1B1B1;
    color:white;
    font-weight: 600;
    border: none;
    padding: 2% 5%;
    margin-bottom: 1%;
}
@media screen and (max-width: 1600px){

    .news{
    display: flex;
    flex-direction: column;
    width: 80%;
    position: relative;
    left:50%;
    transform: translate(-50%, 0);
}
    .news__content{
    height: 250px;
    width: 80%;
    position: relative;

    left: 50%;
    transform: translate(-50%,0);
    }
    /* .news__content:hover{
        transform: none !important;
        height: 270px;
        width: 81%;
    } */
    .prevue {
        text-align: center;
    }

}

</style>

<script>
export default{
    methods:{
        OpenPage1(){
          window.location.href = this.$router.options.routes[8].path
        },
        OpenPage2(){
            window.location.href = this.$router.options.routes[9].path

        },
        OpenPage3(){
            window.location.href = this.$router.options.routes[10].path

        },
        OpenPage4(){
            window.location.href = this.$router.options.routes[11].path

        },
    }
}
</script>