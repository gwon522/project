const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post('/SignUp', (req, res) => {
    const data = req.query;
    console.log(data);
});

router.post('/CheckDuplicateId', (req, res) => {
    const id = req.body.id;
    console.log('id :', id);
    const sql = `select u_nickNm from user_tb where u_nickNm = '${id}'`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
            res.send(false);
        } else {
            res.send(true);
        }
    })
})

module.exports = router;