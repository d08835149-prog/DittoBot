const answers = [
  "Yes!",
  "Definitely.",
  "Probably.",
  "Maybe.",
  "Ask again later.",
  "I don't think so.",
  "Probably not.",
  "No.",
  "Definitely not."
];

module.exports = (app) => {
  app.command("/dittobot-8ball", async ({ command, ack, respond }) => {
    await ack();

    const question = command.text.trim();

    if (!question) {
      await respond({
        text: "🎱 Ask me a question!\nExample: /dittobot-8ball Will I finish this project today?"
      });
      return;
    }

    const answer =
      answers[Math.floor(Math.random() * answers.length)];

    await respond({
      text: `🎱 *Question:* ${question}\n*Answer:* ${answer}`
    });
  });
};