import { test, expect } from '@playwright/test';
import {TestInit} from './TestInit'
import {AmazonPage} from './baseObjects/AmazonPage'

exports.AmazonTest = class AmazonTest extends TestInit {
    constructor(page){
       this.page = page 
       super(page)
    }

    async checkForHeader(){
            let newPage = new AmazonPage(this.page)
            await newPage.goToAmazon()
            await expect(newPage.getSearchBtn()).toBeVisible();    
    }
}