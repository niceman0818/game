const puppeteer = require('puppeteer');

async function scrapeRobloxGames() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.roblox.com/discover'); // 크롤링 대상 URL

    const games = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.game-card-container')).map((gameCard) => {
            return {
                title: gameCard.querySelector('.game-card-name')?.innerText || 'No title',
                visits: gameCard.querySelector('.game-card-visits')?.innerText || 'No visits',
            };
        });
    });

    await browser.close();
    return games;
}

scrapeRobloxGames().then(console.log).catch(console.error);

module.exports = scrapeRobloxGames;
