import puppeteer from "puppeteer";

describe("Inn Form", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  // eslint-disable-next-line jest/expect-expect
  test("Form should render on page start", async () => {
    await page.goto("http://localhost:9000");

    await page.waitFor(".form-inline");
  });

  // eslint-disable-next-line jest/expect-expect
  test("Form input should add .valid class if inn is valid", async () => {
    jest.setTimeout(20000);
    await page.goto("http://localhost:9000");

    await page.waitFor(".form-inline");

    const form = await page.$(".form-inline");
    const input = await form.$(".input");
    const submit = await form.$(".submit");

    await input.type("7715964180");
    await submit.click();

    await page.waitFor(".form-inline .input.valid");
  });

  afterEach(async () => {
    await browser.close();
  });
});
