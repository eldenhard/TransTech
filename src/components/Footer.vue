<template>
        <footer>
            <div class="parent">
            <img src="@/assets/photo.png" alt="" class="footer-logo">
            <p class="safety-inf">© 2017-2022 ООО «Транспортные Технологии». Все права защищены.</p>
            <p class="contact-phone">+7 (495) 363 1520</p>
        </div>
        </footer>

</template>

<script>
export default{
    name: 'footer'
}
</script>

<style>
footer{
    height: 100px;
    width: 100%;
    background: black;
} 
.footer-logo {
width: 12%;
height: 45%;
padding-left: 1%;
}
.parent{
    display: flex;
  justify-content: space-around;
  height: 100%;
  padding-top: 2%;
  color: white;
}
.parent p{
    font-weight: 600;
}

@media screen and (max-width: 500px) {
.footer-logo {
    /* width: 50%; */
    /* height: 10%; */
    display: none;
}
.safety-inf {
    font-size: 9px;
    vertical-align: middle;
    text-align: center;
}   
.contact-phone {
    display: none;
}
footer{
    height: 40px;
}
}
</style>