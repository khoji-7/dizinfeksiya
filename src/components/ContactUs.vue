<script setup lang="ts">

</script>

<template>

    <div class="contactParent">
    <div class="container">
        <div class="contact">
            <p class="contactTitle">
                malumotingizni qoldiring
            </p>
            <input type="text" name="" id="" class="contactInput" placeholder="ismingiz">
            <input type="number" class="contactInput" placeholder="number">
            <button class="contactBtn">
            Yuborish
            </button>
        </div>
        <img src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png" alt="" class="contactImg">
    </div>
    </div>
        
    
</template>

<style>

.contactParent{
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    margin: auto;
}
.contactParent .container{
    max-width: 1440px;
    width: 100%;
    height: 550px;
    border-radius: 12px;
    background: radial-gradient(333.17% 80.94% at 51.32% 69.21%, #3DA0FC 0%, rgba(2, 227, 214, .2) 100%);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    padding: 0 24px;
}
.contact{
    max-width: 456px;
    min-height: 385px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.contactTitle{
    text-transform: capitalize;
    color: #242825;
    font-family: Unbounded;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
}
.contactInput{
    display: flex;
    align-items: center;
    outline: none;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: #F2F2F2;
    padding: 0 20px;
    color: gray;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-top: 30px;
    color: #242825;
}
.contactBtn{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 8px;
    background: #242825;
    color: #fff;
    font-family: Unbounded;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    margin-top: 50px;
}
.contactImg{
    width: 461px;
    height: 437px;
}


</style>