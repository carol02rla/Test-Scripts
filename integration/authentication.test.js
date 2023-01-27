const {
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
} = require('../utils/authentication.test.js');

describe('Testes de autenticação/registro', () => {
  before(() => {
    browser.pause(1000);
  });

  it('Esqueceu senha', async () => {
    await forgotPassword();
  });

  it('Autenticação inválida', async () => {
    await authFail();
  });

  it('Autenticação anônimo', async () => {
    await authAnon();
  });
/*
  it('Autenticação sucesso Admin', async () => {
    await authSuccessAdm();
  });
*/
  it('Autenticação sucesso Dependente', async () => {
    await authSuccessDep();
  });

  it('Autenticação sucesso Codependente', async () => {
    await authSuccessCoDep();
  });

  it('Autenticação sucesso Ex-dependente', async () => {
    await authSuccessExDep();
  });

  it('Autenticação sucesso Especialista pedente', async () => {
    await authSuccessEspPend();
  });

  it('Autenticação sucesso Especialista liberado', async () => {
    await authSuccessEspLib();
  });

  it('Autenticação sucesso Comunicador', async () => {
    await authSuccessComm();
  });
});
