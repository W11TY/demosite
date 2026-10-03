import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  
  try {
    await page.goto('http://localhost:5173/company/culture', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch(e) {
    console.log('Timeout or error:', e);
  }
  await browser.close();
})();
