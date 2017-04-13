'use strict';

var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');

var array = ['This message is info', 'This mesage is a warning', 'This message is an error'];

// _.each(array, function(array){
// 	logger.log(array);
// });

logger.log(array[0], 'INFO');
logger.log(array[1], 'WARNING');
logger.log(array[2], 'ERROR');


