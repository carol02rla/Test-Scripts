var expect = require('chai').expect;

const { profileInit, profilePhoto, profileEmail, profileName, profileSurname, profileCEP, profileAge, profileBack } = require('../utils/profile.test');
const { filterCommunity, listCommunity } = require('../utils/community.test');
const {   listCard,
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
          likeBack } = require('../utils/likes.test.js');
const { navigationBar, addRecaidaHome, addRecaidaAba } = require('../utils/home.test.js');

describe('Autenticar usuário', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Informações válidas', async () => {
    await $('~email').setValue('dependentehope@gmail.com');
    await $('~password').setValue('dependente_1');

    await $('~btnLogin').click();

    await $('~app-header').waitForDisplayed(60000);

    const status = await $('~welcome').getText();
    expect(status).to.equal('Olá, Dependente');
  });
});

describe('Dados de perfil', () => {
    before(() => {
    browser.pause(1000);
    });

    it('Exibir informações do perfil', async () => {
    await profileInit();
    });

    it('Alterar foto de perfil', async () => {
      await profilePhoto();
    });

    it('Alterar email de perfil', async () => {
      await profileEmail();
    });

    it('Alterar nome de perfil', async () => {
      await profileName();
    });

     it('Alterar sobrenome de perfil', async () => {
       await profileSurname();
     });

    it('Alterar CEP de perfil', async () => {
      await profileCEP();
    });

    it('Alterar idade de perfil', async () => {
      await profileAge();
    });

    it('Voltar para a home', async () => {
      await profileBack();
    });

});

describe('Aba de comunidade', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Listar comunidade', async () => {
    await listCommunity();
  });

  it('Filtrar comunidade', async () => {
    await filterCommunity();
  });
});

describe('Tabbar', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Navegação na tabbar', async () => {
    await navigationBar();
  });
});

describe('Aba de cards', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Listar Cards', async () => {
    await listCard();
  });

  it('Like e filtro', async () => {
    await likeFilterCard();
  });

  it('Like filtro Me Ajudou', async () => {
    await likeMeAjudou();
  });

  it('Like filtro Dicas', async () => {
    await likeDicas();
  });

  it('Like filtro fatos', async () => {
    await likeFatos();
  });

  it('Like filtro Motivacional', async () => {
    await likeMotivacional();
  });

  it('Like filtro Artigos', async () => {
    await likeArtigos();
  });

  it('Like filtro Histórias de Sucessol', async () => {
    await likeHistory();
  });

  it('Like filtro Videos', async () => {
    await likeVideos();
  });

  it('Like filtro Opinião de Especialistas', async () => {
    await likeOpinion();
  });

  it('Like filtro Duvidas da Comunidade', async () => {
    await likeDuvidasCom();
  });

 it('Like filtro Duvidas Pre Cadastradas', async () => {
    await likeDuvidasPre();
  });

 it('Voltar para Home', async () => {
    await likeBack();
  });
});


describe('Recaidas', async () => {
  before(() => {
    browser.pause(1000);
  });

  it('Adicionar Recaida na Home', async () => {
      await addRecaidaHome();
  });

  it('Adicionar Recaida na Aba', async() => {
      await addRecaidaAba();
  });
});
