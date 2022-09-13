<template>
  <div class="home">
      <div class="mainpic">
        <h2 class="header-f">Транспортные технологии</h2>
        <h1 class="header-s" >Грузоперевозки по России</h1>
        
        <b-container class="btn_group" style="position: relative; left: 35%; transform: translate(-40%, 0)" >
        <b-row>
          <b-col-md-6>
            <button class="request">Оставить заявку</button>
          </b-col-md-6>
          <b-col-md-6>
            <button class="contact">Контакты</button>
          </b-col-md-6>
      </b-row>
    </b-container>
      </div>
      <AboutCompany></AboutCompany>
      <WhatUs></WhatUs>
      <Activities></Activities>
      <br><br>

      <ContactForm></ContactForm>
      <Footer></Footer>

  </div>
</template>

<script>
import AboutCompany from '@/components/AboutCompany.vue';
import WhatUs from '@/components/WhatUs.vue';
import Activities from '@/components/Activities.vue';
import ContactForm from '@/components/ContactForm.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'HomeView',
  components: { AboutCompany, WhatUs, Activities,ContactForm, Footer }

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Raleway:wght@200;300&family=Roboto:wght@300;900&display=swap');
.mainpic{
  background: url(../assets/630873e547610.jpg);
  height: 100vh;
  margin-top: -4%;

}
.header-f{
  text-align: center;
  padding-top: 18%;
  color: rgb(212, 212, 212);
  font-family: 'Roboto', sans-serif;
    font-weight: 300;
  font-size: 35px;
  letter-spacing: 4px;
  
}
.header-s{
  text-align: center;
  padding-top: 2%;
  color: rgb(255, 255, 255, 0.8);
  font-family: 'Roboto', sans-serif;
  font-size: 72px;
  letter-spacing: 3px;
  font-weight:900;
}
.btn_group{
  padding-top: 8%;
}
.request{
  background: #EB272B;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  padding: 5px 10px;
  width: 300px;
  height: 60px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
}
.request:hover{
  background: #96191b;
  cursor: pointer;

}
.contact{
  background: rgb(243, 243, 243, 0.1);
  text-decoration: none;
  outline: none;
  border: 3px solid white;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  padding: 5px 10px;
  width: 300px;
  height: 60px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-left: 5%;
  cursor: pointer;
}
.contact:hover{
  background: rgb(243, 243, 243, 0.3);

}
</style>
