var expect = require('chai').expect;

const loginContaRecusada = async () => {
  await $('~email').setValue('psicologo2.teste@gmail.com');
  await $('~password').setValue('123456');

  const myButton = await $('~btnLogin');
  await myButton.click();

  await $('~app-header').waitForDisplayed(110000);
  const status = await $('~welcome').getText();

  await expect(status).to.equal('Olá, Psicologo2');
  await browser.pause(1000);
}

const verificarStatusRejeitado = async () => {
  await $("~btn-profile").click();
  await browser.pause(1000);
  const status = await $("//android.view.ViewGroup[@content-desc='profile']/android.view.ViewGroup[3]/android.widget.TextView[2]").getText();
  await expect(status).to.equal("Rejeitado");
  await $("~btn-profile-back").click();
}

const reenviarFormulario = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]").click();
  await $("~select-type-specialist").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[3]").click();

  await $("~select-identidade").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[1]").click();
  await $("//android.widget.ImageView[@content-desc='Shutter']").waitForDisplayed(110000);
  await $("//android.widget.ImageView[@content-desc='Shutter']").click();
  await $("//android.widget.ImageButton[@content-desc='Done']").waitForDisplayed(60000);
  await $("//android.widget.ImageButton[@content-desc='Done']").click();

  await $("~select-certificado").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[2]").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v4.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.ImageView").waitForDisplayed(60000);
  await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v4.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.ImageView").click();

  await $("~insert-description").waitForDisplayed(60000);
  await $("~insert-description").setValue("TESTE CONTA RECUSADA");
  await $("~btn-next").click();

  const status = await $("/hierarchy/android.widget.Toast").getText();
  await expect(status).to.equal('Solicitação enviada');
  await browser.pause(1000);
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button").click();
}

const verificarStatusPendente = async () => {
  await $("~btn-profile").click();
  await browser.pause(1000);
  const status = await $("//android.view.ViewGroup[@content-desc='profile']/android.view.ViewGroup[3]/android.widget.TextView[2]").getText();
  await expect(status).to.equal("Pendente");
}

module.exports={
  loginContaRecusada,
  verificarStatusRejeitado,
  reenviarFormulario,
  verificarStatusPendente
};