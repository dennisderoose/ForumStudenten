let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    id: String,
    name: String,
    vraag: String,
    opmerkingen: [{
        _id: String,
        name: String
    }]
});

mongoose.model('Topic', TopicSchema);