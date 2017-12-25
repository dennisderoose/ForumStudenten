let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    id: String,
    name: String,
    vraag: String,
    opmerkingen: [{type: mongoose.Schema.Types.ObjectId, ref: 'Opmerking'}]
});

mongoose.model('Topic', TopicSchema);