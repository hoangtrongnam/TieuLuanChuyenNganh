const mongoose = require('mongoose');


var UserSchema = mongoose.Schema;

UserSchema = new mongoose.Schema({
    User:{
        Username:{type:String,require:true},
        SDT:{type:String,require:true},
        SCMND:{type:String,require:true},
        Email:{type:String,require:true},
        Password:{type:String,require:true},
        ThoiGian:{type:String,require:true}
    }
});
module.exports=mongoose.model('User',UserSchema);
