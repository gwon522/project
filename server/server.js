const express = require('express');
const app = express();
const port = 5050;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("hi");
})

app.get('/api/', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send('ㅗㅑㅑㅗㅑㅗㅑㅑ');
})

app.listen(port, () => {
    console.log(`server on port ${port}`)
})