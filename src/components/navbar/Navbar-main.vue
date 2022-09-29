<template>

  <!-- <b-navbar toggleable type="dark" variant="dark" fixed="top" style="background: black !important">
   <img src="@/assets/photo.png" class="logo" :click="OpenMain()" >

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#aboutCompany">О нас</b-nav-item>
        <b-nav-item href="#activities">Услуги</b-nav-item>
        <b-nav-item href="#" disabled>Управление</b-nav-item>
        <b-nav-item href="#" disabled>Перевозка</b-nav-item>
        <b-nav-item >
          <router-link to="/Team" exact class="link"> Руководство</router-link></b-nav-item>

        <b-nav-item href="#contact">Контакты</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->

  <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark" style="background: black !important;">
    <img src="@/assets/photo.png" class="logo" :click="OpenMain()" >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        

       
        <b-nav-item><router-link to="/about" exact class="link">О нас</router-link></b-nav-item>
        <b-nav-item><router-link to="/service" exact class="link">Услуги</router-link></b-nav-item>
        <b-nav-item><router-link to="/order_create" exact class="link">Управление перевозкой</router-link></b-nav-item>
        <b-nav-item><router-link to="/job" exact class="link">Карьера</router-link></b-nav-item>

        <b-nav-item href="#"><router-link to="/team" exact class="link">Руководство</router-link></b-nav-item>
        <b-nav-item href="/#contact">Контакты</b-nav-item>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>




<style>
  a.router-link-active, li.router-link-active>a {
    color: rgb(221, 221, 221);;
}
  .link {
    color: #788080;
     text-decoration: none
  }
  .link:hover{
    color: rgb(221, 221, 221);
    text-decoration: none;
  }
.logo{
  width: 12%;
  cursor: pointer;
}
@media screen and (max-width: 500px) {
.logo{
  width: 30%;

}

/* .toggle{
margin-left: 42%;
}
.item-nav {
  text-align: center;
}  */
}
</style>

<script>
export default{
  methods: {
    OpenMain: function(){
      document.body.addEventListener('click', e => {
        if (!e.target.classList.contains('logo')) {
          return;
      }
        location.href = '/';
      });
    }
  }
}
</script>