module.exports = (app) => {
  app.command("/dittobot-count", async ({ command, ack, respond }) => {
    await ack();

    const text = command.text.trim();

    if (!text) {
      await respond({
        text: "Please enter some text.\nExample: /dittobot-count Hello world"
      });
      return;
    }

    const words = text.split(/\s+/).filter(Boolean).length;
    const characters = text.length;
    const charactersWithoutSpaces = text.replace(/\s/g, "").length;

    await respond({
      text:
`🔤 *Text Count*

Words: ${words}
Characters: ${characters}
Characters without spaces: ${charactersWithoutSpaces}`
    });
  });
};