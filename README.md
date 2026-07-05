<div align="center">

# 🎮 Game Hub

A game discovery web app for browsing, searching, and filtering games by genre, platform, and popularity — powered by the RAWG API.

[Live Demo](https://game-hub-mkv.vercel.app/)

</div>

---

> 🚧 **Work in progress** — this project is actively being improved.

## Features

- 🔍 Search games by title
- 🗂️ Filter by genre and platform
- ↕️ Sort by relevance, date, popularity, or rating
- 🌗 Light/dark mode toggle
- 💀 Skeleton loading states
- 📱 Responsive, CSS Grid layout

## Tech Stack

React 18 · TypeScript · Vite · Chakra UI v3 · Axios · next-themes · RAWG API

## Project Structure

```
src/
├── components/   # UI components (NavBar, GameGrid, GameCard, selectors, etc.)
├── hooks/        # useData, useGames, useGenres, usePlatforms
├── layouts/      # MainLayout — top-level grid + shared filter state
├── services/     # api-client, http-service, image-url
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
git clone https://github.com/mkvalers/game-hub.git
cd game-hub
npm install
```

Create a `.env` file with your [RAWG API](https://rawg.io/apidocs) credentials:

```env
VITE_API_BASE_URL=https://api.rawg.io/api
VITE_API_KEY=your_rawg_api_key_here
```

Then run:

```bash
npm run dev
```

| Script | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |

## License

MIT

## Acknowledgements

- [RAWG Video Games Database](https://rawg.io/) for the game data API
- [Chakra UI](https://chakra-ui.com/) for the component library
