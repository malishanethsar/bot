const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Wc0DQY5b#kNRr5czVIjjLBZzW28c6xsVu9qSoX6ojfVZs216lpWQ",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/qMxMxF3R/dd9c34a6fedce7a1.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃maliya md 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : mr maliay",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
