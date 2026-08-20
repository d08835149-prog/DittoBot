# DittoBot

DittoBot is a Slack bot that I created that runs 24/7.

(p.s. Sorry for making you ask for the README so many times. I finally wrote it myself.)


## What is DittoBot?

DittoBot is a Slack bot that I made with several commands.
It currently has `/dittobot-choose`, `/dittobot-calc`, and `/dittobot-8ball`.
I made it because I wanted to learn how to build and connect a bot to Slack.

## Commands
![DittoBot Commands](screenshots/commands.png)

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/d08835149-prog/DittoBot.git
cd DittoBot
```

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

## Tech Stack

- Node.js
- JavaScript
- Slack Bolt
- Slack Socket Mode
- systemd

## What I Learned

While creating DittoBot, I learned how to connect to a Linux server via SSH, how to use the Slack Bot API, and more.

It wasn't without issues. The `/ping` command had many problems, but I eventually fixed them.

## Future Improvement
I plan to add the following features in the next version:

- A timer function
- More humor commands
- More practical commands
