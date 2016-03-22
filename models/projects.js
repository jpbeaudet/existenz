var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Projects = new Schema({
	meta:{ 
		last_modified: Date,
		projectname: String,
		admin: String,
		hdwallet: String
	},
	profile:{
		last_modified: Date,
		header:{ 
			banner_url: String,
			title: String
			},
		body:{
			website: String,
			description: String					
			},
		footer: {
			copyrigth: String
			}
	}
});

module.exports = mongoose.model('projects', Projects);