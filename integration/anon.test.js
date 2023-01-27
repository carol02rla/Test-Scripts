var expect = require('chai').expect;

const { listCommunity } = require('../utils/community.test');
const {
  listSOS,
  relogar,
  conversarComEspCard
} = require('../utils/anon.test.js');

describe('Autenticar usuário anonimo', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Logar', async () => {
    await $('~btn-login-anon').click();

    await $('~app-header').waitForDisplayed(60000);

    const status = await $('~welcome').getText();
    expect(status).to.equal('Bem-vindo');
  });
});

describe('Aba SOS', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Listar SOS', async () => {
    await listSOS();
  });
});

describe('Aba Community', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Listar Comunidade', async () => {
    await listCommunity();
  });

  it('Conversar com o especialista', async () => {
    await $("//androidx.recyclerview.widget.RecyclerView[@content-desc='community-user']/android.view.ViewGroup[1]").click();
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[1]").click();
    await $('~app-permission').waitForDisplayed(11000);
  });
});

describe('Aba Mensagens', async () => {
  before(() => {
    browser.pause(1000);
  });

  it('Acessar tela de Mensagens', async () => {
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[2]").click();
    await $('~app-permission').waitForDisplayed(11000);
  });
});

describe('Home', async () => {
  before(() => {
    browser.pause(1000);
  });

  it('Verificar cards', async () => {
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[1]").click();
    await $("~cards-list").waitForExist(11000);
  });

  it('Conversar com Esp Card', async () => {
    await conversarComEspCard();
  });

  it('Relogar', async () => {
    await relogar();
  });

  it('Criar Conta', async () => {
    await $("~btn-profile").click();
    await $('~app-permission').waitForDisplayed(11000);
    await $("//android.view.ViewGroup[@content-desc='app-permission']/android.view.ViewGroup/android.widget.Button[2]").click();
    await browser.pause(3000);
  });
});