# 🚀 Crypto Tracker

A modern **Cryptocurrency Tracking Platform** built with **React.js** that provides real-time crypto market insights, interactive charts, coin comparison, watchlist management, and responsive dashboards powered by live market APIs.

---

## 🌐 Live Demo

🔗 https://cryptotracker1-ng3darllo-shaik-sameer-s-projects1.vercel.app/

---

## ✨ Features

- 📈 Real-time cryptocurrency price tracking
- 🔍 Dynamic coin search functionality
- 📊 Interactive charts with historical market data
- ⚖️ Compare multiple cryptocurrencies
- ⭐ Watchlist management using LocalStorage
- 📱 Fully responsive UI for all devices
- 🎨 Smooth animations using Framer Motion
- 🌐 API-driven architecture
- ⚡ Optimized API handling with caching & debouncing

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Material UI
- Framer Motion
- Chart.js

### Backend
- Node.js
- Express.js

### APIs
- CoinGecko API

---

## 📂 Project Structure

```bash
crypto-tracker/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── functions/
│   ├── assets/
│   └── utils/
│
├── server/
│   ├── cache/
│   └── index.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/sameershaik07/Crypto-Tracker.git
```

### 2️⃣ Navigate to Project

```bash
cd Crypto-Tracker
```

### 3️⃣ Install Frontend Dependencies

```bash
npm install
```

### 4️⃣ Install Backend Dependencies

```bash
cd server
npm install
```

---

## ▶️ Run Locally

### Start Backend Server

```bash
cd server
npm start
```

### Start Frontend

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 🌐 Environment Variables

Create a `.env` file in the frontend root:

```env
REACT_APP_API_URL=YOUR_BACKEND_URL
```

Example:

```env
REACT_APP_API_URL=https://your-backend.onrender.com
```

---

## 📸 Features Overview

### 📊 Dashboard
- Real-time cryptocurrency market tracking
- Trending coins and live price updates

### 📈 Coin Details
- Interactive historical charts
- Market statistics and detailed analytics

### ⚖️ Compare Page
- Compare multiple cryptocurrencies
- Dual-axis chart visualization

### ⭐ Watchlist
- Save favorite cryptocurrencies locally
- Persistent watchlist using LocalStorage

---

## 🚀 Deployment

### Frontend
- Deployed on Vercel

### Backend
- Deployed on Render

---

## ⚡ Performance Optimizations

- Reduced CoinGecko API rate-limit issues
- Implemented backend caching
- Optimized API calls using `useEffect`
- Added debouncing for chart updates
- Reusable and scalable component architecture

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

---

## 👨‍💻 Author

### Shaik Sameer Hussain

- GitHub: https://github.com/sameershaik07

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub.
