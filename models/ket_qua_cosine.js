var mongoose = require('mongoose');

var KetQuaSchema = new mongoose.Schema;

KetQuaSchema = mongoose.Schema({
    id_bai1:{type:String},
    id_bai2:{type:String},
    cosine:{type:Number}
})
module.exports = mongoose.model('ketqua',KetQuaSchema);
// hai bài báo thì chỉ được lưu 1 lần tính nếu có rồi thì cập nhật chứ k được lưu nên dùng 
// hàm db.ketqua.createIndex({tu:1, id_bai:1}, {unique:true});