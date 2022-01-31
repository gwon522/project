const express = require('express');
const app = express();
const port = 5050;
const cors = require('cors');

const api = require('./routes/api');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hi");
})

app.use('/api', api);


app.listen(port, () => {
    console.log(`server on port ${port}`)
})