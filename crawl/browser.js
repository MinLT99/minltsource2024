const puppeteer = require('puppeteer');

const startBrowser = async () => {
    let browser
    try {
        browser = await puppeteer.launch({
            headless: true,
        });

    } catch (error) {
        console.log("Lỗi ở browser " + error);
    }

    return browser;

}
module.exports = startBrowser;