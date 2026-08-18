module.exports = (app) => {
  app.command("/dittobot-password", async ({ command, ack, respond }) => {
    await ack();

    const input = command.text.trim();
    const length = input ? Number(input) : 16;

    if (!Number.isInteger(length) || length < 6 || length > 64) {
      await respond({
        text: "Please enter a whole number between 6 and 64.\nExample: /dittobot-password 16"
      });
      return;
    }

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      "abcdefghijklmnopqrstuvwxyz" +
      "0123456789" +
      "!@#$%^&*";

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    await respond({
      text: `🔐 *Generated Password*\n\`${password}\``
    });
  });
};