<template>
<div>
  <b-navbar toggleable="lg" type="dark" style="background: black;" >
    <b-navbar-brand href="/">
      <img src="@/assets/photo.png" alt="" class="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="toggle"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     
      <b-navbar-nav class="ml-auto">
       

        <b-navbar-nav class="item-nav">
        <b-nav-item href="#aboutCompany" @click="Scroll()">О нас</b-nav-item>
        <b-nav-item href="#activities">Услуги</b-nav-item>
        <b-nav-item href="/dislocation">Дислокация
        </b-nav-item>
        <b-nav-item href="/transp">Перевозка
        </b-nav-item>
        <b-nav-item href="#contact">Контакты</b-nav-item>

      </b-navbar-nav>

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default{
    name: 'Navbar',
    methods: {
      Scroll : function(){
      const smoothLinks = document.querySelectorAll('a[href^="#"]');
        for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');

          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
    }
    }
  }
}
</script>


<style>
.logo{
  width: 50%
}
@media screen and (max-width: 500px) {
.logo{
  width: 60%;
  margin-left: 25%;
}

.toggle{
margin-left: 42%;
}
.item-nav {
  text-align: center;
}
}
</style>