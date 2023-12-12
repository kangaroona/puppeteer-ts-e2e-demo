import puppeteer from 'puppeteer';
export async function emulate() {
  const browser = await puppeteer.launch();
  const browserContext = await browser.createIncognitoBrowserContext();
  const page1 = await browserContext.newPage();

  // await page1.setUserAgent(
  //   'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
  // );
  // // 视口（viewport）模拟
  // await page1.setViewport({
  //   width: 375,
  //   height: 812,
  // });

  await page1.setRequestInterception(true);
  page1.on('request', (request) => {
    if (
      request.url() ===
      'https://pss.bdstatic.com/static/superman/js/components/invoke-97e9694cb9.js'
    ) {
      // 终止该请求
      request.abort();
      console.log('该请求被终止！！！');
    } else {
      // 继续该请求
      request.continue();
    }
  });
  await page1.goto('https://www.baidu.com');
  await page1.waitForSelector('title');
  // 用page自带的方法获取节点
  const titleDomText1 = await page1.$eval('title', (el) => el.innerText);
  console.log(titleDomText1);
}
