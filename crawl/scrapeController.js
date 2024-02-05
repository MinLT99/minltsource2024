
const scrapers = require('./scraper')

const scrapController = async (browserInstance) => {
    const url = 'https://phongtro123.com/'
    try {
        let browser = await browserInstance
        
        //goi ham` cao
        let catelories = scrapers.scrapeCatelogy(browser, url)
    } catch (error) {
        console.log("Lỗi ở scrape controller: " + error);
    }
}

module.exports = scrapController