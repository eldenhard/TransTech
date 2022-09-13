<template>
    <div>
    <div class="activities">
        <h2 class="activities-text">Направления деятельности</h2>
        <h5 class="activities-text-sec" style="padding-top: 3%">Каждый день мы усердно работаем, чтобы сделать жизнь наших клиентов лучше</h5>
    </div>
<!-- Gallery -->
<div class="row" style="width: 90%; margin-left: 5%; margin-top: 3%;">
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
</div>
<!-- Gallery -->

</div>
</template>


<script>
export default{
    name: 'Activities'
}
</script>

<style>

















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