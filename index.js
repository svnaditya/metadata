const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.get('/', function(req, res) {
    res.json({
        "name": "Infra Coin",
        "symbol": "infra",
        "description": "This is a demo coin",
        "image": "https://go.dev/blog/gopher/gopher.png"
        });
});

app.listen(3000);