var expect = require('chai').expect;

const listCommunity = async () => {
  await $("//androidx.appcompat.widget.LinearLayoutCompat/androidx.appcompat.widget.LinearLayoutCompat[3]")
  .click();
  
  await  $("~community-screen").waitForDisplayed(11000);
  await browser.pause(1000);
  const status = await $("~community-user").isExisting();
  expect(status).to.equal(true);
  await browser.pause(1000);
}

const filterCommunity = async () => {
  await $("~community-Todos").click();
  await browser.pause(1000);
  let status = await $("~community-user").isExisting()
  expect(status).to.equal(true);

  await $("~community-Psicólogos").click();
  await browser.pause(1000);
  status = await $("~community-user").isExisting()
  expect(status).to.equal(true);

  await $("~community-Psiquiatras").click();
  await browser.pause(1000);
  status = await $("~community-user").isExisting()
  expect(status).to.equal(true);
  
  await browser.pause(1000);
}

module.exports={ listCommunity, filterCommunity };