module.exports = (app) => {
  app.command(
    "/dittobot-number",
    async ({ command, ack, respond }) => {
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
          text:
            "Please enter two whole numbers.\n" +
            "Example: /dittobot-number 1 100"
        });
        return;
      }

      const number =
        Math.floor(Math.random() * (max - min + 1)) + min;

      await respond({
        text: `🔢 Random number: *${number}*`
      });
    }
  );
};