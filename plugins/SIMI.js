const moment = require('moment-timezone');
const { cmd, commands } = require('../command')
const config = require('../config');
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const webp = require('node-webpmux');
const sharp = require('sharp');
const axios = require('axios');
const yts = require("yt-search");
const xml2js = require('xml2js');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions');
const fg = require('api-dylux');
const cheerio = require('cheerio')
const vm = require('vm')
let { img2url } = require('@blackamda/telegram-image-url');
var imgmsg ="*Give me a anime name !*"
var descgs = "It gives details of given anime name."
var cants = "I cant find this anime."
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');
const fetch = require('node-fetch');  
// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ kaviya-ᴍᴅ";

//twitter dl (x)
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    react: "🔎",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    react: "🔎",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//mediafire dl
cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    desc: "download mfire files",
    category: "download",
    react: "🔎",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me mediafire url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`)
        reply("*Downloading...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: `${data.data.name}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})



cmd({
    pattern: "antispam",
    alias: ["as","spamoff"],
    react: '📚',
    desc: 'Antispam',
    category: "tools",
    use: '.antispam',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var tmsg = "If Anyone Send A Spam, Use This Imediatly."
const spam = `
🚮 clear chat
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
















































































 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 .
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 🚮 clear chat
 
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ kaviya-ᴍᴅ
`
reply(spam)
} catch (e) {
l(e)
}
})



cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ *උබට ඔනෙ පත්ත කියපන්👍* . Usage: .weather [city name]");
        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = `
🌍 *Weather Information for ${data.name}, ${data.sys.country}* 
💦 *Humidity*: ${data.main.humidity}%
☁️ *Weather*: ${data.weather[0].main}
🌫️ *Description*: ${data.weather[0].description}
💨 *Wind Speed*: ${data.wind.speed} m/s
> 🌡️ *Temperature*: ${data.main.temp}°C
> 🌡️ *Feels Like*: ${data.main.feels_like}°C
> 🌡️ *Min Temp*: ${data.main.temp_min}°C
> 🌡️ *Max Temp*: ${data.main.temp_max}°C
🔽 *Pressure*: ${data.main.pressure} hPa


`;
        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("*🚫 City not found. නගරයෙ නම හරියට ගහපම් නැනම් තියන නගරයක් ගහපම්😓.*");
        }
        return reply("⚠️ *සමවෙන්න මට හිකිල ගියා😓* .");
    }
});



cmd({
    pattern: "itnnews",
    desc: "Get the latest ITN news headlines or details of a given link.",
    category: "other",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        const rssFeedUrl = 'https://www.itnnews.lk/feed/';
        const response = await axios.get(rssFeedUrl);
        const xmlData = response.data;

        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(xmlData);

        const newsItems = result.rss.channel[0].item.map(item => ({
            title: item.title[0],
            link: item.link[0],
            description: item.description[0],
            pubDate: item.pubDate[0]
        }));

        // User එකට link එකක් දීලා search කරොත්
        if (q && q.startsWith("https://www.itnnews.lk/")) {
            const article = newsItems.find(news => news.link === q.trim());
            if (!article) return reply("❌ Sorry, this news article was not found in the latest updates!");

            let articleText = `*📰 ITN News Details:*\n\n`;
            articleText += `📌 *${article.title}*\n`;
            articleText += `📅 _${article.pubDate}_\n`;
            articleText += `📖 ${article.description}\n`;
            articleText += `🔗 ${article.link}\n`;

            return reply(articleText);
        }

        // User එක link එකක් දීලා නැත්නම් Latest 5 news return කරනවා
        let newsText = `*📰 ITN Latest News:*\n\n`;
        newsItems.slice(0, 5).forEach((news, index) => {
            newsText += `📌 *${index + 1}.* *${news.title}*\n`;
            newsText += `📅 _${news.pubDate}_\n`;
            newsText += `🔗 ${news.link}\n\n`;
        });

        reply(newsText);
    } catch (error) {
        console.error("Error fetching ITN News:", error);
        reply("❌ Could not fetch ITN news. Please try again later.");
    }
});


