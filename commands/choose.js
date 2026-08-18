module.exports = (app) => {
  app.command(
    "/dittobot-choose",
    async ({ command, ack, respond }) => {
      await ack();

      const options = command.text
        .split(",")
        .map(option => option.trim())
        .filter(Boolean);

      if (options.length < 2) {
        await respond({
          text:
            "Please give me at least 2 options.\n" +
            "Example: /dittobot-choose pizza, burger, sushi"
        });
        return;
      }

      const choice =
        options[Math.floor(Math.random() * options.length)];

      await respond({
        text: `🎯 I choose: *${choice}*!`
      });
    }
  );
};