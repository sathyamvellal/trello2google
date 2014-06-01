'use strict';

var _ = require('underscore')._;

var LoginModel = require('../models/login');

module.exports = function(app) {
    var model = new LoginModel();

    app.get('/login', function(req, res) {
        res.render('login', model);
    });

    app.post('/login', function(req, res) {
        _.trellokey = req.body.trellokey;
        _.trellotoken = req.body.trellotoken;
        res.send('Done!');
    });
};
