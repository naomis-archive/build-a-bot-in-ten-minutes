import { Client, TextChannel } from "discord.js";

const bot = new Client();

bot.on("ready", () => {
  console.log("It's aliiiiiiiive!");
});

bot.on("guildMemberAdd", async (member) => {
  const channels = member.guild.channels.cache.map((chan) => chan);
  const targetChannel = channels[0] as TextChannel;
  await targetChannel.send(`Welcome to the ${member.guild.name} server!`);
});

bot.login(process.env.BOT_TOKEN);
