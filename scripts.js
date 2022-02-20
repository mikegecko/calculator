const currentDisplay = document.querySelector('.screen-current');
const lastDisplay = document.querySelector('.screen-last');
const buttons = document.querySelectorAll('.btn');

let firstArgument = 0;
let secondArgument;
let operator;
let lastOperator;

buttons.forEach(element => {
    element.addEventListener('click', buttonHandler);
});
/*Make a function that handles the leading 0 on the display by using a handler whenever the display is updated
    - maybe also make this function responsible for updating both displays?*/
function buttonHandler(e){
    //console.log(e);
    switch(e.target.id){
        case '9':
            currentDisplay.innerHTML += '9';
            break;
        case '8':
            currentDisplay.innerHTML += '8';
            break;
        case '7':
            currentDisplay.innerHTML += '7';
            break;
        case '6':
            currentDisplay.innerHTML += '6';
            break;
        case '5':
            currentDisplay.innerHTML += '5';
            break;
        case '4':
            currentDisplay.innerHTML += '4';
            break;
        case '3':
            currentDisplay.innerHTML += '3';
            break;
        case '2':
            currentDisplay.innerHTML += '2';
            break;
        case '1':
            currentDisplay.innerHTML += '1';
            break;
        case '0':
            currentDisplay.innerHTML += '0';
            break;
        default:
            console.log(`Handler error for ${e}`);
    }
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b; //Implement test for divide by 0
}
function operate(arg1, operator, arg2){
    switch(operator){
        case '+':
            add(arg1,arg2);
            break;
        case '-':
            subtract(arg1, arg2);
            break;
        case '*':
            multiply(arg1, arg2);
            break;
        case '/':
            divide(arg1, arg2);
            break;
        default:
            console.log(`Invalid operator ${operator}`);
    }
}