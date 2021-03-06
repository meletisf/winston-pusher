# winston-pusher 
A [Pusher](https://pusher.com) transport for [winston](https://www.npmjs.com/package/winston) logging library.


[![npm version](https://badge.fury.io/js/winston-pusher.svg)](https://badge.fury.io/js/winston-pusher)
[![npm](https://img.shields.io/npm/dm/winston-pusher.svg)](https://www.npmjs.com/package/winston-pusher)
[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)](https://www.npmjs.com/package/winston-pusher)

[![NPM](https://nodei.co/npm/winston-pusher.png)](https://nodei.co/npm/winston-pusher/)
## Installation

```
npm install winston
npm install winston-pusher
```

## Usage

```javascript
var winston = require('winston');
var PusherLogger = require('winston-pusher');

var log = new (winston.Logger)({
    transports: [
        new (PusherLoger)({
            level: 'info',
            pusher: {
                "appId": "your-app-id",
                "key": "your-app-key",
                "secret": "your-app-secret",
                "cluster": "eu",
                "encrypted": true
            }
        })
    ]
});


```

# License
Distributed under the [MIT license](https://github.com/meletisf/winston-pusher/blob/master/LICENSE.md).
