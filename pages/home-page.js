const {Builder, By, Key, until} = require('selenium-webdriver');
const BasePage = require('./base');
require('chromedriver');

// class HomePage{
//     constructor(webdriver) {
//         driver = webdriver;
//     }

//     async setup(){
//         driver = await new Builder().forBrowser('chrome').build();
//         await driver.get("https://www.lazada.sg/");
//         await driver.manage().window().maximize();
//     }

//     async tearDown(){
//         await driver.quit();
//     }
// }

let driver = null;
class HomePage extends BasePage{

    constructor(){
        super();
        driver = super.driver;
    }

    async getName(){
        await driver.get("https://www.google.lk")
    }
}
module.exports= HomePage;