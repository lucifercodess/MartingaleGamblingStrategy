const axios = require("axios");

async function sendRequest(amount) {
  const response = await axios({
    method: "post",
    url: " https://stake.com/_api/graphql",
    headers: {
      accept: "*/*",
      "accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-Type": "application/json",
      cookie: `currency_hideZeroBalances=false; currency_currencyView=crypto; fiat_number_format=en; locale=en; intercom-id-cx1ywgf2=3470a640-3869-48ef-a179-66905be67d2c; intercom-device-id-cx1ywgf2=e9fb0a9e-e16a-4615-b91c-5b8eff8e386f; cookie_consent=true; _ga=GA1.1.1003361418.1698749639; sidebarView=hidden; casinoSearch=['Monopoly','Crazy Time','Sweet Bonanza','Money Train','Reactoonz']; sportsSearch=['Liverpool FC','Kansas City Chiefs','Los Angeles Lakers','FC Barcelona','FC Bayern Munich']; sportMarketGroupMap={}; oddsFormat=decimal; session=2747345a99344d9f3f2511e8d0332283b5de7ab057ca6d412422f96c28aee1030788ca0d321e5999bd47e6a1f1ead862; session_info={'id':'094dc721-a575-4a14-8793-3c2d5aaae1c3','sessionName':'Chrome (Unknown)','ip':'103.120.253.174','country':'IN','city':'Ulhasnagar','active':true,'updatedAt':'Mon, 15 Jul 2024 09:49:59 GMT','__typename':'UserSession'}; currency_currency=inr; hideBalances=false; leftSidebarView_v2=minimized; cf_clearance=BMf8VfWymRe41ADs0LEgY8UXvHT7cogcC59V509qAT8-1721475245-1.0.1.1-1g0KVbWag5nv0RsPoI9wNuOpelhWElV_vO5tX_jtplU9OFAeA6A2RkKgzgwIPpQjWPI3nh9KRYqUkEsM1qij9A; __cf_bm=FOsTNRhmhiHcOzJZAps1oi_4GYY1OB2c9Tp29UFrisc-1721475345-1.0.1.1-A459_G7QeAMXZmKRCD8pl3s31rkqcuBULUiaSJMA8bCJlv7aWx4MCqiZeGtn0pyfpXb2yJd4wR7rIHep3PE9vA; mp_e29e8d653fb046aa5a7d7b151ecf6f99_mixpanel=%7B%22distinct_id%22%3A%20%229da4d3a84ac59751ccaf3d82a3d1823b8f820dc00241f248dadcfef9d6014090%22%2C%22%24device_id%22%3A%20%2218b855e677592f-076d6681425913-18525634-13c680-18b855e677592f%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%229da4d3a84ac59751ccaf3d82a3d1823b8f820dc00241f248dadcfef9d6014090%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; _ga_TWGX3QNXGG=GS1.1.1721475246.391.1.1721475485.0.0.0; intercom-session-cx1ywgf2=SkRTZVpBTnZGKy9GTjJjS1o1WE9RVTN0ajBvdGRRanovWmMxTDd4TnZGYXRsMnplTFJKdUErZDhLT0VTSm5VZi0tTzhZdzRjQkMrT1dqVE5heldrcnB4UT09--a58c635cc11b293eb7291c6bbc150ed0eb12fed0; __cfwaitingroom=ChhzNUdBUlRHTzhDQWN6WFhldzQ4SHd3PT0ShAJrQ3JpZnZoTEgrUVpBWGErRTUwMitxVDd2WkZyQ3ArZDFxSjNOU1ZsNFladStwNWVPYVROT0F0dEIzT1R3b0JKdGxMRnp5cEtXek5vNDhKQXhEUnlVRk5jVmxqZXV4VFoxdUhidE1MSTUzcmZLUkxVSVYxbTdpQmJ4THBEU0ExQWZxRTRsT1A2VUdHWnFXcEkrcjA0YWlqakpZNVd4QTlZWFFrMGdrMEs4d0QreWRiTGh4ZkpoOHJKYmJEZUprYlB0RFNsZ3o2cTRlcGVZWlN1QjBMWTNOdDBRL2p5ZGp4T3FJMHRoVEtRWFc5ZXVBcmZrNStuVVcwTjdzZXNYM0tBNHhNPQ%3D%3D; _dd_s=rum=0&expire=1721476742907`,
      origin: "https://stake.com",
      priority: "u=1, i",
      referer: "https://stake.com/casino/games/dice",
      "sec-Ch-Ua": `Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126`,
      "sec-Ch-Ua-Mobile": "?0",
      "sec-Ch-Ua-Model": "",
      "sec-Ch-Ua-Platform": "macOS",
      "sec-Ch-Ua-Platform-Version": "14.0.0",
      "sec-Fetch-Dest": "empty",
      "sec-Fetch-Mode": "cors",
      "sec-Fetch-Site": "same-origin",
      "sec-gpc": "1",
      "user-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      "x-Access-Token":
        "2747345a99344d9f3f2511e8d0332283b5de7ab057ca6d412422f96c28aee1030788ca0d321e5999bd47e6a1f1ead862",
      "x-Lockdown-Token": "s5MNWtjTM5TvCMkAzxov",
    },
    data: `{"query":"mutation DiceRoll($amount: Float!, $target: Float!, $condition: CasinoGameDiceConditionEnum!, $currency: CurrencyEnum!, $identifier: String!) {\n  diceRoll(\n    amount: $amount\n    target: $target\n    condition: $condition\n    currency: $currency\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameDice\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameDice on CasinoGameDice {\n  result\n  target\n  condition\n}\n", "variables": {target: 50.5, condition: "above", identifier: "KP7MHqC4kURU_YE2ZZAdf", amount: ${amount}, currency: "inr"}}`,
  });
  console.log(response.data.data);
  return response.data.data; // res.data.data because the backend is going to send us res.data
}

const defaultAmount = 0.1;
async function main() {
  let amount = defaultAmount; // amount to start with 
  let lossInARow = 0;
  while (1) { // infinite loop because we stop only after loss count == 12 or more 
    console.log(`amount: ${amount}`);
    try {
      const res = await sendRequest(amount);
      if (res.state.result > 50.5) {  
        console.log("loss");
        lossInARow++; // loss count 
        amount = amount * 2; // doubles after every loss
      } else {
        console.log("win"); // win resets bet amount to 0.1
        amount = 0.1;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000)); // bets after a second
      if (lossInARow >= 12) {
        console.log("stopped");
        process.exit(0);
      }
    } catch (error)
     {
      console.error("error came");
    }
  }
}

main();
