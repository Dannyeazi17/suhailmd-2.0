const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348152453993";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_23_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOGluUldTcWFRaXNsL3BDS3gyVFFqOFd6Tk9NNmE4T0J5aTkrdGhSd3h2ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTUyNDUzOTkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NTY2REUwQjI1NTg3OUVBMTAyMThCNTlFNTk3OUYzRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA4MzA5NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSVJVRHZGNC1USjJibWtZVDE2SXJwd1wiLFxuICBcInBob25lSWRcIjogXCI0Yzc0YjM3Yi1iNzExLTQ4NTktOTcwZS02MDIzMDM3MzVkZjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTAyLFxuICAgICAgMjEsXG4gICAgICA1NyxcbiAgICAgIDE4NixcbiAgICAgIDI4LFxuICAgICAgMTU0LFxuICAgICAgODIsXG4gICAgICAyMTEsXG4gICAgICAyOCxcbiAgICAgIDE5OSxcbiAgICAgIDE1LFxuICAgICAgNjUsXG4gICAgICA4MSxcbiAgICAgIDkyLFxuICAgICAgMTY4LFxuICAgICAgMTIzLFxuICAgICAgODEsXG4gICAgICAxMDEsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTEyLFxuICAgICAgODYsXG4gICAgICA4NCxcbiAgICAgIDQ1LFxuICAgICAgMjU0LFxuICAgICAgMTI4LFxuICAgICAgMjEsXG4gICAgICAxOSxcbiAgICAgIDE2LFxuICAgICAgMTc3LFxuICAgICAgMTM4LFxuICAgICAgNjksXG4gICAgICA1MyxcbiAgICAgIDk2LFxuICAgICAgMjYsXG4gICAgICAxMjksXG4gICAgICAyNTAsXG4gICAgICAxNTQsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCWUw1QUozUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1MjQ1Mzk5MzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU2ODY5NzcxNDUyNTY2OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YUTBxTUJFUHJFcWJrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicDZWem95SVR1b25MczNlb0xlZSs1NG01dmFkd0pNK1pkZDRjZDVUOExBOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxLzR4Q3ZXMGpJUGRhZUVmMjZxRmdLcEVjUmZBRVdzb05kY0ZyQUZnaFZmMUxmVGQyekFGVU1USy9HendpZnE1TlU5TjhML2d0dkNjampQT3RWd1dEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvbzZ2M1E1NHFwRmk4bldJajgxZEd5ZWJtc3Nzb2d5dWJuZzkzR29oV0ZQdkJ5RXJoSFI3dERvalc5QUIyZmw4ZE9Gd2RWdmUvems4RVpaazErZ2tEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTUyNDUzOTkzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA4MzA5NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQc1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBzWC5qc29uIjogIntcImtleURhdGFcIjpcInhFQkdRMzVZRm5tV2x6ZVYva0hjTXlkTzA1WEkrU1drZTVJbGdZSEtXdDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQzMTg5NTczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1NjMwNDUyNjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
