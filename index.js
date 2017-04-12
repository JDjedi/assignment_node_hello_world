'use strict';

var chalk = require('chalk');
var _ = require('lodash');

var array = ['elephant', 'dog', 'cat', 'bear', 'penguin', 'ant', 'seal'];

_.each(array, function(array){
	console.log(chalk.green(array));
});


