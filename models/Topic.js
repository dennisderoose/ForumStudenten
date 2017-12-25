let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    id: String,
    name: String,
    vraag: String,
    opmerkingen: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Opmerking'
        },
        name: {
            type: mongoose.Schema.Types.String,
            ref: 'Opmerking'            
        }
    }]
});

mongoose.model('Topic', TopicSchema);