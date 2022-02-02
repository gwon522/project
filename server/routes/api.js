const express = require('express');
const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');
const router = express.Router();
const db = require('../db/db');

router.get('/', (req, res) => {
    res.send('데이터');
});

router.get('/topicList', (req, res) => {
    db.query(`select cd_id, cd_name from mst_cd_dtl_tb where category_id = 1`, (err, result) => {
        if (err) {
            console.log('error 발생');
            throw err;
        }
        res.send(result);
    })
});


module.exports = router;