let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    name: String,
    vraag: String,
    opmerkingen: [{type: mongoose.Schema.Types.ObjectId, ref: 'Opmerking'}]
});

mongoose.model('Topic', TopicSchema);