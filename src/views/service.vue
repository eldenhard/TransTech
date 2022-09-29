<template>
    <div class="about">

    
        <div class="image">
            <img src="../assets/pict.jpg" style="    filter: brightness(60%); position: relative;width: 100%;">
            <h2 style=" position: absolute;top: 100px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 50px !important;padding: 10px;text-align: right;padding-right: 10%;">Железнодорожные перевозки</h2>
            <p style=" position: absolute;top: 150px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 17px !important;padding: 10px;text-align: right;padding-right: 10%;">В любую точку России</p>
        </div>
        <br> 

      <h3 style="font-size: 33px;">Об услугах</h3>
      <div class="container about-content">
        <p>ООО «Транспортные Технологии» предоставляет полный цикл качественных услуг в области грузовых перевозок.
             Ориентированность на клиента, гибкое реагирование на изменения рынка,
              освоение новых видов деятельности позволяет компании выходить на лидирующие позиции в своей отрасли. <br><br>
            В области железнодорожных перевозок ООО «Транспортные Технологии» оказывает следующие виды услуг:</p>
      </div>
      <br>

<div class="container" style="width: 80%">
<div class="row ">
    <div class="col-md-3 p-10 services">
        <img src="../assets/train-1.jpg" class="service" alt="">
        <p class="centre">Выбор рационального маршрута транспортировки и подбор подвижного состава</p>
    </div>
    <div class="col-md-3 services">
        <img src="../assets/train-2.jpg" class="service" alt="">
        <p class="centre">Расчет стоимости перевозок</p>

    </div>
    <div class="col-md-3 services ">
        <img src="../assets/train-3.jpg" class="service" alt="">
        <p class="centre">Предоставление вагонов под погрузку</p>

    </div>
    <div class="col-md-3 services ">
        <img src="../assets/train-4.jpg" class="service" alt="">
        <p class="centre">Предоставление в аренду собственного подвижного состава</p>

    </div>

</div>
<div class="row" >
    <div class="col-md-3  services">
        <img src="../assets/const-3.jpg" class="service" alt="">
        <p class="centre">Оперирование подвижным составом</p>

    </div>
    <div class="col-md-3 services">
        <img src="../assets/train-5.jpg" class="service" alt="">
        <p class="centre">Выполнение перевозок повышенной сложности (перевозка тяжелых и негабаритных грузов)</p>

    </div>
    <div class="col-md-3 services">
        <img src="../assets/consl-1.jpg" class="service" alt="">
        <p class="centre">Ежедневный мониторинг, слежение за грузом и подвижным составом</p>

    </div>
    <div class="col-md-3 services">
        <img src="../assets/consl-2.jpg" class="service" alt="">
        <p class="centre">Консультации в организации перевозок</p>

    </div>

</div>
</div>




<br><br><br>
<Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    components: { Footer }
}
</script>

<style>
 .service {
    width: 300px;
    height: 250px;
    filter: brightness(45%);
    
 }  
 .services {
    position: relative;
    text-align: center;
    color: white;
    border: 2px solid white;
 } 
 .centre {
    width: 80%;
    position: absolute;
    top: 70%;
    left: 52%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    text-align: center;
 }
 .about h3 {
color: #EB272B;
padding-left: 5%;
 }   
.about-content p {
font-weight: 400;
font-size: 20px;
padding-top: 3%;
}
.products-pr {
    font-weight: 400;
    font-size: 17px;
}


.grey{
    background: rgb(232, 232, 232);
    /* padding-top: 5%;
    margin-top: 2%;
    margin-bottom: 2%;*/
    padding-top: 2%;
    padding-left: 2%; 
    height: 200px;
    padding-right: 2%;
}

</style>