cmd(
  {
    pattern: "aiimg",
    alias: ["genboy", "genimg"],
    desc: "Generate AI profile picture",
    category: "ai",
    react: "🖼️",
    filename: __filename,
  },
  async (conn, mek, m, { from, args, reply }) => {
    try {
      let prompt = args.join(" ");
      if (!prompt) return reply("⚠️ Please provide a prompt! (Example: `.genpfp Red flowers`)");

      let apiUrl = `https://manul-ofc-tech-api-1e5585f5ebef.herokuapp.com/fluxai?prompt=${encodeURIComponent(prompt)}`;
      let response = await axios.get(apiUrl, { responseType: "arraybuffer" });

      await conn.sendMessage(
        from,
        { image: response.data, caption: `🎨 *AI Generated Image for:* _${prompt}_` },
        { quoted: m }
      );

    } catch (e) {
      console.error("GenPFP Command Error:", e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);

cmd({
    pattern: "boom",
    desc: "Send a message multiple times",
    react: "📢",
    category: "tools",
    filename: __filename
}, async (conn, mek, m, { from, args }) => {
    if (args.length < 2) {
        return await conn.sendMessage(from, { text: "Usage: *.boom <count> <message>*\nExample: *.flood 500 HI IM DILA!*" });
    }

    const count = parseInt(args[0]);
    if (isNaN(count) || count <= 0 || count > 500) {
        return await conn.sendMessage(from, { text: "Please provide a valid count (1-500)." });
    }

    const message = args.slice(1).join(" ");

    for (let i = 0; i < count; i++) {
        await conn.sendMessage(from, { text: message });
        await new Promise(resolve => setTimeout(resolve, 500)); // 0.5-second delay to avoid spam detection
    }
});


cmd({
    pattern: "gemini",
    alias: ["ai5","gpt5","openai5","chat5"],
    react: '👾',
    desc: desct,
    category: "ai",
    use: '.gemini <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

var desct = "It Search On Chatgpt Ai For What You Provided."
var needus = "*Please Give Me Words To Search On AI !*" 
var cantf  = "*Server Is Busy. Try Again Later.!*"
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/gemini/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
console.log(e)
}
})


//================ CHATGPT ================

var desct = "It Search On Chatgpt Ai For What You Provided."
cmd({
    pattern: "chatgpt2",
    alias: ["ai2","gpt2","openai2","chat2"],
    react: '🤖',
    desc: desct,
    category: "ai",
    use: '.chatgpt2 <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

var needus = "*Please Give Me Words To Search On AI !*" 
var cantf  = "*Server Is Busy. Try Again Later.!*"
if(!q) return reply(needus)
//let res = (await fetchJson('https://hercai.onrender.com/v3/hercai?question=' + q)).response
let res = await fetchJson('https://hercai.onrender.com/v3-32k/hercai?question='+q)

return await reply(res.reply)
} catch (e) {
reply(cantf)
console.log(e)
}
})



cmd({
    pattern: "sticker",
    desc: "Convert Image/GIF to Sticker",
    react: "✨",
        category: "convert",
    filename: __filename
}, async (conn, mek, m, { from, quoted }) => {
    try {
async function createSticker(buffer, isAnimated = false) {
    const tmpPath = path.join(__dirname, `../temp/sticker_${Date.now()}.webp`);
    if (isAnimated) {
        fs.writeFileSync(tmpPath, buffer);
    } else {
        await sharp(buffer)
            .resize(512, 512, { fit: 'contain' })
            .toFormat('webp')
            .toFile(tmpPath);
    }
    return tmpPath;
}
        if (!quoted || !(quoted.mtype === 'imageMessage' || quoted.mtype === 'videoMessage')) {
            return await conn.sendMessage(from, { text: "📌 Please reply to an *Image* or *GIF* to create a sticker." });
        }

        let buffer = await downloadMediaMessage(quoted);
        let isAnimated = quoted.mtype === 'videoMessage';

        let stickerPath = await createSticker(buffer, isAnimated);
        let stickerBuffer = fs.readFileSync(stickerPath);

        await conn.sendMessage(from, { 
            sticker: stickerBuffer 
        });

        fs.unlinkSync(stickerPath); // Remove temp file
    } catch (error) {
        console.error(`Error in Sticker Command: ${error.message}`);
        await conn.sendMessage(from, { text: "🚫 Failed to create a sticker. Please try again." });
    }
});


//================ GEMINI ================
cmd({
    pattern: "readmore",
    desc: "Readmore message",
    category: "convert",
    react: "📝",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender
}) => {
    try {
        // Get the message text after the command (.readmore text)
        let readmoreText = q ? q : "No text provided";

        // Create the "Readmore" effect by adding a special character to split the text
        let readmore = "\u200B".repeat(4000); // This creates a large gap between text

        // Full message to send
        let replyText = `... Readmore\n\n${readmore}${readmoreText}`;

        // Send the message with the "Readmore" functionality
        await conn.sendMessage(from, { text: replyText }, { quoted: mek });

        // React to the message
        await conn.sendMessage(from, { react: { text: "", key: mek.key } });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});



cmd({
    pattern: "cosplay",
    desc: "Fetch a random cosplay picture.",
    category: "fun",
    react: "🎭",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // URL de l'API
        const apiUrl = `https://fantox-cosplay-api.onrender.com/`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Validation de la réponse
        if (data && data.url) {
            // Envoi de l'image
            await conn.sendMessage(from, {
                image: { url: data.url },
                caption: "Here is your random cosplay picture! 🎭",
            }, { quoted: mek });
        } else {
            reply("Error: The API response is invalid. Could not fetch a cosplay picture.");
        }
    } catch (e) {
        // Gestion détaillée des erreurs
        if (e.response) {
            // Erreur renvoyée par l'API (ex. : 404, 500)
            reply(`API Error: ${e.response.status} - ${e.response.data?.message || 'No message provided by the server'}`);
        } else if (e.request) {
            // Erreur réseau : pas de réponse du serveur
            reply(
                "Network Error: The API server is not responding. Possible reasons:\n" +
                "- The server may be down or temporarily unavailable.\n" +
                "- There may be an issue with your internet connection.\n\n" +
                "Please check your internet connection and try again later."
            );
        } else {
            // Autre erreur
            reply(`Unexpected Error: ${e.message}`);
        }
    }
});


