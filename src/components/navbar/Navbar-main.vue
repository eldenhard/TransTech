<template>

  <b-navbar toggleable type="dark" variant="dark" fixed="top" style="background: black !important">
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
  </b-navbar>
</template>




<style>
  .link {
    color: #788080;
     text-decoration: none
  }
  .link:hover{
    color: white;
  }
.logo{
  width: 10%;
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