const mongoose =  require('mongoose');

var TuSchema = mongoose.Schema;

TuSchema = mongoose.Schema({
        id_bai:{type:String},
        tu:{type:String},
        so_xuat_hien:{type:Number},
        tf:{type:Number},
        tfidf:{type:Number}
})
module.exports = mongoose.model('tu',TuSchema);
//dùng lệnh này để tạo chỉ mục không cho phép 2 trường lặp lại  db.tus.createIndex({tu:1, id_bai:1}, {unique:true});