cmd({
    pattern: "groupinfo",
    desc: "Get information about the group.",
    category: "group",
    filename: __filename,
    react: "ℹ️"
},
async(conn, mek, m, { from, isGroup, groupMetadata, groupName, participants, groupAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in groups.');

        const groupInfo = `𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍📋\n\n
👥 *Name:* ${groupName}
📝 *Description:* ${groupMetadata.desc || 'No description'}
🆔 *ID:* ${from}
👑 *Owner:* ${groupMetadata.owner || 'Not available'}
👤 *Members:* ${participants.length}
👮 *Admins:* ${groupAdmins.length}
📅 *Created:* ${new Date(groupMetadata.creation * 1000).toLocaleString()}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴜᴅᴍᴏᴅᴢ-ᴍᴅ
        `;
        reply(groupInfo);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
})


// video

cmd({ 
    pattern: "video", 
    alias: ["ytdl", "mp4"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "download", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
     await reply(".");
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 *MALIYA MD* 〕━━━┈⊷
┇๏ *Title* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name}
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ maliya-ᴍᴅ😈`;


        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `> *${yts.title}*\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ kaviya-ᴍᴅ`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
       cmd({  
    pattern: "song",   
    alias: ["ytdl3", "play","audio","mp3"],   
    react: "🎧",   
    desc: "Download Youtube song",
    category: "main",   
    use: '.song < Yt url or Name >',   
    filename: __filename },   
    async (conn, mek, m, { from, prefix, quoted, q, reply }) =>   
    { try { if (!q) return await reply("Please provide a YouTube URL or song name.");

    await reply("කරුනාකර මදක් ඉදපන් 😌.");
            
    const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
        
    let yts = yt.results[0];   
    
    // --- CORRECTED LINE BELOW ---
    // You MUST replace 'https://YOUR_ACTUAL_YOUTUBE_API_HERE' with a real, working YouTube audio download API endpoint.
    // For example, if you use a public API like 'https://api.example.com/youtube/mp3', it would look like this:
    // let apiUrl = `https://api.example.com/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    //
    // If you were previously using 'https://apis.davidcyriltech.my.id/youtube/mp3', and it was working
    // before it started throwing errors, you might consider trying it again or looking for alternatives.
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`; 
    // --- END CORRECTED LINE ---
        
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    // Added more robust error checking and logging for debugging
    if (response.status !== 200) {
        console.error(`API returned non-200 status: ${response.status} - ${response.statusText}`);
        return reply(`Failed to connect to the audio download service (Status: ${response.status}). Please try again later.`);
    }

    if (!data || !data.success || !data.result || !data.result.downloadUrl) {
        console.error("API response missing expected data:", data);
        return reply("The audio download service did not return a valid download link. It might be an issue with the API or the video itself. Please try another song or later.");
    }
        
    let ytmsg = `╭━━━〔 *MALIYA MD* 〕━━━┈⊷
┇๏ *Tital* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name} 
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ maliya-ᴍᴅ`;

    // Send song details (image is optional, check if data.result.image exists)
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
        
    // Send audio file as an audio message
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        
    // Send audio file as a document (useful for larger files or if audio message fails)
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ kaviya-ᴍᴅ`
    }, { quoted: mek });

    } catch (e) {
        // Log the full error for debugging in your console/terminal
        console.error("Error in song command:", e); 
        // Provide a user-friendly message
        reply("An error occurred while trying to download the song. Please try again later.");
    }
});
cmd({
    pattern: 'phdl',
    desc: 'Download and send videos from Pornhub',
    react: '🎥',
    category: 'download',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, isMe, isOwner }) => {
    try {
        // Check if a URL was provided
        if (!q) {
            return reply('Please provide a Pornhub video URL. Example: .phdl https://www.pornhub.com/view_video.php?viewkey=ph5b76f02a92fd6');
        }

        // Construct the API URL with proper URL encoding
        const videoUrl = `https://www.dark-yasiya-api.site/download/phub?url=${encodeURIComponent(q)}`;

        // Make the request to the API to fetch the video data
        const response = await fetch(videoUrl);
        const data = await response.json();

        // Check if the API response contains valid video data
        if (data.status && data.result && data.result.length > 0) {
            // Get the first video result from the response
const video = data.result[0];

            // Prepare the message content for the video
            const caption = `Title:{video.title}\nCategory: video.category:{video.views_count}\nShares: ${video.share_count}`;

            // Send the video to the user
            await conn.sendMessage(from, { 
                video: { url: video.video_1 }, 
                caption: caption 
            }, { quoted: mek });

        } else {
            // Handle error if no valid video data is found
            return reply('Could not fetch video data. Please check the URL and try again.');
        }

    } catch (error) {
        // Log the error and reply to the user in case of an issue
        console.error(error);
        return reply('Something went wrong. Please try again later.');
    }
});

