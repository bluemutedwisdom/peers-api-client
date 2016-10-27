var Client = require(".");

Client.location(['na','newjersey'], function (e, out) {
    if (e) { return void console.log(e); }
    console.log(JSON.stringify(out, null, 2));
});

