const express = require('express');
const router = express.Router();
const body = require('body-parser');
const mongoose = require('mongoose');
const ejs =require('ejs');

router.use(body.urlencoded({extended:true}));

var BaiBao = require('../models/bai_bao');

router.route('/')
.get((req,res)=>{
    BaiBao.find({},(err,newlist)=>{
        //console.log(newlist);
        if(!err)
        {
            res.render('baibao',{newlist});
        }
        else{
            console.log(err);
        }
    })
})


module.exports = router;