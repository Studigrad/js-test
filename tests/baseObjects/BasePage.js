const { expect } = require('@playwright/test');

exports.BasePage = class BasePage{
  constructor(page) {
    this.page = page;
  }

 async getElementByXpath(path){
    return this.page.locator(`xpath=${path}`)
 }

 async goto(path){
    return this.page.goto(path)
 }

};