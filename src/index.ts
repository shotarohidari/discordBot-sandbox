// Require the necessary discord.js classes
import {
  Client,
  GatewayIntentBits,
  TextChannel,
} from "discord.js"
import dotenv from "dotenv";
import { echoRinen, sendNHKNews } from "./functions";
dotenv.config()
const DISCORDTOKEN = process.env.DISCORD_TOKEN
const CHANNEL_ID = process.env.CHANNEL_ID;
if(!CHANNEL_ID) throw new Error("チャンネルIDが設定されていません");

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages] })

client.once("ready", async () => {
  console.log("Ready!");
  const channel = client.channels.cache.get(CHANNEL_ID);
  if(!channel) {
    console.log("チャンネルが存在しません");
    return;
  }
  if(channel instanceof TextChannel) {
    sendNHKNews(channel);
  }
})


// Login to Discord with your client's token
client.login(DISCORDTOKEN);
