# votemaster

Discord bot for polling, voting, etc.

## Requirements

votemaster will require **MySQL** to store votes

Ensure that you have an `.env` file in the root directory and put credentials there. A sample of the credentials required is found below.

```env
TOKEN="super-secret-token-no-seriously-keep-it-secret"
SQL_USER="SQLUsername"
SQL_PASS="SQLP4ssw0rd"
```

If you wish, you can also add in a `MONITOR` value with the link to make a POST request to track its uptime. *Please do add in a `TIME` value if you intend to use this feature, the default will be 300s.*

## Running the bot

Under the `res` directory, there is a simple shell script that maks a new build of the bot.

It's probably uneccessary but its also there to prevent any deleted TypeScript files from still existing in their JavaScript form in the `build` directory.
