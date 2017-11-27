const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');


var Crawl_DB = require('../models/bai_bao');
var linkdb = require('../models/link');
var url = '';
var crawler_db = linkdb.find({},(err, url_link)=>{
    if(err)
    {
        console.log('loi');
    }
    else{
        url_link.forEach(function(l) {
            url = l.link;
            console.log(l.link)
            request (url,(err,res,body)=>{
                if(!err && res.statusCode == 200)
                {
                var $ = cheerio.load(body);
                    var _BaiBao = new Crawl_DB();
                    _BaiBao.TieuDe = $('.sidebar_1 h1').text();
                    _BaiBao.NoiDung_text=$('.sidebar_1 article').text();
                    _BaiBao.NoiDung_html = $('.sidebar_1').html();
                    _BaiBao.ThoiGian = new Date();
                    _BaiBao.save((err, Crawl_DB)=>{
                        if(err)
                        {
                        console.log(err+'loi roi');
                        }
                        else{
                            console.log('crawl thành công!');
                        }
                    })
                }
                else{
                    console.log(err+'Loi roi ban ơi');
                }
            })
        })
    }
})



 module.exports = {
    crawler_db
 }