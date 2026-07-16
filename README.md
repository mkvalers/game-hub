<div align="center">

# 🎮 Game Hub

A game discovery web app powered by the RAWG API.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-v3-319795?logo=chakraui&logoColor=white)](https://chakra-ui.com)

[Live Demo](https://game-hub-mkv.vercel.app/)

</div>

---

## ✨ Features

- 🔍 Search games by title
- 🗂️ Filter by genre and platform
- ↕️ Sort by relevance, date, popularity, or rating
- 🌗 Light/dark mode toggle
- ♾️ Infinite scroll
- 📱 Responsive design

## 🛠️ Tech Stack

React 18 · TypeScript · Vite · Chakra UI v3 · Zustand · TanStack React Query · Axios · React Router

## 🚀 Getting Started

```bash
git clone https://github.com/mkvalers/game-hub.git
cd game-hub
npm install
```

Create a `.env` file with your [RAWG API](https://rawg.io/apidocs) key:

```env
VITE_API_BASE_URL=https://api.rawg.io/api
VITE_API_KEY=your_rawg_api_key_here
```

Then run:

```bash
npm run dev
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint with ESLint |

## 📄 License

MIT
