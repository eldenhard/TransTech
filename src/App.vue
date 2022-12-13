<template>
  <div id="app">
<Navbar></Navbar>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>
<style>
body{
  background: white !important;
}
</style>

<script>
import Navbar from './components/navbar/Navbar-main.vue';

  export default{
    name: 'App',
    components: { Navbar }
  }
</script>

