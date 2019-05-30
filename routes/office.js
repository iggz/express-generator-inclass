const express = require('express'),
    router = express.Router();

const listOfOfficeCharacters = [
    {name: 'Michael', job: 'Boss'},
    {name: 'Jim', job: 'Sales'},
    {name: 'Pam', job: 'Reception'},
    {name: 'Angela', job: 'Accounting'},
    {name: 'Daryl',  job: 'Warehouse'}
];


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template', { 
        locals: {
            title: 'Dunder Mifflin',
            listOfCharacters: listOfOfficeCharacters
        },
        partials: {
            partial: 'office-partial'
        }
    });
});

module.exports = router;
