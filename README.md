# 🎥 Video Streaming Platform

A modern video streaming platform built with React.

## 🚀 Features

- 🔐 User Authentication with Firebase
- 🌐 Multi-language Support (English & Traditional Chinese)
- 🎥 Video Streaming
- 🎯 Dynamic Content Loading
- 📱 Responsive Design
- 🔍 Title Cards & Categories
- 🌙 Dynamic Navbar with Scroll Effect

## 🛠️ Tech Stack

- React 18.2.0
- React Router DOM 7.0.2
- Vite 5.2.0
- Firebase 11.1.0
- i18next 23.11.5
- react-i18next 14.1.2
- react-toastify 11.0.2
- ESLint 8.57.0
- TypeScript Types

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm 9.x
- Firebase Account (for authentication and database)
- TMDB API Key

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yungyuchen/Video-Streaming-Platform.git
cd video-streaming-platform
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**

```bash
cp .env.example .env
```

Fill in your credentials in `.env`:

- Firebase configuration from your Firebase project settings
- TMDB API token from your TMDB account

4. **Start the development server**

```bash
npm run dev
```

## 📁 Project Structure

```
Video-Streaming-Platform/
├── src/
│ ├── assets/          # Static assets (images, icons)
│ │ └── cards/         # Title card images
│ ├── components/      # Reusable components
│ │ ├── Footer/
│ │ ├── Navbar/
│ │ └── TitleCards/
│ ├── i18n/             # Internationalization
│ │ ├── locales/        # Translation files
│ │ └── index.js        # i18n configuration
│ ├── pages/            # Page components
│ │ ├── Home/
│ │ ├── Login/
│ │ └── Player/
│ ├── App.jsx           # Main app component
│ ├── firebase.js       # Firebase configuration
│ └── main.jsx          # Entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 🌐 Internationalization

The application supports:

- English (en_US)
- Traditional Chinese (zh_TW)

## 🔒 Environment Variables

Required environment variables in `.env`:

VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_TMDB_TOKEN=

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
