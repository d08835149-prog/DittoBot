require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

require("./commands/ping")(app);
require("./commands/help")(app);
require("./commands/catfact")(app);
require("./commands/joke")(app);
require("./commands/quote")(app);
require("./commands/roll")(app);
require("./commands/choose")(app);
require("./commands/number")(app);
require("./commands/coin")(app);
require("./commands/8ball")(app);
require("./commands/count")(app);
require("./commands/percent")(app);
require("./commands/password")(app);
require("./commands/calc")(app);
require("./commands/weather")(app);

(async () => {
  await app.start();
  console.log("bot is running!");
})();







 
 
 

 

