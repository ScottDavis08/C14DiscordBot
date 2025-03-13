# C14 Discord Bot

## 📌 About
This is a custom Discord bot built using Node.js. The bot runs locally and can be configured to start automatically on Windows. It supports environment variables for easy deployment on any system.

---
## ⚙️ Setup Instructions
**1️⃣ Prerequisites**
Ensure you have the following installed:
- [Node.js (LTS version)](https://nodejs.org/)
- [Git (Optional)](https://git-scm.com/)
- A Discord bot token (from [Discord Developer Portal](https://discord.com/developers/applications))
---
**2️⃣ Installation**
1. **Clone the repository** (or download the ZIP):
   ```sh
   git clone https://github.com/your-username/discord-bot.git
   cd discord-bot
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
---
## 📄 Configuration
**3️⃣ Set Up Environment Variables**
1. Rename `.env.example` to `.env`:
   ```sh
   mv .env.example .env  # On Windows, rename manually
   ```
2. Open `.env` and set the required values:
   ```
   BOT_TOKEN=Taken from the Discord Developer Tools window where you create the bot.
   CLIENT_ID=Taken from the General Information of the Developer Tools window (Application ID)
   GUILD_ID=# Taken from the server in discord (turn on tev tools)
   ```
- Replace each value accordingly.
---
## 🚀 Running the Bot
**4️⃣ Start the Bot Manually**
To run the bot manually, use:
   ```sh
   node index.js
   ```
**5️⃣ Run on Windows Startup**
1. Rename `botStart.bat.example` to `botStart.bat`
2. Edit the file to match your bot directory:
   ```bat
   @echo off
   cd /d "C:\path\to\your\bot"
   node index.js
   ```
3. Add it to **Task Scheduler**:
   - Open `taskschd.msc`
   - Click **Create Basic Task**
   - Select **Run at Startup**
   - Choose the `botStart.bat` file

✅ The bot will now run **automatically on system boot**.

---
## 🌍 Deploying on Another Machine
To deploy the bot elsewhere:
1. Copy the project folder to the new machine.
2. Install **Node.js** and **dependencies**:
   ```sh
   npm install
   ```
3. Copy `.env.example` to `.env` and set new values.
4. Set up **botStart.bat** and **Task Scheduler**.
5. Start the bot manually:
   ```sh
   node index.js
   ```
---
## 🛠 Troubleshooting
- **Bot doesn’t start?**
   - Ensure `.env` is configured correctly.
   - Run `node index.js` manually and check errors.
- **Bot crashes?**
   - Consider using `pm2` to auto-restart the bot:
     ```sh
     npm install -g pm2
     pm2 start index.js --name "discord-bot"
     pm2 save
     pm2 startup
     ```
---
## 📜 License
This project is licensed under the MIT License.

---
## ✉️ Contact
For support, contact `Scott.Davis08@gmail.com`.
