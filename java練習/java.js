//let userName = "ポテパン太郎";//変数を宣言する
//  let userAge = 210; // 変数を宣言する
    
//  console.log(userName);
//  console.log(userAge);

  //let message="compreanos!";//新たに変数を宣言
  //userAge=211;//変数の中の値を変更

  //console.log(message);
  //console.log(userAge);

  //message="おめでとう";//新たに変数の中身を変更

  //console.log(message);
  //console.log(message);
  //console.log(message);
  
  //let name="カタリナックル";
  //console.log("こんにちは"+name+"さん");
  //console.log(name+"さんの注文履歴はこちら");
  //console.log(name+"さんへのおすすめ商品");

//let message="こんばんは！";  
//console.log(message+"カタリナックルさん");
//console.log(message+"カタリジェネさん");
//console.log(message+"カタリナウィザードさん");

//let text1="written"+"text";
//let text2="500"+"500";
//let text3=100+"text";
//let text4=text3+"and"+text1

//console.log(text1);
//console.log(text2);
//console.log(text3);
//console.log(text4);

//let number1=13/5
//let number2=13%5

//console.log(number1)
//console.log(number2)

//let message1="プログラミングで肩が凝る確率";
//let message2="80%";

//console.log(message1);
//console.log(message2);

/*let number1=300;
number1+=200;

console.log(number1);

let number2=500;
number2-=100;

console.log(number1);
console.log(number2);*/

    /* //数値型の100と文字列型の100は値とデータの型が同じではないですよね（間違っていますよね）の意味
    if(100==="100"){
     console.log("式の結果はtrue");
    }/*else{
      console.log("式の結果はfalse");
    }*/

/*let number=300;

if(number>80){
  console.log("number>80");
}else if(number>50){
  console.log("number>50");
}else{
  console.log("number<50")
}*/

/*let gender="men";
let age="20";

if(gender==="men"&&age>=20){
  console.log("men for over20");
}*/

/*let number1=100;
let number2="100";
let boolean_flag=false;

if(number1>100){
  number2=200;
}else if(number1!==number2){
  boolean_flag=true;
  number1+=300;
}else{
  boolean_flag=true;
  number1=300;
}

if(number1>=400&&boolean_flag){
  console.log("A")
}else{
  console.log("B")
}*/

/*for (let i=0;i<=20;i++){ //i++はカウンタ変数に「1」を足す場合の特殊記法
 if(i%2==0){
   console.log(i);
 }
}*/

/*let output_count=1;//カウンタ変数とは別に出力数をカウントする変数を用意
for(let i=0;i<=20;i++){
  if(i%2==0){
    console.log(i);
    console.log("出力回数"+output_count+"回目");
    
  if(output_count>=5){
    console.log("処理を抜ける")
    break;
  }
  output_count++;
  }
}
console.log("処理終了")*/

/*let i=0;
while(i<=20){
  if(i%2==0){
  console.log(i);
}
i++;}*/

/*function sumSelectNumber(number1,number2){
let resultSum=0;
resultSum=number1+number2;
return resultSum;
console.log("関数の処理が終了");
}

let result=sumSelectNumber(100,200);
console.log(result);*/

/*function sumSelectNumber(){
  console.log("関数の処理開始");
  console.log("この関数にはreturnがない")
  console.log("関数の処理終了")
}

sumSelectNumber();*/

/*function eventA(){
  alert("onclickイベントが発火しました");
}
function eventB(){
  alert("oninputイベントが発火しました");
}
function eventC(){
  alert("onmouseoutイベントが発火しました");
}
function eventD(){
  alert("onmouseoverイベントが発火しました");
}*/

    $(document).ready(function(){
      $(".buttonA").click(function() {
        let get_text = $(".target_textA").text(); //テキストを取得し変数に入れています。
        alert(get_text); //テキストが取得できたかアラートで確認をします。
      });
 
      $(".buttonB").click(function() {
        $(".target_textB").text("文章が変更された！"); //テキストを変更する処理です。
      });
 
      $(".buttonC").click(function() {
        $(".target_textB").text("文章が変わったぞ！"); //テキストを変更する処理です。
      });
    });


















