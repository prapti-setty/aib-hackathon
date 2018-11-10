const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/browse', function(req, res) {

    console.log('===================================================================' +
        '\nRetrieving course browse page...\n');
    //API to fetch stuff from Database/backend, encode json in {}
    res.render('../public/page/browse', {});

});

module.exports = router;
