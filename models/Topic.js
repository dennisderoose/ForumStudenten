let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    id: ObjectId,
    name: String,
    vraag: String,
    opmerkingen: [String]
});

mongoose.model('Topic', TopicSchema);