cmd({
    pattern: "owner",
    react: "🛡️", // Reaction emoji when the command is triggered
    alias: "MR DILA",
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+94775309776'; // Replace this with the actual owner number
        const ownerName = 'maliya'; // Replace this with the owner's name
        const organization = 'maliya📍'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `contact  : ${ownerName}`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+94760224138') + '+94760224138@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});


cmd({
    pattern: "tiktok",
    alias: ["tt2", "tiktokdl", "ttdown", "tiktokvid", "ttdl"],    desc: "Download TikTok videos or audio by link.",
    category: "downloader",
    react: "🎵",
    filename: __filename
}, async (conn, mek, m, { args, reply, isQuoted }) => {
    try {
        if (!args[0]) return reply("❌ Please provide a TikTok video link.");

        const apiURL = `https://apii.ambalzz.biz.id/api/downloader/tiktokdl?url=${encodeURIComponent(args[0])}`;
        const { data } = await axios.get(apiURL);

        if (data.status !== 0) return reply("❌ Failed to fetch video. Try another link.");

        const videoData = data.data;
        const videoStats = data.video_view;
        const author = data.author;

        let captionMessage = `🎵 *TikTok Video Found!*\n\n`;
        captionMessage += `📌 *Caption:* ${videoData.caption_vid || "No caption"}\n`;
        captionMessage += `👀 *Views:* ${videoStats.views}\n`;
        captionMessage += `❤️ *Likes:* ${videoStats.likes}\n`;
        captionMessage += `💬 *Comments:* ${videoStats.comments}\n`;
        captionMessage += `🔁 *Shares:* ${videoStats.shares}\n`;
        captionMessage += `👤 *Author:* ${author.nickname} (@${author.username})\n`;
        captionMessage += `\n🔹 *Reply with:* \n 1️⃣ for *Video* 📽️ \n 2️⃣ for *Audio* 🎵`;

        // Send the message with TikTok thumbnail and context info
        const sentMessage = await conn.sendMessage(m.chat, {
            image: { url: author.profile },
            caption: captionMessage,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363183696686259@newsletter',
                    newsletterName: "SIMI MD",
                    serverMessageId: 190
                }
            }
        });

        const messageID = sentMessage.key.id;

        // Listen for user response
        conn.ev.on("messages.upsert", async message => {
            const receivedMessage = message.messages[0];
            if (!receivedMessage.message) return;

            const userResponse = receivedMessage.message.conversation || 
                                 receivedMessage.message.extendedTextMessage?.["text"];
            const chatID = receivedMessage.key.remoteJid;
            const isReplyToBotMessage = receivedMessage.message.extendedTextMessage &&
                                        receivedMessage.message.extendedTextMessage.contextInfo.stanzaId === messageID;

            if (isReplyToBotMessage) {
                await conn.sendMessage(chatID, {
                    react: { text: "⬇️", key: receivedMessage.key }
                });

                if (userResponse === "1") {
                    await conn.sendMessage(chatID, {
                        video: { url: videoData.video },
                        caption: "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ simi-ᴍᴅ"
                    }, { quoted: receivedMessage });
                } else if (userResponse === "2") {
                    await conn.sendMessage(chatID, {
                        audio: { url: videoData.music },
                        mimetype: "audio/mp4",
                        ptt: false 
                    }, { quoted: receivedMessage });
                } else {
                    reply("❌ Invalid choice! Reply with *1* for video or *2* for audio.");
                }

                await conn.sendMessage(chatID, {
                    react: { text: "⬆️", key: receivedMessage.key }
                });
            }
        });

    } catch (error) {
        console.error("TikTok Downloader Error:", error);
        reply("❌ Error fetching TikTok video. Try again later.");
    }
}); 






