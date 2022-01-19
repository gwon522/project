import express from 'express';
import cors from 'cors';

const app = express();
const port = 5050;
app.get('/', (req, res) => {
    res.send("hi");
})

app.listen(port, () => {
    console.log(`server on port ${port}`)
})