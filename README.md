![logo](https://i.imgur.com/b1hDQkD.png)

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
        "JOIN_ROLE": "692954912664846437",
        "FILTER_LIST": ["example1", "example2"],
        "CHAT_LOGS_BLACKLIST": ["testchannel1", "testchannel2"],
        "WELCOME_MESSAGE": "{user} Welcome to {guild}!",
        "LEAVE_MESSAGE": "{user} has left the server!"
    },

    "module_toggles": {
        "ENABLE_WELCOME_MESSAGES": true,
        "ENABLE_LEAVE_MESSAGES": true,
        "ENABLE_MEMBER_COUNT": true,
        "ENABLE_JOIN_ROLE": true,
        "ENABLE_FILTER_WORDS": true,
        "ENABLE_TICKET_SYSTEM": true,
        "ENABLE_ANTI_ALTS": true
    },

    "channel_setup": {
        "WELCOME_CHANNEL": "692954944340361246",
        "LEAVE_CHANNEL": "692954944340361246",
        "LOGS_CHANNEL": "692954949835030528",
        "MEMBER_COUNT_CHANNEL": "730571080304951357"
    },

    "ticket_system": {
        "SUPPORT_ROLE": "731044651775295508",
        "TICKET_CATEGORY": "731266956854034434"
    }
}

```

## 📝 Features & Commands
```
Commands

General
- 8ball
- avatar
- botinfo
- cat
- clap
- cow
- dog
- finduser
- flip
- gif
- hastebin
- icon
- id
- lenny
- megusta
- morse
- owner
- pepe
- ping
- poll
- reverse
- roleinfo
- rps
- serverinfo
- shrug
- slots
- stats
- timer
- translate
- unicode
- userinfo
- weather
- yomama
- github

Ticket System
- new
- close
- add
- remove

Administration/Moderation
- ban
- kick
- warn
- purge
- setstatus

Features
- Anti alt system (Still a WIP, but it works)
- Ticket system
- Welcome/Leave messages
- Chat Logs
- Punishment logs
- Filter words
- Join role
- Member count channel
- You can edit almost everything in config.json
And much more to come!
```
