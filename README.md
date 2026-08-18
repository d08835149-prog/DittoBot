# DittoBot

DittoBot is a Slack bot I made for Hack Club Stardance.

I started with a simple ping command, then added more commands that I thought would be useful or fun. The bot is running 24/7 on Hack Club Nest.

## Commands

![DittoBot commands](screenshots/commands.png)

- `/dittobot-help` - Shows all commands
- `/dittobot-ping` - Checks the bot latency
- `/dittobot-calc` - Calculator
- `/dittobot-percent` - Calculates percentages
- `/dittobot-count` - Counts words and characters
- `/dittobot-password` - Generates a random password
- `/dittobot-weather` - Checks the weather
- `/dittobot-roll` - Rolls a dice
- `/dittobot-coin` - Flips a coin
- `/dittobot-number` - Picks a random number
- `/dittobot-choose` - Chooses between different options
- `/dittobot-8ball` - Magic 8 ball
- `/dittobot-joke` - Gives you a random joke
- `/dittobot-catfact` - Gives you a random cat fact
- `/dittobot-quote` - Gives you a random quote

## Example

![DittoBot demo](screenshots/demo.png)

You can give the bot a few choices:

```text
/dittobot-choose pizza, burger, sushi
```

and it will pick one:

```text
🎯 I choose: burger!
```

You can also do things like:

```text
/dittobot-calc 25 * 4 + 10
/dittobot-weather Toronto
/dittobot-number 1 100
```

## How I made it

I used Node.js, JavaScript, Slack Bolt, and a few APIs for commands like weather, jokes, and cat facts.

At first I had all of the commands inside `index.js`, but it started getting pretty long, so I moved each command into its own file inside the `commands` folder.

The bot uses Slack Socket Mode and the tokens are stored in a `.env` file so they aren't uploaded to GitHub.

## Running it

Install the packages:

```bash
npm install
```

Create a `.env` file with:

```env
SLACK_BOT_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_token
```

Then run:

```bash
node index.js
```

I deployed the bot to Hack Club Nest and set it up as a systemd service so it can keep running after I disconnect from the server.

## What I learned

This was my first time making a Slack bot. I learned how slash commands work, how to use APIs, how to split a Node.js project into multiple files, and how to deploy a bot to a Linux server.

I also had quite a few problems while deploying it, especially with the server version of the code and systemd, but I eventually got it running.

