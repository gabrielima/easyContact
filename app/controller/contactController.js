var Contact = require('../models/contact.js');

exports.list = function(callback) {
	Contact.find({}, function(error, users) {
		if(error) {
			callback({error: 'Nao foi possivel listar os contatos'})
		} else {
			callback(users);
		}		
	});
};

exports.contact = function(id, callback) {

	Contact.findById(id, function(error, user) {
		if(error) {
			callback({error: 'Nao foi possivel mostrar o contato'})
		} else {
			callback(user);
		}		
	});
};

exports.save = function(contactObj, callback) {
	
	new Contact({
		'name'     : contactObj.name,
		'phone'    : contactObj.phone,
		'address'  : contactObj.address,
		'website'  : contactObj.website,
		'email'    : contactObj.email,
		'facebook' : contactObj.facebook,
		'twitter'  : contactObj.twitter,
		'type'     : contactObj.type
	}).save(function(error, contact) {
		if(error) {
			callback({error: 'Nao foi possivel salvar o contato'});
		} else {
			callback({success: 'Contato ' + contactObj.name + ' foi inserido ao banco de dados'});
		}
	});	
};

exports.update = function(id, contactObj, callback) {
	
	Contact.findById(id, function(error, contact) {
		
		if(contactObj.name) contact.name         = contactObj.name;
		if(contactObj.phone) contact.phone       = contactObj.phone;
		if(contactObj.address) contact.address   = contactObj.address;
		if(contactObj.website) contact.website   = contactObj.website;
		if(contactObj.email) contact.email       = contactObj.email;
		if(contactObj.facebook) contact.facebook = contactObj.facebook;
		if(contactObj.twitter) contact.twitter   = contactObj.twitter;
		if(contactObj.type) contact.type         = contactObj.type;

		contact.save(function(error, contact) {
			if(error) {
				callback({error: 'Nao foi possivel salvar o contato'});
			} else {
				callback(contact);
			}
		});
	})
};

exports.delete = function(id, callback) {
	
	Contact.findById(id, function(error, user) {
		if(error) {
			callback({error: 'Nao foi possivel excluir o contato'});
		} else {
			user.remove(function(error) {
				if(!error) {
					callback({response: 'Contato excluido com sucesso'});
				}
			}) 
		}		
	});
};
