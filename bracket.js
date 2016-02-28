var flag;
var para = document.createElement('p');
var result = document.querySelector('#result');

function checkBracket() {
    var formula = document.querySelector('#formula').value;
    var i,
        len = formula.length;
    var open = 0,
        close = 0,
        position = 1;
    for(i = 0; i < len; i++) {
        var temp = formula.charAt(i);
        if(temp === '(') {
            open++;
        }
        if(temp === ')') {
            if(open > close) {
                close++;
            } else {
                flag = 0;
                position = 0;
                break;
            }
        }
    }
    if(open === close && position != 0) {
        flag = 1;
    } else {
        flag = 0;
    }
    printMessage(flag);
}

function printMessage() {
    if(flag == 0) {
        para.textContent = "Not Correct";
        result.appendChild(para);
    } else {
        para.textContent = "Correct";
        result.appendChild(para);
    }
}