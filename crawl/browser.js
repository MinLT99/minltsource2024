const puppeteer = require('puppeteer');

async function run(){
    const browser = await puppeteer.launch({ headless: "true"});
    const page = await browser.newPage();
    await page.goto('https://tuduydongian.com');
    const result = await page.evaluate(() => {
        let data = []; 
        let elements = document.querySelectorAll('a.article-title'); 

        elements.forEach((el) => {
            data.push(el.getAttribute('href')); 
        })

        return data;
    });

    console.log('Screenshot captured successfully.');

    await browser.close();

    return result;

}
run().then((value) => {
    console.log(value);
});