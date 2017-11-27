
var Tu=require('./../models/tu');
var IDF=require('./../models/tu_idf');

//tính tfidf lấy tf*idf

var tinh_tfidf = Tu.find({},(err,tu_tf)=>{
    tu_tf.forEach((for_tu_tf)=>{
        IDF.find({tu:for_tu_tf.tu},(err,idf)=>{
            if(err)
            {
                console.log('loi========================================================',err);
            }
            else{
                console.log(idf);
                idf.forEach((for_tu_idf)=>{
                    var p=for_tu_tf.tf;
                    var q=for_tu_idf.idf;
                    var tfidf = p*q;
                // console.log(tfidf);
                    Tu.update({ _id:for_tu_tf._id}, {$set: { tfidf:tfidf }}, (err, tu) =>{
                        if(err)
                        {
                            console.log('loi'+err);
                        }
                        else{
                            console.log('cap nhat thanh cong!',{tu});
                        }
                    });
                })
            }
        })
    })
})
setTimeout(()=>{
    tinh_tfidf
}, 2200000)
module.exports={
    tinh_tfidf
}