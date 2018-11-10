const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/linkUp', function(req, res) {

    console.log('===================================================================' +
        '\nRetrieving social page...\n');
    //API to fetch stuff from Database/backend, encode json in {}
    res.render('../public/page/linkUp', {});

});

module.exports = router;
