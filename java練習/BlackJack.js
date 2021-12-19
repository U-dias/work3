//カードの数値を合計//
function sumCard(card) {
  let total = 0;
  for(let i = 0;i<card.length;i++){
   total += card[i];//合計に加算//
}
return total;//合計を出力//
}

//手持ちのカード//
let myCard = [1,2,3,4];
//関数を呼び出す//
let total = sumCard(myCard);
//結果を出力//
console.log(total);