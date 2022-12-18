import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('Popover', () => {
  let browser;
  let page;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 150,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('should show popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.btn');
    await button.click();
    await page.waitForSelector('.popover');
  });
});
