const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    let foo = {
        message: "Success!",
    };

    res.json(foo);
});

router.get('/friends', (req, res) => {
    res.status('200').send("friendsies");
});


router.post('/friends', (req, res) => {
    res.status('200').send("ok");
});

module.exports = router;