cmd({
  pattern: "mediafire",
  alias: ["mfire"],
  desc: "To download MediaFire files.",
  react: "🎥",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("❌ Please provide a valid MediaFire link.");
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const response = await axios.get(`https://www.dark-yasiya-api.site/download/mfire?url=${q}`);
    const data = response.data;

    if (!data || !data.status || !data.result || !data.result.dl_link) {
      return reply("⚠️ Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }

    const { dl_link, fileName, fileType } = data.result;
    const file_name = fileName || "mediafire_download";
    const mime_type = fileType || "application/octet-stream";

    await conn.sendMessage(from, {
      react: { text: "⬆️", key: m.key }
    });

    const caption = `╭━━━〔 *MEDIAFIRE DOWNLOADER* 〕━━━⊷\n`
      + `┃▸ *File Name:* ${file_name}\n`
      + `┃▸ *File Type:* ${mime_type}\n`
      + `╰━━━⪼\n\n`
      + `📥 *Downloading your file...*`;

    await conn.sendMessage(from, {
      document: { url: dl_link },
      mimetype: mime_type,
      fileName: file_name,
      caption: caption
    }, { quoted: m });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});
        


// apk-dl

cmd({
  pattern: "apk",
  desc: "Download APK from Aptoide.",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("❌ Please provide an app name to search.");
    }

    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${q}/limit=1`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data || !data.datalist || !data.datalist.list.length) {
      return reply("⚠️ No results found for the given app name.");
    }

    const app = data.datalist.list[0];
    const appSize = (app.size / 1048576).toFixed(2); // Convert bytes to MB

    const caption = `╭━━━〔 *SIMI MD APK Downloader* 〕━━━┈⊷
┃ 📦 *Name:* ${app.name}
┃ 🏋 *Size:* ${appSize} MB
┃ 📦 *Package:* ${app.package}
┃ 📅 *Updated On:* ${app.updated}
┃ 👨‍💻 *Developer:* ${app.developer.name}
╰━━━━━━━━━━━━━━━┈⊷
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ simi-ᴍᴅ`;

    await conn.sendMessage(from, { react: { text: "⬆️", key: m.key } });

    await conn.sendMessage(from, {
      document: { url: app.file.path_alt },
      fileName: `${app.name}.apk`,
      mimetype: "application/vnd.android.package-archive",
      caption: caption
    }, { quoted: m });

    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while fetching the APK. Please try again.");
  }
});

// G-Drive-DL

cmd({
  pattern: "gdrive",
  desc: "Download Google Drive files.",
  react: "🌐",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("❌ Please provide a valid Google Drive link.");
    }

    await conn.sendMessage(from, { react: { text: "⬇️", key: m.key } });

    const apiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${q}&apikey=mnp3grlZ`;
    const response = await axios.get(apiUrl);
    const downloadUrl = response.data.result.downloadUrl;

    if (downloadUrl) {
      await conn.sendMessage(from, { react: { text: "⬆️", key: m.key } });

      await conn.sendMessage(from, {
        document: { url: downloadUrl },
        mimetype: response.data.result.mimetype,
        fileName: response.data.result.fileName,
        caption: "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ simi-ᴍᴅ"
      }, { quoted: m });

      await conn.sendMessage(from, { react: { text: "✅", key: m.key } });
    } else {
      return reply("⚠️ No download URL found. Please check the link and try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while fetching the Google Drive file. Please try again.");
  }
}); 

cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return reply("*`Need a valid Facebook URL!`*");
    }

    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    const apiUrl = `https://lance-frank-asta.onrender.com/api/downloader?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data?.content?.status || !data?.content?.data?.result?.length) {
      throw new Error("Invalid API response or no video found.");
    }

    let videoData = data.content.data.result.find(v => v.quality === "HD") || 
                    data.content.data.result.find(v => v.quality === "SD");

    if (!videoData) {
      throw new Error("No valid video URL found.");
    }

    await conn.sendMessage(from, {
      video: { url: videoData.url },
      caption: `📥 *Downloaded in ${videoData.quality} Quality*\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ simi-ᴍᴅ`
    }, { quoted: m });

  } catch (error) {
    console.error("FB Download Error:", error);

    // Send error details to bot owner
    const ownerNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    await conn.sendMessage(ownerNumber, {
      text: `⚠️ *FB Downloader Error!*\n\n📍 *Group/User:* ${from}\n💬 *Query:* ${q}\n❌ *Error:* ${error.message || error}`
    });

    // Notify the user
    reply("❌ *Error:* Unable to process the request. Please try again later.");
  }
});

cmd({
    pattern: "img",
    alias: ["pinterest", "image", "searchpin"],
    react: "🚀",
    desc: "Search and download Pinterest images using the API.",
    category: "fun",
    use: ".pin <keywords>",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {
        const query = args.join(" ");
        if (!query) {
            return reply("*Please provide a search query.*");
        }

        
        await reply(`*🔎 Downloading Images For ${query}...*`);


        const url = `https://api.diioffc.web.id/api/search/pinterest?query=${encodeURIComponent(query)}`;
        const response = await axios.get(url);

        // Validate response
        if (!response.data || !response.data.result || response.data.result.length === 0) {
            return reply("*No results found. Please try another keyword.*");
        }

        const results = response.data.result;  
        const selectedImages = results.sort(() => 0.5 - Math.random()).slice(0, 5);
      
        for (let i = 0; i < selectedImages.length; i++) {
            const image = selectedImages[i];
            await conn.sendMessage(
                from,
                {
                    image: { url: image.src },
                    caption: `*Results For:* ${query}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴜᴅᴍᴏᴅᴢ-ᴍᴅ`
                },
                { quoted: mek }
            );
        }
    } catch (error) {
        console.error(error);
        reply("*❌ An error occurred while processing your request. Please try again later.*");
    }
});

