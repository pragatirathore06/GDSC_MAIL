### 📄 `README.md`

````markdown
# Firefox Extension for Real-Time Email Tracking

This project is a **Firefox browser extension** that enables users to track whether their emails have been opened, by embedding a tracking pixel. The extension notifies the sender when the recipient opens the email — similar to Mailtrack on Chrome, but tailored for Firefox.

---

## 📌 Features

- Detects when an email sent by the user is opened by the recipient
- Inserts a **tracking pixel** into outgoing emails
- Backend logs email open events in real-time
- Works on all email platforms that allow image rendering
- Fully compatible with **Mozilla Firefox**

---

## 🧩 How It Works

1. A unique tracking pixel (an invisible image) is appended to outgoing emails.
2. When the recipient opens the email, the pixel loads from the backend server.
3. The server logs the open event and updates the sender’s dashboard (or sends logs).
4. The extension can display notification/log via backend or console.

---

## 🛠️ Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | Firefox Extension (Manifest V3), JavaScript |
| Backend      | Node.js, Express.js    |
| Tracking     | Dynamic pixel generation & route handling |
| Deployment   | Add-on submitted to Mozilla Add-ons |

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/firefox-mail-tracker-extension.git
cd firefox-mail-tracker-extension
````

### 2. Load the Extension in Firefox

1. Open Firefox and go to `about:debugging`
2. Click **"This Firefox"**
3. Click **"Load Temporary Add-on"**
4. Select the `manifest.json` file from the extension directory

### 3. Start the Backend Server

```bash
cd mail-tracker-backend
npm install
node server.js
```

> The backend generates and logs open events when the pixel is loaded.

---

## 🔗 Live Demo

* [Firefox Extension Link (if live)](https://addons.mozilla.org/...)
* [Demo Video](https://drive.google.com/...)
* [Backend Live URL (if deployed)](https://mailtracker-backend.vercel.app)

---

## 📁 Project Structure

```
GDSC/
├── mail-tracker-extension/    # Frontend Firefox extension
│   ├── manifest.json
│   ├── background.js
│   └── icons/
├── mail-tracker-backend/      # Node.js backend
│   ├── server.js
│   └── pixel.png
└── README.md
```

---

## 🔍 Assumptions & Notes

* Email clients must allow images to render for tracking to work
* The extension is a minimal proof-of-concept, meant for GDSC Summer verification
* Works best with self-hosted emails or platforms where email body can be edited directly

---

## 👤 Author

**Pragati Rathore**
Member, GDSC IIT Roorkee
Batch: 2026 | Mechanical Engineering
GitHub: [@pragatirathore](https://github.com/pragatirathore)

