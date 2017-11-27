
var BaiBao=require('./../models/bai_bao');
var Tu=require('.//../models/tu');
var IDF=require('./../models/tu_idf');
const math = require("mathjs");

//tính idf
var idf1=0;
var tinhidf=BaiBao.count({},(err,tongtailieu)=>{
    //console.log(tongtailieu);
    Tu.find({},(err,tu)=>{
        tu.forEach((t)=>{
            Tu.count({tu:t.tu},(err,count)=>{
                //console.log(count);
                //console.log('==========' + t.tu);
                idf1 = math.log10(tongtailieu/count);
                //console.log(idf1);
                //chỉ cho phép mỗi từ lưu một lần
                var idf_tu = new IDF();
                idf_tu.idf = idf1;
                idf_tu.tu = t.tu;
                idf_tu.so_bai_chua_tu = count;
                idf_tu.save((err,tu)=>{
                    if(err)
                    {
                        if(err.code===11000){
                            //console.log("lỗi từ đã tồn tại");
                            //cập nhật lại các giá trị của từ
                            var idf = math.log10(tongtailieu/count);
                            //console.log(idf + 'là gia tri idf, ' + 'gia tri chua tu: ' + count);
                            IDF.update({ tu:t.tu}, { idf:idf,so_bai_chua_tu:count }, { multi: true }, function (err, raw) {
                                if (err) {
                                    return handleError(err);
                                }
                                else{
                                    console.log('phan hoi kq ', raw);
                                }
                            });
                        }
                        else{
                            console.log('lỗi gì đâu đó rồi!');
                        }
                    }
                    else{
                        console.log('từ chưa tồn tại lưu thành công!');
                    }
                })
            })
        })
    })
})
// setTimeout(()=>{
//     tinhidf
// }, 900000)

module.exports={
    tinhidf
}