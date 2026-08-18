require("dotenv").config();

const { App, LogLevel } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  loglevel: LogLevel.DEBUG
});

app.command("/dittobot-ping", async ({ ack, respond }) => {
 const start = Date.now();
 await ack();
 const latency = Date.now() - start;
 await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/dittobot-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    text:
` *DittoBot Commands*

/dittobot-ping - Check bot latency
/dittobot-catfact - Get a random cat fact
/dittobot-joke - Get a random joke
/dittobot-quote - Get a random quote
/dittobot-roll - Roll a dice
/dittobot-choose - Choose between options
/dittobot-number - Generate a random number`
  });
});

app.command("/dittobot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/dittobot-roll", async ({ ack, respond }) => {
  await ack();

  const roll = Math.floor(Math.random() * 6) + 1;

  await respond({
    text: `🎲 You rolled: ${roll}`
  });
});

app.command("/dittobot-choose", async ({ command, ack, respond }) => {
  await ack();

  const options = command.text
    .split(",")
    .map(option => option.trim())
    .filter(Boolean);

  if (options.length < 2) {
    await respond({
      text: "Please give me at least 2 options.\nExample: /dittobot-choose pizza, burger, sushi"
    });
    return;
  }

  const choice = options[Math.floor(Math.random() * options.length)];

  await respond({
    text: `🎯 I choose: *${choice}*!`
  });
});

app.command("/dittobot-number", async ({ command, ack, respond }) => {
  await ack();

  const parts = command.text.trim().split(/\s+/);
  const min = Number(parts[0]);
  const max = Number(parts[1]);

  if (
    parts.length !== 2 ||
    !Number.isInteger(min) ||
    !Number.isInteger(max) ||
    min > max
  ) {
    await respond({
      text: "Please enter two whole numbers.\nExample: /dittobot-number 1 100"
    });
    return;
  }

  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  await respond({
    text: `🔢 Random number: *${number}*`
  });
});

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  }
];

app.command("/dittobot-quote", async ({ ack, respond }) => {
  await ack();

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  await respond({
    text: `💬 “${quote.text}”\n— ${quote.author}`
  });
});

app.command("/dittobot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    await respond({
      text:
`${response.data.setup}



${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
