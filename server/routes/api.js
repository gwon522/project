const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('데이터');
});

router.get('/item', (req, res) => {
    res.send('데이터');
});


module.exports = router;