const express = require('express'),
    router = express.Router();

const listOfJabronies = [
    {name:'Dennis' , description: 'Golden God'},
    {name:'Dee' , description: 'Bird'},
    {name:'Charlie' , description: 'Wildcard'},
    {name:'Frank' , description: 'Money'},
    {name:'Mac' , description: 'Muscle'}
];


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template', { 
        locals: {
            title: 'The Gang',
            theGang: listOfJabronies
        },
        partials: {
            partial: 'sunny-partial'
        }
    });
});

module.exports = router;
