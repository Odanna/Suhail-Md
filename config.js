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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "239013009229";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_13_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2Ui92MmsvcnpvUUVTSU5jMHdzZXFuVStVOExYdmNIaVFQdDlWWkFOMXUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwdjRtd1RUR1RrR0JPMEh5eE8tbDNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE1NDFmZjQ4LTIyZmItNDdhMi1iODYzLTE0OWZlNDZmNGQ5M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAxNzEsXG4gICAgICAxMjcsXG4gICAgICAzNSxcbiAgICAgIDIzNCxcbiAgICAgIDU2LFxuICAgICAgMjQ3LFxuICAgICAgMTAsXG4gICAgICAyMDMsXG4gICAgICAxMTksXG4gICAgICAzNyxcbiAgICAgIDEyMCxcbiAgICAgIDIwNyxcbiAgICAgIDE0NyxcbiAgICAgIDIzNixcbiAgICAgIDE1MSxcbiAgICAgIDgwLFxuICAgICAgNjgsXG4gICAgICAxOTYsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAxMDcsXG4gICAgICA1OCxcbiAgICAgIDM1LFxuICAgICAgMTEyLFxuICAgICAgMTAzLFxuICAgICAgMTE0LFxuICAgICAgMzUsXG4gICAgICAxMDcsXG4gICAgICAxODIsXG4gICAgICAxMzgsXG4gICAgICA3LFxuICAgICAgMjksXG4gICAgICAyMjksXG4gICAgICAyNTUsXG4gICAgICAyNTMsXG4gICAgICAxNzEsXG4gICAgICA4OSxcbiAgICAgIDcxLFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdDVFNLMjZGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzMDA5MjI5OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3OTkxMjYxNDQ5NDMyOToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLVGxvbEFRbXRMNXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjMwNHY2M2h2Q2d6eUdXZ1Z1T3BDVFp5czVZV3UvMmg5VlcwQjJobEVSMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHdabFY4aU9VWGNmM1hQMExnREZFanRZMlVCbXA5Z2FBV3lRTTd4RFFJeExKN2pmN3RCdnB1Zk9PdlhENlJLc1FWTCtXZkxjMTZ2UmVoQlc1eWxJQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV3Z6WHBtK3BXYjM1bmd5TUpkQXA5UVJrSWU2K2s0VTl0eGYxSVk5NVcydktaOGhCejFvZThmazFUNi9ZMWlxdTA0ZmRmY290NmYvY2JKWWRJN29rQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMzAwOTIyOToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY1NzYzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Dark raider",
  packname: process.env.PACK_NAME || "Dark raider",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
