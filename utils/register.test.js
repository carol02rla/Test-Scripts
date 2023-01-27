var expect = require('chai').expect;
var faker = require('faker-br');

const registerUserDep = async () => {

 await $("~button-register").click();
 await $("//android.widget.LinearLayout[1]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("//android.widget.LinearLayout[1]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("~days-pause").setValue("5");
 await $("~next-question").click();

 await $("~sad").click();
 await $("~next-question").click();

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 await $("~btnLogin").waitForDisplayed(60000);
 var isExisting = await $('~btnLogin').isExisting();
 await expect(isExisting).equal(true)
}

const registerUserExDep = async () => {

 await $("~button-register").click();
 await $("//android.widget.LinearLayout[3]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("~days-pause").setValue("5");
 await $("~next-question").click();

 await $("~sad").click();
 await $("~next-question").click();

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 await $("~btnLogin").waitForDisplayed(60000);
 var isExisting = await $('~btnLogin').isExisting();
 await expect(isExisting).equal(true)
}

const registerUserCodep = async () => {

 await $("~button-register").click();
 await $("//android.widget.LinearLayout[2]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("//android.widget.LinearLayout[1]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("~days-pause").setValue("5");
 await $("~next-question").click();

 await $("~sad").click();
 await $("~next-question").click();

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 await $("~btnLogin").waitForDisplayed(60000);
 var isExisting = await $('~btnLogin').isExisting();
 await expect(isExisting).equal(true)
}

const registerUserAnswerLater = async () => {

 await $("~button-register").click();
 await $("//android.widget.LinearLayout[1]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("~answer-later").click();
 await $("~answer-later").click();
 await $("~answer-later").click();

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 await $("~btnLogin").waitForDisplayed(60000);
 var isExisting = await $('~btnLogin').isExisting();
 await expect(isExisting).equal(true)
}

const registerUserDataIncomplete = async () => {

 await $("~button-register").click();
 await $("//android.widget.LinearLayout[1]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("//android.widget.LinearLayout[1]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("~days-pause").setValue("5");
 await $("~next-question").click();

 await $("~answer-later").click();

 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('Preencha todos os campos!');
}

const registerUserInvalidCep = async () => {

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(11111111);
 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('Endereço inválido');
}

const registerUserInvalidCpf = async () => {

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(11111111111);
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('CPF inválido');
}

const registerUserInvalidEmail = async () => {

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue("teste");
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('Texto não é um Email válido');
}

const registerUserDistinctPassword = async () => {

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("12345688");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('Senhas não conferem !');
}

const registerUserInvalidPassword = async () => {

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123");
 await $("~input-password2").setValue("123");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('Senha não pode ser menor que 6 digitos');
}

const registerUserExistingCpf = async () => {

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(70821574442);
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('CPF já cadastrado');
}

const registerUserExistingEmail = async () => {

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue("teste@hotmail.com");
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(70821574442);
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 const status = await $("/hierarchy/android.widget.Toast").getText();
 await expect(status).to.equal('Email já cadastrado');
}

const registerUserSpeci = async () => {

 await $("~button-register").click();
 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[4]").click();
 await $("~next-question").click();

 await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]").click();
 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button").click();

 await $("~select-type-specialist").click();
 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[2]").click();

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
 await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v4.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.ImageView").click();

 await $("~insert-description").waitForDisplayed(60000);
 const descriptionField = await $("~insert-description");
 await $("~insert-description").setValue("DESCRIÇÂO QUALQUER DE TESTE");

 await $("~btn-next").click();

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 await $("~btnLogin").waitForDisplayed(60000);
 var isExisting = await $('~btnLogin').isExisting();
 await expect(isExisting).equal(true)
}

const registerUserComuni = async () => {

 await $("~button-register").click();

 await browser.pause(1000);
 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[4]/android.widget.LinearLayout").click();
 await $("~next-question").click();

 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button").click();

 await $("~select-identidade").click();
 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button").click();
 await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[2]").click();
 await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v4.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.ImageView").click();

 await $("~insert-description").setValue("DESCRIÇÂO QUALQUER DE TESTE");

 await $("~btn-next").click();

 await $("~input-name").setValue(faker.name.firstName());
 await $("~input-lastname").setValue(faker.name.lastName());
 await $("~input-email").setValue(faker.internet.email());
 await $("~input-password").setValue("123456");
 await $("~input-password2").setValue("123456");
 await $("~input-age").setValue(faker.random.number());
 await $("~input-cpf").setValue(faker.br.cpf());
 await $("~input-cep").setValue(faker.address.zipCodeValid());
 await $("~end-register").click();

 await $("~btnLogin").waitForDisplayed(60000);
 var isExisting = await $('~btnLogin').isExisting();
 await expect(isExisting).equal(true)
}
module.exports = {
 registerUserDep,
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
 registerUserComuni
};