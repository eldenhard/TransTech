<template>
    <div class="whatus">
        <h2 class="text whatus__main-des">
            <span style="border-bottom: 3px solid #EB272B">Почему мы?</span>
        </h2>
        <div class="row mr-0 telephone">
            <div class="col-md-12 telephone ">
                <p class="text-min">
                    Транспортные Технологии предоставляют полный комплекс услуг по транспортировке широкой номенклатуры
                    грузов.
                    Качественную и эффективную работу компании обеспечивает штат профессионалов,
                    имеющих за своими плечами огромный опыт нахождения оптимальных и эффективных методов решения
                    транспортно-логистических задач в этом бизнесе.
                </p>
                <p class="text-min" style="padding-bottom: 10%;">    За короткий срок компания сформировала грузовую базу,
                    достигнув<span style="border-bottom: 2px solid #EB272B; font-weight: bold;"> среднемесячного объёма
                    перевозок более 400 тысяч тонн.</span>
                    В настоящее время компания продолжает увеличивать своё присутствие на транспортном рынке,
                    как в сегменте перевозок нефтеналивных, так и универсальных грузов.</p> <br>
            </div>


        </div>
    </div>
</template>


<style scoped>
.whatus {
    /* background: #1A1A1A; */
    background: url(../assets/LOFO.jpg);

    height: 100vh;
    /* margin-top: -4%; */
    display: table;
    width: 100%;
}

.telephone {
    padding-top: 1%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
}

.text {
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 42px;
    font-weight: 600;
    line-height: 52px;
    color: white;
    padding-top: 10%;
    padding-left: 10%;
}

.text-min {
    color: white;
    font-size: 25px;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 65%;
    text-align: justify;
    text-indent: 1.5em

}

@media screen and (max-width: 500px) {
    .telephone {
        width: 100% !important;
        margin: 0;
        padding: 0;

    }

    .text-min {
        font-size: 20px;
        padding-top: 2%;
        width: 90%;
        text-align: justify;
        line-height: 30px
    }

    .whatus {
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

    .whatus__pic img {
        height: 18%;
        margin-left: 2%;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        padding-top: 5%;
    }

}
</style>


