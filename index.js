var Device = require('zetta-device');
var util = require('util');

function degToRad(x) {
  return x * ( Math.PI / 180 );
}

var Thermometer = module.exports = function() {
  Device.call(this);
  this.temperature = 0;
};
util.inherits(Thermometer, Device);

Thermometer.prototype.init = function(config) {
  config
    .name('thermometer')
    .type('thermometer')
    .state('ready')
    .when('ready', {allow: ['make-not-ready']})
    .when('not-ready', {allow: ['make-ready']})
    .map('make-ready', this.makeReady)
    .map('make-not-ready', this.makeNotReady)
    .monitor('temperature');

  var self = this;
  var counter = 0;
  setInterval(function() {
    self.temperature = (Math.sin(degToRad(counter)) + 1.0) * 50 - 10;
    counter += 15;
  }, 100);
};

Thermometer.prototype.makeReady = function(cb) {
  this.state = 'ready';
  cb();
}

Thermometer.prototype.makeNotReady = function(cb) {
  this.state = 'not-ready'
  cb();
}
