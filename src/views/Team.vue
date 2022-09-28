<template>
  <div>
  <div class="team">

    <div class="accordion" role="tablist">
      <h4>О компании</h4>
      <h2>Руководство компании</h2>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="dark" class="description">Генеральный директор</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 80%; position: relative; left: 50%; transform: translate(-50%, 0);">
                <b-row no-gutters>
                  <b-col md="6">
                    <img src="../assets/Tert.png"  class="rounded-0"  style="max-width: 100%; max-width: 350px; height: 100%; position: relative; left: 50%; transform: translate(-50%, 0); ">
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="ТЕРТЫЧНЫЙ Сергей Николаевич">
                      <b-card-text>
                        В 2002 окончил Российский государственный университет нефти и газа имени И.М. Губкина<br>
                        В 2009 году освоил программу МВА: Менеджмент и международный бизнес <br>
                        С 2001 по 2008 годы занимал руководящие посты в коммерческих компаниях <br>
                        С 2008 по 2015 годы занимал должность первого заместителя генерального директора по производственной и коммерческой деятельности ООО «УК «НефтеТрансСервис» <br>
                        C 2015 года - Генеральный директор ООО «Транспортные Технологии» <br>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
          </div>
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="dark" class="description">Заместитель Генерального директора по безопасности</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 80%; position: relative; left: 50%; transform: translate(-50%, 0);">
                <b-row no-gutters>
                  <b-col md="6" >
                    <img src="../assets/Smirnov.jpg"  class="rounded-0"  style="max-width: 100%; max-width: 350px; height: 100%; height: 100%; position: relative; left: 50%; transform: translate(-50%, 0);">
                  </b-col>
                  <b-col md="6">
                    <b-card-body title="СМИРНОВ Андрей Евлампиевич">
                      <b-card-text>
                        В 1989 году окончил МГУ им Н.П. Огарева, присвоена квалификация инженера электронной техники. <br>
                        В 2001 году окончил Академию управления МВД России по специальности Государственное и муниципальное управление, присвоена квалификация менеджер-специалист в сфере управления. <br>
                        С 1992 по 2018 год – Служба в органах внутренних дел (МВД России) <br>
                      С 11.12.2018 года – Назначен на должность Заместителя Генерального директора по безопасности ООО «Транспортные Технологии» 
                     
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
          </div>
      </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="dark" class="description">Главный бухгалтер
</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 80%; position: relative; left: 50%; transform: translate(-50%, 0);">
              <b-row no-gutters>
                <b-col md="6" style="display: block">
                  <img src="../assets/Titova.jpg"  class="rounded-0"  style="max-width: 100%; width: 350px; height: 100%; height: 100%; object-fit: cover; position: relative; left: 50%; transform: translate(-50%, 0);">
                </b-col>
                <b-col md="6">
                  <b-card-body title="ТИТОВА Елена Евгеньевна">
                    <b-card-text>
                      1982 году окончила Московский институт инженеров железнодорожного транспорта по специальности «экономика строительства» <br>

                    2005-2014г. Главный бухгалтер в организациях холдинга «Металлоинвест» <br>
                    2014-2020г. Главный бухгалтер ООО «Восток1520»  <br>
                    С апреля 2020г. Главный бухгалтер ООО «Транспортные Технологии»
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
        </div>
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="dark" class="description">Заместитель генерального директора по техническому развитию</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 80%; position: relative; left: 50%; transform: translate(-50%, 0);">
              <b-row no-gutters>
                <b-col md="6"  style="display: block">
                  <img src="../assets/Sakeev.jpg"  class="rounded-0"  style="max-width: 100%; width: 350px; height: 100%; height: 100%; object-fit: cover; position: relative; left: 50%; transform: translate(-50%, 0);">
                </b-col>
                <b-col md="6">
                  <b-card-body title="САКЕЕВ Алексей Иванович">
                    <b-card-text>
                 
В 1995 году окончил Самарский институт инженеров железнодорожного транспорта <br>
В 2012 году окончил Российскую академию народного хозяйства и государственной службы при Президенте Российской Федерации по специальности «Мастер делового администрирования» <br>
<br>

С 2000 года по 2014 занимал руководящие должности в ОАО «Российские железные дороги» <br>
С 2014 года по 2016 год начальник Управления вагонного хозяйства Центральной дирекции инфраструктуры ОАО «Российские железные дороги» <br>
С 2016 года по 2019 год заместитель генерального директора ООО УК «РейлТрансХолдинг» <br>
В 2019 году занимал должность начальника Департамента технического развития ООО «Восток 1520» <br>
С января 2020 года заместитель генерального директора по техническому развитию ООО «Транспортные Технологии»
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="dark" class="description">Коммерческий директор по работе с полувагонами</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 80%; position: relative; left: 50%; transform: translate(-50%, 0);">
              <b-row no-gutters>
                <b-col md="6" style="display: block;">
                  <img src="../assets/Voluisiy.jpg"  class="rounded-0"  style="max-width: 100%; width: 370px; height: 100%; object-fit: cover; position: relative; left: 50%; transform: translate(-50%, 0);">
                </b-col>
                <b-col md="6">
                  <b-card-body title="Волуйский Дмитрий Юрьевич">
                    <b-card-text>
