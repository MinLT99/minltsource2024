
const scrapers = require('./scraper')

const scrapController = async (browserInstance) => {
    const url = 'https://phongtro123.com/'
    //lấy 4 phần tử đầu tiên
    const indexs = [1,2,3,4]
    try {
        let browser = await browserInstance
        
        //goi ham` cao
        let categories = await scrapers.scrapeCatelogy(browser, url)
        //truy xuất mảng nhận 4 phần tử trong mảng
        const selectCategories = categories.filter((category, index) => indexs.some(i => i === index))
        
        await scrapers.scraper(browser, selectCategories[0].link)


    } catch (error) {
        console.log("Lỗi ở scrape controller: " + error);
    }
}


module.exports = scrapController