import puppeteer from "puppeteer";

describe("Inn Form", () => {
  let browser;
  let page;

  beforeEach(async () => {
    // jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  // eslint-disable-next-line jest/expect-expect
  test("Form should render on page start", async () => {
    // jest.setTimeout(30000);
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".form-inline");
  }, 40000);

  // eslint-disable-next-line jest/expect-expect
  test("Form input should add .valid class if inn is valid", async () => {
    // jest.setTimeout(30000);
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".form-inline");

    const form = await page.$(".form-inline");
    const input = await form.$(".input");
    const submit = await form.$(".submit");

    await input.type("4556483972123366");
    await submit.click();

    await page.waitForSelector(".form-inline .input.valid");
  }, 40000);

  afterAll(async () => {
    await browser.close();
  });
});
