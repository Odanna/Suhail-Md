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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_14_04_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDU3LFxuICAgICAgICA3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaG5aTjVFeGhVcmN1R3BjVE00bmFGVXdtWG14SU5ZZ0hmU2dNSWxEcmx1Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVFMVE85Rl9RTDZILTQxYmZ1RWgwd1wiLFxuICBcInBob25lSWRcIjogXCJhNzE3NzY5Yi0xZjA0LTQxYWMtODNjOS00MTJjYzU2OGFhZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgNDEsXG4gICAgICAxMTksXG4gICAgICAyMTksXG4gICAgICAxMTYsXG4gICAgICA2NCxcbiAgICAgIDk3LFxuICAgICAgMTg1LFxuICAgICAgOTEsXG4gICAgICA0LFxuICAgICAgODcsXG4gICAgICAyOCxcbiAgICAgIDE4MSxcbiAgICAgIDE3NyxcbiAgICAgIDE5MyxcbiAgICAgIDcxLFxuICAgICAgMTgsXG4gICAgICAyMjUsXG4gICAgICAxMTAsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE4MyxcbiAgICAgIDIwNCxcbiAgICAgIDE3NixcbiAgICAgIDg3LFxuICAgICAgNjIsXG4gICAgICA4NixcbiAgICAgIDEwNyxcbiAgICAgIDE1MyxcbiAgICAgIDIwNixcbiAgICAgIDY3LFxuICAgICAgMTE0LFxuICAgICAgMjM1LFxuICAgICAgMTM0LFxuICAgICAgODUsXG4gICAgICAyMjQsXG4gICAgICA2MCxcbiAgICAgIDIxOCxcbiAgICAgIDI1NCxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjExWFNKOTVHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIzODIwNjM4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY5MDU4ODQ2MjYxNDE0OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjI0aGFnR0VQLzl6YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBLzBUTlZNaS9KWEdEdzM0U1ZtZWdJUkVNeU9kcHFmMGtPVjhBdkYyU0NjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1ZdGQrWWJJYU54ZE1INkpNNWNjQjAyR05sZnNBQnlwdThwU1VNRE1la0Q2TFdCYmNoVVVVMjM0RTk1V2R5akpUV0F3cGErL0crL1g2TVpWYkI4ZENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlg1cjgzZGtqNzErcWtxUkZST2tydEg0b1QrSVFQSHBZcnZ4U09LZHhoUUZNNnJoeHFpOFVxbEVOc3J3dW9vazRjcFBpUWNNeUIxaWtVRVA0VHBtSWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjM4MjA2Mzg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMzk0OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQM2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAzai5qc29uIjogIntcImtleURhdGFcIjpcInY1bS9SLzRaZmJRS3lNZkcvM2l0dEpLYnkxTTN0anZBS0k2bEVWbG1TUGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NDU4NzkzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzAzOTI3NzEzNVwifSIKfQ=="  // PUT your SESSION_ID 


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
