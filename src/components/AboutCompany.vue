<template>
  <div>
    <div class="container my-5" id="aboutCompany">
      <div class="row">
        <div class="col-md-6 text-center">
          <img src="@/assets/boss.jpg" class="img-fluid" style="box-shadow: 0 0 15px #eee; max-height: 88%;" alt="">
        </div>
        <div class="col-md-6 pt-3 text-block">
          <small class="text-uppercase"
            style="background: #FF0000; color: white !important; padding: 5px; font-weight: 600;"><span
              class="pre-ab-com">Перевозка грузов по РФ</span></small>
          <h1 class="h2 mb-4 ab-com" style="font-weight: 700;">О компании</h1>
          <p class="text-secondary"
            style=" font-size: 20px; color: black !important; text-align: justify; line-height: 30px;">ООО
            «Транспортные Технологии» – вышло на рынок услуг
            по перевозке грузов железнодорожным транспортом в апреле 2015 года.
            В настоящее время компания продолжает увеличивать своё присутствие на транспортном рынке нефтеналивных и
            универсальных грузов.
            <br>
            Транспортные Технологии предоставляют полный комплекс услуг по транспортировке широкой
            номенклатуры грузов. Качественную и эффективную работу компании обеспечивает штат высококвалифицированных
            работников, имеющих за своими плечами огромный опыт нахождения оптимальных и эффективных методов решения
            транспортно-логистических задач в этом бизнесе.
            <br>
            За короткий срок компания сформировала грузовую базу, достигнув среднемесячного объёма перевозок
            более 400 тысяч тонн. В настоящее время компания продолжает увеличивать своё присутствие на транспортном
            рынке, как в сегменте перевозок нефтеналивных, так и универсальных грузов.
          </p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'AboutCompany',
  data() {
    return {
      height: '',
    }
  },
  mounted() {
    this.height = document.querySelector('.text-block').offsetHeight
  }

}

</script>

<style>
.text-secondary{
  text-indent: 1.5em
}
@media screen and (max-width: 500px) {
  .ab-com {
    text-align: left;
  }

  .pre-ab-com {
    text-align: center;
  }
}</style>
