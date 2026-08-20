# DittoBot

DittoBot is a 24/7 running SlackBot that I created.

(p.s. Sorry for making you ask for the README so many times. I finally wrote it myself.)


## What is DittoBot?

DittoBot is a Slack bot that I made to /dittobot- choose.
It can /dittobot-calc and /dittobot-8ball.
I made it because I wanted to learn how to build and connect a bot to Slack.

## Commands
![DittoBot Commands](screenshots/commands.png)

## How to Run Locally

1. Clone the repository
git clone https://github.com/d08835149-prog/DittoBot.git
cd DittoBot

3. Install dependencies

Install the required Node.js packages:

npm install
3. Create the .env file

Create a file named .env in the root directory:

SLACK_BOT_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_token

Replace the values with the tokens from your Slack app.

Do not upload your .env file to GitHub.

Make sure .env is included in .gitignore:

.env
node_modules/
4. Start DittoBot

Run:

node index.js

