const { Given, When, Then } = require('@cucumber/cucumber');
//const HOME_PAGE = 'pages/home-page';
var HOME = require('../../pages/home-page')


Given('I am user who logs in the system', async function() {
    const homePage = new HOME();
    homePage.getName();
});