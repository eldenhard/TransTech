<template>
    <div>
    <div class="activities">
        <h2 class="activities-text">Направления деятельности</h2>
        <h5 class="activities-text-sec" style="padding-top: 3%">Каждый день мы усердно работаем, чтобы сделать жизнь наших клиентов лучше</h5>
    </div>
<!-- Gallery -->
<!-- <div class="row" style="width: 90%; margin-left: 5%; margin-top: 3%;">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="@/assets/neft.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="@/assets/gas.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="@/assets/wood.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

  </div>
 
  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="@/assets/i.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="@/assets/all.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"

    />
  </div>
</div> -->

<section class="grid-container">
  <figure class="item c-span2" style="  grid-row: span 2;">
      <img src="@/assets/neft.png" alt="" class="activities-gallery" >
      <figcaption >
        <span class="activities-main-decription">Нефтепродукты</span> 
        <br><br>
        <span class="activities-decription">Предоставляем цистерны для перевозки грузов по территории России, Украины, Белоруссии, стран СНГ и Балтии.</span>
      </figcaption>
    </figure>
    <figure class="item r-span2">
      <img src="@/assets/wood.jpg" alt="" class="activities-gallery">
      <figcaption>
        <span class="activities-main-decription">Лес</span>
        <br><br>
        <span class="activities-decription">Железнодорожные перевозки леса — кругляка и пиломатериалов.</span>
      </figcaption>

    </figure>

   
    <figure class="item" style="grid-row: span 2;">
      <img src="@/assets/truba.jpg" alt="" class="activities-gallery" >
      <figcaption>
        <span class="activities-main-decription">Металл</span>
        <br> <br>
        <span class="activities-decription">Перевозка металлолома, листов, металлопроката и металлопродукции.</span>
      </figcaption>

    </figure>

    <figure class="item">
      <img src="@/assets/gas.jpg" alt="" class="activities-gallery">
      <figcaption>
        <span class="activities-main-decription">Газ</span>
        <br><br>
        <span class="activities-decription">Применяются специализированные железнодорожные цистерны для перевозки сжиженных газов объемом 98 м3.</span>
      </figcaption>

    </figure>
    <figure class="item">
      <img src="@/assets/i.jpg" alt="" class="activities-gallery">
      <figcaption>
        <span class="activities-main-decription">Сыпучие грузы</span> <br> <br>
        <span class="activities-decription">Предоставляем полувагоны для перевозки сыпучих грузов по территории России, Украины, Белоруссии, СНГ и Балтии.</span>
      </figcaption>


    </figure>
    <figure class="item">
      <img src="@/assets/all.jpg" alt="" class="activities-gallery" >
      <figcaption>
        <span class="activities-main-decription">Прочие грузы</span>
        <br>
        <span class="activities-decription">Перевозка генеральных грузов всеми видами вагонов</span>
      </figcaption>

    </figure>

  </section>

</div>
</template>


<script>
export default{
    name: 'Activities'
}
</script>

<style>
.activities-decription  {
  padding-top: 2%;
  float: left;
  padding-left: 2%;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 20px;
}
.activities-main-decription {
  float: left;
  padding-left: 2%;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 32px;
}
figure{
  display: block;
  position: relative;

}
figcaption{
  position: absolute;
  bottom: 0;
  color: white;
  background: rgb(0, 0, 0, 0.1);
}
.activities-gallery{
  filter: brightness(50%);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 310px);
  column-gap: 15px;
  width: 98%;
  margin-left: 1%;
  margin-top: 5%;
}

.item {
  transition: all 0.5s;
}

/* .grid-container:hover .item {
  opacity: 0.2;
}

.item:hover {
  opacity: 1 !important;
} */

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.r-span2 {
  grid-row: span 3;
}

.c-span2 {
  grid-column: span 2;
}







.activities{
    margin-top: 5%;
    text-align: center;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 52px;
}
.activities-text {
    line-height: 52px;
    font-weight: 600;
    font-size: 42px;
    letter-spacing: 1px;
}
.activities-text-sec {
    text-align: center;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 32px;
}
</style>