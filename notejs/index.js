const puppeteer = require('puppeteer');
const fs = require('fs');

const crawlImages = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto("https://news.sun-asterisk.com/vi", { waitUntil: 'networkidle2' });

    // Chờ cho các hình ảnh được tải hoàn toàn
    await page.waitForSelector('img');

    // Lấy danh sách tất cả các phần tử hình ảnh trên trang
    const imageUrls = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      return Array.from(images).map(img => img.src);
    });

    // Chụp ảnh cho mỗi URL và lưu vào thư mục
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      await page.goto(imageUrl, { waitUntil: 'networkidle2' });
      await page.screenshot({ path: `image_${i + 1}.png` });
    }
  } catch (error) {
    console.error('Lỗi khi thực hiện các hành động:', error);
  } finally {
    await browser.close();
  }
};

crawlImages();
