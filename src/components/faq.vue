<script setup lang="ts"></script>

<template>
    <div class="faqParent">
        <div class="container">
            <p class="faqTitle">Faq</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                        Zarar qiluvchilarni yo'q qilish qanday amalga o'chiriladi?
                                                </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            Maxsus devor-uskunalar yordamida insektitsidlar aerozolli tumanga aylantiradi va qo'g'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliklarga, ko'zga ko'rinmas hasharotlar uchun potentsial 'yashirish joylari' ga kiradi.
                             </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                        Siz foydalanilgan dorilar xavflilimi?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            Dorilar odamlar, uyvonlari va o'simliklar uchun xavfli emas. Ammo davolishdan keyingi xonani 40 daqiqada ventilyatsiya qilish kerak.
                            </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                        Menga uyimni davolishga tayyorlashning qandaydir usuli kerakmi?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            Asosan, idish-tovoq va shaxsiy gigiena vositalarini izolyatsion qilishingiz kerak. Davolash vaqtida uyvonlari ham izolyatsiya qilinishi kerak. Mebel yoki maishiy texnikani ko'rishga xojat yo'q.                              </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.faqParent {
    max-width: 1440px;
    margin: auto;
}
.faqParent .container {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.accordion{
    width: 1100px;
    overflow-y: hidden;
    transition: min-height .4s;
    margin-bottom: 40px;
    border-bottom: 1px solid #ccc;
    transition: all .6s;
}
.faqTitle{
    color: #020c31;
    font-family: Unbounded;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
}
.accordion-button{
    color: #676d83;
    font-family: Unbounded;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    
}

</style>
