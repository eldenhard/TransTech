<template>
  <div class="home">
    <div class="mainpic">
     
      <div style="opacity: 1 !important; z-index: 1">
        <h2 class="header-f" style="margin-top: 5%"><img src="../assets/main-logo.png" alt=""></h2>
          <h1 class="header-s">Грузоперевозки по России</h1>
          <div class="btn-gr">
              <button class="request" to="/order_create" exact>Оставить заявку</button>
              <button class="contact">Контакты</button>
          </div>
        </div>
      <!-- <div class="row">
        <div class="col-md-9" style="border-bottom: 7px solid white; height: 31vh"></div>
        <div class="col-md-3" style="border-left: 7px solid white; height: 31vh"></div>

        <div class="col-md-3" style=" height: 31vh">3</div>

        <div class="col-md-6" style="border-left: 7px solid white; border-bottom: 7px solid white;">
          <h2 class="header-f"><img src="../assets/main-logo.png" alt=""></h2>
          <h2 class="header-s">Грузоперевозки по России</h2>
          <div class="btn-gr">
              <button class="request" to="/order_create" exact>Оставить заявку</button>
              <button class="contact">Контакты</button>
          </div>
        </div>
     
      <div class="col-md-3" style="border-left: 7px solid white; border-bottom: 7px solid white;"></div>

      <div class="col-md-3" style="height: 31vh"></div>
      <div class="col-md-9" style="border-left: 7px solid white; height: 31vh"></div>
    </div> -->


  </div>
  <AboutCompany></AboutCompany>
  <WhatUs></WhatUs>
  <Activities></Activities>
  <br><br>

  <ContactForm></ContactForm>
  <Footer></Footer>

  </div>

  <!-- <h3  class="keyFacts">{{ keyFacts.wagons['Полувагон']}}   {{ keyFacts.wagons['Цистерна']}}</h3>
 
        <h2 class="header-f">{{ keyFacts.wagons }}</h2> -->
</template>

<script>
import AboutCompany from '@/components/AboutCompany.vue';
import WhatUs from '@/components/WhatUs.vue';
import Activities from '@/components/Activities.vue';
import ContactForm from '@/components/ContactForm.vue';
import Footer from '@/components/Footer.vue';
import api from '@/api/keyFacts'
export default {
  name: 'HomeView',
  data() {
    return {
      keyFacts: ''
    }
  },
  components: { AboutCompany, WhatUs, Activities, ContactForm, Footer },
  mounted() {
    api.getKeyFacts()
      .then(response => {
        this.keyFacts = response.data
      })
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Raleway:wght@200;300&family=Roboto:wght@300;900&display=swap');

.mainpic {
  /* background: url(../assets/main-l.png); */
  background: url(../assets/main-pre.jpg) , rgb(190, 190, 190, 0.1);
 
  background-size: 100%;
  overflow: hidden;
  height: 90vh !important;
  display: table;
  width: 100%;

}

.header-f {
  text-align: center;
  padding-top: 10%;
  color: rgb(255, 255, 255);
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 35px;
  letter-spacing: 4px;

}

.header-s {
  text-align: center;
  padding-top: 2%;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: 900;
}

.keyFacts {
  text-align: center;
  color: rgb(255, 255, 255, 0.8);
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: 400;
}

.btn-gr {
  padding-top: 6%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.request {
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

.request:hover {
  background: #96191b;
}

.contact {
  /* background: rgb(243, 243, 243, 0.1); */
  background: rgb(190, 190, 190);
  text-decoration: none;
  outline: none;
  BORDER: NONE !important;
  /* border: 3px solid white; */
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-size: 17px;
  padding: 5px 10px;
  width: 300px;
  height: 60px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-left: 1%;
  cursor: pointer;
}

.contact:hover {
  background: rgb(243, 243, 243);
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
    font-weight: 900;
  }

  .request {
    display: none;
  }

  .contact {
    display: none;

  }

  .center-phone {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .phone-btn {
    display: block !important;
  }

  .request-phone {
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
