var db2json = require('../db2json').db2json
	,models = require('../models.js');
exports.index = function(req, res) {
  models.Importance.findAll().on('success', db2json(res));
};
