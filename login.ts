import { chromium } from '@playwright/test'; // 這是我們機器人要操做的瀏覽器

const browser = await chromium.launch({headless: false});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://accounts.google.com/');

