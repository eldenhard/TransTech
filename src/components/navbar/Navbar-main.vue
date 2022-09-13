<template>
<div>
  <b-navbar toggleable="lg" type="dark" style="background: black;">
    <b-navbar-brand href="#">
      <img src="@/assets/photo.png" alt="" class="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       

        <b-navbar-nav>
        <b-nav-item href="#">О нас</b-nav-item>
        <b-nav-item href="#">Услуги</b-nav-item>
        <b-nav-item href="#">Новости</b-nav-item>
        <b-nav-item href="#">Карьера</b-nav-item>
        <b-nav-item href="#">Контакты</b-nav-item>

      </b-navbar-nav>

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default{
    name: 'Navbar'
}
</script>


<style>
.logo{
  width: 50%
}
</style>