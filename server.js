//const express = require('express');

const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');


const express = require('express');
const router = express.Router();
const body = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs'); // set up ejs for templating  //No default engine was specified and no extension was provided.
app.use(body.urlencoded());

const port = 3000;
// var _BaiBao=require('./models/BaiBao');
//var app = express();

mongoose.Promise = global.Promise;

var db = require('./config/db');

mongoose.connect(db.url, (err)=>{
    console.log('ket noi thanh cong!');
});

//crawl dữ liệu
// var crawldb = require('./controller/crawldb');
// var crawl_link = require('./controller/crawl_link');

// var tinh_tf=require('./controller/tinh_tf');
// var tinh_idf=require('./controller/tinh_idf');
// var tinh_tfidf=require('./controller/tinh_tfidf');
// var tinh_cosine=require('./controller/tinh_cosine');
app.use('/baibao',require('./controller/baibao'));
app.use('/',require('./controller/noidung'));
           
// app.get('/load',(req,res)=>{
//     _BaiBao.findById(post_id,(err, BaiBao)=>{
//         if(err)
//         {
//             console.log('loi roi');
//         }
//         else{
//             ND_text=BaiBao.BaiBao.NoiDung_text;
//             //ND_text.replace(',','');
//             arr_text=ND_text.split(' ');
//             res.render('tf',{arr_text});
//             for(var i in arr_text)
//             {
//                 length_Bao++;
//                 console.log(length_Bao + arr_text[i]);
//                 if(arr_text[i].toLowerCase()==tu.toLowerCase())
//                 {
//                     console.log(arr_text[i]+'=======');
//                     SoLanXuatHien++;
//                 }
//             }
//             tf=SoLanXuatHien/length_Bao;
//             console.log( SoLanXuatHien + '========' +tf + '========='+length_Bao);
//         }
//     })
// });






var a = "The quick brown fox jumped over the lazy dog.";

var pattern = /T|q|b|f/ig;

console.log(a.replace( pattern, " " ));



app.listen(port,()=>{
    console.log('kết nối thành công!');
});