В 1994 году окончил Новороссийскую государственную морскую академию по специальности: «Эксплуатация судовых энергетических установок» <br>
В 2003 году окончил Международный институт экономики и права по специальности: «Юриспруденция» <br>
<br>
С 2004 - 2006 начальник отдела логистики управления транспорта и логистики ЗАО «МХК «ЕвроХим»<br>
С 2007 - 2009 год Генеральный директор ЗАО «Мультимодальный контейнерный Сервис»<br>
С 2009 - 2013 год Заместитель начальника управления перевозок минеральных и химических удобрений- начальник отдела продаж ОАО «ПГК» <br>
С 2013 - 2018 год Заместитель управляющего директора по производству и коммерции ООО «Восток 1520» <br>
С сентября 2019 года принят на должность Советника генерального директора по коммерческим вопросам, с ноября 2020 года- переведен на должность Коммерческого директора по работе с полувагонами ООО «Транспортные Технологии» <br>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-6 variant="dark" class="description">Директор департамента организации перевозок</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 80%; position: relative; left: 50%; transform: translate(-50%, 0);">
                  <b-row no-gutters>
                    <b-col md="6">
                      <img src="../assets/Sharonov.jpg" class="rounded-0"  style="max-width: 100%; width: 350px; height: 100%; position: relative; left: 50%; transform: translate(-50%, 0);">
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="ШАРОНОВ Сергей Викторович">
                        <b-card-text>
                          В 2000 году окончил МИИТ по специальности "Организация перевозок и управление на железнодорожном транспорте". <br>
В 2003 году РУТ МИИТ "Преподаватель высшей школы". <br>
В 2014 году МФЮА  "Финансы и кредит". <br>
<br>
С 2000 года  руководящие должности в ОАО "Российские железные дороги". <br>
С 2011 по 2015 гг - Руководитель проекта Управления перевозок нефтеналивных грузов Департамента перевозок ЗАО "НефтеТрансСервис" <br>
С 14.05.2015 года  Директор департамента организации перевозок ООО "Транспортные Технологии"
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-7 variant="dark" class="description">Директор департамента логистики</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 80%; position: relative; left: 50%; transform: translate(-50%, 0);">
                  <b-row no-gutters>
                    <b-col md="6">
                      <img src="../assets/Klushov.jpg" class="rounded-0"  style="max-width: 100%; max-width: 350px; height: 50%; position: relative; left: 50%; transform: translate(-50%, 0);">
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="КЛЮШОВ Денис Сергеевич">
                        <b-card-text>
                          В 2009 году  РУТ МИИТ  специальность Подъемно-транспортные, строительные, дорожные машины и оборудование<br>
В 2011 году присуждена степень Магистра экономики по направлению «Экономика» <br>
В 2011 годукраткосрочное обучение (повышение квалификации)  ФГБ ОУ ВПО МИИТ «Актуальные вопросы финансово-экономической работы» <br>
В 2012 году повышение квалификации в РУТ МИИТ "Организационная структура, типы, виды и принципы построения эффективной модели организационной структуры" <br>

18.02.19 переведен на должность Директора департамента логистики ООО «Транспортные Технологии» <br>
С 23.10.2017 года – главный экономист департамента логистики ООО «Транспортные Технологии» <br>
С 2014 по 2017гг.- главный экономист ООО «СТС-Групп». <br>
С 2013-2014гг- ведущий специалист Финансово-экономического отдела ЗАО «Спецэнерготранс» <br>
С 2012-2013гг- начальник отдела экономики ОАО «Федеральная пассажирская компания» <br>
С 2011-2012гг-ведущий экономист ОАО «РЖД» 
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

<br><br><br><br><br>

  </div>
<Footer style="margin-top: 20% !important"></Footer>
</div>

</div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Footer from '@/components/Footer.vue';
import Footer from '@/components/Footer.vue';
export default {
    data() {
        return {
            gendir: "Генеральный директор"
        };
    },
    components: { Footer, Footer, Footer }
}  
</script>

<style>
.card-text p {
  padding-top: 2%;
}

.team {
  margin-top: 3%;
  min-height: 100vh !important;

}
.accordion h4 {
  color: #EB272B;
}
.accordeon-block{
  margin-bottom: 50%  !important; 
  padding-bottom: 50% !important;
  width: 50%;
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
  border-radius: 50px;
  background: #fbfbfb;
  box-shadow:  20px 20px 60px #f8f8f8,
              -20px -20px 60px #ffffff;
}  
.accordion {
  padding-top: 5%;
  padding-bottom: 5%;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
}
.description {
  text-align: left !important;
}
.accordeon-block h2{
  text-align: center;
  padding-top: 2%;
}
@media screen and (max-width: 500px) {
  .team {
  margin-top: 15%;
}
.accordeon-block{
  width: 100%;
 }
 .accordeon-block{
  width: 100%;

}

}
</style>


<script>
import Footer from '../components/Footer.vue'
export default{
  components:{Footer}
}
</script>

