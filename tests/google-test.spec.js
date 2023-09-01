// @ts-check
import { test, expect } from '@playwright/test';
import {AmazonPage} from './baseObjects/AmazonPage'
import {GooglePage} from './baseObjects/GooglePage'

test('check input',async({page})=>{
    let newPage = new GooglePage(page)
    await newPage.goToGoogle()
    let btn = await newPage.getSearchBtn()
    let input = await newPage.getSearchInput()

    await expect(input).toBeVisible() 
    await input.type('toys')
    await expect(btn).toBeVisible() 
    await btn.click();
})

// test('check lcp', async ({page}) => {

//   await page.goto('https://www.google.com.ua/');

//   const LCP = await page.evaluate(()=>{
//     return new Promise((resolve)=>{
//       new PerformanceObserver((list)=>{
//         const entries = list.getEntries()
//         const LCP = entries.at(-1)
//         resolve(LCP.startTime)
//       }).observe({
//         type:'largest-contentful-paint',
//         buffered:true
//       })
//     })
//   })
//   let lcp = parseInt(LCP,10)

//   await expect(lcp).toBeLessThanOrEqual(2500)
//   // Expect a title "to be visible".
//   //await expect(page.locator(`xpath=//textarea[@id='APjFqb']`)).toBeVisible();
// });

// test('has button', async ({ page }) => {
//   await page.goto('https://www.google.com.ua/');

//   // Expect a deliver "to be visible".
//   await expect(page.locator(`xpath=//div[@class='FPdoLc lJ9FBc']//input[@class='gNO89b']`)).toBeVisible();
// });

// test('is button working and redirecting', async ({ page }) => {
//   await page.goto('https://www.google.com.ua/');
//   // Expect a deliver "to be visible".
//   let btn = page.locator(`xpath=//div[@class='FPdoLc lJ9FBc']//input[@class='RNmpXc']`)
//   await btn.click();
//   await expect(page.locator(`xpath=//a[@href='/doodles']`)).toBeVisible();
// });

// test('has search input', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   // Expect a title "to be visible".
//   await expect(page.locator("xpath=//input[@id='twotabsearchtextbox']")).toBeVisible();
// });

// test('has search button', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   // Expect a title "to be visible".
//   await expect(page.locator("xpath=//input[@id='nav-search-submit-button']")).toBeVisible();
// });

// test('has language select', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   // Expect a title "to be visible".
//   await expect(page.locator("xpath=//a[@id='icp-nav-flyout']")).toBeVisible();
// });

// test('has login field', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   // Expect a title "to be visible".
//   await expect(page.locator("xpath=//a[@id='nav-link-accountList']")).toBeVisible();
// });

// test('has navigate orders', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   // Expect a title "to be visible".
//   await expect(page.locator("xpath=//a[@id='nav-orders']")).toBeVisible();
// });

// test('has shopping cart', async ({ page }) => {
//   await page.goto('https://www.amazon.com/');

//   // Expect a title "to be visible".
//   await expect(page.locator("xpath=//a[@id='nav-cart']")).toBeVisible();
// });