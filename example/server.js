var zetta = require('zetta');
var Thermometer = require('../index');
var style = require('./apps/style');
var intermittentConnection = require('./apps/intermittent-connection');
zetta()
  .use(Thermometer)
  .use(style)
  .use(intermittentConnection)
  .listen(1337);
