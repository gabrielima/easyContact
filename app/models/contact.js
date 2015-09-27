var mongoose = require('mongoose');
		
var contactSchema = mongoose.Schema({
	name      : { type: String, default: '' },
	address   : { type: String, default: '' },
	website   : { type: String, default: '' },
	emails    : [{ type: String, default: '' }],
	phones    : [{ type: String, default: '' }],
	socialMedia : {
		googlePlus : { type: String },
		instagram  : { type: String },
		pinterest  : { type: String },
		facebook   : { type: String },
		linkedin   : { type: String },
		snapchat   : { type: String },
		twitter    : { type: String },
		behance    : { type: String },
		dribble    : { type: String },
		tumblr     : { type: String },
		github     : { type: String },
		medium     : { type: String }
	}
});
		
module.exports = mongoose.model('Contact', contactSchema);