import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { timeouts } from './src/consts/timeouts';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './src/tests',
  outputDir: "./output",
  snapshotPathTemplate: './src/screenshots/base/{testFilePath}/{arg}{ext}',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'output', open: 'never' }]],
  browserName: 'chromium',
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    headless: true,
  },
  launchOptions: {
    args: ['--start-maximized', '--disable-extensions', '--disable-plugins'],
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  screenshot: {
    mode: 'only-on-failure',
    fullPage: true,
  },
  expect: {
    timeout: timeouts.small,
    toHaveScreenshot: {
      maxDiffPixels: 10,
    },
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.1,
    },
  },
});