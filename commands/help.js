module.exports = (app) => {
  app.command("/dittobot-help", async ({ ack, respond }) => {
    await ack();

    await respond({
      text:
`🤖 *DittoBot Commands*

/dittobot-ping - Check bot latency
/dittobot-catfact - Get a random cat fact
/dittobot-joke - Get a random joke
/dittobot-quote - Get a random quote
/dittobot-roll - Roll a dice
/dittobot-choose - Choose between options
/dittobot-number - Generate a random number`
    });
  });
};