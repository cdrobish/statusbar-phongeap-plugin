//
//  ActionSheet.js
//
// Created by Patrick Heneise, @PatrickHeneise
// Updated by Chad Drobish, http://chadandrewdrobish.com
//
// Copyright 2013 Parick Heneise. All rights reserved.
// MIT Licensed

var exec = require('cordova/exec');

function StatusBar(){};

StatusBar.prototype.show = function(callback) {
	cordova.exec(callback, null, 'StatusBar', 'show', []);
};

StatusBar.prototype.hide = function(callback) {
	cordova.exec(callback, null, 'StatusBar', 'hide', []);
};

StatusBar.prototype.whiteTint = function(callback) {
	cordova.exec(callback, null, 'StatusBar', 'whiteTint', []);
};

StatusBar.prototype.blackTint = function(callback) {
	cordova.exec(callback, null, 'StatusBar', 'blackTint', []);
};

var statusBar = new StatusBar();
module.exports = statusBar;