// routes.js

var contactController = require('./controller/contactController.js');
var	validator         = require('validator');

module.exports = function(app) {

	app.get('/contacts', function(req, res) {
		contactController.list(function(resp) {
			res.json(resp);
		});
	});

	app.get('/contacts/:id', function(req, res) {

		var id = validator.trim(validator.escape(req.params.id));
		
		contactController.contact(id, function(resp) {
			res.json(resp);
		});
	});

	app.post('/contacts', function(req, res) {

		var contactObj = validate(req.body);

		contactController.save(contactObj, function(resp) {
			res.json(resp);
		});
	});

	app.put('/contacts/:id', function(req, res) {
			
		var	contactObj = validate(req.body);
			        id = validator.trim(validator.escape(req.params.id)),

		contactController.update(id, contactObj, function(resp) {
			res.json(resp);
		});
	});

	app.delete('/contacts/:id', function(req, res) {

		var id = validator.trim(validator.escape(req.params.id));

		contactController.delete(id, function(resp) {
			res.json(resp);
		});
	});

	app.get('*', function(req, res) {
		res.sendFile('public/index.html', { root: './' });
	});

}

function validate(obj) {
	var contactObj = {
		name     : validator.trim(validator.escape(obj.name)),
		type     : validator.trim(validator.escape(obj.type)),
		phone    : validator.trim(validator.escape(obj.phone)),
		email    : validator.trim(validator.escape(obj.email)),
		twitter  : validator.trim(validator.escape(obj.twitter)),
		address  : validator.trim(validator.escape(obj.address)),
		website  : validator.trim(validator.escape(obj.website)),
		facebook : validator.trim(validator.escape(obj.facebook)),
	};

	return contactObj;
}