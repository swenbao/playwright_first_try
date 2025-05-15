import { chromium } from "@playwright/test"; // 這是我們機器人要操做的瀏覽器

const browser = await chromium.launch({
  headless: false,
  args: [
    '--disable-blink-features=AutomationControlled',
    '--start-maximized'
  ]
});

const context = await browser.newContext({ storageState: './playwright/.auth/tricking.json' });
const page = await context.newPage();

await page.goto("https://accounts.google.com/");

// 等待你手動登入，登入完再繼續
await page.pause();

// 儲存登入 cookie 和 storage state
// await context.storageState({ path: "state.json" });

await browser.close();
