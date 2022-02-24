const currentDisplay = document.querySelector('.screen-current');
const lastDisplay = document.querySelector('.screen-last');
const buttons = document.querySelectorAll('.btn');
const pointButton = document.querySelector('#point');
const regexOperators = /\+-\*\//i;

let firstArgument = 0;
let secondArgument;
let argumentArray = [];
let opSelect = false;
let pointLock = false;
let operator;
let lastOperator;


buttons.forEach(element => {
    element.addEventListener('click', buttonHandler);
});
/*Make calculator & buttons more stylish | Also if rewritting project use an array to hold values and just modify as its updated*/
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
        //Operation handling
        //TODO[Fix edge cases by checking deletion and if operator is pressed after second argument is entered then solve, fix display bugs with equal then switching operators]
        case 'add':
            if(opSelect == true){
                currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, currentDisplay.innerHTML.length - 3);
            }
            currentDisplay.innerHTML += ' + ';
            operator = document.querySelector('#add');
            operatorDisplay();
            break;
        case 'minus':
            if(opSelect == true){
                currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, currentDisplay.innerHTML.length - 3);
            }
            currentDisplay.innerHTML += ' - ';
            operator = document.querySelector('#minus');
            operatorDisplay();
            break;
        case 'multiply':
            if(opSelect == true){
                currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, currentDisplay.innerHTML.length - 3);
            }
            currentDisplay.innerHTML += ' * ';
            operator = document.querySelector('#multiply');
            operatorDisplay();
            break;
        case 'divide':
            if(opSelect == true){
                currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, currentDisplay.innerHTML.length - 3);
            }
            currentDisplay.innerHTML += ' / ';
            operator = document.querySelector('#divide');
            operatorDisplay();
            break;
        case 'point':
            if(!pointLock){
                currentDisplay.innerHTML += '.';
                pointLock = true;
            }
            pointDisplay();
            break;
        case 'equal':
            operate();
            pointLock = false;
            opSelect = false;
            pointDisplay();
            break;
        //Delete & Clear
        case 'clr':
            clearDisplay();
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
    firstArgument = 0;
    currentDisplay.innerHTML = '0';
    opSelect = false;
    pointLock = false;
    buttons.forEach(element => {
        element.style.backgroundColor = 'rgb(239, 239, 239)';
    });
    return;
}
//Gets rid of annoying leading 0
function displayUpdate(e){
    let s1 = currentDisplay.innerHTML;
    if(e.target.id == 'clr' || e.target.id == 'del'){
        return;
    }
    if(s1.charAt(0) === '0' && s1.length > 1){
        if(s1.charAt(1) === ' '){
            return;
        }
        if(s1.charAt(1) === '.'){
            return;
        }
        let s2 = s1.substring(1);
        currentDisplay.innerHTML = s2;
    }
    return;
}

function pointDisplay(){
    if(pointLock){
        pointButton.style.backgroundColor = 'rgb(167, 166, 166)';
    }
}

function operatorDisplay(){
    opSelect = true;
    buttons.forEach(element => {
        element.style.backgroundColor = 'rgb(239, 239, 239)';
    });
    operator.style.backgroundColor = 'rgb(167, 166, 166)';
    if(pointLock){
        //pointButton.style.backgroundColor = 'rgb(167, 166, 166)';
        pointLock = false;
    }
    return;
}

function del(){
    let dispArr = currentDisplay.innerHTML.split('');
    if(dispArr[dispArr.length - 1] == ' '){
        for (let index = 0; index < 3; index++) {
            dispArr.pop();
        }
        opSelect = false;
    }
    else{
        dispArr.pop();
    }
    
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
    return a/b;
}

function operate(){
    let oper = operator.innerHTML;
    argumentArray = currentDisplay.innerHTML.split(' ');

    try{
        firstArgument = parseFloat(argumentArray[0]);
        //operator is argumentArray[1]
        secondArgument = parseFloat(argumentArray[2]);
        console.log(firstArgument);
        console.log(secondArgument);
        lastDisplay.innerHTML = currentDisplay.innerHTML;
    }
    catch(error){
        console.log(error);
    }

    switch(oper){
        case '+':
            currentDisplay.innerHTML = add(firstArgument,secondArgument).toString();
            break;
        case '-':
            currentDisplay.innerHTML = subtract(firstArgument, secondArgument);
            break;
        case '*':
            currentDisplay.innerHTML = multiply(firstArgument, secondArgument);
            break;
        case '/':
            currentDisplay.innerHTML = divide(firstArgument, secondArgument);
            break;
        default:
            console.log(`Invalid operator ${oper}`);
    }
}