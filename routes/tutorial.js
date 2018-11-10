const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/tutorial', function(req, res) {

    console.log('===================================================================' +
        '\nRetrieving tutorial page...\n');
    //API to fetch stuff from Database/backend, encode json in {}
    res.render('../public/page/tutorial', {});

});

module.exports = router;
