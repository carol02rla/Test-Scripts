var expect = require('chai').expect;

const listCard = async () => {
    await $("~app-header").waitForExist(60000);
    await $("~cards-list").waitForExist(11000);
}

const likeFilterCard = async () => {
    await $("~btn-like").click();
    const cardTitle = await $("~item-card").getText();
    await $("~btn-filter").click();
    await $("~cards-filter").waitForExist(11000);
    await $("~type-card-item").waitForExist(60000);
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[2]/android.widget.LinearLayout/android.widget.Button").click();
    const cardTitle2 = await $("~item-card").getText();
}

const likeMeAjudou = async () => {
    await $("~btn-like").click();
    await browser.pause(5000);
    await expect(cardTitle2).to.equal(cardTitle);

    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[1]/android.widget.LinearLayout/android.widget.Button").click();
    await browser.pause(1000);
}

const likeDicas = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[3]/android.widget.LinearLayout/android.widget.Button").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
}

const likeFatos = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[4]/android.widget.LinearLayout/android.widget.Button").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
}

const likeMotivacional = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[5]/android.widget.LinearLayout/android.widget.Button").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();

}

const likeArtigos = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[6]/android.widget.LinearLayout/android.widget.Button").click();
    //await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();
    //await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();

}
const likeHistory = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[7]/android.widget.LinearLayout/android.widget.Button").click();
    //await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();
    //await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();
}

const likeVideos = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[8]/android.widget.LinearLayout/android.widget.Button").click();
    //await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();
    //await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();
}

const likeOpinion = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[9]/android.widget.LinearLayout/android.widget.Button").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
}

const likeDuvidasCom = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[10]/android.widget.LinearLayout/android.widget.Button").click();
    await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();
    await $("(//android.widget.ImageView[@content-desc='btn-like'])[2]").click();
    await $("(//android.widget.ImageView[@content-desc='btn-like'])[1]").click();
    await $("(//android.widget.ImageView[@content-desc='btn-like'])[2]").click();
}

const likeDuvidasPre = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[11]/android.widget.LinearLayout/android.widget.Button").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
    await $("//android.widget.ImageView[@content-desc='btn-like']").click();
}

const likeBack = async () => {
    await $("~btn-filter").click();
    await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[1]/android.widget.LinearLayout/android.widget.Button").click();
    await browser.pause(1000);
}

module.exports={
  listCard,
  likeFilterCard,
  likeMeAjudou,
  likeDicas,
  likeFatos,
  likeMotivacional,
  likeArtigos,
  likeHistory,
  likeVideos,
  likeOpinion,
  likeDuvidasCom,
  likeDuvidasPre,
  likeBack
};
