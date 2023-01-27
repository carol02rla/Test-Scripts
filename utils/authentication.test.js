var expect = require('chai').expect;

const authFail = async () => {
 await browser.pause(1000);
 
 await $('~email').setValue('teste');

 const myButton = await $('~btnLogin');
 await myButton.click();

 var status = await $('/hierarchy/android.widget.Toast').getText();
 await expect(status).to.equal('Texto não é um Email válido');

 await browser.pause(1000);

 await $('~email').setValue('teste@teste.com');
 await $('~password').setValue('senhaerrada');

 await myButton.click();

 status = await $('/hierarchy/android.widget.Toast').getText();
 await expect(status).to.equal('Usuário não encontrado');

 await browser.pause(3000);

 await $('~email').setValue('teste@hotmail.com');

 await myButton.click();

 status2 = await $('/hierarchy/android.widget.Toast').getText();
 await expect(status2).to.equal('Senha errada');

 await browser.pause(1000);
};

const authSuccessAdm = async () => {
 await $('~email').setValue('teste@hotmail.com');
 await $('~password').setValue('teste123');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, Maxime');

 await $('~btn-profile').click();
 await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]").click();
 await $('~profile').waitForDisplayed(11000);

 await $('~btn-logout').click();
 await browser.pause(1000);
};

const authSuccessDep = async () => {

 await $('~email').setValue('dependentehope@gmail.com');
 await $('~password').setValue('dependente_1');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, Dependente');

 await $('~btn-profile').click();

 await $('~profile').waitForDisplayed(11000);

 await $('~btn-logout').click();
 await browser.pause(1000);
};

const authSuccessCoDep = async () => {
 await $('~email').setValue('codependentehope@gmail.com');
 await $('~password').setValue('123456');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, José');

 await $('~btn-profile').click();

 await $('~profile').waitForDisplayed(11000);

 await $('~btn-logout').click();
 await browser.pause(1000);
};

const authSuccessExDep = async () => {
 await $('~email').setValue('exdependentehope@gmail.com');
 await $('~password').setValue('123456');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, Jonas');

 await $('~btn-profile').click();

 await $('~profile').waitForDisplayed(11000);

 await $('~btn-logout').click();
 await browser.pause(1000);
};

const authSuccessEspPend = async () => {
 await $('~email').setValue('especialistahope@gmail.com');
 await $('~password').setValue('123456');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, Eslováquia');

 await $('~btn-profile').click();

 await $('~profile').waitForDisplayed(11000);

 await $('~btn-logout').click();
 await browser.pause(1000);
};

const authSuccessEspLib = async () => {
 await $('~email').setValue('mohamed@teste.com');
 await $('~password').setValue('123456');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[2]").click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, Mohamed');

 await $('~btn-profile').click();

 await $('~profile').waitForDisplayed(11000);

 await $('~btn-logout').click();
 await browser.pause(1000);
};

const authSuccessComm = async () => {
 await $('~email').setValue('comunicadorhope@gmail.com');
 await $('~password').setValue('123456');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[2]").click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, Suécia');

 await $('~btn-profile').click();

 await $('~profile').waitForDisplayed(11000);

 await $('~btn-logout').click();
 await browser.pause(1000);
};

const authAnon = async () => {
 await $('~btn-login-anon').click();

 await $('~app-header').waitForDisplayed(60000);

 const status = await $('~welcome').getText();
 await expect(status).to.equal('Bem-vindo');

 await $('~btn-profile').click();

 await $('~app-permission').waitForDisplayed(11000);

 await $('~btn-login').click();
 await browser.pause(1000);
};

const forgotPassword = async () => {
 await $('~btn-forgot').click();
 await $('~forgot-screen').waitForExist(11000);
 await $('~email-forgot').setValue('teste@hotmail.com');
 await $('~submit-forgot').click();

 const status = await $('/hierarchy/android.widget.Toast').getText();
 await expect(status).to.equal('Email para recuperação de senha enviado');

 $('~back-change').click();
 browser.pause(1000);
 $('~forgot-screen').waitForExist(11000);
 $('~back-forgot').waitForExist(11000);
 $('~back-forgot').click();
 browser.pause(1000);

 $('~app-login').waitForExist(11000);
};

module.exports = {
 authFail,
 authSuccessAdm,
 authSuccessDep,
 authSuccessCoDep,
 authSuccessExDep,
 authSuccessEspPend,
 authSuccessEspLib,
 authSuccessComm,
 authAnon,
 forgotPassword,
};