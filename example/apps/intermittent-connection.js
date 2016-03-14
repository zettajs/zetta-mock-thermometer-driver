module.exports = function(server) {
  var thermometerQuery = server.where({ type: 'thermometer' });
  server.observe([thermometerQuery], function(thermometer){
    setInterval(function(){
      (thermometer.state == 'ready') ? thermometer.call('make-not-ready') : thermometer.call('make-ready');
    }, 1000);
  });
};