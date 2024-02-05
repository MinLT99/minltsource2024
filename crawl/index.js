const startBrowser = require('./browser');
const scrapController = require('./scrapeController');

let browser = startBrowser();
scrapController(browser);