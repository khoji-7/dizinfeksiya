<script setup lang="ts"></script>

<template>
    <div class="bannerParent">
        <div class="container">
            <div class="banner">
                <p class="bannerTitle">Klapa va zararli hashorot engdi yo'q deb hisoblang !!!</p>
                <p class="bannerText">
                    Bizning ko'p yillardan beri o'z faoliyatini olib borayotgan kompaniyamiz. Mijozlarimiz bizdan mamnun
                </p>
                <button class="navbarBtn">bog'lanish</button>
            </div>
        </div>
    </div>
</template>

<style>
.bannerParent {
    display: flex;
    flex-direction: row;
}
.bannerParent .container {
    max-width: 1440px;
    margin: auto;
    background-image: url(https://www.dezinfeksiyatashkent.uz/assets/hh-32dbdc9d.jpg);
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    padding: 30px 25px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 16px;
    position: relative;
}
.banner{
position: absolute;
left: 700px;
top: 200px;
}
.bannerTitle{
    max-width: 558px;
    color: #fafafa;
    font-family: Unbounded;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 20px;
}
.bannerText{
    max-width: 310px;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 60px;
}
</style>
