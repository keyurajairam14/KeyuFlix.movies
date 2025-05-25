require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('KeyuFlix backend is running!');
});
// api/index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("KeyuFlix Backend is running!");
});

// Example TMDB route
app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

module.exports = app;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
