<template>
    <div>


    <b-modal id="bv-modal-example" hide-footer size="xl">
    <template #modal-title>
        Оценка условий труда
    </template>
 <div>
   <b-carousel
      id="mainCarousel"
      :interval="400000000000000"
      v-model="slide"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <b-carousel-slide>
        <template #img>
            <div class="item-photo">
                <img
                    class="d-block img-fluid w-100"
                    src="../assets/1.jpg"
                    alt="image slot"
                >
            </div>

        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
            <div class="item-photo">
                    <img
                        class="d-block img-fluid w-100"
                        src="../assets/2.jpg"
                        alt="image slot"
                    >
        </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
            <div class="item-photo">
                    <img
                        class="d-block img-fluid w-100"
                        src="../assets/3.jpg"
                        alt="image slot"
                    >
        </div>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
            <div class="item-photo">
                    <img
                        class="d-block img-fluid w-100"
                        src="../assets/4.jpg"
                        alt="image slot"
                    >
        </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
            <div class="item-photo">
                    <img
                        class="d-block img-fluid w-100"
                        src="../assets/5.jpg"
                        alt="image slot"
                    >
        </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
            <div class="item-photo">
                    <img
                        class="d-block img-fluid w-100"
                        src="../assets/6.jpg"
                        alt="image slot"
                    >
        </div>
        </template>
      </b-carousel-slide>

    </b-carousel>
    </div> 
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')" style="background: #EB272B; border: none;">Закрыть</b-button>
  </b-modal>

   
        <footer class="mainFooter">
            <div class="parent">
            <img src="@/assets/photo.png" alt="" class="footer-logo">
            <div>
                <p class="safety-inf">© 2017-2023 ООО «Транспортные Технологии». Все права защищены. <br>
                    <button id="show-btn" @click="$bvModal.show('bv-modal-example')" style="padding: 0; font-size: 12px; background: transparent; border: none;  color: white;">Документы об оценке условий труда </button>

                </p>
            </div>
            <a class="contact-phone"  href="tel:+7 (495)363-15-20">+7 (495)363-15-20</a>
        </div>

        </footer>
    </div>
</template>

<script>
export default{
    name: 'footer',
    data() {
      return {
        slide: 0,
        // sliding: null
      }
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }

</script>

<style scoped>

a.carousel-control-next {
  background: black !important;
}
.mainCarousel___BV_indicators_{
    color: black !important;
    background: black !important;
}
.carousel-indicators > li {
  background-color: black;
}


.fsize{
    min-height: 80vh !important;
     max-height: 80vh !important;
}
#show-btn:hover{
    outline: white !important;
    border-bottom: 1px solid rgb(218, 218, 218) !important;
    color: rgb(218, 218, 218) !important;
}
.item-photo img{
    filter: brightness(90%);
    height: 700px;
    width: 100%;
}

.mainFooter{
    width: 100%;
    background: #565656;
} 
.footer-logo {
width: 12%;
height: 45%;
padding-left: 1%;
margin-bottom: 1%;
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
.contact-phone {
    color: white !important;
    outline: none !important;
    border-bottom: none !important;
}
#show-btn{
    position: relative !important;
    left:50% !important;
    transform: translate(-50%,0) !important;
    text-align: center !important;

}
@media screen and (max-width: 700px) {
.footer-logo {
    /* width: 50%; */
    /* height: 10%; */
    display: none;
}
.item-photo img{
    filter: brightness(90%);
    /* height: 100%;
    width: 100%; */
}
.d-block{
    min-height: 20vh !important;
    max-height: 20vh !important;
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
#show-btn{
    position: relative !important;
    left:50% !important;
    transform: translate(-50%,0) !important;
    text-align: center !important;
    float: left;
}
}
</style>