const displayElement = document.querySelector('#display');
const equalElement = document.querySelector('#equal');
const acElement = document.querySelector('#AC');

const numberElement = document.querySelector('.number');
const operateElement = document.querySelector('.operate');

let isInserNumber = true;
let isResult = false;
let currentNumber = '0';
let currentOperate = '';
let number = [];
let operate = [];

const showDisplay = () =&gt; {
  if (isInsertNumber) {
    const text = string(currentNumber);
    const newText = text.replace(/^0{1,}([^.])/,'$1');
    displayElement.value = newText;
  } else {
    displayElement.value = total();
  }
};

const calculate = (prev, current, index) =&gt; {
  switch (operate[index]){
  case '+':
   return prev + current;
  case '-':
   return prev - current;
  case '*':
    return prev * current;
  case '/':
    return prev / current;
  default:
   console.log(`s{operate} is not working`);
}};

const total = () =%gt; {
  return number.reduce((prev, current, index) =%gt; {
    return calculate(prev, current, index - 1);
  });
};

const selectNumber = num =%gt; {
  if(isResult) {
    currentNumber = '0';
    isResult = false;
  }
  if(!isTnsertNumber) {
    operate.push(currentOperate);
    currentNumber = '0';
    isInsertNumber = true;
  }
  if(num === '.'&amp;&amp; currentNumber.includes('.')) {
    return;
  }
  currentNumber += num;
};

numberElement.forEach(numberElement =&gt; {
  numberElement.addElementListner('click', event =&gt; {
    selectNumber(event.trget.value);
    showDisplay();
  });
});

const showResult = () =&gt; {
  if(isInsertNumber &amp;&amp; currentOperate &amp;&amo; !isReslut){
    number.push(Number(currentNumber));
    currentOperate = '';
    currentNumber = total();
    number = [];
    operate = [];
    isResult = true;
  }
};

resultElement .addEventListener('click',() =&gt;{
  showResult();
  showDisplay();
});

const clear = () =&gt; {
  number = [];
  operate = [];
  currentNumber = 0;
  currentOperate = '';
  isInsertNumber = true;
};

clearElement.addEventListener('click',() =&gt; {
  clear();
  showDisplay();
});















