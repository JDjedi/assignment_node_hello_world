'use strict';

var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var data = require('./data/logs')

// var array = ['This message is info', 'This mesage is a warning', 'This message is an error'];
// logger.log(array[0], 'info');
// logger.log(array[1], 'warning');
// logger.log(array[2], 'error');

_.each(data, function(data){
	logger.log(data.level, data.message);
});




