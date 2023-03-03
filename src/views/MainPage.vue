<template>
  <div class="home">
    <div class="mainpic">

      <div style="opacity: 1 !important; z-index: 1">
        <h2 class="header-f"><img src="../assets/main-logo.png" alt="" class="logoes"></h2>
        <h1 class="header-s">Грузоперевозки по России</h1>
        <div class="btn-gr">
          <button class="request" to="/order_create" exact @click="showModal">Оставить заявку</button>
          <a href="#contact" class="contact" style="  text-decoration: none;outline: none;
    text-align: center; display: inline-block;
    vertical-align: middle; padding-top: 18px; color: white">Контакты</a>
          <!-- <button class="contact" >Контакты</button> -->
        </div>
      </div>

    </div>
    <AboutCompany></AboutCompany>
    <WhatUs></WhatUs>
    <Activities></Activities>
    <br><br>

    <ContactForm id="contact"></ContactForm>
    <Footer></Footer>
    <b-modal ref="my-modal" hide-footer title="Оставить заявку" size="lg" style="background: red !important;">
      <p class="description">* Оставьте ваш  адрес электронной почты, и мы отправим Вам комерческое предложение</p>
      <div class="d-block text-center">
        <label for="input">
          Адрес электронной почты <br>
        </label>
        <input type="email" id="input" v-model="emailUser">
        <br>
       
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 5%;">
        <b-button style="width: 150px" variant="danger" @click="hideModal">Закрыть</b-button>
        <b-button style="width: 150px" variant="success" @click="SendMess()">Отправить</b-button>
      </div>
     
    </b-modal>
    <Notification :alertNotif="alertNotif" :variantTitle="variantTitle">
     {{ text }}
      </Notification>
  </div>
</template>

<script>
import AboutCompany from '@/components/AboutCompany.vue';
import WhatUs from '@/components/WhatUs.vue';
import Activities from '@/components/Activities.vue';
import ContactForm from '@/components/ContactForm.vue';
import Footer from '@/components/Footer.vue';
import api from '@/api/keyFacts'

import Notification from '../components/Notifications/Notification.vue';
export default {
  name: 'HomeView',
  data() {
    return {
      keyFacts: '',
      emailUser: '',
      alertNotif: false,
      variantTitle: 'success',
      text: '',
    }
  },
  components: { AboutCompany, WhatUs, Activities, ContactForm, Footer, Notification },
  mounted() {
    // api.getKeyFacts()
    //   .then(response => {
    //     this.keyFacts = response.data
    //   })
    document.title = 'Главная'
  },
  methods: {
    SendMess(){
      if(this.emailUser.length > 1 && this.emailUser.includes('@')){
        this.alertNotif = true
        this.variantTitle = 'success'
        this.text = 'Успешно, коммерческое предложение придет на Вашу почту'

        setTimeout(() => this.alertNotif = false, 2000 )
          this.hideModal()
      } else {
        this.alertNotif = true
        this.variantTitle = 'danger'
        this.text = 'Пожалуйста, введите ваш адрес электронной почты'
        setTimeout(() => this.alertNotif = false, 2000 )
      }
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Raleway:wght@200;300&family=Roboto:wght@300;900&display=swap');
label{
  color:grey;
  font-size: 1.2rem;
  float: left;
}
input{
  width: 100%;
  height: 40px;
  border: 1px solid lightgrey;
  border-radius: 10px;
}
.description{
  font-size: 12px;
  font-style: italic;
  color: rgb(180, 180, 180)
}
.mainpic {
  /* background: url(../assets/main-l.png); */
  background: url(../assets/main-pre.jpg), rgb(190, 190, 190, 0.1) no-repeat;
  background-size: cover;
  /*  
  background-size: 100%;
  overflow: hidden;
  height: 80vh !important;
  display: table;
  width: 100%; */

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

a:hover {
  color: rgb(145, 145, 145) !important;
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

.contact a {
  text-decoration: none;
  outline: none;
  text-align: center;
  vertical-align: middle;
}

.contact:hover {
  background: rgb(243, 243, 243);
}

.phone-btn {
  display: none !important;
}

@media screen and (max-width:750px) {
  .header-f {
    margin-top: 5%;
  }
}

@media screen and (max-width: 600px) {
  .header-f {
    font-size: 18px;


  }

  .logoes {
    width: 45%;
    margin-top: 35%;
  }

  .btn-gr {
    display: flex;
    flex-direction: column;

  }

  .mainpic {
    background: url(../assets/main-pre.jpg), rgb(190, 190, 190, 0.1) no-repeat;
    /* background-size: 100%;
    overflow: hidden; */
    /* height: 80vh !important; */
    /* display: table;
    width: 100%; */
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
    position: relative;
    left: 50%;
    transform: translate(-50%, 0)
  }

  .contact {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 4%;
    margin-left: -1px;
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
}</style>
