var Crawler = require("js-crawler");
var db_link = require('../models/link');

var lay_link = new Crawler().configure({depth: 3})
  .crawl("https://vnexpress.net", function onSuccess(page) {
    //console.log(page.url);
    var _db = new db_link();
    _db.link = page.url;
    _db.save((err,db_link)=>{
        if(err)
        {
            console.log('loi roi');
        }
        else{
            console.log('luu thanh cong!');
        }
    });
  });
  module.exports = {
    lay_link
  }