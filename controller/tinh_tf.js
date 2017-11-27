


var BaiBao=require('./../models/bai_bao');
var Tu=require('./../models/tu');


var dem = 0;
var toLowerCase_text='';
var replace_text='';
var mang = '';
var tf=0;

var hamtrim='';
var tinhtf=BaiBao.find({},(err,tailieu)=>{
    if(err)
    {
        console.log('loi'+err);
    }
    else{
        tailieu.forEach((tl)=>{
            hamtrim=tl.NoiDung_text.trim();
            toLowerCase_text=hamtrim.toLowerCase();
            var pattern = /!|@|{|}|"|'|%|;|:|$|#|@|&|^|_|~|`|=|-|,|<|>\n|\t/ig;
            replace_text = toLowerCase_text.replace( pattern, " " );
            console.log(replace_text);
            mang=replace_text.split(' ');
            for(var i  in mang)
            {
                if(mang[i]!="")
                {
                    for(var j=i+1 in mang)
                    {
                        if(mang[i].toLowerCase() == mang[j].toLowerCase())
                        {
                            dem++;
                        }
                        //nếu nó không bằng nhau thì lưu lại và cho nó là 1
                    }
                    //tính td thì lấy số lần xuất hiện chia chiều dài văn bản
                    var length_mang = mang.length;
                    tf=dem/length_mang;
                   // console.log(dem + '==================' + tf + "================" + mang[i]);
                    //trong một văn bản thì từ đó không được lưu trên 2 lần nên cần phải sữ dụng
                    //db.tus.createIndex({id_bai:1 , tu:1},{unique:1})Tạo bảng trước
                    //lưu xuống
                    var tf_tu = new Tu();
                    tf_tu.id_bai = tl._id;
                    tf_tu.tu = mang[i].toLowerCase();
                    tf_tu.so_xuat_hien = dem;
                    tf_tu.tf = tf;
                    // console.log(tf_tu);
                    tf_tu.save((err,tu)=>{
                        if(err)
                        {
                            console.log('loi');
                        }
                        else{
                            console.log('them thanh cong!',tu);
                        }
                    })
                    dem=0;
                }
            }
            mang='';
        })
    }
}).limit(20)

// setTimeout(() => {
//     tinhtf
// }, 3000);
// setInterval(tinhtf,3000);//chay mai mai tuc la sau 3s thi lai xuat hien

module.exports={
    tinhtf
}