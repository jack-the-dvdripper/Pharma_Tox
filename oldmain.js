'use strict';

//var app = require('app');
//var BrowserWindow = require('browser-window');
var electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


var mainWindow = null;

app.on('ready', function() {
     mainWindow = new BrowserWindow({
        height: 600,
        width: 800
});

    mainWindow.loadUrl(`file://${__dirname}/app/index.html`);
});