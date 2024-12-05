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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_57_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIRVZ6K2VCczFnQzBNS0Nndm5OcW5pOWZwblI4RTIra2lKUlRJR0pNMFQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5MmlRajBrNVF6NlcwOHZLd2ZiVm5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxNGM5MDk2LTE0MzItNDFmMC1hMzk0LTA4ZjUzZGJkNGI5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDcyLFxuICAgICAgMTU1LFxuICAgICAgOTEsXG4gICAgICA2NixcbiAgICAgIDEyLFxuICAgICAgNTgsXG4gICAgICAzNCxcbiAgICAgIDE4NyxcbiAgICAgIDY0LFxuICAgICAgMTc0LFxuICAgICAgMjA1LFxuICAgICAgNzUsXG4gICAgICAyMzMsXG4gICAgICAyNTMsXG4gICAgICAxNjUsXG4gICAgICAyNixcbiAgICAgIDI0OSxcbiAgICAgIDksXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMjAwLFxuICAgICAgMjA4LFxuICAgICAgOTMsXG4gICAgICAyMTgsXG4gICAgICA1MixcbiAgICAgIDUzLFxuICAgICAgMjI2LFxuICAgICAgOSxcbiAgICAgIDIxMixcbiAgICAgIDY3LFxuICAgICAgMjE4LFxuICAgICAgOTcsXG4gICAgICAxODAsXG4gICAgICAxNDAsXG4gICAgICAyMTUsXG4gICAgICAxMzUsXG4gICAgICAyMDcsXG4gICAgICAxMDMsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzdFUVhBWjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTI0NTM5OTM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1Njg2OTc3MTQ1MjU2NjoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdlEwcU1CRUlLTHlMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInA2VnpveUlUdW9uTHMzZW9MZWUrNTRtNXZhZHdKTStaZGQ0Y2Q1VDhMQTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieWw1OGo2ZjhaZWhqT0RuZHdMZjh1U0MrQmh5MHZwTjhnZHpBRnVNaFVxbWptOTRpdE1BcVlyVDNKWVlualByd0NCRGt1ZFNHZmk2Y0RLWG14MU16QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWnBraFVYcWFvbVV3TVQwWElEWi9GYU8wVXJNd3RYRkREMzVqWFc0Qmh1VlUwcGR3UHorTFFlOEpnZEpjbXB0M3dpdU9Sd25wbzkvbjhhcUVvQmJnaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1MjQ1Mzk5MzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDI4NjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVI4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUjguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzTlN0d3BjNlBIcjUyVzUrdVJObXNlVWpOcHEwMW1mQXphd2NMRDBSYWo4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0MzE4OTU3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzQyODQ4MDUzM1wifSIKfQ=="  // PUT your SESSION_ID 


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
