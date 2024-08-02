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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_16_05_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgMjM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNEMkJ3NmhVOVZ0a1UvT0pUK245bnBOUzJiNk5DOFdvRDgwZk1LKzlRZXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZTU0ZPeG83VF9PZDE0T1VTX2ExZHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2JhNjI2YzktZGNjOC00NzA2LWFiYjUtZTdmM2VlNmZlZjM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDgxLFxuICAgICAgMSxcbiAgICAgIDE5MSxcbiAgICAgIDM2LFxuICAgICAgNjYsXG4gICAgICA2MCxcbiAgICAgIDQ4LFxuICAgICAgMTI4LFxuICAgICAgMjQ0LFxuICAgICAgNzcsXG4gICAgICAxMzcsXG4gICAgICAxMDUsXG4gICAgICAxOTYsXG4gICAgICAxMyxcbiAgICAgIDIyNSxcbiAgICAgIDIzNyxcbiAgICAgIDQsXG4gICAgICAxODcsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDE2NyxcbiAgICAgIDEwMixcbiAgICAgIDE5MCxcbiAgICAgIDI0NixcbiAgICAgIDIyMyxcbiAgICAgIDEzNixcbiAgICAgIDIwMSxcbiAgICAgIDEyMSxcbiAgICAgIDE0NSxcbiAgICAgIDE3NSxcbiAgICAgIDU3LFxuICAgICAgNjEsXG4gICAgICAyMzMsXG4gICAgICA3OCxcbiAgICAgIDE5MyxcbiAgICAgIDE2OSxcbiAgICAgIDE1OSxcbiAgICAgIDIwNixcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE2SjVYQjhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY0MTYyOTY2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDg5OTQzNzEwMTE5NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kzZ2pMWUJFS3FIdExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV2dFUnAxWVdjNGx6WGtvRVdoeWp5dnFYcVg5RGt4N2Q2VSswczVxZmNFYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5ejFNcTNSUXEyMU9YU3BkZVhqYVMzRmRmcTBSUlBkOFd0c25MOXFEejdLYXZmSG91MnUvV2k5alBWclJHamNWSkFoZkZkcU9MNmpMTVVhNS9pbUlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvMFdiNkZHUkh4Njk5TTNlUy9KY0p3RkUzT2dXVSt2VHRCWlA1K2xMUEtiVGlZajZGMGoyWitkWjdqbjNaQXBITmhJdjZ0T1JxNWpLcnBXcFVrVS9Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY0MTYyOTY2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYxNDcwMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
