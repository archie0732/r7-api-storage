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

  // Go to the page and wait until it's idle
  await page.goto("https://nhentai.net/api/search?query=*", { waitUntil: "networkidle2" });

  // Wait a little before grabbing the cookies
  await new Promise((resolve) => setTimeout(resolve, 15_000));

  // Get cookies
  const cookies = await page.cookies();
  const cfClearance = cookies.find((cookie) => cookie.name === "cf_clearance");

  // Get the Puppeteer user-agent
  const userAgent = await page.browser().userAgent();

  if (cfClearance) {
    console.log("success get token:", cfClearance.value);

    // Prepare JSON data
    const jsonData = {
      cf_clearance: cfClearance.value,
      user_agent: userAgent,
    };

    // Save the data into cf.json
    try {
      writeFileSync(resolve("data", "cf.json"), JSON.stringify(jsonData, null, 2), "utf-8");
      console.log("cf.json updated successfully");
    } catch (err) {
      console.error("Error writing to file:", err);
    }

    // Perform fetch request to test cf_clearance and user-agent
    try {
      const res = await fetch("https://nhentai.net", {
        method: "GET",
        headers: {
          cookie: `cf_clearance=${cfClearance.value}`,
          referer: "https://nhentai.net/",
          "user-agent": userAgent,
        },
      });

      console.log("Fetch test status:", res.status);
    } catch (err) {
      console.error("Error during fetch test:", err);
    }

  } else {
    console.log("something wrong");
  }

  await page.close();
}

test();
