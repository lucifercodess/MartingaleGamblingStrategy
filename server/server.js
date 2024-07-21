const axios = require("axios");
const dotenv = require('dotenv');

dotenv.config();


async function sendRequest(amount) {
  const response = await axios({
    method: "post",
    url: " https://stake.com/_api/graphql",
    headers: {
      accept: "*/*",
      "accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-Type": "application/json",
      cookie: process.env.COOKIE,
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
    data: `{"query":"mutation DiceRoll($amount: Float!, $target: Float!, $condition: CasinoGameDiceConditionEnum!, $currency: CurrencyEnum!, $identifier: String!) {\n  diceRoll(\n    amount: $amount\n    target: $target\n    condition: $condition\n    currency: $currency\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameDice\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameDice on CasinoGameDice {\n  result\n  target\n  condition\n}\n", "variables": {target: 50.5, condition: "above", identifier: "KP7MHqC4kURU_YE2ZZAdf", amount: ${a}, currency: "inr"}}`,
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
