let mongoose = require('mongoose');

let OpmerkingSchema = new mongoose.Schema({
    id: String,
    name: String
});
/*
OpmerkingSchema.pre('remove', function (next) {
    this.model('Topic').update({}, { $pull: { opmerking: this._id } }, { safe: true, multi: true }, next);
})*/

mongoose.model('Opmerking', OpmerkingSchema);