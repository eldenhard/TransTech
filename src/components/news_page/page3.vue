<template>
    <div>
        <div class="news">
       <div class="news__content">
           <div class="news__content__header">В РАЙОНЕ СТ. ТАЛУМА В АМУРСКОЙ ОБЛАСТИ НА БАМЕ ПОЯВИТСЯ УГОЛЬНО-ЛОГИСТИЧЕСКИЙ КЛАСТЕР.</div>
           <div class="news__content__body">Отгрузки топлива планируется начать в конце августа 2022 года. <br>
Проект связан с освоением Сыллахского месторождения угля, расположенного на границе Амурской области и Якутии. От ст. Талума в настоящее время строится примыкание к отгрузочному комплексу. Планируемый объем погрузки угля – порядка 4,5 млн т ежегодно. <br>
Как сообщил генеральный директор ООО «АнтрацитИнвестПроект» Петр Хаспеков, старт I очереди угледобывающего предприятия и отгрузки продукции намечен на конец августа. Объем инвестиций в инфраструктуру только на территории Амурской области составит 4–4,5 млрд руб.(ИА РЖД-Партнер.ру 18.04.22) <br></div>
       </div>
      
    </div>
      <ContactForm style="margin-top: 7%;"/>
      <Footer />
    </div>

</template>

<style scoped>
.news{
    width: 60%;
    position: relative;
    left:50%;
    transform: translate(-50%,0);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    padding: 5%;
    margin-top: 5%;
}

.news__content__header {
    color: #EC2332;  
  display: flex;
  justify-content: start;
  margin-bottom: 3%;
  font-weight: 700;
  font-size: 18px;
}
.news__content__body {
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    text-align: justify;
}
@media screen and (max-width: 1600px){
    .news{
        width:90%;
        margin-top: 10%;
    }
  
    }
    @media screen and (max-width: 600px){
        .news{
        margin-top: 20%;
    }
}
</style>


<script>
import ContactForm from '@/components/ContactForm.vue';
import Footer from '@/components/Footer.vue'
export default{
    components: {  ContactForm, Footer },

}
</script>