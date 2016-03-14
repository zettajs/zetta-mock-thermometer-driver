var zetta = require('zetta');
var Photocell = require('../index');
var style = require('./apps/style');
var intermittentConnection = require('./apps/intermittent-connection');
zetta()
  .use(Photocell)
  .use(style)
  .use(intermittentConnection)
  .listen(1337);
