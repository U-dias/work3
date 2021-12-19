/*let i = 3;
function scopeTest() {
  let i = 5;
  console.log(i);
  for (let i = 0; i< 10; i++) {
    console.log(i);
  }
}
scopeTest();
console.log(i);*/

/*let message = new String("noche")
 console.log(message.length);*/
 
/* let file = "sample.jpg";
let temp = file.split(".");
console.log(temp[0]);*/

/*let card = [4,10,5,"K",7];
let endIndex = card.indexOf("K");
let new_card = card.slice(0,endIndex);
console.log(new_card);*/

/*let ymd = [2021,3,1];
console.log(ymd.join("/"));*/

/*let now = new Date();
 console.log(now.getFullYear());
 console.log(now.getMonth());
 console.log(now.getDate());
 console.log(now.getDay());
 
 now.setMonth(now.getMonth()+6);
 console.log(now.getFullYear());
 console.log(now.getMonth());
 console.log(now.getDate());*/
 
 /*let now = new Date();
 console.log(now.toLocaleString());
 console.log(now.toLocaleDateString());
 console.log(now.toLocaleTimeString());*/
 
 /*let days = ["日","月","火","水","木","金","土"];
 let now = new Date();
 console.log(days[now.getDay()] + "曜日");*/
 
 /*function getEnsyu(r) {
   return 2 *r*Math.PI;
 }
 function getMenseki(r) {
   return r*r*Math.PI;
 }
 
 console.log("円周："+getEnsyu(10)+"cm")
 console.log("面積："+getMenseki(10)+"cm")*/
 
class WashingMachine {
  constructor(maker,type,shape,capacity){
     this.maker =maker;
     this.type -type;
     this.shape =shape;
     this.capacity =capacity;
  }
  wash() {
    console.log('洗濯中');
  }
}
 
const sentaku = new WashingMachine('メーカーA','全自動','縦型','7.5kg');
sentaku.wash();
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 













