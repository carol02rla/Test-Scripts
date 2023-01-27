var expect = require('chai').expect;

const navigationBar = async () => {
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[2]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[3]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[4]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[5]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[6]").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[1]").click();
    await browser.pause(1000);
}

const addRecaidaHome = async () => {
    await $("//androidx.recyclerview.widget.RecyclerView[@content-desc='cards-list']/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.ImageButton").click();
    await browser.pause(1000);
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText").setValue('TESTE AUTOMATICO RECAIDA HOME');
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[1]").click();
    await browser.pause(1000);
    const contador = await $("//androidx.recyclerview.widget.RecyclerView[@content-desc='cards-list']/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]").getText();
    await expect(contador).to.equal("0 dia");
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[5]/android.widget.ImageView").click();
    await browser.pause(2000);
    const status = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[1]").getText();
    expect(status).to.equal('TESTE AUTOMATICO RECAIDA HOME');
    await browser.pause(1000);
}

const addRecaidaAba = async () => {
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.ImageButton").click();
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText").setValue('TESTE AUTOMATICO RECAIDA ABA');
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[1]").click();
    await browser.pause(1000);

    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[1]/android.widget.ImageView").click();
    await browser.pause(1000);
    const contador = await $("//androidx.recyclerview.widget.RecyclerView[@content-desc='cards-list']/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]").getText();
    await expect(contador).to.equal("0 dia");
    await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[5]/android.widget.ImageView").click();
    await browser.pause(2000);
    const status2 = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[1]").getText();
    expect(status2).to.equal('TESTE AUTOMATICO RECAIDA ABA');
}

module.exports={
  navigationBar,
  addRecaidaHome,
  addRecaidaAba
};
