var router = require('express').Router();

require('./apis/home')(router);
require('./apis/login')(router);
require('./apis/events')(router);
require('./apis/whoweare')(router);

module.exports = router;