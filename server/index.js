

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const NodeCache = require("node-cache");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors(
    {
        origin: "*",
    }
));

const BASE_URL = process.env.COINGECKO_API;

// Cache for 60 seconds
const cache = new NodeCache({ stdTTL: 300 });

app.use("/api/coingecko", async (req, res) => {

    const endpoint = req.originalUrl.replace("/api/coingecko/", "");
    const cacheKey = endpoint + JSON.stringify(req.query);

    try {

        // ✅ serve cache immediately if exists
        const cached = cache.get(cacheKey);
        if (cached) {
            console.log("Serving from cache");
            return res.json(cached);
        }

        const response = await axios.get(
            `${BASE_URL}/${endpoint}`,
            { params: req.query }
        );

        cache.set(cacheKey, response.data);

        return res.json(response.data);

    } catch (error) {
        console.log(error.response?.status);
        console.log("⚠ CoinGecko blocked or failed");

        // ✅ fallback to stale cache
        const stale = cache.get(cacheKey);

        if (stale) {
            console.log("Serving STALE cache");
            return res.json(stale);
        }

        // ⭐ CRITICAL FIX
        // NEVER return 500
        // send safe empty response instead

        if (endpoint.includes("market_chart")) {
            return res.json({
                prices: [],
                market_caps: [],
                total_volumes: []
            });
        }

        return res.json({});
    }
});

app.listen(PORT, () => {
    console.log(`✅ Backend running on port ${PORT}`);
});