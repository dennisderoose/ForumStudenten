import { ObjectID } from './C:/Users/Dennis/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    id: ObjectID,
    name: String,
    vraag: String,
    opmerkingen: [String]
});

mongoose.model('Topic', TopicSchema);