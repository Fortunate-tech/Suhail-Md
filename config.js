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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348144225467";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_24_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWNoN1lxRDRYVEcyRllYbW92Vlk3WkFTRERwOUVkSEE3bWZOcitBQ1NDVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGZLSlk4T25ROEtyb1M3QnRJUloxQVwiLFxuICBcInBob25lSWRcIjogXCIxNjg3MGU2OC0xOWE1LTRiZTEtYmM1NC01NjllYWY5MmU3ZWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMTAsXG4gICAgICAyMzAsXG4gICAgICAyMjYsXG4gICAgICAxODgsXG4gICAgICA4NSxcbiAgICAgIDQ5LFxuICAgICAgNyxcbiAgICAgIDIzNyxcbiAgICAgIDE0NixcbiAgICAgIDIxMCxcbiAgICAgIDk3LFxuICAgICAgMTM5LFxuICAgICAgMTcsXG4gICAgICAzOSxcbiAgICAgIDI0LFxuICAgICAgOTMsXG4gICAgICA2NSxcbiAgICAgIDE4NyxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA5MixcbiAgICAgIDEyNSxcbiAgICAgIDE4MyxcbiAgICAgIDU1LFxuICAgICAgNjUsXG4gICAgICA4MCxcbiAgICAgIDIxNCxcbiAgICAgIDExNyxcbiAgICAgIDM3LFxuICAgICAgMyxcbiAgICAgIDIwMCxcbiAgICAgIDI0MCxcbiAgICAgIDIzMSxcbiAgICAgIDMzLFxuICAgICAgMzIsXG4gICAgICAxODYsXG4gICAgICAyMDEsXG4gICAgICA5MSxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkVYNUFHVlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDQyMjU0Njc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkZvcnR1bmF0ZSBUZWNoXCIsXG4gICAgXCJsaWRcIjogXCIxMDg3MjI5Njk5NjQ3ODI6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaW4vOHdCRUpQc3BiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhKamJCaHRGWWcvU2EzV1NHQ2xsNnRQMEFwZkZLbkZKS0pmcEpuKzVzU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYWt6VzcwK2duZGtycXNrWVJMN1QvM2tPZlJ1Z3FZdlMxWmRaV2RQQ2xzdmJ4S3IrSUU3c255a1VnNnJSNHI1NzNsUHprdmRXcXJ3SUVxbzJPNGI2Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRGluQVZvcnh1TnV4NmpxWk9ESnloSUhqKy9OamN6MHdHZGZWSkFTUnU5bUgrVVlGZHdkWjZJTGQ4WTZib3FyTzZaQi9Ma0hzbmlqZ1BBb2dzZlBWQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NDIyNTQ2NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzODE4NDdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
