const puppeteer = require('puppeteer');
const fs = require('fs');
const csv = require('csv-parser');

(async () => {
  // Đọc file CSV
  const results = [];
  fs.createReadStream('./ListProfile.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      // In ra dữ liệu từ file CSV
      console.log(results);

      // Sử dụng Puppeteer để thực hiện các thao tác trên trang web (ví dụ: mở trình duyệt)
      const browser = await puppeteer.launch({
        headless: "new",
      });
      const page = await browser.newPage();

      // Đoạn code của bạn để thao tác với trang web sẽ ở đây

      // Đóng trình duyệt sau khi hoàn tất
      await browser.close();
    });
})();
