const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post('/SignUp', (req, res) => {
    const dataSet = {
        u_nickNm: req.body.id,
        u_pw: req.body.pw,
        u_company: req.body.company
    }
    const sql = `insert into user_tb set ?`;
    db.query(sql, dataSet, (err, result) => {
        if (err) {
            console.log('signUp err 발생');
            throw err;
        }
        const text = '회원가입이 되었습니다.';
        res.send(text);
    })
});

router.post('/CheckDuplicateId', (req, res) => {
    const id = req.body.id;
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

router.post('/Login', (req, res) => {
    const { id, pw } = req.body;
    const sql = `select u_id, u_nickNm, u_company from user_tb where u_nickNm = ? and u_pw = ?`;
    db.query(sql, [id, pw], (err, result) => {
        if (err) {
            console.log('login err 발생 ');
            throw err;
        }
        //아이디 존재하지 않거나 비밀번호 틀렸을 때
        if (result.length === 0) {
            const responseData = {
                loginSuccess: false,
                loginError: '아이디가 존재하지 않거나 비밀번호가 잘못되었습니다.',
                result: ''
            }
            res.send(responseData);
        }
    })
})
module.exports = router;