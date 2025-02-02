import { writeFileSync } from "fs";
import { resolve } from "path";
import { connect } from "puppeteer-real-browser";

async function test() {
  const { browser, page } = await connect({
    headless: false,
    args: [],
    customConfig: {},
    turnstile: true,
    connectOption: {},
    disableXvfb: false,
    ignoreAllFlags: false,
  });

  await page.goto("https://nhentai.net/api/search?query=*", { waitUntil: "networkidle2" });

  await new Promise((resolve) => setTimeout(resolve, 15_000));

  const cookies = await page.cookies();
  const cfClearance = cookies.find((cookie) => cookie.name === "cf_clearance");

  // 獲取 Puppeteer 的 user-agent
  const userAgent = await page.browser().userAgent();

  if (cfClearance) {
    console.log("success get token:", cfClearance.value);

    // 準備 JSON 資料
    const jsonData = {
      cf_clearance: cfClearance.value,
      user_agent: userAgent,
    };

    // 將資料寫入 cf.json
    writeFileSync(resolve("data", "cf.json"), JSON.stringify(jsonData, null, 2), "utf-8");
  } else {
    console.log("something wrong");
  }

  await page.close();
}

test();
