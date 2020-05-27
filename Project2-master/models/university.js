var orm = require("../config/orm.js");
var university = {
  
  selectAll: function(cb) {
    orm.selectAll("university", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("university", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("university", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // deleteOne: function(condition, cb) {
  //   orm.deleteOne("university", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = university;
