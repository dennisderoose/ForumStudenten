let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    name: String,
    vraag: String,
    opmerkingen: [String]
});

mongoose.model('Topic', TopicSchema);