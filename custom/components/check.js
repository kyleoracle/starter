'use strict';
var exec = require('child_process').exec;


module.exports = {
  metadata: () => ({
    name: 'check',
    properties: {
      
    }
  }),
  invoke: (conversation, done) => {

    var dir = exec("kubectl get deployments/myapp", function(err, stdout, stderr) {
      var message = '';
      if (err) {
        message = 'err=' + err;
      } else{
        message = stdout;
      }
      // reply
      conversation
      .reply(message)
      .transition();
      done();
    });
    
    dir.on('exit', function (code) {
      // exit code is code
      console.log('exit code=' + code)
    });
    
  }
};
