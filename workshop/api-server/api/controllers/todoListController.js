'use strict';

var loki = require('lokijs');

var db = new loki('main.db');
var task = db.addCollection('tasks');

exports.list_all_tasks = function(req, res) {
  var data = task.find({});
  res.json(data);
};

exports.create_a_task = function(req, res) {
  var data = req.body;

  var date = new Date();
  data.id = date.getTime();
  data.date = date;

  var data = task.insert(data);
  res.json(data);
};

exports.read_a_task = function(req, res) {
  var data = task.where(function(obj){
      return (obj.id == req.params.id)
  });

  if (null == data) {
    data = {};
  }

  res.json(data);
};

exports.update_a_task = function(req, res) {
    var data = task.where(function(obj){
        return (obj.id == req.params.id)
    });

  var target = data[0];
  target.name = req.body.name;
  target.status = req.body.status;
  target.image = req.body.image;
  target.url = req.body.url;

  data = task.update(target);

  res.json(data);
};


exports.delete_a_task = function(req, res) {
    var data = task.where(function(obj){
        return (obj.id == req.params.id)
    });

    if (null == data) {
        data = {};
    } else {
        data = task.remove(data[0]);
    }
  
    res.json(data);
};
