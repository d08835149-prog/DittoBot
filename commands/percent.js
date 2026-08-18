module.exports = (app) => {
  app.command("/dittobot-percent", async ({ command, ack, respond }) => {
    await ack();

    const parts = command.text.trim().split(/\s+/);

    if (parts.length !== 2) {
      await respond({
        text: "Please enter a percentage and a number.\nExample: /dittobot-percent 20 150"
      });
      return;
    }

    const percent = Number(parts[0]);
    const number = Number(parts[1]);

    if (!Number.isFinite(percent) || !Number.isFinite(number)) {
      await respond({
        text: "Please enter valid numbers.\nExample: /dittobot-percent 20 150"
      });
      return;
    }

    const result = (percent / 100) * number;

    await respond({
      text: `📊 ${percent}% of ${number} = *${result}*`
    });
  });
};