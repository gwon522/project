const express = require('express');
const router = express.Router();
const db = require('../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_KEY;

router.post('/SignUp', (req, res) => {
    const dataSet = {
        u_nickNm: req.body.id,
        u_pw: bcrypt.hashSync(req.body.pw, 10),
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
    const sql = `select u_id, u_nickNm, u_company,u_pw from user_tb where u_nickNm = ?`;

    db.query(sql, [id, pw], (err, result) => {
        if (err) {
            console.log('login err 발생 ');
            throw err;
        }
        //id 없을 때
        if (result.length === 0) {
            const responseData = {
                token: '',
                id: '',
                text: '아이디가 존재하지 않습니다.',
            }
            res.send(responseData);
        } else {
            //아이디 존재 할 경우
            const isEqualPw = bcrypt.compareSync(pw, result[0].u_pw);

            console.log('isEqual', isEqualPw);
            if (isEqualPw) {
                const token = jwt.sign({
                    u_id: result[0].u_id
                }, JWT_SECRET_KEY, { expiresIn: '1h' });

                const responseData = {
                    token: token,
                    text: '',
                    id: result[0].u_id
                }
                res.cookie('user', token);
                res.send(responseData);
            } else {
                const responseData = {
                    token: '',
                    id: '',
                    text: '비밀번호가 일치하지 않습니다.'
                }
                res.send(responseData);
            }
        }

    })
})
module.exports = router;