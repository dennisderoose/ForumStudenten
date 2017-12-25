let mongoose = require('mongoose');
import { Opmerking } from '../app/topic/opmerking/opmerking.model';
//import { Opmerking } from 'app/topic/opmerking/opmerking.model';

let TopicSchema = new mongoose.Schema({
    id: String,
    name: String,
    vraag: String,
    opmerkingen: [Opmerking]
});

mongoose.model('Topic', TopicSchema);