cmd({
    pattern: "insta",
    alias: ["igdl", "reel", "ig", "instadl"],
    desc: "Download Instagram reels or image posts",
    category: "downloader",
    react: "⏳",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide an Instagram post or reel link.");
        if (!q.includes("instagram.com")) return reply("Invalid Instagram link.");

        const apiUrl = `https://delirius-apiofc.vercel.app/download/igv2?url=${q}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌"); 
            return reply("Failed to fetch Instagram media.");
        }

        const { username, fullname, caption, likes, comments, followed, download } = data.data;

        const captionText = `📸 *Instagram Post* 📸\n\n` +
                            `👤 *User:* ${fullname} (@${username})\n` +
                            `❤️ *Likes:* ${likes}\n💬 *Comments:* ${comments}\n👥 *Followers:* ${followed}\n` +
                            `📝 *Caption:*\n${caption || "No caption available."}`;

        for (const media of download) {
            if (media.type === "image") {
                await conn.sendMessage(from, {
                    image: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            } else if (media.type === "video") {
                await conn.sendMessage(from, {
                    video: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            }
        }

        await react("✅"); // React after successfully sending media
    } catch (e) {
        console.error("Error in Instagram downloader command:", e);
        await react("❌");
        reply(`An error occurred: ${e.message}`);
    }
});


cmd({
    pattern: "ringtone",
    alias: ["ringtones", "ring"],
    desc: "Get a random ringtone from the API.",
    react: "🎵",
    category: "fun",
    filename: __filename,
},
async (conn, mek, m, { from, reply, args }) => {
    try {
        const query = args.join(" ");
        if (!query) {
            return reply("Please provide a search query! Example: .ringtone Suna");
        }

        const { data } = await axios.get(`https://www.dark-yasiya-api.site/download/ringtone?text=${encodeURIComponent(query)}`);

        if (!data.status || !data.result || data.result.length === 0) {
            return reply("No ringtones found for your query. Please try a different keyword.");
        }

        const randomRingtone = data.result[Math.floor(Math.random() * data.result.length)];

        await conn.sendMessage(
            from,
            {
                audio: { url: randomRingtone.dl_link },
                mimetype: "audio/mpeg",
                fileName: `${randomRingtone.title}.mp3`,
            },
            { quoted: m }
        );
    } catch (error) {
        console.error("Error in ringtone command:", error);
        reply("Sorry, something went wrong while fetching the ringtone. Please try again later.");
    }
});

