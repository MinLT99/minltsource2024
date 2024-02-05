const scrapeCatelogy = (browser, url) => new Promise (async (resolve, reject) => {
    try {
        let page = await browser.newPage()
        console.log('>> Mo tab moi ... ')
        await page.goto(url)
        console.log('Truy cap url: ' +  url)
        await page.waitForSelector('#webpage')
        console.log('>> Da load xong')

        const dataCatalogy = await page.$$eval('#navbar-menu > ul > li ', els => {
            dataCatalogy = els.map(el => {
                return {
                    catelogy: el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                }
            })
            return dataCatalogy
        })
        console.log(dataCatalogy)

        await page.close()
        console.log('>>>Tab đã đóng!')
        resolve()
    } catch (error) {
        console.log('Loi o scrape catelory: ' + error)
        reject(error)
    }
})

module.exports = {
    scrapeCatelogy
}