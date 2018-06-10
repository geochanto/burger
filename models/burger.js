//import ORM functions
var orm = require('../config/orm.js');


// object to call ORM functions
var burger = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(burger_name, callback){
    orm.insertOne(burger_name, function(res){
      callback(res);
    });
  },

  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){
      callback(res);
    });
  }
};

// Export routes for server.js to use.
module.exports = router;