cmd({
    pattern: "tt",
    alias:  "tt",
    desc: "Download TikTok video without watermark",
    category: "downloader",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("Please provide a TikTok video link.");
        if (!q.includes("tiktok.com")) return reply("Invalid TikTok link.");
        
        reply("Downloading video, please wait...");
        
        const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status || !data.data) return reply("Failed to fetch TikTok video.");
        
        const { title, like, comment, share, author, meta } = data.data;
        const videoUrl = meta.media.find(v => v.type === "video").org;
        
        const caption = `🎵 *TikTok Video* 🎵\n\n` +
                        `👤 *User:* ${author.nickname} (@${author.username})\n` +
                        `📖 *Title:* ${title}\n` +
                        `👍 *Likes:* ${like}\n💬 *Comments:* ${comment}\n🔁 *Shares:* ${share}`;
        
        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: mek });
        
    } catch (e) {
        console.error("Error in TikTok downloader command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
          
cmd({
    pattern: "ytpost",
    alias: ["ytcommunity", "ytc"],
    desc: "Download a YouTube community post",
    category: "downloader",
    react: "📩",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a YouTube community post URL.\nExample: `.ytpost <url>`");

        const apiUrl = `https://api.siputzx.my.id/api/d/ytpost?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌");
            return reply("Failed to fetch the community post. Please check the URL.");
        }

        const post = data.data;
        let caption = `📢 *YouTube Community Post* 📢\n\n` +
                      `📜 *Content:* ${post.content}`;

        if (post.images && post.images.length > 0) {
            for (const img of post.images) {
                await conn.sendMessage(from, { image: { url: img }, caption }, { quoted: mek });
                caption = ""; // Only add caption once, images follow
            }
        } else {
            await conn.sendMessage(from, { text: caption }, { quoted: mek });
        }

        await react("✅");
    } catch (e) {
        console.error("Error in ytpost command:", e);
        await react("❌");
        reply("An error occurred while fetching the YouTube community post.");
    }
});

cmd({
    pattern: "pindl",
    alias: ["pinterestdl", "pin", "pins", "pindownload"],
    desc: "Download media from Pinterest",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { args, quoted, from, reply }) => {
    try {
        // Make sure the user provided the Pinterest URL
        if (args.length < 1) {
            return reply('❎ Please provide the Pinterest URL to download from.');
        }

        // Extract Pinterest URL from the arguments
        const pinterestUrl = args[0];

        // Call your Pinterest download API
        const response = await axios.get(`https://api.giftedtech.web.id/api/download/pinterestdl?apikey=gifted&url=${encodeURIComponent(pinterestUrl)}`);

        if (!response.data.success) {
            return reply('❎ Failed to fetch data from Pinterest.');
        }

        const media = response.data.result.media;
        const description = response.data.result.description || 'No description available'; // Check if description exists
        const title = response.data.result.title || 'No title available';

        // Select the best video quality or you can choose based on size or type
        const videoUrl = media.find(item => item.type.includes('720p'))?.download_url || media[0].download_url;

        // Prepare the new message with the updated caption
        const desc = `╭━━━〔 *𝗤𝗨𝗘𝗘𝗡 SIMI* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *PINS DOWNLOADER*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━❐━⪼
┇๏ *Title* - ${title}
┇๏ *Media Type* - ${media[0].type}
╰━━❑━⪼
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ simi-ᴍᴅ`;

        // Send the media (video or image) to the user
        if (videoUrl) {
            // If it's a video, send the video
            await conn.sendMessage(from, { video: { url: videoUrl }, caption: desc }, { quoted: mek });
        } else {
            // If it's an image, send the image
            const imageUrl = media.find(item => item.type === 'Thumbnail')?.download_url;
            await conn.sendMessage(from, { image: { url: imageUrl }, caption: desc }, { quoted: mek });
        }

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('❎ An error occurred while processing your request.');
    }
});


cmd({
    pattern: "blackbox",
    alias: ["bb"],
    react: '👾',
    desc: "Blackbox ai chat",
    category: "ai",
    use: '.blackbox hi',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('Need a keyword')
var res = (await fetchJson('https://api-ruddy-three.vercel.app/ai/blackbox?q=' + q)).result

return await reply(res)
} catch (e) {
reply('Unable to generate')
l(e)
}
})

