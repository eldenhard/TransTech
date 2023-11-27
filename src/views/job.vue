<template>
    <div class="about">

    
        <div class="image">
            <!-- <img src="../assets/pict.jpg" style="    filter: brightness(60%); position: relative;width: 100%;"> -->
            <img src="../assets/main-pre.jpg" style="    filter: brightness(60%); position: relative;width: 100%; height: 350px">

            <h2 style=" position: absolute;top: 100px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 50px !important;padding: 10px;text-align: right;padding-right: 10%;">Железнодорожные перевозки</h2>
            <p style=" position: absolute;top: 150px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 17px !important;padding: 10px;text-align: right;padding-right: 10%;">В любую точку России</p>
        </div>
        <br> 

      <h3 style="font-size: 33px;" class="about-page">Карьера</h3>
      <div class="container">
        <p class="first-job">Сотрудники – одно из главных конкурентных преимуществ  Транспортных Технологий и основа устойчивого развития компании.
             Мы заинтересованы в развитии кадрового потенциала и привлечении высококвалифицированного персонала.</p> 

             <p class="second-job">  Транспортные Технологии ценят и уважают своих сотрудников. Компания ставит перед собой амбициозные задачи,
            решить которые под силу только сплоченной команде профессионалов. </p>

          <p class="third-job">Компания заинтересована в талантливых, инициативных,
             целеустремленных и высокопрофессиональных сотрудниках.
              Поэтому  Транспортные Технологии уделяет большое внимание процессу развития персонала,
               в основе которого лежит современная модель компетенций – набор ключевых навыков и умений,
                необходимых сотрудникам для успешного достижения стратегических целей Компании.</p>  
      </div>
      <br>

<div class="container_grid">
    <div class="first_block">
        <img src="../assets/job-1.jpg" alt="" class="service product-img">
        <p   style="font-size: 17px; font-weight: 500; text-align: center; padding-right: 20px;">Стабильная компания</p>
    </div>
    <div class="first_block">
        <img src="../assets/job-2.jpg" alt="" class="service product-img">
        <p  style="font-size: 17px; font-weight: 500; text-align: center; padding-right: 20px;">Карьерный рост</p>
    </div>
    <div class="first_block">
        <img src="../assets/job3.jpg" alt="" class="service product-img">
        <p  style="font-size: 17px; font-weight: 500; text-align: center; padding-right: 20px;">Инновационные технологии</p>
    </div>
</div>
<!-- <div class="container">
    <div class="row" style="margin-left: 1%">
        <div class="col-md-4">
            <img src="../assets/job-1.jpg" alt="" class="service product-img">
            <p   style="font-size: 17px; font-weight: 500; text-align: center; padding-right: 20px;">Стабильная компания</p>
        </div>
        <div class="col-md-4">
            <img src="../assets/job-2.jpg" alt="" class="service product-img">
            <p  style="font-size: 17px; font-weight: 500; text-align: center; padding-right: 20px;">Карьерный рост</p>

        </div>
        <div class="col-md-4">
            <img src="../assets/job-3.jpg" alt="" class="service product-img">
            <p  style="font-size: 17px; font-weight: 500; text-align: center; padding-right: 20px;">Инновационные технологии</p>

        </div>

    </div>
</div> -->

<br><br><br>
<ContactForm ></ContactForm>

<Footer></Footer>
    </div>
</template>

<script >
import Footer from '@/components/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';
    export default {
        components: { Footer,ContactForm },
        mounted(){
        window.scrollTo(0, 0);
        document.title = 'Карьера'

    }
    }  
    </script>
<style scoped>
.container_grid{
    margin: 0 auto;
    max-width: 80%;
    display: grid;
    gap: 25px;
    grid-template-areas: 
        'first second third';

    /* grid-template-columns: repeat(3, 1fr); */
}
img{
    max-width: 100%;
    height: 100%;
}
.first_block:nth-child(1){
    grid-area: first;
}
.first_block:nth-child(2){
    grid-area: second;
}
.first_block:nth-child(3){
    grid-area: third;
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
.first-job {
    font-size: 25px;
    font-weight: 500;
}
.second-job {
    padding-left: 5%;
    font-size: 18px;
    font-style: italic;

}
.third-job {
    font-size: 20px;
    font-weight: 400;
}
@media screen and (max-width: 920px) {
    .about-page{
        text-align: center !important;
    }
    .container_grid{
        gap: 35px;
        grid-template-areas: 
        'first'
        'second'
        'third';
    }
}
</style>