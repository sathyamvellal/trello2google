'use strict';

var _ = require('underscore')._;
var Trello = require('node-trello');

var TrelloModel = require('../models/trello');

module.exports = function(app) {
    app.get('/trello', function(req, res) {
        if (_.trellokey != undefined && _.trellotoken != undefined) {
            _.t = new Trello(_.trellokey, _.trellotoken);
            _.timeoutId = setTimeout(function(args) {
                var t = _.t;
                t.get('/1/members/my/boards', function(err, boards) {
                    for (var i in boards) {
                        (function(i) {
                            var board = boards[i];
                            console.log('Board: ' + board.name);
                            t.get('/1/boards/' + board.id + '/lists', function(err, lists) {
                                console.log(lists);
                            });
                            console.log('---------------------------');
                        }(i));
                    }
                });
            }, 0, {});
        } else {
            res.send('You need to login!');
        }
    });
};
