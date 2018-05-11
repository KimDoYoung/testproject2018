var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    id : String,
    gubun : String,
    title1 : String,
    title2 : String,
    title3 : String,
    category :String,
    gamdok : String,
    make_year : String,
    nara : String,
    dvd_id : String,
    title1num : String,
    title1title2 : String
});

module.exports = mongoose.model('movie', movieSchema);
