module.exports = (app) => {
  app.command("/dittobot-help", async ({ ack, respond }) => {
    await ack();

    await respond({
      text:
`🤖 *DittoBot Commands*

⚙️ *Bot*
/dittobot-help - Show this command list
/dittobot-ping - Check bot latency

🛠 *Utilities*
/dittobot-calc - Calculate a math expression
/dittobot-percent - Calculate a percentage
/dittobot-count - Count words and characters
/dittobot-password - Generate a random password
/dittobot-time - Show the current time
/dittobot-weather - Check the current weather

🎲 *Random & Decisions*
/dittobot-roll - Roll a dice
/dittobot-coin - Flip a coin
/dittobot-number - Generate a random number
/dittobot-choose - Choose between options
/dittobot-8ball - Ask the magic 8 ball

🎉 *Fun*
/dittobot-joke - Get a random joke
/dittobot-catfact - Get a random cat fact
/dittobot-quote - Get a random quote`
    });
  });
};