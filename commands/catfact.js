const axios = require("axios");

module.exports = (app) => {
  app.command("/dittobot-catfact", async ({ ack, respond }) => {
    await ack();

    try {
      const response = await axios.get("https://catfact.ninja/fact");

      await respond({
        text: `Cat Fact:\n${response.data.fact}`
      });
    } catch (err) {
      await respond({
        text: "Failed to fetch a cat fact."
      });
    }
  });
};