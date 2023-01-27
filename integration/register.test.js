const {registerUserDep,
        registerUserExDep,
        registerUserCodep,
        registerUserAnswerLater,
        registerUserDataIncomplete,
        registerUserInvalidCep,
        registerUserInvalidCpf,
        registerUserInvalidEmail,
        registerUserDistinctPassword,
        registerUserInvalidPassword,
        registerUserExistingCpf,
        registerUserExistingEmail,
        registerUserSpeci,
        registerUserComuni} = require('../utils/register.test.js');

describe('Testes de registro', () => {

  before(() => {
    browser.pause(1000);
  });

  it('Registro de usuario dependente', async() => {
    await registerUserDep();
  });

  it('Registro de usuario exdependente', async() => {
    await registerUserExDep();
  });

  it('Registro de usuario codependente', async() => {
    await registerUserCodep();
  });

  it('Registro de usuario especialista', async() => {
    await registerUserSpeci();
  });

  it('Registro de usuario comunicador', async() => {
    await registerUserComuni();
  });

  it('Registro de usuario sem responder formulario', async() => {
    await registerUserAnswerLater();
  });

  it('Registro de usuario com dados incompletos', async() => {
    await registerUserDataIncomplete();
  });

  it('Registro de usuario com CEP inválido', async() => {
    await registerUserInvalidCep();
  });

  it('Registro de usuario com CPF inválido', async() => {
    await registerUserInvalidCpf();
  });

  it('Registro de usuario com email inválido', async() => {
    await registerUserInvalidEmail();
  });

  it('Registro de usuario com senhas distintas', async() => {
    await registerUserDistinctPassword();
  });

  it('Registro de usuario com senha inválida', async() => {
    await registerUserInvalidPassword();
  });

  it('Registro de usuario com CPF já cadastrado', async() => {
    await registerUserExistingCpf();
  });

  it('Registro de usuario com Email já cadastrado', async() => {
    await registerUserExistingEmail();
  });
  
});