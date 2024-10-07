const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const TestarModeloPage = require('../pages/testarModeloPage');

Given('O usuário acessa a página de teste de modelo', async function () {
  const testarModeloPage = new TestarModeloPage(this.page);
  await testarModeloPage.goto();
});

Then('A página deve exibir {string}', async function (expectedText) {
  const testarModeloPage = new TestarModeloPage(this.page);
  const headingText = await testarModeloPage.getHeadingText();
  await expect(headingText).toBe(expectedText);
});

Then('O feed de vídeo deve estar visível', async function () {
  const testarModeloPage = new TestarModeloPage(this.page);
  const isVideoVisible = await testarModeloPage.isVideoVisible();
  await expect(isVideoVisible).toBe(true);
});
