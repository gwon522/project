const { query } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', (req, res) => {
    res.send('데이터');
});

router.get('/bestTopic10', (req, res) => {
    const sql = 'select b_id,u_id,cd_name,b_title,b_content,b_view,b_imageCd,b_date,likes, (select count(*) from comment_tb where b_id = a.b_id) as comment from board_tb a, mst_cd_dtl_tb b  where a.b_category = b.cd_id and b.category_id =1 limit 10';
    db.query(sql, (err, result) => {
        if (err) {
            console.log('err')
            throw err;
        }
        res.send(result);
    });
});

router.get('/topic5', (req, res) => {
    const { cd_id, limit } = req.query;

    let sql = 'select b_id,b_title,b_view from board_tb a, mst_cd_dtl_tb b  where a.b_category = b.cd_id';
    sql += ` and a.b_category = ${Number(cd_id)}`;
    sql += ` limit ${Number(limit)}`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log('err')
            throw err;
        }
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

//토픽 조회시 (데이터양이 적어서 당일건이 아닌 전체전에서 50개 조회로);
router.post('/topic/:id', (req, res) => {
    var start = 0;
    const limit = 50;
    const id = req.body.id;
    const sort = req.body.sort;

    let sql = 'select b_id, b_title, b_content,b_view,likes, timeStamp(b_date) as b_date, (select count(*) from comment_tb where b_id = a.b_id) as comment, u_company from board_tb a left outer join user_tb b on a.u_id = b.u_id inner join mst_cd_dtl_tb c on a.b_category = c.cd_id where 1 =1 ';
    //토픽id가 베스트토픽일때는 모든글에서 뷰가 제일 높은거로 50개 조회해오기
    if (id === '베스트토픽') {
        sql += 'order by b_view desc';
    } else {
        //그외에 카테고리에서 50개 조회
        sql += ` and c.cd_name = '${id}'`;
    }
    if (typeof sort !== '') {
        if (id === '베스트토픽') {
            sql += sort === 'new' ? ', b_date desc' : ', b_view desc';
        } else {
            sql += sort !== 'view' ? `order by b_date desc` : `order by b_view desc`;
        }
    }
    //페이지네이션 param들어오면 start, end 값 변경
    if (typeof req.body.start !== 'undefined') {
        start = req.body.start;
    }
    sql += ` limit ${start},${limit}`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log('error');
            throw err;
        }
        res.send(result);
    });
});

//게시물 상세 조회시
router.get('/post/:id', (req, res) => {
    // 세부내용에 얽혀있는 코멘트들도 같이 가져와야함 => 코멘트 따로 불러와야하나
    const { id } = req.query;
    db.query(`UPDATE board_tb SET b_view = b_view + 1 WHERE b_id = ?`, id, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })

    db.query(
        `select
            b_id,
            b_category,
            a.u_id,
            b_title,
            b_content,
            b_view,
            DATE_FORMAT(b_date, '%m-%d') AS b_date,
            likes,
            cd_name,
            (
            select
                count(*)
            from
                comment_tb
            where
                b_id = a.b_id) as comment,
            IFNULL(u_company,'') as company,
            IFNULL(u_nickNm,'') as nickNm
        from
            board_tb a
        left outer join
            user_tb c
        on a.u_id = c.u_id
        inner join 
            mst_cd_dtl_tb b
        on a.b_category = b.cd_id 
        where b_id = ?`
        , id, (err, result) => {
            res.send(result);
        });
});

//게시물 작성 요청(게시물 작성화면은 FRONT에서)
router.post('/write', (req, res) => {
    const querySet = req.body;
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
    const querySet = req.body;
    db.query(`UPDATE board_tb SET b_title = ? WHERE b_id = ?`, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.send(result);
    })
})
module.exports = router;
