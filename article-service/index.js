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

app.get('/article', function(req, res){
    data.articles.forEach(article => {
        console.log(req.query.id)
        if(article.article_id == req.query.id){
            res.send(article);
        }
    })
    res.status(404).send();
})

app.listen(3001, () => {
    console.log("Server is listening on port 3001...");
});
