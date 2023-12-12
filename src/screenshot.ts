import puppeteer from 'puppeteer';
import path from 'node:path';

export const screenShot = async (url: string, imgPath: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.setViewport({ width: 1280, height: 720 });
  await page.screenshot({
    path: path.resolve(imgPath, `./${Date.now()}.png`),
    type: 'png',
    fullPage: true,
  });
  await browser.close();
};
