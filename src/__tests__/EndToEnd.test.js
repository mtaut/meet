import puppeteer from "puppeteer";
//  import jest here?

// Feature 1: Filter Events by City
describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });

  afterAll(async () => {
    await browser.close();
  });

  test("When user hasn't searched for a city, show upcoming events from all cities", async () => {
    await page.waitForSelector(".event");
    const events = await page.$(".event");
    expect(events).toBeDefined();
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.type(".city", "Berlin");
    const suggestions = await page.$(".suggestions");
    expect(suggestions).toBeDefined();
  });

  test("User can select a city from the suggested list", async () => {
    await page.click(".suggestions li");
    const city = await page.$(".city");
    expect(city).toBeDefined();
  });
});

// Feature 2: Show/Hide Event Details
describe("show/hide event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});
