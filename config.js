require('dotenv').config()

module.exports = {
  discord_token: process.env.DISCORD_TOKEN,
  discord_client_id: process.env.CLIENT_ID,
  discord_guild_id: process.env.GUILD_ID,
  openai_token: process.env.OPENAI_TOKEN
}