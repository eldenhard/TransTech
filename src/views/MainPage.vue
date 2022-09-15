<template>
  <div class="home">
      <div class="mainpic">
        <div class="center-phone">
        <h2 class="header-f">Транспортные технологии</h2>
        <h1 class="header-s" >Грузоперевозки по России</h1>
        
   

          <div class="btn-gr">
            <button class="request">Оставить заявку</button>
            <button class="contact">Контакты</button>
          </div>

            <div class="row phone-btn">
              <div class="col-md-12">
                <button class="request-phone">Оставить заявку</button>
              </div>
            </div>

      </div>
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
  display: table;
  width: 100%;
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
.btn-gr{
  padding-top: 6%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
}
.contact{
  background: rgb(243, 243, 243, 0.1);
  text-decoration: none;
  outline: none;
  border: 3px solid white;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-size: 17px;
  padding: 5px 10px;
  width: 300px;
  height: 60px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-left: 1%;
  cursor: pointer;
}
.contact:hover{
  background: rgb(243, 243, 243, 0.3);
}
.phone-btn {
  display: none !important;
}
@media screen and (max-width: 500px) {
  .header-f {
    font-size: 18px;
    margin-top: -250px;

  }
  .header-s {
    text-align: center;
  padding-top: 2%;
  color: rgb(255, 255, 255, 0.8);
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  letter-spacing: 3px;
  font-weight:900;
  }
  .request{
display: none;
}
.contact{
display: none;

}
.center-phone {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.phone-btn{
  display: block !important;
}
.request-phone{
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
.request-phone:hover {
  background: #96191b;
}
}
</style>
