<template>
    <div class="about">

    
        <div class="image">
            <img src="../assets/pict.jpg" style="    filter: brightness(60%); position: relative;width: 100%; height: 350px;">
            <h2 style=" position: absolute;top: 100px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 50px !important;padding: 10px;text-align: right;padding-right: 10%;">Железнодорожные перевозки</h2>
            <p style=" position: absolute;top: 150px;left: 0;width: 100%;color: rgb(214, 214, 214);font-size: 17px !important;padding: 10px;text-align: right;padding-right: 10%;">В любую точку России</p>
        </div>
        <br> 

      <h3 style="font-size: 33px;" class="about-page">Об услугах</h3>
      <div class="container about-content">
        <p>ООО «Транспортные Технологии» предоставляет полный цикл качественных услуг в области грузовых перевозок.
             Ориентированность на клиента, гибкое реагирование на изменения рынка,
              освоение новых видов деятельности позволяет компании выходить на лидирующие позиции в своей отрасли. <br><br>
            В области железнодорожных перевозок ООО «Транспортные Технологии» оказывает следующие виды услуг:</p>
      </div>


<div class="grid-container container">
    <div class="grid_block">
        <img src="../assets/train-1.jpg" class="service" alt="">
        <p class="text-overlay">Выбор рационального маршрута транспортировки и подбор подвижного состава</p>
    </div>
    <div class="grid_block">
        <img src="../assets/train-2.jpg" class="service" alt="">
        <p class="text-overlay">Расчет стоимости перевозки грузов</p>

    </div>
    <div class="grid_block">
        <img src="../assets/train-3.jpg" class="service" alt="">
        <p class="text-overlay">Предоставление вагонов под погрузку</p>

    </div>
    <div class="grid_block">
        <img src="../assets/train-4.jpg" class="service" alt="">
        <p class="text-overlay">Предоставление в аренду собственного подвижного состава</p>
    </div>
    <div class="grid_block">
        <img src="../assets/const-3.jpg" class="service" alt="">
        <p class="text-overlay">Оперирование подвижным составом</p>

    </div>
    <div class="grid_block">
        <img src="../assets/train-5.jpg" class="service" alt="">
        <p class="text-overlay">Выполнение перевозок повышенной сложности (перевозка тяжелых и негабаритных грузов)</p>

    </div>
    <div class="grid_block">
        <img src="../assets/consl-1.jpg" class="service" alt="">
        <p class="text-overlay">Ежедневный мониторинг, слежение за грузом и подвижным составом</p>

    </div>
    <div class="grid_block">
        <img src="../assets/consl-2.jpg" class="service" alt="">
        <p class="text-overlay">Консультации в организации перевозок</p>

    </div>

</div>

<br><br><br>
<ContactForm/>
<Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';
export default {
    components: { Footer,ContactForm },
    mounted(){
        window.scrollTo(0, 0);
        document.title = 'Услуги'

    }
}
</script>

<style scoped>

.grid-container{
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    display: grid;
    gap: 1%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;

    box-sizing: border-box;
    width: 100%;
}
.grid_block {
  position: relative;
  margin-top: 2%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden; /* Скрытие возможного переполнения текста */
}

.grid_block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid_block::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Затемненный фон */
  z-index: 1; /* Поместите фон под текст */
}

.grid_block .text-overlay {
  position: absolute;
  bottom: 0; /* Размещаем текст внизу */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  z-index: 2;
  width: 100%;
  padding: 10px; /* Добавляем отступы по бокам */
  box-sizing: border-box;
}

 .services {
    position: relative;
    text-align: center;
    color: white;
    display: flex;
 } 
 .services p{
    display: flex;
    align-items: end;

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
@media (max-width: 740px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid_block {
    margin-bottom: 20px; /* Добавляем отступ между блоками */
  }
}
</style>