const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

let driver;
class BasePage{
    constructor(webdriver) {
        driver = webdriver;
        this.setup();
    }
    async setup(){
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get("https://www.lazada.sg/");
        await driver.manage().window().maximize();
        
    }
    async tearDown(){
        driver.quit();
    }
}
module.exports= BasePage;