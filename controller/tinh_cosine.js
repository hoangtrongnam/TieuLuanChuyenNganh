var BaiBao=require('./../models/bai_bao');
var Tu=require('./../models/tu');
var KetQua=require('./../models/ket_qua_cosine');
var math=require('mathjs');



//tinh góc giữa 2 bài

var array = [];
var array1 = [];
var l1=0;
var l2=0;
var s = 0;
var x;
var y;
var tinh_cosine = BaiBao.find({},(err,bai)=>{
  bai.forEach((d)=>
  {
      array.push(d._id);
  })
  for(var i=0; i<array.length-1;i++)
  {
    Tu.find({ id_bai: array[i] }, (err, tu) => {
      if(err)
      {
        console.log('loi khi tim tu ======================================================',err);
      }
      else{
      //console.log(array);
      for(var j=0;j<array.length;j++)
      {
        Tu.find({ id_bai: array[j] }, (err, t) => {
          if(err)
          {
            console.log('loi ===============================================',err);
          }
          else{
          tu.forEach(k => {
            l1+=k.tfidf*k.tfidf;
            y=k.id_bai;
            //console.log(k.tfidf,'   ',k.id_bai);
            t.forEach((p)=> {
                if (k.tu == p.tu) {
                  s += k.tfidf * p.tfidf;
                }
              });
          })
          t.forEach((p)=>{
            l2+=p.tfidf*p.tfidf;
            x=p.id_bai;
          })
          // console.log('ket qua l1 : ',math.sqrt(l1));
          // console.log('ket qua l2 : ',l2,'    ',math.sqrt(l2));
          // console.log('day la s: ',s);
          var ketqua=s/(math.sqrt(l1)*math.sqrt(l2));
          if(ketqua>0.03)
          {
            // console.log(ketqua,'===============',x,'=================',y);
            var _KetQua = new KetQua();
            _KetQua.id_bai1 = x;
            _KetQua.id_bai2 = y;
            _KetQua.cosine = ketqua;
            _KetQua.save((err,ketquas)=>{
              if(err)
              {
                console.log('loi roi');
              }
              else{
                console.log('them thanh cong!');
              }
            })
          }
          l1=0;
          l2=0;
          s=0;
        }
        });
      }
    }
    });
  }
}).limit(20)
// setTimeout(()=>{
//   tinh_cosine
// },5000000)
module.exports={
  tinh_cosine
}
