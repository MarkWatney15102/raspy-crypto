const express = require('express');
const cors = require('cors');

const app = express();
const port = 43921;

app.use(cors());
app.use(express.json());

app.get('/crypto/:formCoin/:toCoin', (req, res) => {
   const { fromCoin, toCoin } = req.params;

   if (fromCoin && toCoin) {
        const symbol = fromCoin + toCoin;
        fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=' + symbol)
            .then(result => result.json())
            .then((result) => {
                const lastPrice = result.lastPrice;
                const tradesOneDay = result.count;
                const priceChangePercent = result.priceChangePercent;

                res.status(200).json({lastPrice, tradesOneDay, priceChangePercent});
        });
   }

   res.status(400).json({"message": "Missing parameter"});
});

app.listen(port, () => {
    console.log('Listening to Port: ' + port);
})