<template>
    <div style="display:none">
        <div class="prevue">
            <h4>Новости железнодорожного транспорта</h4>
        </div>
        <div class="news">
        <div class="news__content" @click="OpenPage1()">
            <div class="news__content__header">20.04.2022 в 15:47
                <div class="triangle"></div>
            </div>
            <div class="news__content__body">
                Идея покупки инновационных вагонов – цистерн возникла в компании еще летом 2020 года в связи с наличием у данного подвижного состава трех важных ...
            </div>
            <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
        <div class="news__content" @click="OpenPage2()">
            <div class="news__content__header">20.04.2022 в 15:35
                <div class="triangle"></div>

            </div>
            <div class="news__content__body">
                Заместитель министра транспорта РФ Кирилл Богданов 18 апреля 2022 года был освобожден от должности, об этом сообщается в опубликованном ...
            </div>
                
                <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
        <div class="news__content" @click="OpenPage3()">
            <div class="news__content__header">20.04.2022 в 15:31
                <div class="triangle"></div>
            </div>
            <div class="news__content__body">Отгрузки топлива планируется начать в конце августа 2022 года. Проект связан с освоением Сыллахского месторождения угля, расположенного на ...
                
            </div>
            <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
        <div class="news__content" @click="OpenPage4()">
            <div class="news__content__header">27.10.2021 в 10:40
                <div class="triangle"></div>
            </div>
            <div class="news__content__body">ООО «Транспортные Технологии» — на сегодняшний день одна из самых динамично развивающихся компаний на рынке ...
                
            </div>
            <div class="news__content__footer">
                <button >Читать далее </button>
            </div>
        </div>
    </div>
    </div>

</template>

<style scoped>
.prevue{
  background: #EC2332;
  color: #ffffff;  
  margin-bottom: 3%;
  padding: .5%;
  font-weight: 600;
  font-family: 'Roboto', Arial, sans-serif;
  display:inline-block;
  position: relative;
  left: 50%;
  transform: translate(-50%,0);

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
    height: 280px;
    width: 20%;
    margin-bottom: 5%;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;

}
.news__content:hover{
    box-shadow: 0 14px 28px rgba(153, 153, 153, 0.35), 0 10px 10px rgba(218, 218, 218, 0.32);

}
.news__content__header{
    color: #A6A6A6;
    padding: 3%;
    font-weight: 600;
}
.news__content__body{
    position: relative;
    padding: 3%;
    font-weight: 600;
}
.triangle{
    width: 0;
    height: 0;
    border-top: 30px solid #EC2332;
    border-left: 15px solid transparent;
    position: absolute;
    right: 0;
    top: 0;
}.news__content__footer button{
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
    .prevue {
        text-align: center;

    }

}
@media screen and (max-width: 600px){
    .news{
 width:95%
    }
    .news__content{
    height: 270px;
    width: 100%;
    margin-bottom: 5%;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;

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