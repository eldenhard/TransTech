<template>
    <div>
        <footer>
            <div class="parent">
            <img src="@/assets/photo.png" alt="" style="width: 9%; height: 55%; padding-left: 1%; " >
            <p>© 2017-2022 ООО «Транспортные Технологии». Все права защищены.</p>
            <p href="">+7 (495) 363 1520</p>
        </div>
        </footer>
    </div>
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

</style>