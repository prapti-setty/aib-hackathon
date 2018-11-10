const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/wiki', function(req, res) {

    console.log('===================================================================' +
        '\nRetrieving wiki page...\n');
    //API to fetch stuff from Database/backend, encode json in {}
    res.render('../public/page/wiki', {});

});

module.exports = router;
