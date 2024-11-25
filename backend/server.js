const express = require('express');
const scrapeRobloxGames = require('./roblox_scraper/scrapeRobloxGames');
const app = express();

app.get('/api/games', async (req, res) => {
    try {
        const games = await scrapeRobloxGames();
        res.json(games); // 크롤링한 데이터를 JSON으로 반환
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching Roblox games');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
