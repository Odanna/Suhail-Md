const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_12_34_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9BelVJSjRjQ2pOQUJLKzcweVJmOXVTVy9nVy82cTBWY2NBZUlUa1dvZnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImN2R2ZUMG5DUlpHekR4TG8tNzIzV0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzdkZDUxN2QtZGZiMC00NThmLWFkOWEtYWU5ZDdmNTkwMzFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDEzNixcbiAgICAgIDI3LFxuICAgICAgMTUyLFxuICAgICAgNTgsXG4gICAgICAxMixcbiAgICAgIDEyNyxcbiAgICAgIDE1NixcbiAgICAgIDQ2LFxuICAgICAgNjIsXG4gICAgICAxMDAsXG4gICAgICAxMjMsXG4gICAgICAyMDMsXG4gICAgICAyMyxcbiAgICAgIDEwMixcbiAgICAgIDExOCxcbiAgICAgIDE2OSxcbiAgICAgIDIyOSxcbiAgICAgIDUzLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAzNyxcbiAgICAgIDE4NSxcbiAgICAgIDI0OSxcbiAgICAgIDEwOCxcbiAgICAgIDEwMCxcbiAgICAgIDI0MCxcbiAgICAgIDExMyxcbiAgICAgIDE3OSxcbiAgICAgIDExNixcbiAgICAgIDIzMyxcbiAgICAgIDE0LFxuICAgICAgMTEzLFxuICAgICAgNixcbiAgICAgIDE4MCxcbiAgICAgIDExOSxcbiAgICAgIDg3LFxuICAgICAgMTYsXG4gICAgICAyOCxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHTjlNNkozQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3NzExNzQ5OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzA5NTI2MTY4ODY1MDE6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ0JuZU1HRU4yWDVMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJ6SWp6VnlIZ2VQVW1SQlJFSS92bkdPaVJ1bjlNMWI4SEVML3VqN243Qzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0V3emttUEswNjVNWjZEUUFjcGVlVUp6bEx0NkwrMXhXcWZSMTEwc0FrZ2xNTWoyNjBWZDVYMCtFR2l4Qnh6VCs5Q0FpSG9MTU1tUXVJSHFaYnlUQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVGlWOU0wSjRCbkgrbGljUmRUMzQ3cW5QNURPSEljR3hzaDdrdVBvYWw5ZUFkdmFWcEtNTmU4TUhSc3NwMEkwbWpnVGFRSkN6SDNwVmhVT2hRK1RUaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3NzExNzQ5OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMwNjA4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ1TVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDVNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTW42dGlzL0hIdXo3Vm85Ly9VbWNPNXhpY1htbEdBblp4SmI1N1NYbzdkTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODE4NzA2MTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMzA2MDE4Mjg5XCJ9Igp9"  // PUT your SESSION_ID 


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
