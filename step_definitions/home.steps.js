const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

Given('O usuário acessa a página inicial', async function () {
  const homePage = new HomePage(this.page);
  await homePage.goto();
});

Then('O título da página deve ser {string}', async function (title) {
  await expect(this.page).toHaveTitle(title);
});

Then('A página deve exibir {string}', async function (expectedText) {
  const homePage = new HomePage(this.page);
  const headingText = await homePage.getHeadingText();
  await expect(headingText).toBe(expectedText);
});
