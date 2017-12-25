let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    id: String,
    name: String,
    vraag: String,
    opmerkingen: []
});

mongoose.model('Topic', TopicSchema);