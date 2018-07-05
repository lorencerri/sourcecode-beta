/*
/ This is an open-sourced project developed by Plexi Development
/ GitHub: https://github.com/TrueXPixels/sourcecode-beta
/ Discord: discord.gg/plexidev
*/

// Packages
const cookieParser = require('cookie-parser'),
      ClientOauth  = require('client-oauth2'),
      snekfetch    = require('snekfetch'),
      express      = require('express'),
      app          = express(),
      server       = require('http').createServer(app),
      io           = require('socket.io')(server),
      url          = require('url');

console.log('Packages Installed');