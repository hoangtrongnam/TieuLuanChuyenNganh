
const express= require('express');

const router = express.Router();
const body = require('body-parser');
const mongoose = require('mongoose');
const ejs =require('ejs');

var NoiDung = require('./../models/bai_bao');
var KetQua = require('./../models/ket_qua_cosine');

router.use(body.urlencoded({extended:true}));


router.route('/:id')
.get((req,res)=>{
    var id=req.params.id;
    var mang="";
    console.log(id);
    NoiDung.find({_id:id},(err,noidung)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            KetQua.find({id_bai1:id},(err,ketqua)=>{
                if(err)
                {
                    console.log(err);
                }
                else{
                    // res.render('noidung',{noidung,kq});
                    NoiDung.find({},(err,tieude)=>{
                        if(err)
                        {
                            console.log(err);
                        }
                        else{
                            res.render('noidung',{noidung,ketqua,tieude})
                        }
                    })
                }
            })
        }
    })
})


module.exports = router;
