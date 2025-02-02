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
    // proxy:{
    //     host:'<proxy-host>',
    //     port:'<proxy-port>',
    //     username:'<proxy-username>',
    //     password:'<proxy-password>'
    // }
  });
  await page.goto("https://nhentai.net/api/search?query=*", { waitUntil: "networkidle2" });

  await new Promise((resolve) => setTimeout(resolve, 15_000));

  const cookies = await page.cookies();
  const cfClearance = cookies.find(cookie => cookie.name === "cf_clearance")


  if(cfClearance){
    console.log('sucess get token: ',cfClearance.value);
    writeFileSync(resolve('data','cf.txt'),`cf_clearance=${cfClearance.value}`,'utf-8')
  }
  else{
    console.log('somthing wrong')
  }
  page.close()
}

test();