cmd({
    pattern: "bingimgai",
    alias: ["midj"],
    react: '📷',
    desc: "Generate Images using Bing AI",
    category: "ai",
    use: '.bingimgai <prompt>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!q) return await  reply("*Give me a prompt to generate images*")
  let response = await fetchJson('https://api.yanzbotz.my.id/api/text2img/bing-image?prompt='+q+'&apiKey=vihangayt0')
        if (response && response.result && Array.isArray(response.result) && response.result.length > 0) {
            for (let i = 0; i < response.result.length; i++) {
                await conn.sendMessage(from, { image: { url: response.result[i] }, caption: config.FOOTER }, { quoted: mek });
            }
        } else {
            reply('No images found for the given prompt');
        }
} catch (e) {
reply('Unable to generate images to the given prompt')
l(e)
}
})






// Gemini AI Command
cmd({
    pattern: "ai",
    react: "🤖",
    desc: "Ask anything to Google Gemini AI.",
    category: "ai",
    use: ".ai *<Your Question>*",
    filename: __filename
},
async (conn, mek, m, {
    from,
    quoted,
    body,
    isCmd,
    command,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    reply
}) => {
    try {
        const question = args.join(" ");
        if (!question) {
            return reply("❗️ Please provide a question.");
        }
        const prompt = `මම%${pushname},%මම%අසන%ප්‍රශ්න%වලට%සිංහලෙන්%පිළිතුරු%දෙන්න.%ඔබේ%නම%SIMI%AI.%ඔබ%WhatsApp%AI%Bot%කෙනෙක්.%ඔබව%හැදුවේ%Udhanika%කියන%කෙනෙක්.%සිතන්න%ඔබ%තරුණ%කොල්ලෙක්%කියල%හිතල%එම%භාෂාවෙන්%පිළිතුරු%දෙන්න.%Funny%වෙන්න,%ඔබ%bot%කෙනෙක්%කියල%හිතන්න%බැරි%විදිහට%සැබෑ%මනුස්සයෙක්%කියල%හිතන්%පිළිතුරු%දෙන්න.%Use%meaningful%emojis,%don't%use%English.\n%[Bro%=%මචං,%Bro%=%සහෝ,%බං,%Hi%=%අඩෝ,%සිරාවට,%එලම,%Funny%=%ආතල්]\n%මගේ%ප්‍රශ්නය:%${question}`;
        const response = await axios.post("https://api-ruddy-three.vercel.app/ai/blackbox?q=", {
            contents: [{ parts: [{ text: prompt }] }]
        }, {
            headers: { "Content-Type": "application/json" }
        });
        if (!response.data || !response.data.candidates || !response.data.candidates[0]?.content?.parts) {
            return reply("❌ SIMI AI couldn't provide a response. 😢");
        }
        const answer = response.data.candidates[0].content.parts[0].text;
        await reply(answer);
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        reply("❌ An error occurred while processing the question. 😢");
    }
});



cmd({
    pattern: "anime",
    alias: ["animesearch","sanime"],
    react: "⛩️",
    desc: "It gives details of given anime name.",
    category: "search",
    use: '.anime astro',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("*Give me a anime name !*")
let anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
let sections = []   
for (let i of anu.data) {
const list = {title: `${i.title}`,
rows: [
{
title: `${i.title}`, 
rowId: `${prefix}animeeg ${i.mal_id}`
}, 
]
}
sections.push(list)   
}
let listset = {
text: `┌───[𝗤𝗨𝗘𝗘𝗡 SIMI]

   *ANIME SEARCH*
   
*Search Results From* ${q}`,
footer: config.FOOTER,
title: "",
buttonText: '*🔢 Reply below number*',
sections
}
await conn.listMessage(
from, 
listset,mek)
} catch (e) {
  reply(cants)
  l(e)
}})


cmd({
    pattern: "animeeg",
    dontAddCommandList: true,
    filename: __filename
  },
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{
  await conn.sendMessage(from, { react: { text: '🔃', key: mek.key }})
  res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
  let txt = `*TITLE:* *${res.data.title}*\n*ENGLISH:* *${res.data.title_english}*\n*JAPANESE:* *${res.data.title_japanese}*\n*TYPE ANIME:* *${res.data.type}*\n*ADAPTER:* *${res.data.source}*\n*TOTAL EPISODE:* *${res.data.episodes}*\n*STATUS:* *${res.data.status}*\n*ONGOING:* *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n*DURATION:* *${res.data.duration}*\n*RATING:* *${res.data.rating}*\n*SCORE:* *${res.data.score}*\n*RANK:* *${res.data.rank}*\n*STUDIO:* *${res.data.studios[0].name}* `
  conn.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :mek }).catch((err) => reply(''))
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  } catch (e) {
  reply(cants)
  l(e)
  }
  })
  
  
