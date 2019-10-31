const puppeteer = require('puppeteer');

(async (): Promise<void> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://dolarhoje.com/');
  const dollar = await page.$eval('#nacional', (input) => input.value);

  console.log('dollar', dollar);

  await browser.close();
})();
