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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_30_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrNlkvWnZaajNMNFpyM3VWNmJpMGlYdVJzYU5PMTJiRXE0Z2t1YmtSYmNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4d0JIZ0xTOVNoNmZSYnhPai1jSkt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0YmM1YzEwLTZmNzEtNGY3YS05MmYzLWUwMWIxZmI0MjdhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAxNDcsXG4gICAgICAxNzgsXG4gICAgICAxNjIsXG4gICAgICAxNTUsXG4gICAgICAxMTAsXG4gICAgICAyMTksXG4gICAgICAxMTcsXG4gICAgICA3OCxcbiAgICAgIDk5LFxuICAgICAgMjQ0LFxuICAgICAgMTUxLFxuICAgICAgNzAsXG4gICAgICAxNTgsXG4gICAgICA5NyxcbiAgICAgIDc5LFxuICAgICAgNDYsXG4gICAgICA4LFxuICAgICAgMTM3LFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgODIsXG4gICAgICAxNTAsXG4gICAgICAxNDUsXG4gICAgICAyMDAsXG4gICAgICAyMDYsXG4gICAgICAxMjYsXG4gICAgICAyNDIsXG4gICAgICAzOCxcbiAgICAgIDI1MSxcbiAgICAgIDE1MyxcbiAgICAgIDE1MSxcbiAgICAgIDIxMSxcbiAgICAgIDE2OCxcbiAgICAgIDE0OSxcbiAgICAgIDEyMSxcbiAgICAgIDg0LFxuICAgICAgMjUwLFxuICAgICAgNDYsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDFSR0FWTk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDA2MTU1Njg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcwNzI5MzM3NjU1MzIzOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVncjhZSEVPbUMrN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5LzY1cnVjV1FBcUhoSzlteTg3WkttUVFRakszMVd6L3dYbkRXVmd2UW5jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlKc2JSY1FXdTRVYXJIRSsrQTQzT1FkSkw4K0dQZ29QTXJ5cC9ZSkpBTUYzVU9kcm5TQXJYT0N3ZUpVRGxUc043a3M3cWJMSkI2dG0yZHo5eGk4T0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtIZjZIS3FtbkFvNGpwZDFPVFR3UitQaTYxUmtRcGJGbU9FakRhUGViZ3lKcU9GRDBCS29yaXBCWERyYVBTdTB4NHB5dzBmbFZQek5rQW5LeHFSTUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDA2MTU1Njg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2ODAyMzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNTXRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1NdC5qc29uIjogIntcImtleURhdGFcIjpcIk1wTW56K3V5QnVxdytod0thcTFWcGNvaDN2NWdtajBXMWpvajc4VmZ3SEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyNjYyMzA0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTUwNDg3NzA3M1wifSIKfQ=="  // PUT your SESSION_ID 


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
