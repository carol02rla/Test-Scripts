var expect = require('chai').expect;

const profileInit = async () => {
    //IR PARA A TELA DE PROFILE
    await $("~btn-profile").click();
   // await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]").click();
   // await $("~profile").waitForExist(11000);
}

const profilePhoto = async () => {
    //ALTERAR FOTO
    await $("//android.view.ViewGroup[@content-desc='profile']/android.view.ViewGroup[2]/android.widget.ImageView[1]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.ImageView").click();
    await browser.pause(1000);
    await $("~Shutter").waitForDisplayed(110000);
    await $("~Shutter").click();
    await browser.pause(1000);
    await $("//android.widget.ImageButton[@content-desc='Done']").waitForDisplayed(60000);
    await $("//android.widget.ImageButton[@content-desc='Done']").click();
    await browser.pause(2000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/androidx.appcompat.widget.LinearLayoutCompat/android.widget.TextView[3]").click();
    var status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Imagem foi atualizada com sucesso!');
    await browser.pause(3000);
}

const profileEmail = async () => {
    //EMAIL COM CREDENCIAIS VALIDAS E INVALIDAS
    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue('texto');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Texto não é um Email válido');
    await browser.pause(2000);

    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue('exdependentehope@gmail.com');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Email já cadastrado');
    await browser.pause(2000);

    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue('soudependentehope@gmail.com');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);

    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText').setValue('dependentehope@gmail.com');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);
}

const profileName = async () => {
    //ALTERAR NOME
    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText').setValue('Fulano');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);

    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText').setValue('Dependente');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);
}

const profileSurname = async () => {
    //ALTERAR SOBRENOME
    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[2]/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText').setValue('Silva');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);

    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[2]/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText').setValue('Quimico');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);
}

const profileCEP= async () => {
    //CEP COM CREDENCIAIS VALIDAS E INVALIDAS
    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[3]/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText').setValue('11111111');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Endereço inválido');
    await browser.pause(2000);

    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[3]/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText').setValue('04560010');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);

}

const profileAge = async () => {
    //ALTERAR IDADE
    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[3]/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText').setValue('0');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Idade não pode ser um campo negativo');
    await browser.pause(2000);

    await $('//android.view.ViewGroup[@content-desc="profile"]/android.widget.LinearLayout[3]/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText').setValue('22');
    await $("//android.view.ViewGroup[@content-desc='profile']/android.widget.Button").click();
    status = await $('/hierarchy/android.widget.Toast').getText();
    await expect(status).to.equal('Dados atualizados com sucesso');
    await browser.pause(2000);
}

const profileBack = async () => {
    //VOLTAR MENU INICIAL
    await $("~btn-profile-back").click();
    await browser.pause(1000);
}

module.exports={ profileInit,
    profilePhoto,
    profileEmail,
    profileName,
    profileSurname,
    profileCEP,
    profileAge,
    profileBack
};
