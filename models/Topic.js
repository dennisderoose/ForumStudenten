let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    id: String,
    name: String,
    vraag: String,
    opmerkingen: [{
        _id: "5a3e7c4493d130001411d22b",
        name: "cvdsvdds"
    }]
});

mongoose.model('Topic', TopicSchema);