var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
    name: String,
});	
mongoose.model('Topic', TopicSchema);