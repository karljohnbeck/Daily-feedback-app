const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// POST
router.post('/', (req, res) => {
    console.log('POST /feedback')
    let feedback = req.body  
    let queryText = `INSERT INTO "feedback" 
    ("feeling","understanding","support","comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comment])
    .then((result) => {
        res.sendStatus(201)
    }) .catch((error) => {
        res.sendStatus(500)
    })
})

// GET
router.get('/', (req,res) => {
    console.log('inside GET')
    let queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`
    pool.query(queryText) 
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log('error in get')
        res.sendStatus(500)
    })
})

module.exports = router;