# 🎬 MoviesFromAPI

A simple movie app that fetches data from the [TMDB API](https://www.themoviedb.org/).  
This project allows users to browse movies and manage a basic watchlist — perfect for learning API integration and React basics.

---

## ✨ Features

- Fetch movies from TMDB API
- Add movies to your watchlist
- Remove movies from the watchlist
- Simple and easy-to-understand codebase

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

- **Node.js** installed (v16+ recommended)
- **npm** or **yarn**

### 2️⃣ Generate a TMDB API Key

Before running this project, you **must generate an API key** from [TMDB](https://www.themoviedb.org/).  
Without it, the app cannot fetch movie data.

#### Steps to get your API key:
1. Go to [https://www.themoviedb.org](https://www.themoviedb.org)
2. Create a free account or log in if you already have one.
3. Navigate to your [API settings page](https://www.themoviedb.org/settings/api).
4. Click **Create** under API key (v3 auth).
5. Copy the generated key.
6. Create a `.env` file in your project root and add:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here