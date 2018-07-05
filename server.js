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

// Database
const Enmap = require('enmap');
const EnmapSQLite = require('enmap-sqlite');
const db = new Enmap({ provider: new EnmapSQLite({ name: 'database' }) });
db.defer.then(() => console.log(`Database Entries: ${db.size}`));

console.log('Packages Installed');