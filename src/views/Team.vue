<template>
  <div>
    <div class="team">
      <div class="accordion" role="tablist">
        <h4>О компании</h4>
        <h2>Руководство компании</h2>
        <!-- Генеральный -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="dark" class="description"
              style="width: 100% !important">Генеральный директор</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">

                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/boss.jpg" class="rounded-0" width="350" height="500" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ТЕРТЫЧНЫЙ Сергей Николаевич">
                          <b-card-text>
                            В 2002 окончил Российский государственный
                            университет нефти и газа имени И.М. Губкина<br />
                            В 2009 году освоил программу МВА: Менеджмент и
                            международный бизнес <br /> <br />
                            С 2001 по 2008 годы занимал руководящие посты в
                            коммерческих компаниях <br />
                            С 2008 по 2015 годы занимал должность первого
                            заместителя генерального директора по
                            производственной и коммерческой деятельности ООО «УК
                            «НефтеТрансСервис» <br />
                            C 2015 года - Генеральный директор ООО «Транспортные
                            Технологии» <br />
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
        <!-- 1-ый зам -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1123 variant="dark" class="description"
              style="width: 100% !important">Первый заместитель генерального директора</b-button>
          </b-card-header>
          <b-collapse id="accordion-1123" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">

                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/kuzmichev.jpg" class="rounded-0" width="350" height="500" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="КУЗЬМИЧЕВ Алексей Сергеевич">
                          <b-card-text>
                            Обладает 20-ти летним опытом работы в нефтегазовой отрасли и на железнодорожном транспорте. <br>
                            Занимал руководящие должности в компаниях СИБУР-Транс, СибурТюменьГаз, РН-Транс.<br>
                            До прихода в ООО «Транспортные Технологии» на протяжении трёх лет являлся генеральным<br>
                            директором ООО «Роснефть – Смазочные материалы».<br>
                            Имеет два высших образования (юридическое и экономическое) и степень МВА.
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
        <!-- Бухгалтер -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="dark" class="description"
              style="width: 100% !important">Главный бухгалтер
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Titova.jpg" class="rounded-0" width="350" height="400" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ТИТОВА Елена Евгеньевна">
                          <b-card-text>
                            1982 году окончила Московский институт инженеров
                            железнодорожного транспорта по специальности
                            «экономика строительства» <br /> <br />

                            2005-2014г. Главный бухгалтер в организациях
                            холдинга «Металлоинвест» <br />
                            2014-2020г. Главный бухгалтер ООО «Восток1520»
                            <br />
                            С апреля 2020г. Главный бухгалтер ООО «Транспортные
                            Технологии»
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
        <!-- Безопасность -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="dark" class="description"
              style="width: 100% !important">Заместитель Генерального директора по безопасности</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Smirnov.jpg" class="rounded-0" width="350" height="400" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="СМИРНОВ Андрей Евлампиевич">
                          <b-card-text>
                            В 1989 году окончил МГУ им Н.П. Огарева, присвоена
                            квалификация инженера электронной техники. <br />
                            В 2001 году окончил Академию управления МВД России
                            по специальности Государственное и муниципальное
                            управление, присвоена квалификация
                            менеджер-специалист в сфере управления. <br /> <br />
                            С 1992 по 2018 год – Служба в органах внутренних дел
                            (МВД России) <br />
                            С 11.12.2018 года – Назначен на должность
                            Заместителя Генерального директора по безопасности
                            ООО «Транспортные Технологии»
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
        <!-- Техническое развитие -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-4 variant="dark" class="description"
              style="width: 100% !important">Заместитель генерального директора по техническому
              развитию</b-button>
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Sakeev.jpg" class="rounded-0" width="350" height="500" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="САКЕЕВ Алексей Иванович">
                          <b-card-text>
                            В 1995 году окончил Самарский институт инженеров
                            железнодорожного транспорта <br />
                            С 2000 года по 2014 занимал руководящие должности в
                            ОАО «Российские железные дороги» <br />
                            В 2012 году окончил Российскую академию народного
                            хозяйства и государственной службы при Президенте
                            Российской Федерации по специальности «Мастер
                            делового администрирования» <br />


                            <br />


                            С 2014 года по 2016 год начальник Управления
                            вагонного хозяйства Центральной дирекции
                            инфраструктуры ОАО «Российские железные дороги»
                            <br />
                            С 2016 года по 2019 год заместитель генерального
                            директора ООО УК «РейлТрансХолдинг» <br />
                            В 2019 году занимал должность начальника
                            Департамента технического развития ООО «Восток 1520»
                            <br />
                            С января 2020 года заместитель генерального
                            директора по техническому развитию ООО «Транспортные
                            Технологии»
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
        <!-- Организация перевозок -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-6 variant="dark" class="description"
              style="width: 100% !important">Директор департамента организации перевозок</b-button>
          </b-card-header>
          <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Sharonov.jpg" class="rounded-0" width="350" height="500" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ШАРОНОВ Сергей Викторович">
                          <b-card-text>
                            В 2000 году окончил МИИТ по специальности "Организация перевозок и управление на
                            железнодорожном транспорте". <br>
                            В 2003 году РУТ МИИТ "Преподаватель высшей школы". <br>
                            В 2022 году повышение квалификации на тему: «Методики постановки целей и инструменты их
                            достижения». <br>
                            <br>
                            С 2000 года руководящие должности в ОАО "Российские железные дороги". <br>
                            В 2014 году МФЮА "Финансы и кредит". <br>
                            С 2011 по 2015 гг - Руководитель проекта Управления перевозок нефтеналивных грузов
                            Департамента перевозок ЗАО "НефтеТрансСервис" <br>
                            С 14.05.2015 года Директор департамента организации перевозок ООО "Транспортные Технологии"
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
        <!-- Работа с полувагонами -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-5 variant="dark" class="description"
              style="width: 100% !important">Коммерческий директор по работе с полувагонами</b-button>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Voluiskiy.jpg" class="rounded-0" width="350" height="480" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ВОЛУЙСКИЙ Дмитрий Юрьевич">
                          <b-card-text>
                            В 1994 году окончил Новороссийскую государственную
                            морскую академию по специальности: «Эксплуатация
                            судовых энергетических установок» <br />
                            В 2003 году окончил Международный институт экономики
                            и права по специальности: «Юриспруденция» <br />
                            <br />
                            С 2004 - 2006 начальник отдела логистики управления
                            транспорта и логистики ЗАО «МХК «ЕвроХим»<br />
                            С 2007 - 2009 год Генеральный директор ЗАО
                            «Мультимодальный контейнерный Сервис»<br />
                            С 2009 - 2013 год Заместитель начальника управления
                            перевозок минеральных и химических удобрений-
                            начальник отдела продаж ОАО «ПГК» <br />
                            С 2013 - 2018 год Заместитель управляющего директора
                            по производству и коммерции ООО «Восток 1520» <br />
                            С сентября 2019 года принят на должность Советника
                            генерального директора по коммерческим вопросам, с
                            ноября 2020 года- переведен на должность
                            Коммерческого директора по работе с полувагонами ООО
                            «Транспортные Технологии» <br />
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
        <!-- Нефтеналив -->
        <!-- <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-7
              variant="dark"
              class="description"
              style="width: 100% !important"
              >Коммерческий директор по нефтеналиву</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    "
                  >
                    <b-row   no-gutters>
                      <b-col md="2">
                        </b-col>
                      <b-col md="4">
                        <img
                          src="../assets/Klushov.jpg"
                          class="rounded-0"
                          width="380" height="500"

                        />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="КЛЮШОВ Денис Сергеевич">
                          <b-card-text>
                            В 2009 году РУТ МИИТ специальность
                            Подъемно-транспортные, строительные, дорожные машины
                            и оборудование<br />
                            В 2011 году присуждена степень Магистра экономики по
                            направлению «Экономика» <br />
                            В 2011 годукраткосрочное обучение (повышение
                            квалификации) ФГБ ОУ ВПО МИИТ «Актуальные вопросы
                            финансово-экономической работы» <br />
                           
                            <br>

                            С 2011-2012гг-ведущий экономист ОАО «РЖД»<br />
                            В 2012 году повышение квалификации в РУТ МИИТ
                            "Организационная структура, типы, виды и принципы
                            построения эффективной модели организационной
                            структуры" <br />
                            С 2012-2013гг- начальник отдела экономики ОАО
                            «Федеральная пассажирская компания» <br />
                            С 2013-2014гг- ведущий специалист
                            Финансово-экономического отдела ЗАО
                            «Спецэнерготранс» <br />
                            С 2014 по 2017гг.- главный экономист ООО
                            «СТС-Групп». <br />
                            С 23.10.2017 года – главный экономист департамента
                            логистики ООО «Транспортные Технологии» <br />
                            18.02.2019 переведен на должность Директора
                            департамента логистики ООО «Транспортные Технологии» <br />
                            В 2023 году переведен на должность Коммерческого директора по нефтеналиву
  
                          </b-card-text>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card> -->
        <!-- Финансовая служба -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-9 variant="dark" class="description"
              style="width: 100% !important">Руководитель финансовой службы</b-button>
          </b-card-header>
          <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Orlov.jpg" class="rounded-0" width="350" height="500" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ОРЛОВ Виталий Викторович">
                          <b-card-text>
                            В 1998 году окончил Московский государственный социальный университет по специальности Финансы
                            и кредит, присвоена квалификация Экономист. <br>
                            В 1999 году окончил Московский государственный социальный университет по специальности
                            Юриспруденция, присвоена квалификация Юрист. <br>
                            В 2007 году повышение квалификации в НОУ «Институт профессиональных управляющих Аскери» по
                            программе курса АССА «Работа с финансовыми отчетами». <br>
                            В 2008 году повышение квалификации в НОУ «Институт профессиональных управляющих Аскери» по
                            программе курса АССА «Управленческий учет» <br>
                            <br>
                            С 2010-2012гг- заместитель начальника центра методологии и нормирования
                            финансово-экономической деятельности ОАО «Федеральная пассажирская компания» <br>
                            С 2012-2018гг- заместитель генерального директора по финансам и корпоративной отчетности ООО
                            «РЖД Тур» <br>
                            С 2020 года – начальник отдела по работе с банками Финансовой службы ООО «Транспортные
                            Технологии». <br>
                            С 2021 года переведен на должность Руководителя финансовой службы ООО «Транспортные
                            Технологии». <br>
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
        <!-- Кадры -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-10 variant="dark" class="description"
              style="width: 100% !important">Начальник отдела по работе с персоналом</b-button>
          </b-card-header>
          <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Gerasimova.jpg" class="rounded-0" width="350" height="500" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ГЕРАСИМОВА Наталья Васильевна">
                          <b-card-text>
                            В 2005 году РГПУ им. С.А. Есенина, специальность «Педагогика и методика начального
                            образования» <br>
                            В 2006 году МГОПУ им. М.А. Шолохова, специальность «Психологическое консультирование» <br>
                            2018 год- участие в IX Ежегодной практической конференции «Работа в кадрах-2019» <br>
                            В 2019 году повышение квалификации (профессиональная переподготовка) в АНОДПО «Международный
                            университет профессиональных инноваций» о предоставлении права на ведение профессиональной
                            деятельности в сфере: «Управление персоналом, операционное и тактическое управление» <br>
                            2019 год- участие в Х Юбилейной практической конференции «Работа в кадрах-2020: важные
                            изменения и новые решения» <br>
                            2020 год- участие в ХI Ежегодной практической конференции «Работа в кадрах-2021: важные
                            изменения и антикризисные решения» <br>
                            2021 год- участие в XII Ежегодной практической конференции «Важные изменения 2021года и
                            кадровая работа в 2022-м» <br>
                            2022 год- участие в XIII Ежегодной практической конференции «Важные изменения 2022 года и
                            кадровая работа в 2023-м» <br>
                            <br>
                            С 2006-2008гг.- инспектор отдела по подбору персонала Управления по работе с персоналом АКБ
                            «Лефко-БАНК» <br>
                            С 2008-2010гг.- специалист отдела кадрового администрирования Управления делами ЗАО «АМИ-Банк»
                            (ПАО «ОФК Банк») <br>
                            С 2010-2013гг.- старший специалист отдела по работе с персоналом Департамента организационного
                            управления ОАО «НОТА-Банк» <br>
                            С 2013-2014гг.- ведущий специалист отдела кадров Управления по работе с персоналом и
                            делопроизводству ОАО КБ «ЮНИСТРИМ» <br>
                            С 2014-2017гг.- главный специалист отдела по работе с персоналом ООО «Коммерческий банк
                            инвестиций и социального развития». <br>
                            С 2018 года – главный специалист отдела по работе с персоналом ООО «Транспортные Технологии»
                            <br>
                            01.08.2019 года переведена на должность Начальника отдела по работе с персоналом ООО
                            «Транспортные Технологии» <br>
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
        <!-- Внутренний контроль -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-8 variant="dark" class="description"
              style="width: 100% !important">Начальник отдела логистики и внутреннего контроля</b-button>
          </b-card-header>
          <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="
                      max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Vlasenkov.jpg" class="rounded-0" width="380" height="500" />
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ВЛАСЕНКОВ Владимир Владимирович">
                          <b-card-text>
                            В 2008 году окончил Московский государственный университет путей сообщения по специальности
                            Организация и безопасность движения (железнодорожный транспорт), присвоена квалификация
                            Инженер путей сообщения. <br>
                            В 2019 году прошел повышение квалификации по программам: «Правила технической эксплуатации
                            (ПТЭ) железных дорог Российской Федерации», «Перевозка грузов на железнодорожном транспорте»,
                            «Безопасность движения на железнодорожном транспорте для руководителей и специалистов».<br>
                            <br>
                            С 2007-2011гг– работал в ОАО «Российские железные дороги» на должностях, связанных с
                            организацией перевозочного процесса<br>
                            С 2011-2012гг– диспетчер отдела организации перевозок ООО «Транспортный актив»<br>
                            С 2012-2016гг– главный специалист отдела диспетчерского контроля ЗАО «Спецэнерготранс»<br>
                            С 2016-2021гг– начальник отдела организации перевозок ООО «Рэйл Про»<br>
                            С 2021 года – начальник отдела перевозок в универсальном подвижном составе Департамента
                            организации перевозок ООО «Транспортные Технологии»<br>
                            С 2023 года – переведен на должность Начальника отдела логистики и внутреннего контроля ООО
                            «Транспортные Технологии»<br>
                            <br>

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
        <!-- Взаиморасчеты -->
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-11 variant="dark" class="description"
              style="width: 100% !important">Начальник управления взаиморасчетов</b-button>
          </b-card-header>
          <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div>
                  <b-card no-body class="overflow-hidden" style="max-width: 80%;
                      position: relative;
                      left: 50%;
                      transform: translate(-50%, 0);
                      border: none !important;
                    ">
                    <b-row no-gutters>
                      <b-col md="2">
                      </b-col>
                      <b-col md="4">
                        <img src="../assets/Gorin.jpg" class="rounded-0" width="380" height="500" />

                      </b-col>
                      <b-col md="6">
                        <b-card-body title="ГОРИН Василий Александрович">
                          <b-card-text>
                            В 2000 году окончил Военный автомобильный университет по специальности Автомобили и
                            автомобильное хозяйство, присвоена квалификация Инженер. <br>
                            В 2019 году повышение квалификации (профессиональная переподготовка) в Университете
                            государственного и муниципального управления о предоставлении права на ведение
                            профессиональной деятельности в сфере организационного и документационного обеспечения
                            управления организацией
                            В 2021 году окончил Государственный университет управления. Присвоена степень Магистра по
                            направлению Транспорт и логистика.<br><br>
                            В 2022 году повышение квалификации (профессиональная переподготовка) в Российской открытой
                            академии транспорта о предоставлении права на ведение профессиональной деятельности в сфере
                            Эксплуатации железных дорог, организации и управления движением на железнодорожном транспорте.
                            <br><br>


                            С 2008-2010гг- заместитель начальника управления транспортно-экспедиторского обслуживания ЗАО
                            «НефтеТрансСервис» <br>
                            С 2010-2011гг- начальник отдела транспортно-экспедиторского обслуживания ООО «Альянс
                            Терминал». <br>
                            С 2011-2016гг- начальник отдела железнодорожных перевозок Департамента заготовки и реализации
                            металлолома ОАО «Торговый дом РЖД». <br>
                            С 2016-2017гг- начальник департамента транспортно-экспедиторского обслуживания ООО «ТрансЛом».
                            <br>
                            С 2018 по 2020гг.- заместитель генерального директора по железнодорожным перевозкам ООО
                            «Объединенная грузовая компания». <br>
                            С 21.12.2020 года – начальник отдела транспортно-экспедиционного обслуживания ООО
                            «Транспортные Технологии». <br>
                            01.11.2021 переведен на должность Начальника управления взаиморасчетов ООО «Транспортные
                            Технологии». <br>
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

      </div>
      <ContactForm style="margin-top: 5% !important" />
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
}

.card-text p {
  padding-top: 2%;
}

.team {
  margin-top: 3%;
  min-height: 100vh !important;
}

.accordion h4 {
  color: #eb272b;
}

.accordeon-block {
  margin-bottom: 50% !important;
  padding-bottom: 50% !important;
  width: 50%;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50px;
  background: #fbfbfb;
  box-shadow: 20px 20px 60px #f8f8f8, -20px -20px 60px #ffffff;
}

.accordion {
  padding-top: 5%;
  padding-bottom: 5%;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}

.description {
  text-align: left !important;
}

.accordeon-block h2 {
  text-align: center;
  padding-top: 2%;
}

@media screen and (max-width: 600px) {
  h4 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  .team {
    margin-top: 15%;
  }

  .accordeon-block {
    width: 100%;
  }

  .accordeon-block {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 400px) {
    .card-title {
      font-size: 14px;
    }

  }
}
</style>

<script>
import Footer from "../components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: { Footer, ContactForm },
  mounted() {
    window.scrollTo(0, 0);
    document.title = 'Руководство'

  }
};
</script>

