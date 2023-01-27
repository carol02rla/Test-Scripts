var expect = require('chai').expect;

const listSOS = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[4]").click();

  await browser.pause(1000);
}

const relogar = async () => {
  await $('~app-permission').waitForDisplayed(11000);
  await $("~btn-login").click();

  await $("~btnLogin").waitForDisplayed(60000);
  var isExisting = await $('~btnLogin').isExisting();
  await expect(isExisting).equal(true);

  await browser.pause(6000);
  await $("~btn-login-anon").click();

  await $('~app-header').waitForDisplayed(60000);
}

const conversarComEspCard = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/android.view.ViewGroup[2]").click();
  await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[8]/android.widget.LinearLayout/android.widget.Button").click();
  await $("~cards-list").waitForDisplayed(60000);
  await $("//androidx.recyclerview.widget.RecyclerView[@content-desc='cards-list']/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.Button").click();
}

module.exports={
  listSOS,
  relogar,
  conversarComEspCard
};