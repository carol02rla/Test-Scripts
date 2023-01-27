var expect = require('chai').expect;

const logar = async () => {
 await $('~email').setValue('dependente5.teste@gmail.com');
 await $('~password').setValue('123456');

 const myButton = await $('~btnLogin');
 await myButton.click();

 await $('~app-header').waitForDisplayed(60000);
 const status = await $('~welcome').getText();

 await expect(status).to.equal('Olá, Dependente5');
 await browser.pause(1000);
}

const conversarComEspPerguntas = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[2]").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.ImageButton").click();
  await browser.pause(3000);

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]").waitForDisplayed(60000);
}

const enviarMensagemPerguntas = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText").setValue("TESTE PERGUNTAS");
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView").click();
  const message = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[10]/android.view.ViewGroup/android.widget.TextView[1]").getText();
  await expect(message).to.equal("TESTE PERGUNTAS");

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageButton").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);

  const message2 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]").getText();
  await expect(message2).to.equal("TESTE PERGUNTAS");
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]").click();
  const message3 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[10]/android.view.ViewGroup/android.widget.TextView[1]").getText();
  await expect(message3).to.equal("TESTE PERGUNTAS");

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageButton").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);
}

const conversarComEspCard = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/android.view.ViewGroup[2]").click();
  await $("(//android.view.ViewGroup[@content-desc='type-card-item'])[9]/android.widget.LinearLayout/android.widget.Button").click();
  await $("~cards-list").waitForDisplayed(60000);
  await $("//androidx.recyclerview.widget.RecyclerView[@content-desc='cards-list']/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.Button").click();
}

const enviarMensagemCard = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText").setValue("TESTE CARD");
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView").click();
  const message = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[10]/android.view.ViewGroup/android.widget.TextView[1]").getText();
  await expect(message).to.equal("TESTE CARD");

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageButton").click();
  await $('~cards-list').waitForDisplayed(11000);
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[2]").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);

  const message2 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]").getText();
  await expect(message2).to.equal("TESTE CARD");
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]").click();
  const message3 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[10]/android.view.ViewGroup/android.widget.TextView[1]").getText();
  await expect(message3).to.equal("TESTE CARD");

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageButton").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);
}

const enviarMensagemCommunity = async () => {
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText").setValue("TESTE COMMUNITY");
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView").click();
  const message = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[10]/android.view.ViewGroup/android.widget.TextView[1]").getText();
  await expect(message).to.equal("TESTE COMMUNITY");

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageButton").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[2]").click();
  await $('~community-screen').waitForDisplayed(11000);
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[2]").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);

  const message2 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]").getText();
  await expect(message2).to.equal("TESTE COMMUNITY");
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]").click();
  const message3 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[10]/android.view.ViewGroup/android.widget.TextView[1]").getText();
  await expect(message3).to.equal("TESTE COMMUNITY");

  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageButton").click();
  await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView").waitForDisplayed(11000);
}

module.exports={
  logar,
  conversarComEspPerguntas,
  enviarMensagemPerguntas,
  conversarComEspCard,
  enviarMensagemCard,
  enviarMensagemCommunity
};