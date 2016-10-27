var Http = require("http");
var Https = require('https');

var Client = module.exports = {
    host: 'https://peers.fc00.io',
};

var generic = Client.generic = function (path, cb, host) {
    host = host || Client.host;
    var protocol = /^https/.test(host)?Https:Http;

    protocol.get(host + path, function (res) {
        if (res.statusCode !== 200) { return void cb(res.statusCode); }
        var data = '';
        res.on('data', function (d) {
            data += d;
        }).on('end', function () {
            cb(void 0, data);
        });
    }).on('error', function (e) {
        return void cb(e);
    });
};

var handle = function (cb) {
    return function (e, out) {
        if (e) { return void cb(e); }
        try { cb(void 0, JSON.parse(out)); }
        catch (e) { cb(e); }
    };
};

var location = Client.location = function (path, cb) {
    generic('/1/location/' + path.join('/'), handle(cb));
};

var peerName = Client.peerName = function (peerName, cb) {
    generic('/1/peerName/' + (peerName || ''), handle(cb));
};
