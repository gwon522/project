const express = require('express');
const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');
const router = express.Router();
const db = require('../db/db');

router.get('/', (req, res) => {
    res.send('데이터');
});

router.get('/bestTopic', (req, res) => {
    const sql = 'select b_id,u_id,cd_name,b_title,b_content,b_view,b_imageCd,b_date,likes, (select count(*) from comment_tb where b_id = a.b_id) as comment from board_tb a, mst_cd_dtl_tb b  where a.b_category = b.cd_id and b.category_id =1 limit 10';
    db.query(sql, (err, result) => {
        if (err) {
            console.log('err')
            throw err;
        }
        res.send(result);
    });
});

router.get('/topic', (req, res) => {
    var sql = 'select b_id,b_title,b_view from board_tb a, mst_cd_dtl_tb b  where a.b_category = b.cd_id';
    const { cd_id, limit } = req.query;
    console.log(req.query);
    sql += ` and a.b_category = ${Number(cd_id)}`;
    sql += ` limit ${Number(limit)}`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log('err')
            throw err;
        }
        console.log(sql);
        res.send(result);
    });
});

//carousel에 사용, 메인페이지 사용(컬럼 추가 필요할 수 있음)
router.get('/topicList', (req, res) => {
    db.query(
        `select cd_id, cd_name from mst_cd_dtl_tb where category_id = 1`,
        (err, result) => {
            if (err) {
                console.log('error 발생');
                throw err;
            }
            res.send(result);
        },
    );
});

//토픽 조회시
router.get('/topic/:id', (req, res) => {
    //페이지네이션 처리해야되는지, 쓰로틀링 적용해서 무한스크롤?
    db.query(`select * from board_tb where b_category = ${id}`, (err, result) => {
        if (err) {
            console.log('error');
            throw err;
        }
        res.send(result);
    });
});

//게시물 조회시
router.get('/post/:id', (req, res) => {
    // 세부내용에 얽혀있는 코멘트들도 같이 가져와야함 => 코멘트 따로 불러와야하나
    db.query(`select * from board_tb where b_id=${id}`);
});

//게시물 작성 요청(게시물 작성화면은 FRONT에서)
router.post('/write', (req, res) => {
    const querySet = req.body;
    console.log(querySet);
    db.query(`insert into board_tb set ?`, querySet, (err, result) => {
        if (err) {
            console.log('write error 발생');
            throw err;
        }
        res.send(result);
    });
});

//게시물 수정시
router.put('/post/:id', (req, res) => {

})
module.exports = router;
