const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const media = require("./media.json")
app.use(cors({
    origin: '*',

}));
app.use(express.json())

app.get('/read-all-media', (req, res) => {
  res.send(media)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})