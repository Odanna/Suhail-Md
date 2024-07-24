const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Darkraider:<Lovingyou38>@darkraider.1knyv2t.mongodb.net/?retryWrites=true&w=majority&appName=Darkraider"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349013009229" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349013009229";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_21_24_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDg5LFxuICAgICAgICA3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDczLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInowb2hRVUFJSjJkS2lqdGt1QzRsOWUwRFRZNFJQUXBDYXZYYVlNdUlmckE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImsxRi1QUkFEUUhpU2R3Ri0wbVBhTFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjczNDA0YzYtODg0NC00Nzk4LTgxZWItNTc5MThhZTIzMzYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMjMzLFxuICAgICAgOCxcbiAgICAgIDIzMCxcbiAgICAgIDIyNCxcbiAgICAgIDIxNCxcbiAgICAgIDIyNCxcbiAgICAgIDI0LFxuICAgICAgMjksXG4gICAgICAxNTQsXG4gICAgICAyNSxcbiAgICAgIDk0LFxuICAgICAgMjQ1LFxuICAgICAgMjA4LFxuICAgICAgMjA3LFxuICAgICAgMTgwLFxuICAgICAgMTY3LFxuICAgICAgMjUzLFxuICAgICAgMjM1LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDEyNCxcbiAgICAgIDE4MixcbiAgICAgIDE0OCxcbiAgICAgIDIxMixcbiAgICAgIDE0LFxuICAgICAgMTkxLFxuICAgICAgNjEsXG4gICAgICAxOTksXG4gICAgICAyMDIsXG4gICAgICAzMSxcbiAgICAgIDE4MixcbiAgICAgIDE1NyxcbiAgICAgIDMzLFxuICAgICAgNDAsXG4gICAgICA4MCxcbiAgICAgIDE4LFxuICAgICAgMzIsXG4gICAgICA2NixcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpFVENSSlJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIzODIwNjM4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY5MDU4ODQ2MjYxNDE0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnU0aGFnR0VJUGloYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBLzBUTlZNaS9KWEdEdzM0U1ZtZWdJUkVNeU9kcHFmMGtPVjhBdkYyU0NjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtMUjFzVW5NM2k4RTF2TTRKTCs1TGU1RUo3d3BROCtxeE0wTFZCeWlBNkNNZitSK2ZCcHhGRlJHeHdxL2lEN2JKbzBCUnVNcG5nbENoZXZZRHJQOEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImR5V0lzTURIb1RSWC85UDBybWJWKys5SkNncmh2cVRGUmozTmdrVUVaVFNtU2ZINjM3S3BsQ0FaczVOenBSV3NsZmJ2cEpBczc1d2FQNEFwUlNuTGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjM4MjA2Mzg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4NTYyNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIdTFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh1MS5qc29uIjogIntcImtleURhdGFcIjpcIk80ditzejdTZVNBT1RyWkFZQ0ttSnFWY2s0Z1VBT0UzVmdsVFVTaDNhckE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NDU4NzkzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODU2MjcwMDU2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Dark raider",
  packname: process.env.PACK_NAME || "Dark raider",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Dark raider",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Dark raider"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb =true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
