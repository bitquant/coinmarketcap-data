# coinmarketcap-data
Cryptocurrency data from CoinMarketCap

## Install
```
$ npm install coinmarketcap-data --save
```

## Usage
```javascript
var coinmarketcap = require("coinmarketcap-data");

(async () => {
    try {
        let data = await coinmarketcap.getTickers(true);
        console.log(JSON.stringify(data, null, 2));
    }
    catch (ex) {
        console.log('caught error: ' + ex.stack);
    }
})();

/*
[
   {
      "id": "bitcoin",
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": "1",
      "price_usd": "8474.98",
      "price_btc": "1.0",
      "24h_volume_usd": "8293780000.0",
      "market_cap_usd": "144315239257",
      "available_supply": "17028387.0",
      "total_supply": "17028387.0",
      "max_supply": "21000000.0",
      "percent_change_1h": "-0.12",
      "percent_change_24h": "-5.5",
      "percent_change_7d": "-13.15",
      "last_updated": "1526088872"
   },
   ....
   {
      "id": "starcointv",
      "name": "StarCoin",
      "symbol": "KST",
      "rank": "1610",
      "price_usd": "0.0500498",
      "price_btc": "0.00000548",
      "24h_volume_usd": null,
      "market_cap_usd": null,
      "available_supply": null,
      "total_supply": "877631077.0",
      "max_supply": null,
      "percent_change_1h": null,
      "percent_change_24h": null,
      "percent_change_7d": "16.35",
      "last_updated": "1525799364"
   }
]   
*/

(async () => {
    try {
        let data = await coinmarketcap.getTicker("bitcoin");
        console.log(JSON.stringify(data, null, 2));
    }
    catch (ex) {
        console.log('caught error:' + ex.stack);
    }
})();

/*
{
  "id": "bitcoin",
  "name": "Bitcoin",
  "symbol": "BTC",
  "rank": "1",
  "price_usd": "8483.35",
  "price_btc": "1.0",
  "24h_volume_usd": "8294010000.0",
  "market_cap_usd": "144458191024",
  "available_supply": "17028437.0",
  "total_supply": "17028437.0",
  "max_supply": "21000000.0",
  "percent_change_1h": "-0.06",
  "percent_change_24h": "-5.38",
  "percent_change_7d": "-13.07",
  "last_updated": "1526089170"
}
*/

(async () => {
    try {
        let data = await coinmarketcap.getTotalMarketCapData();
        console.log(JSON.stringify(data, null, 2));
    }
    catch (ex) {
        console.log('caught error: ' + ex.stack);
    }
})();

/*
{
  "total_market_cap_usd": 386878315763,
  "total_24h_volume_usd": 29145761639,
  "bitcoin_percentage_of_market_cap": 37.34,
  "active_currencies": 872,
  "active_assets": 738,
  "active_markets": 10889,
  "last_updated": 1526089170
}
*/

(async () => {
    try {
        let data = await coinmarketcap.getTotalMarketCapHistory(1516233600000, 1516320000000);
        console.log(JSON.stringify(data.market_cap_by_available_supply, null, 2));
    }
    catch (ex) {
        console.log('caught error: ' + ex.stack);
    }
})();

/*
[
  [
    1516233720000,
    541585000000
  ],
  [
    1516234020000,
    540780000000
  ],
  ...
  [
    1516319520000,
    566192000000
  ],
  [
    1516319820000,
    567340000000
  ]
]
*/

```

## License
MIT license; see [LICENSE](./LICENSE).
