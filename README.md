# Hyperboria Peers Client

A lightweight client for the [peers api](https://github.com/fc00/peers-api).

## Installation

```Bash
npm i fc00-peers-client
```

## Usage

```javascript
var Client = require("fc00-peers-client");

// find nodes in North America
Client.location(['na'], function (e, out) {
    if (e) { return console.error(e); }

    // do something with the result
    console.log(out);
});

// find nodes in Germany
Client.location(['de'], function (e, out) {
    if (e) { return console.error(e); }

    // do something with the result
    console.log(JSON.stringify(out, null, 2));
});

// find nodes by peerName
Client.peerName('transitiontech', function (e, out) {
    if (e) { return console.error(e); }
    console.log(JSON.stringify(out, null, 2));
});
```

That's all for now!
