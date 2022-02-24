const currentDisplay = document.querySelector('.screen-current');
const lastDisplay = document.querySelector('.screen-last');
const buttons = document.querySelectorAll('.btn');
const regexOperators = /\+-\*\//i;

let firstArgument = 0;
let secondArgument;
let argumentArray = [];
let operator;
let lastOperator;


buttons.forEach(element => {
    element.addEventListener('click', buttonHandler);
});
/*TODO: Operator lockout and decimal lockout - make calculator & buttons more stylish */
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
        //Operation and decimal handling TODO[Highlight current operation / lockout decimal if already pressed]
        case 'add':
            currentDisplay.innerHTML += ' + ';
            operator = document.querySelector('#add');
            operatorDisplay();
            break;
        case 'minus':
            currentDisplay.innerHTML += ' - ';
            operator = document.querySelector('#minus');
            operatorDisplay();
            break;
        case 'multiply':
            currentDisplay.innerHTML += ' * ';
            operator = document.querySelector('#multiply');
            operatorDisplay();
            break;
        case 'divide':
            currentDisplay.innerHTML += ' / ';
            operator = document.querySelector('#divide');
            operatorDisplay();
            break;
        case 'point':
            currentDisplay.innerHTML += '.';
            break;
        case 'equal':
            argumentArray = currentDisplay.innerHTML.split(' ');
            try{
                firstArgument = parseFloat(argumentArray[0]);
                //operator is argumentArray[1]
                secondArgument = parseFloat(argumentArray[2]);
            }
            catch(error){
                console.log(error);
            }
            console.log(firstArgument);
            console.log(secondArgument);
            lastDisplay.innerHTML = currentDisplay.innerHTML;
            operate(firstArgument,operator.innerHTML,secondArgument);
            break;
        //Delete & Clear
        case 'clr':
            firstArgument = 0;
            currentDisplay.innerHTML = clearDisplay();
            break;
        case 'del':
            currentDisplay.innerHTML = del();
            break;
        default:
            console.log(`Handler error for ${e}`);
    }
    displayUpdate(e);
}
function clearDisplay(){
    return('0');
}
//Gets rid of annoying leading 0 - this is breaking something
function displayUpdate(e){
    let s1 = currentDisplay.innerHTML;
    if(e.target.id == 'clr' || e.target.id == 'del'){
        return;
    }
    if(s1.charAt(0) === '0' && s1.charAt(1) !== '.'){
        let s2 = s1.substring(1);
        currentDisplay.innerHTML = s2;
    }
    return;
}
function operatorDisplay(arg1){
    if(arg1 == true){
        buttons.forEach(element => {
            element.style.backgroundColor = 'rgb(239, 239, 239)';
        });
    }
    else{
        buttons.forEach(element => {
            element.style.backgroundColor = 'rgb(239, 239, 239)';
        });
        operator.style.backgroundColor = 'rgb(167, 166, 166)';
    }
}
function del(){
    let dispArr = currentDisplay.innerHTML.split('');
    dispArr.pop();
    if(currentDisplay.innerHTML == '' || dispArr.length == 0){
        return('0');
    }
    return dispArr.join('');
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
    if(a === 0){
        console.log('Cannot divide by 0!');
        return('Error');
    }
    return a/b; //Implement test for divide by 0
}
function operate(arg1, oper, arg2){
    switch(oper){
        case '+':
            currentDisplay.innerHTML = add(arg1,arg2).toString();
            break;
        case '-':
            currentDisplay.innerHTML = subtract(arg1, arg2);
            break;
        case '*':
            currentDisplay.innerHTML = multiply(arg1, arg2);
            break;
        case '/':
            currentDisplay.innerHTML = divide(arg1, arg2);
            break;
        default:
            console.log(`Invalid operator ${oper}`);
    }
}