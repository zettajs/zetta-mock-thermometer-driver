module.exports = function(server) {
  var photocellQuery = server.where({ type: 'photocell' });
  server.observe([photocellQuery], function(photocell){
    setInterval(function(){
      (photocell.state == 'ready') ? photocell.call('make-not-ready') : photocell.call('make-ready');
    }, 1000);
  });
};