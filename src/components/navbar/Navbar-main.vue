<template>
<div>
  <b-navbar toggleable type="dark" variant="dark" style="background: black !important;" fixed="top">
    <b-navbar-brand href="#">
        <img src="@/assets/photo.png" class="logo">
   
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">О нас</b-nav-item>
        <b-nav-item href="#">Услуги</b-nav-item>
        <b-nav-item href="#" disabled>Управление</b-nav-item>
        <b-nav-item href="#" disabled>Перевозка</b-nav-item>
        <b-nav-item href="#">Контакты</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>




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