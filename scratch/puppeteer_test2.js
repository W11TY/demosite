import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  
  try {
    console.log('Navigating to home...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    console.log('Clicking to Company/Culture...');
    await page.evaluate(() => {
      // Find a link to /company/culture or just push state
      window.history.pushState({}, '', '/company/culture');
      window.dispatchEvent(new Event('popstate'));
    });
    
    await new Promise(r => setTimeout(r, 2000));
  } catch(e) {
    console.log('Timeout or error:', e);
  }
  await browser.close();
})();
