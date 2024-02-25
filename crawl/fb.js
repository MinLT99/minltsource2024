console.log("Bắt đầu chạy code");
const puppeteerExtra = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');

puppeteerExtra.use(StealthPlugin());

const username = 'maituyet21022024@gmail.com';
const password = 'MTuyet21022024@';

(async () => {
  console.log("Bắt đầu khởi tạo trình duyệt");
  const browser = await puppeteerExtra.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--enable-webgl',
      '--window-size=800,800',
      '--disable-notifications'
    ]
  });
  console.log("Khởi tạo trình duyệt thành công");

  console.log("Tạo mới trang");
  const page = await browser.newPage();
  console.log("Trang mới được tạo");

  // Đọc nội dung từ file chứa các liên kết
  const filePath = './listLinks.txt';
  const fileContent = await fs.readFileSync(filePath, 'utf-8');

  // Chuyển đổi nội dung thành mảng các liên kết
  const links = fileContent.split('\n').map(link => link.trim());

  await page.goto("https://www.facebook.com", { waitUntil: 'networkidle2' });

      console.log("Nhập tên đăng nhập và mật khẩu");
      await page.type('form input[type="text"]', username, { delay: 10 });
      await page.type('form input[type="password"][name="pass"]', password, { delay: 10 });
      await page.keyboard.press('Enter');

      await page.waitForTimeout(5000);

  for (const link of links) {
    try {
      // Mở trang
      await page.goto(link, { waitUntil: 'networkidle2' });

      console.log(`Đã chạy link: ${link}`);

      console.log("Đợi 5 giây trước khi tìm kiếm phần tử");
      await page.waitForTimeout(5000);

      //hàm evaluateHandle trả về 1 phần tử
      const button = await page.evaluateHandle(() => {
        const elements = Array.from(document.querySelectorAll('div[role="button"]')).filter(el => el.innerText.includes("Tất cả cảm xúc:"));

        if (elements.length > 0) {
          return elements[0]
        }

        return null

      });

      if (button) {
        console.log("Thực hiện phương thức click");
        button.click();

        console.log("Đợi 1 giây để load các element");
        await page.waitForTimeout(1000);

        const danhsach_user = await page.$$eval('div[role="dialog"][aria-labelledby] span[dir="auto"] a[role="link"]', el_list => {
          return el_list.map(el => el.textContent);
        })

        console.log("Tên người dùng: ", danhsach_user);

        // Hàm đọc nội dung từ tập tin và chuyển thành mảng
        function readUsersFromFile(filePath) {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          return fileContent.split('\n').map(name => name.trim());
        }

        // Hàm so sánh hai mảng
        function compareArrays(array1, array2) {
          const commonUsers = array1.filter(user => array2.includes(user));

          console.log('Danh sách người dùng giống nhau:', commonUsers);

          const differentUsersOnWeb = array1.filter(user => !array2.includes(user));
          const differentUsersInFile = array2.filter(user => !array1.includes(user));

          console.log('Danh sách người dùng khác nhau trên trang web:', differentUsersOnWeb);
          console.log('Danh sách người dùng khác nhau trong tập tin:', differentUsersInFile);
        }

        // Thực hiện so sánh
        async function performComparison() {
          try {
            const webResults = danhsach_user;
            const fileResults = readUsersFromFile('./list_user.txt'); // Thay đổi đường dẫn tới file của bạn

            // So sánh hai mảng
            compareArrays(webResults, fileResults);
          } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
          }
        }

        // Chạy hàm so sánh
        performComparison();
      }

      await page.waitForTimeout(2000);
      console.log("Đợi 2s để load link khác");
    } catch (error) {
      console.error(`Lỗi khi xử lý link ${link}:`, error);
    }
  }

  await page.waitForTimeout(50000);
  console.log("Đợi 5 giây trước khi đóng trình duyệt");

  await browser.close();
  console.log("Trình duyệt đã đóng");
})();
