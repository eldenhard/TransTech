<template>
    <div class="whatus">
        <h2 class="text whatus__main-des">
            <span style="border-bottom: 3px solid #EB272B" >Почему мы?</span>
        </h2>
            <div class="row mr-0">
                <div class="col-md-12" style="padding-top:2%; width: 95% !important; position: relative; left: 50%; transform: translate(-50%,0);">
                    <p class="text-min"><span style="border-bottom: 3px solid #EB272B; color: white;">1. </span>
                        ТТ предоставляет полный комплекс услуг по транспортировке широкой номенклатуры грузов.
                        Качественную и эффективную работу компании обеспечивает штат высококвалифицированных работников,
                        имеющих за своими плечами огромный опыт нахождения оптимальных и эффективных методов решения транспортно-логистических задач в этом бизнесе.
                    </p>
                    <p class="text-min" style="padding-bottom: 10%;"><span style="border-bottom: 3px solid #EB272B; " >2. </span>За короткий срок компания сформировала грузовую базу, достигнув среднемесячного объёма перевозок более 400 тысяч тонн.
                         В настоящее время компания продолжает увеличивать своё присутствие на транспортном рынке,
                        как в сегменте перевозок нефтеналивных, так и универсальных грузов.</p> <br>
                </div>


        </div>
    </div>
</template>


<style>
.whatus {
    background: #1A1A1A;
}
.text{
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 42px;
    font-weight: 600;
    line-height: 52px;
    color: white;
    padding-top: 10%;
    padding-left: 10%;
} 
.text-min{
    color: white;
    font-size: 20px;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    width: 80%;
}
@media screen and (max-width: 500px) {
.whatus{
    height: 100%;
    display: block;
}
.whatus__main-des {
    text-align: center;
    padding: 0;
    margin: 0;
    padding-top: 7%;

}
.text {
    text-align: center;
}
.whatus__pic img{
    height: 18%;
    margin-left: 2%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    padding-top: 5%;
}
.text-min {
padding-left: 4%;
text-align: justify;
}
}
</style>


