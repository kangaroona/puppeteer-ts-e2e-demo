module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS == 'true' ? 'new' : false,
    args: ['--disable-infobars', '--window-size=1200,800'],
    protocolTimeout: 30000,
  },
  browserContext: 'default',
};
