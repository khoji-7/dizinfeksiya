<script setup lang="ts"></script>

<template>
    <div class="headerParent">
        <div class="container">
            <div class="navbar">
                <img
                    src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
                    alt=""
                    class="navbarLogo"
                />
                <ul>
                    <li>Asosiy</li>
                    <li>biz haqimizda</li>
                    <li>xizmatlar</li>
                    <li>faq</li>
                </ul>
                <div>
                    <select name="uz" id="">
                        <option value="uzbek">uzbek</option>
                        <option value="russia">russia</option>
                        <option value="english">english</option>
                    </select>
                    <button class="navbarBtn">boglanish</button>
                </div>
            </div>
            <div class="header">
                <div class="headerCaption">
                    <h1 class="headerCaptionTitle">Dizenfeksiya xizmati</h1>
                    <p class="headerCaptionText">
                        Biz Toshkentda 10 yildan beri professional dezinfeksiya ishlarini olib boramiz, shuning uchun
                        birinchi marta zararkunandalardan qanday qutulishni bilamiz.
                    </p>
                    <img src="../assets/headerLogo.svg" alt="" class="headerImgPos" />
                    <button class="navbarBtn">boglanish</button>
                </div>
                <img src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg" alt="" class="headerImg" />
            </div>
            <div class="aboutParent">
                <p class="aboutTitle">haqimizda</p>
                <div class="aboutCardParent">
                    <div class="aboutCard">
                        <img src="../assets/mask.svg" alt="" class="aboutCardImg" />
                        <p class="aboutCardTitle">tezda xizmat ko'rsatish</p>
                        <p class="aboutCardText">
                            АRIZАLАR KUNIGА 24 SOАT QАBUL QILINАDI. АGАR MUАMMO ShOShILINCh BOʼLSА, BIZ DАRHOL
                            KETIShIMIZ MUMKIN. ShU BILАN BIRGА, SIFАT MUKАMMАL BOʼLIB QOLАDI.
                        </p>
                    </div>
                    <div class="aboutCard">
                        <img src="../assets/about.svg" alt="" class="aboutCardImg" />
                        <p class="aboutCardTitle">Yetuk mutahasislaimiz</p>
                        <p class="aboutCardText">
                            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan
                            mamnun
                        </p>
                    </div>
                    <div class="aboutCard">
                        <img src="../assets/about1.svg" alt="" class="aboutCardImg" />
                        <p class="aboutCardTitle">Sizga maqul vaqtda</p>
                        <p class="aboutCardText">
                            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan
                            mamnun
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* font */
@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap");

@font-face {
    font-family: SF Pro Display;
    src: url(../assets/font/sf-pro-display/SFPRODISPLAYREGULAR.OTF);
}

/* header */
.contaiener {
    max-width: 1440px;
    width: 100%;
    margin: auto;
}
.navbar {
    display: flex;
    flex-direction: row;
    margin: auto;
    max-width: 1440px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}
.navbarLogo {
    width: 300px;
    height: 80px;
}
ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    text-transform: capitalize;
    gap: 24px;
    font: 20px sans-serif;
    font-weight: 500;
    margin-left: 25px;
    color: #00000098;
}
.navbarBtn {
    width: 200px;
    height: 60px;
    color: #fff;
    border-radius: 25px;
    padding: 10px 25px;
    font-weight: 500;
    font-size: 20px;
    background: rgb(33, 55, 251);
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: Unbounded;
    position: relative;
}
select {
    background: none;
    border: none;
    margin-right: 60px;
    outline: none;
    font-size: 20px;
    color: #000000a6;
    font-weight: 600;
    border: 2px solid #0000007a;
    padding: 5px 7px;
    border-radius: 10px;
    margin-left: 10px;
}

/* header */
.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1440px;
    gap: 30px;
    margin: auto;
    padding: 80px 0 0 0;
    position: relative;
}
.headerCaptionTitle {
    max-width: 650px;
    font-size: 70px;
    min-height: 0;
    color: #093fb3;
    font-family: Unbounded, sans-serif;
    font-weight: 500;
}
.headerCaptionText {
    max-width: 400px;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #272121;
    margin-top: 50px;
    margin-bottom: 150px;
}
.headerImg {
    max-width: 674px;
    height: 540px;
}
.headerImgPos {
    position: absolute;
    top: 182px;
    left: 367px;
    width: 308px;
    height: 240px;
}
/* about */
.aboutParent {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: auto;
    padding: 80px 0;
}
.aboutTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 32px;
    color: #020c31;
    font-family: Unbounded;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
}
.aboutCardParent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.aboutCardImg {
    width: 80px;
    height: 80px;
}
.aboutCardTitle {
    max-width: 360px;
    color: #020c31;
    font-family: Unbounded;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    text-transform: capitalize;
    margin-bottom: 20px;
}
.aboutCardText {
    width: 300px;
    color: #676d83;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
</style>
