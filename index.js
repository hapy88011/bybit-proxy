const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/bybit", async (req, res) => {
  try {
    const response = await fetch("https://api.bybit.com/v5/market/tickers?category=spot&symbol=BTCUSDT");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
