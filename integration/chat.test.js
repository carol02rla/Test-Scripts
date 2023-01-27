var expect = require('chai').expect;

const { listCommunity } = require('../utils/community.test');
const {
  logar,
  conversarComEspPerguntas,
  enviarMensagemPerguntas,
  conversarComEspCard,
  enviarMensagemCard,
  enviarMensagemCommunity
} = require('../utils/chat.test.js');

describe ('Login conta dependente', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Authentication', async () => {
    await logar();
  });
});

describe ('Iniciar conversa atraves das perguntas', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Conversar atraves das perguntas', async () => {
    await conversarComEspPerguntas();
  });

  it('Enviar mensagem Perguntas', async () => {
    await enviarMensagemPerguntas();
  });
});

describe ('Iniciar conversa atraves dos cards', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Conversar com Esp atraves do card', async () => {
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[1]").click();
    await conversarComEspCard();
  });

  it('Enviar mensagem Card', async () => {
    await enviarMensagemCard();
  });
});

describe ('Iniciar conversa atraves da Community', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Listar Comunidade', async () => {
    await listCommunity();
  });

  it('Conversar com o especialista', async () => {
    await $("//androidx.recyclerview.widget.RecyclerView[@content-desc='community-user']/android.view.ViewGroup[1]").click();
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[1]").click();
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]").waitForDisplayed(11000);
  });

  it('Enviar mensagem Community', async () => {
    await enviarMensagemCommunity();
  });
});