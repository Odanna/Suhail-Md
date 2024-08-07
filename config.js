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
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_20_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDg2LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwickNxR2k0NTFBeDJDdnAwRUpVaHNOL2VUNlNSYSsrdXV4dktuQkhjM1JUQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOFI5c2hwbHpUYi1JUHhtTW1kQzFHZ1wiLFxuICBcInBob25lSWRcIjogXCIzMjE3OTAyOC03ZGRkLTRjMTgtODVmMy0zMDYwNTRjNDIyNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMjQ0LFxuICAgICAgMjEwLFxuICAgICAgMTkyLFxuICAgICAgMjEwLFxuICAgICAgMzQsXG4gICAgICAyNDQsXG4gICAgICAxMjQsXG4gICAgICAxMzMsXG4gICAgICAyNDcsXG4gICAgICA0MixcbiAgICAgIDI0MCxcbiAgICAgIDk1LFxuICAgICAgMTA4LFxuICAgICAgOTIsXG4gICAgICAxMTQsXG4gICAgICA0OSxcbiAgICAgIDE0OSxcbiAgICAgIDE0LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDEzNyxcbiAgICAgIDEzNyxcbiAgICAgIDMwLFxuICAgICAgMTkzLFxuICAgICAgMTgyLFxuICAgICAgNjgsXG4gICAgICAxOTgsXG4gICAgICAyNSxcbiAgICAgIDQ3LFxuICAgICAgMTk5LFxuICAgICAgMTkzLFxuICAgICAgMjI1LFxuICAgICAgMjUyLFxuICAgICAgMjgsXG4gICAgICA5MixcbiAgICAgIDEyNixcbiAgICAgIDEwMCxcbiAgICAgIDEwMixcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2NFdOVzc2MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzAwOTIyOToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzk5MTI2MTQ0OTQzMjk6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTNhMTY0RkVJcXh6YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXdU9NdGYyVjcwS2tBalpHUTJiWExxbFMzQUFyMlFZVitSWWJPclNaZFY4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklZRGp5RTdWR0luZkR3bTVna3dCOWl1RlNPZVp2eXEzK2tyS1JHbjVDaTQ5K2I4N2FnUEMrT2w5Q3RYR1Qxc0VCNGZ3UUZ6OUJQSTdVeVRyUVltWkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInp0dmJDSDBKMG0yS1diNmFaWVpiL2NzM0xzaGowT09WeE5jVldxZlpML1JEQ21vcHAwdGQ4TXJrUEx4QWUxVmFBd2hnWUJ0RFZGN3Y0ZTVVRVhCSEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTMwMDkyMjk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAyOTY0N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Anthony O Dan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
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
