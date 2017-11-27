const mongoose = require('mongoose');
var articleSchema = mongoose.Schema;

articleSchema = new mongoose.Schema({
        TieuDe:{type:'String',required:true},
        NoiDung_text:{type:'String', required:true},
        NoiDung_html:{type:'String', required:true},
        ThoiGian:{type:'Date',require:true}
});

module.exports = mongoose.model('BaiBao', articleSchema);
