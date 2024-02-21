const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // Điều hướng đến trang web
  await page.goto('https://www.facebook.com/shopdunk.store/posts/pfbid0VxJjF9nNrPoc9yiFHuHSHfLNSNNMMKjTqJRYHkj7Z92RQuiWtZtgEQt1r57N5FhZl');

  // Thực hiện hành động tự động
  await page.evaluate(() => {
    const buttonToClick = Array.from(document.querySelectorAll('div[role="button"]'))
      .find(el => el.innerText.includes('Tất cả cảm xúc:'));

    if (buttonToClick) {
      buttonToClick.click();
    } else {
      console.error('Không tìm thấy phần tử thỏa mãn điều kiện.');
    }
  });

  // Đóng trình duyệt
  await browser.close();
})();
