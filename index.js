'use strict';
const request = require('request-promise-native').defaults({timeout: 9999});


const getTickers = async (allSymbols) => {

    const baseUrl = "https://api.coinmarketcap.com/v1/ticker/";
    const query = (allSymbols) ? "?limit=0" : "";

    const options = {
        uri: baseUrl + query,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        },
    };

    const responseBody = await request(options);
    const marketCapData = JSON.parse(responseBody);

    return marketCapData;
};

const getTicker = async (symbol) => {

    const options = {
        uri: `https://api.coinmarketcap.com/v1/ticker/${symbol}/`,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        },
    };

    const responseBody = await request(options);
    const responseData = JSON.parse(responseBody);

    return responseData[0];
};

const getTotalMarketCapData = async () => {

    const options = {
        uri: "https://api.coinmarketcap.com/v1/global/",
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        },
    };

    const responseBody = await request(options);
    const totalMarketCapData = JSON.parse(responseBody);

    return totalMarketCapData;
};

const getTotalMarketCapHistory = async (fromTime, toTime) => {

    const options = {
        uri: `https://graphs2.coinmarketcap.com/global/marketcap-total/${fromTime}/${toTime}/`,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:57.0) Gecko/20100101 Firefox/57.0',
            'Referer': 'https://coinmarketcap.com/charts/'
        },
    };

    const responseBody = await request(options);
    const totalMarketCapHistory = JSON.parse(responseBody);

    return totalMarketCapHistory;
};

exports.getTickers = getTickers;
exports.getTicker = getTicker;
exports.getTotalMarketCapData = getTotalMarketCapData;
exports.getTotalMarketCapHistory = getTotalMarketCapHistory;
