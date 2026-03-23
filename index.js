require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// SAFE ENV LOAD
const TOKEN = process.env.TELEGRAM_TOKEN;

if (!TOKEN) {
  console.error("❌ TELEGRAM_TOKEN is missing!");
  process.exit(1);
}

// CREATE BOT
const bot = new TelegramBot(TOKEN, { polling: true });

console.log("✅ Miserbot V10 is running...");

// START COMMAND
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🔥 Miserbot V10 ONLINE\nPower in your hands.");
});

// ERROR HANDLER (CRITICAL)
bot.on("polling_error", (error) => {
  console.error("Polling error:", error.message);
});

// GLOBAL FAILSAFE
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
});
