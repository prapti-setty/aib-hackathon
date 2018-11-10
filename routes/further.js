const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/further', function(req, res) {

    console.log('===================================================================' +
        '\nRetrieving further learning page...\n');
    //API to fetch stuff from Database/backend, encode json in {}
    res.render('../public/page/further', {});

});

module.exports = router;
