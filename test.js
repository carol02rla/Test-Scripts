var expect = require('chai').expect;

describe('Testes de autenticação/registro', () => {

  before(() => {
    browser.pause(1000);
  });

  it('Autenticação sucesso', async() => {
    await authSuccess();
  });
});

const authSuccess =  async () => {
  await $("~email").setValue("teste@hotmail.com");
  await $("~password").setValue("teste123");

  const myButton = await $('~btnLogin');
  await myButton.click();

  await $("~app-header").waitForDisplayed(60000);

  const status = await $("~welcome").getText();

  await expect(status).to.equal('Olá, Maxime');

}


