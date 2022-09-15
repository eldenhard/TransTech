<template>
    <div class="whatus">
        <h2 class="text whatus__main-des">
            <span style="border-bottom: 3px solid #EB272B" >Почему мы?</span>
        </h2>
            <div class="row mr-0">
                <div class="col-md-6" style="padding-top:5%">
                    <p class="text-min"><span style="border-bottom: 3px solid #EB272B; color: white;">1.</span>Расскажите, в чем приеимущество или отличие ваших услуги от услуг в других компаниях.</p>
                    <p class="text-min"><span style="border-bottom: 3px solid #EB272B">2.</span> Расскажите, чему вы уделяете больше всего внимания. Например, индивидуальный подход к каждому клиенту — ваш козырь.</p> <br>
                    <p class="text-min"><span style="border-bottom: 3px solid #EB272B">3.</span> Расскажите, в чем преимущество работы именно с вашей командой</p>
                </div>
            <div class="col-md-6 whatus__pic" style="padding-top:2%">
                <img src="@/assets/wagon.png" alt="" height="30%">
            </div>
            

        </div>
    </div>
</template>


<script>
export default{
name: 'WhatUs'
}
</script>
<style>
.whatus {
    height: 100vh;
    background: #1A1A1A;
}
.text{
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 42px;
    font-weight: 600;
    line-height: 52px;
    color: white;
    padding-top: 12%;
    padding-left: 10%;
} 
.text-min{
    color: white;
    padding-left: 25%;
    font-size: 20px;
}
@media screen and (max-width: 500px) {
.whatus{
    height: 90vh;
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


