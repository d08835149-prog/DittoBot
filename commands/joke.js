const axios = require("axios");

module.exports = (app) => {
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
      await respond({
        text: "Failed to fetch a joke."
      });
    }
  });
};