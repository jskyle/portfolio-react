const express = require('express');

const router = express.Router();
const pool = require('./db');

// POSTS ROUTES

router.get('/api/get/allposts', (req, res, next) => {
  pool.query('SELECT * FROM posts ORDER BY date_created DESC', (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

router.get('/api/get/allposts', (req, res, next) => {
  const { postId } = req.query;

  pool.query('SELECT * FROM posts WHERE pid=$1', [postId], (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

router.post('/api/post/posttodb', (req, res, next) => {
  const values = [req.body.title,
    req.body.body,
    req.body.uid,
    req.body.username];
  pool.query(`INSERT INTO posts(title, body, user_id, author, date_created)
              VALUES($1, $2, $3, $4, NOW() )`,
  values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});

router.patch('/api/patch/post', (req, res, next) => {
  const values = [req.body.body];

  pool.query('INSERT INTO posts (body) VALuES($1)', values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    res.json(qRes.rows);
  });
});

router.put('/api/put/post', (req, res, next) => {
  const values = [req.body.title,
    req.body.body,
    req.body.uid,
    req.body.pid,
    req.body.username];
  pool.query(`UPDATE posts SET title= $1, body=$2, user_id=$3, author=$5, date_created=NOW()
              WHERE pid = $4`, values,
  (qErr, qRes) => {
    console.log(qRes);
    console.log(qErr);
  });
});

router.delete('/api/delete/postcomments', (req, res, next) => {
  const { postId } = req.body;
  pool.query(`DELETE FROM comments
              WHERE postId = $1`, [postId],
  (qErr, qRes) => {
    res.json(qRes.rows);
    console.log(qErr);
  });
});

router.delete('/api/delete/post', (req, res, next) => {
  const { postId } = req.body;
  pool.query('DELETE FROM posts WHERE pid = $1', [postId],
    (qErr, qRes) => {
      res.json(qRes.rows);
      console.log(qErr);
    });
});

router.put('/api/put/likes', (req, res, next) => {
  const uid = [req.body.uid];
  const postId = String(req.body.postId);

  const values = [uid, postId];
  console.log(values);
  pool.query(`UPDATE posts
              SET like_user_id = like_user_id || $1, likes = likes + 1
              WHERE NOT (like_user_id @> $1)
              AND pid = ($2)`,
  values, (qErr, qRes) => {
    if (qErr) return next(qErr);
    console.log(qRes);
    res.json(qRes.rows);
  });
});

// COMMENTS ROUTES SECTION

router.post('/api/post/commenttodb', (req, res, next) => {
  const values = [req.body.comment,
    req.body.userId,
    req.body.username,
    req.body.postId];

  pool.query(`INSERT INTO comments(comment, user_id, author, post_id, date_created)
              VALUES($1, $2, $3, $4, NOW())`, values,
  (qErr, qRes) => {
    res.json(qRes.rows);
    console.log(qErr);
  });
});

router.put('/api/put/commenttodb', (req, res, next) => {
  const values = [req.body.comment,
    req.body.userId,
    req.body.postId,
    req.body.username,
    req.body.cid];

  pool.query(`UPDATE comments SET comment = $1, user_id = $2, post_id = $3, author = $4, date_created=NOW()
              WHERE cid=$5`, values,
  (qErr, qRes) => {
    res.json(qRes.rows);
    console.log(qErr);
  });
});

router.delete('/api/delete/comment', (req, res, next) => {
  const cid = req.body.comment_id;
  console.log(cid);
  pool.query(`DELETE FROM comments
              WHERE cid=$1`, [cid],
  (qErr, qRes) => {
    res.json(qRes);
    console.log(qErr);
  });
});

router.get('/api/get/allpostcomments', (req, res, next) => {
  const postId = String(req.query.postId);
  pool.query(`SELECT * FROM comments
              WHERE post_id=$1`, [postId],
  (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

// USER PROFILE ROUTES SECTION

router.post('/api/posts/userprofiletodb', (req, res, next) => {
  const values = [req.body.profile.nickname,
    req.body.profile.email,
    req.body.profile.email_verified];
  pool.query(`INSERT INTO users(username, email, email_verified, date_created)
              VALUES($1, $2, $3, NOW())
              ON CONFLICT DO NOTHING`, values,
  (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

router.get('/api/get/userprofilefromdb', (req, res, next) => {
  const { email } = req.query;
  console.log(email);
  pool.query(`SELECT * FROM users
              WHERE email=$1`, [email],
  (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

router.get('/api/get/userposts', (req, res, next) => {
  const { userId } = req.query;
  console.log(userId);
  pool.query(`SELECT * FROM posts
              WHERE user_id=$1`, [userId],
  (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

// Retrieve another users profile from db based on username
router.get('/api/get/otheruserprofilefromdb', (req, res, next) => {
  // const email = [ "%" + req.query.email + "%"]
  const username = String(req.query.username);
  pool.query(`SELECT * FROM users
              WHERE username = $1`,
  [username], (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

// Get another user's posts based on username
router.get('/api/get/otheruserposts', (req, res, next) => {
  const username = String(req.query.username);
  pool.query(`SELECT * FROM posts
              WHERE author = $1`,
  [username], (qErr, qRes) => {
    res.json(qRes.rows);
  });
});

module.exports = router;
