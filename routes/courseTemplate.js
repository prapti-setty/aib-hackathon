const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/courseTemplate', function(req, res) {

    console.log('===================================================================' +
        '\nRetrieving template course page...\n');
    //API to fetch stuff from Database/backend, encode json in {}
    res.render('../public/page/courseTemplate', {});

});

module.exports = router;
