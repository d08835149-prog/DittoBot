const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  }
];

module.exports = (app) => {
  app.command("/dittobot-quote", async ({ ack, respond }) => {
    await ack();

    const quote =
      quotes[Math.floor(Math.random() * quotes.length)];

    await respond({
      text: `💬 “${quote.text}”\n— ${quote.author}`
    });
  });
};