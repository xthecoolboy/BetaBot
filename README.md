If you found a bug, please open an issue, Pull Requests are always welcome.


## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
3. Node.js v12.18.2 or newer **[Download](https://nodejs.org/dist/v12.18.2/node-v12.18.2-x64.msi)**


## 🚀 How to setup

```
Go to Discord Developer portal and create a bot and copy the token
Fill in the required spots, such as token, prefix and change anything you like in config.json.
Download the BetaBot files
cd betabot
npm install
npm run all
```


## ⚙️ Configuration

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{ 
    "bot_setup": {
        "USERPREFIX":"/",
        "BOT_TOKEN":"Put your bot token here!",
        "EMBED_COLORS": "#fc9003",
        "MUTED_ROLE": "692954898261868604",
        "NO_PERMS_MESSAGE": "Sorry, you don't have permissions to use this!",
        "ENABLE_MEMBER_COUNT": true,
        "ENABLE_JOIN_ROLE": true,
        "JOIN_ROLE": "692954912664846437",
        "FILTER_LIST": ["example1", "example2"]
    },

    "channel_setup": {
        "WELCOME_CHANNEL": "692954944340361246",
        "LEAVE_CHANNEL": "692954944340361246",
        "LOGS_CHANNEL": "692954949835030528",
        "MEMBER_COUNT_CHANNEL": "730571080304951357"
    }
}

```

## 📝 Features & Commands
```
Coming soon...
```