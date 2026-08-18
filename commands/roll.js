module.exports = (app) => {
  app.command("/dittobot-roll", async ({ ack, respond }) => {
    await ack();

    const roll = Math.floor(Math.random() * 6) + 1;

    await respond({
      text: `🎲 You rolled: ${roll}`
    });
  });
};