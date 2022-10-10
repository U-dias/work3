/*
function calc(ch) {
  if (ch == "=") {
   document.form1.text1.value = 
    window.function(document.form1.text1.value);
} else if (ch == "C") {
   document.form1.text1.value = "";
} else {
   document.form1.text1.value += ch; 
}};*/

myTotal = 0;
myInput = "";
myCalc = "+";
myFlg = 1;

function myValue(myDate){
    myFlg = 0;
    myINput += myDate;
    document.myForm.myLine.value = myInput
}

function myCalcuate(myDate){
    if (myFlg==0){
        myFlg = 1;
        myWork = myTotal + myCalc + myInput;
        
    }
}



















