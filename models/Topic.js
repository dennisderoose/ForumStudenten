let mongoose = require('mongoose');
import { Opmerking } from '../src/app/topic/opmerking/opmerking.model' 

let TopicSchema = new mongoose.Schema({
    id: String,
    name: String,
    vraag: String,
    opmerkingen: [String]
});

mongoose.model('Topic', TopicSchema);