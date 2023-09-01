const { expect } = require('@playwright/test');
const {BasePage} = require('./BasePage')

exports.GooglePage = class GooglePage extends BasePage{
  constructor(page) {
    super(page)
    this.page = page;
  }

  async goToGoogle() {
    await this.goto('https://www.google.com.ua/');
  }

  async getSearchInput() {
    return await this.getElementByXpath(`//textarea[@class='gLFyf']`)
  }

   async getSearchBtn() {
    return await this.getElementByXpath(`//div[@class='lJ9FBc']//input[@class='gNO89b']`)
  }
};