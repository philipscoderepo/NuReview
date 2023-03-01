// NuReview API
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors({
    origin: '*',
}));
const data = require('./articles.json');

app.get('/', function (req, res) {
    res.json(data);
});

app.listen(3001, () => {
    console.log("Server is listening on port 3001...");
});
