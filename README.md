# 💍 The Proposal Journey

A heartfelt interactive web experience that captures a beautiful love story through cinematic storytelling, emotional transitions, and a magical proposal — complete with rose petals, confetti, and a timestamped email delivery using EmailJS.

---

## ✨ Features

- 🌸 **Animated Story Page** – Elegant card transitions, soft sparkles, and floating hearts.
- 💌 **Proposal Page** – Confetti explosion, falling rose petals, and emotional confirmation screen.
- 📬 **Email Notification** – Sends a personalized love message to the chosen one using EmailJS.
- 📸 **Memory Slideshow (Coming Soon)** – Romantic Polaroid-style slideshow of shared memories.

---

## 📁 Project Structure

src/
├── components/
│ └── (Reusable UI elements)
├── pages/
│ ├── Story.jsx # Intro story timeline
│ ├── Proposal.jsx # Proposal interaction with confetti + EmailJS
│ └── Slideshow.jsx # (Optional) Memories with image carousel
├── App.jsx
├── main.jsx


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/proposal-journey.git
cd proposal-journey

npm install 

3. Set up EmailJS
Go to EmailJS Dashboard

Create a new Email Service

Create an Email Template with variables: to_name, from_name, message

Get your Service ID, Template ID, and Public Key

4. Update your code
In Proposal.jsx, replace:
'service_xxxxx', 'template_xxxxx', 'your_public_key'

With your real EmailJS values.

🧪 Development:
npm run dev
Start the app locally at http://localhost:5173  or Vite's default port.

🛠 Tech Stack
⚛️ React with Vite

🎨 Tailwind CSS for styling

💌 EmailJS for sending messages

🎉 Canvas-Confetti for animations

🌹 Custom CSS animations for rose petals and hearts

💡 Future Enhancements
📸 Romantic slideshow with polaroid animations

🎵 Background music with volume control

📥 Downloadable "Love Capsule" PDF

🌙 Dark/light toggle based on mood

🙌 Acknowledgements
To every heartbeat, every memory, every “Yes” —
this project is dedicated to the moments that change lives forever.

🧠 Author
Made with ❤️ by [Sanjay.R / QLeap.Ai]
📬 Contact:ragsanjay9@gmail.com

📜 License
This project is licensed under the MIT License.


---
