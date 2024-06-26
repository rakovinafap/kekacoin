const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx) => {
    ctx.reply('Нажмите кнопку для открытия Tapalka!', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Открыть Tapalka', web_app: { url: 'http://localhost:3000/' } }]
                // Замените URL на ваш HTTPS URL или ngrok URL для локального тестирования
            ]
        }
    });
});

bot.launch();
console.log('Бот запущен');
