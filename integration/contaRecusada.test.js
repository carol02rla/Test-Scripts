var expect = require('chai').expect;

const {
  loginContaRecusada,
  verificarStatusRejeitado,
  reenviarFormulario,
  verificarStatusPendente
} = require('../utils/contaRecusada.test.js');

describe ('Login conta recusada', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Authentication', async () => {
    await loginContaRecusada();
  });
});

describe ('Acessar formulario', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Verificar status Rejeitado', async () => {
    await verificarStatusRejeitado();
  });

  it('Exibir mensagem de conta recusada', async () => {
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[2]").click();
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[1]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[1]").click();
  });
});

describe ('Reenviar formulario', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Preencher formulario', async () => {
    await reenviarFormulario();
  });

});

describe ('Verificar status e desconectar', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Verificar status pendente', async () => {
    await verificarStatusPendente();
    await $("~btn-logout").click();
  });
});