const { expect } = require('@playwright/test');
const {BasePage} = require('./BasePage')

exports.AmazonPage = class AmazonPage extends BasePage{
  constructor(page) {
    super(page)
    this.page = page;
  }

  async goToAmazon() {
    await this.goto('https://www.amazon.com/');
  }

  async getSearchInput() {
    return await this.getElementByXpath(`//input[@id='twotabsearchtextbox']`)
  }

   async getSearchBtn() {
    return await this.getElementByXpath(`//input[@id='nav-search-submit-button']`)
  }
};