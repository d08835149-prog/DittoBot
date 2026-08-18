module.exports = (app) => {
    app.command("/dittobot-coin", async ({ ack, respond }) => {
        await ack();

        const result = Math.random() < 0.5 ? "Heads" : "Tails";

        await respond({
            text: `🪙 ${result}!`
        });
    });
};