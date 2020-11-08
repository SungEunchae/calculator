const inputBox = document.querySelector(".js-input");
const input = document.querySelector(".js-number");
const operator = document.querySelector(".js-operator");
const equal = document.querySelector(".js-equal");
const result = document.querySelector(".js-output");

const NUMBER1 = 'number1';
const OPERATOR = 'operator';
const NUMBER2 = 'number2';

let storeNumber1 = null;
let storeOperator = null;
let storeNumber2 = null;

const reset = () => {
    storeNumber1 = null;
    storeOperator = null;
    storeNumber2 = null;
}
const showInput = () => {
   
    inputText = `${storeNumber1 === null ? '' : storeNumber1} ${storeOperator=== null ? '' : storeOperator} ${storeNumber2=== null ? '' :storeNumber2}`
    inputBox.innerText = `input : ${inputText}`;
}

const showOutput = () => {
    const num1 = Number(storeNumber1);
    const num2 = Number(storeNumber2);
    let output = 0;
    if(storeOperator === '+'){
        output = num1+num2;
    }
    else if(storeOperator === '-'){
        output = num1-num2;
    }
    else if(storeOperator === '*'){
        output = num1*num2;
    }
    else{
        output = num1/num2;
    }
    reset();
    result.innerText= `result : ${output}`; 
}
    
const saveOperator = () => {
    const btnO = event.target;
    if (btnO.value === undefined) {
        alert("please press the button ACCURATELY");
    }
    else {
        if(storeNumber1 === null && storeOperator === null){
            alert("please input number first.");
            reset();
        }
        else if(storeOperator !== null){
            alert("please input number first & operator cannot be two.");
            reset();
        }
        else {
            storeOperator = btnO.value;
        }
        showInput();
    }
}

const saveNumber = () => {
    const btn = event.target;
    if (btn.value === undefined) {
        alert("please press the button ACCURATELY");
    }
    else {
        if(storeOperator === null){
            if(storeNumber1 !== null){
                storeNumber1 = storeNumber1+btn.value;
            }
            else {
                storeNumber1 = btn.value;
            }  
        }
        else{
            if(storeNumber2 !== null){
                storeNumber2 = storeNumber2+btn.value;
            }
            else {
                storeNumber2 = btn.value;
            }  
        }
        showInput();
    }
}

const init = () =>{
    input.addEventListener("click",saveNumber);
    operator.addEventListener("click",saveOperator);
    equal.addEventListener("click",showOutput);
}

init();