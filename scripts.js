/*




*/
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