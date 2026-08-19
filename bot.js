const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);
const app = express();

app.use(express.json());

app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Heaven Bot is LIVE on Vercel! 🔥');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  const url = `https://heaven-bot.vercel.app`;
  await bot.setWebHook(`${url}/bot${token}`);
  console.log(`Bot running`);
});
