# 💬 Chatbot Gemini Web App

Proyek ini adalah aplikasi chatbot sederhana berbasis web yang menggunakan **Google Gemini API** untuk menghasilkan jawaban AI secara real-time.  
Frontend dibuat dengan **Vanilla JavaScript** dan **Tailwind CSS**, sedangkan backend menggunakan **Node.js + Express**.

---

## 🚀 Fitur
- Input pesan dari user via browser.
- Menampilkan chat bubble untuk pesan user dan bot.
- Menampilkan animasi "typing bubble" saat bot sedang memproses.
- Terhubung ke Google Gemini API untuk respons AI dinamis.
- Desain modern menggunakan Tailwind CSS.

---

## 🛠 Teknologi yang Digunakan
- Backend: Node.js, Express
- Frontend: HTML, Vanilla JS, Tailwind CSS
- AI Engine: Google Gemini API

---

## ⚙️ Instalasi & Menjalankan

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/chatbot-gemini.git
cd chatbot-gemini


2️⃣ Setup Backend
cd backend
npm install

Buat file .env di folder backend:
GEMINI_API_KEY=your_gemini_api_key
PORT=5000

Jalankan server backend:
node server.js


3️⃣ Setup Frontend
cd ../frontend
npm install
npm install tailwindcss @tailwindcss/cli

src/input.css:
@import "tailwindcss";

npx tailwindcss -i ./src/input.css -o ./style.css --watch
