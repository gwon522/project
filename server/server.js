const express = require('express');
const app = express();
const port = 5050;
const cors = require('cors');

const api = require('./routes/api');
const user = require('./routes/user');

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hi");
})

app.use('/api', api);
app.use('/user', user);


app.listen(port, () => {
    console.log(`server on port ${port}`)
})