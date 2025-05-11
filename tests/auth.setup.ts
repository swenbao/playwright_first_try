import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('登入並儲存狀態', async ({ page }) => {
  await page.goto('https://accounts.google.com/');

  // 在這裡手動完成登入流程，例如輸入帳號、密碼，並完成驗證
  // 你可以使用 page.fill() 和 page.click() 等方法來模擬這些操作

  // 等待登入成功的指標，例如頁面跳轉或特定元素出現
  await page.waitForURL('https://myaccount.google.com/');
  await expect(page.locator('text=歡迎')).toBeVisible();

  // 儲存登入後的狀態
  await page.context().storageState({ path: authFile });
});