const scrapeCatelogy = (browser, url) => new Promise (async (resolve, reject) => {
    try {
        let page = await browser.newPage()
        console.log('>> Mo tab moi ... ')
        await page.goto(url)
        console.log('Truy cap url: ' +  url)
        await page.waitForSelector('#webpage')
        console.log('>> Da load xong')

        const dataCatagory = await page.$$eval('#navbar-menu > ul > li ', els => {
            dataCatagory = els.map(el => {
                return {
                    catelogy: el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                }
            })
            return dataCatagory
        })
        await page.close()
        console.log('>>>Tab đã đóng!')
        resolve(dataCatagory)
    } catch (error) {
        console.log('Loi o scrape catelory: ' + error)
        reject(error)
    }
})

const scraper = (browser, url) => new Promise(async (resolve, reject) => {
    try {
        let newPage = await browser.newPage();
        console.log('da mo tab moi');
        await newPage.goto(url);
        console.log('truy cap url: ' + url);
        await newPage.waitForSelector('#main');
        console.log('da load xong tab #main');
        
        const scrapeData = {};

        //lấy header
        const headerData = await newPage.$eval('header', (el) => {
            return {
                title: el.querySelector('h1').innerText,
                description: el.querySelector('p').innerText
            }
        })
        scrapeData.header = headerData;

        //lấy link detail
        const detailLink = await newPage.$$eval('#left-col > section.section-post-listing > ul > li', (els) => {
            detailLink = els.map( el => {
                return el.querySelector('.post-meta > h3 > a').href
            })
            return detailLink;
        })

        console.log(detailLink);

        await browser.close();
        console.log('Trinh duyet da dong');
        resolve();
    } catch (error) {
        reject(error)
    }
})

module.exports = {
    scrapeCatelogy,
    scraper
}