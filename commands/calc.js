const { evaluate } = require("mathjs");

module.exports = (app) => {
  app.command("/dittobot-calc", async ({ command, ack, respond }) => {
    await ack();

    const expression = command.text.trim();

    if (!expression) {
      await respond({
        text:
          "🧮 Please enter a calculation.\n" +
          "Example: /dittobot-calc 25 * 4 + 10"
      });
      return;
    }

    if (expression.length > 100) {
      await respond({
        text: "🧮 That calculation is too long."
      });
      return;
    }

    // Allow only basic calculator characters.
    if (!/^[0-9+\-*/().%\s^]+$/.test(expression)) {
      await respond({
        text:
          "🧮 Please use numbers and basic operators only.\n" +
          "Supported: + - * / % ^ ( )"
      });
      return;
    }

    try {
      const result = evaluate(expression);

      if (typeof result !== "number" || !Number.isFinite(result)) {
        await respond({
          text: "🧮 I couldn't calculate that expression."
        });
        return;
      }

      await respond({
        text: `🧮 *${expression}* = *${result}*`
      });
    } catch (error) {
      await respond({
        text:
          "🧮 Invalid calculation.\n" +
          "Example: /dittobot-calc (25 * 4) + 10"
      });
    }
  });
};