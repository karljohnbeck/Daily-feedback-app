const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
    console.log('POST /feedback')
    let feedback = req.body  
    queryText = `INSERT INTO "feedback" 
    ("feeling","understanding","support","comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comment])
    .then((result) => {
        res.sendStatus(201)
    }) .catch((error) => {
        res.sendStatus(500)
    })
})

module.exports = router;