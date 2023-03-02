<template>
    <div class="about">

    
        <div class="image">
            <img src="../assets/pict.jpg" style="    filter: brightness(60%); position: relative;width: 100%;">
            <h2 style=" position: absolute;top: 100px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 50px !important;padding: 10px;text-align: right;padding-right: 10%;">Железнодорожные перевозки</h2>
            <p style=" position: absolute;top: 150px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 17px !important;padding: 10px;text-align: right;padding-right: 10%;">В любую точку России</p>
        </div>
        <br> 

      <h3 style="font-size: 33px;" class="about-page">Направление деятельности</h3>
      <div class="container about-content">
        <p>ООО «Транспортные Технологии» предоставляет полный цикл качественных услуг в области грузовых перевозок.
        Ориентированность на клиента, гибкое реагирование на изменения рынка,
        освоение новых видов деятельности позволяет компании выходить на лидирующие позиции в своей отрасли. <br><br>
        ООО «Транспортные Технологии» предоставляет полный комплекс услуг по транспортировке:</p>
      </div>
      <br>


<div class="container m-block" style="padding: 0 !important; width: 80%;">
    <br>
    <div class="row" >
        <div class="col-md-4 mr-0">
            <img src="../assets/neft1.jpg" alt="" style="width: 250px; height: 200px;" class="product-img">
        </div>
        <div class="col-md-8" >
             <div class="grey">
            <h4>НЕФТЕПРОДУКТОВ </h4>
            <p class="products-pr"> Горюче-смазочные материалы относятся к опасным грузам, поэтому перевозка нефтепродуктов
            должна осуществляться только специализированным транспортом и с соблюдением всех мер предосторожности. Транспортировка нефтепродуктов – это задача для профессионалов.</p>
        </div>
        </div>

    </div>

    <div class="row" style="margin-top: 2px">
        <div class="col-md-4 mr-0">
            <img src="../assets/gaz1.webp" alt="" style="width: 250px; height: 200px;"  class="product-img">
        </div>
        <div class="col-md-8">
             <div class="grey">
            <h4>ГАЗОВ </h4>
            <p class="products-pr">Газы относятся к группе опасных грузов. Главной опасностью является давление газа в сосуде.
                Правила перевозки газа и степень ответственности перевозчика регламентированы рядом
                нормативных документов, соблюдение которых является обязательным условием обеспечения безопасности транспортировки.</p>
        </div>
        </div>

    </div>
   
    <div class="row" style="margin-top: 2px">
        <div class="col-md-4 mr-0">
            <img src="../assets/sip.jpg" alt="" style="width: 250px; height: 200px;"  class="product-img">
        </div>
        <div class="col-md-8" >
             <div class="grey">
            <h4>СЫПУЧИХ ГРУЗОВ </h4>
            <p class="products-pr"> Перевозка сыпучих грузов – строительных не рудных материалов , топлива (уголь), химических материалов (гранулированных удобрений и кальцинированной соды) и пищевого зерна, имеет ряд
                своих жестких требований, которые необходимо соблюдать вне зависимости от того, каким видом транспорта они доставляться.</p>
        </div>
        </div>

    </div>
</div>



<br><br><br>
<ContactForm />
<Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: { Footer, ContactForm},
    mounted(){
        window.scrollTo(0, 0);
    }
}  
</script>

<style>
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
@media screen and (max-width: 500px) {
.image {
    display: none;
}
.about-page {
    margin-top: 10%;
    text-align: center;
}
.about-content p {
    text-align: justify;
}
.product-img {
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    width: 330px !important;
}
.grey, .products-pr {
    height: 320px !important;
}
}
</style>