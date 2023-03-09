<template>
    <div>
        <div class="news">
       <div class="news__content">
           <div class="news__content__header">КИРИЛЛ БОГДАНОВ ОСВОБОЖДЕН ОТ ДОЛЖНОСТИ ЗАММИНИСТРА ТРАНСПОРТА РФ.</div>
           <div class="news__content__body">
            Заместитель министра транспорта РФ Кирилл Богданов 18 апреля 2022 года был освобожден от должности, об этом сообщается в опубликованном правительственном распоряжении. Он занимал данный пост с декабря 2020 года. <br>
«Освободить Богданова Кирилла Игоревича от должности заместителя министра транспорта РФ по его просьбе»,— написано в распоряжении, подписанном премьером Михаилом Мишустиным. О его преемнике на посту пока не сообщается. <br>
Господин Богданов курировал цифровое развитие транспортной отрасли. Ранее он занимал должность заместителя генерального директора «Аэрофлота». На прошлой неделе источники РБК сообщили о возможном уходе господина Богданова из министерства. (КоммерсантЪ 18.04.22) <br>
           </div>

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