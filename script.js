var contentDiv = document.getElementById("content");

var form = document.createElement("form");
form.setAttribute("name", "calc");

var textbox = document.createElement("input");
textbox.setAttribute("type", "text");
textbox.setAttribute("name", "txtResult");

form.appendChild(textbox);

var btnPlus = document.createElement("input");
btnPlus.setAttribute("type", "button");
btnPlus.setAttribute("value", "+");
btnPlus.setAttribute("class", "opr");
btnPlus.addEventListener("click", function () { doOperation("+") });
var btnMinus = document.createElement("input");
btnMinus.setAttribute("type", "button");
btnMinus.setAttribute("value", "-");
btnMinus.setAttribute("class", "opr");
btnMinus.addEventListener("click", function () { doOperation("-") });
var btnMulti = document.createElement("input");
btnMulti.setAttribute("type", "button");
btnMulti.setAttribute("value", "*");
btnMulti.setAttribute("class", "opr");
btnMulti.addEventListener("click", function () { doOperation("*") });
var btnClear = document.createElement("input");
btnClear.setAttribute("type", "button");
btnClear.setAttribute("value", "C");
btnClear.setAttribute("class", "clr");
btnClear.addEventListener("click", function () { doOperation("C") });
var btnEq = document.createElement("input");
btnEq.setAttribute("type", "button");
btnEq.setAttribute("value", "=");
btnEq.setAttribute("class", "eq");
btnEq.addEventListener("click", function () { doOperation("eq") });
var btnDivi = document.createElement("input");
btnDivi.setAttribute("type", "button");
btnDivi.setAttribute("value", "/");
btnDivi.setAttribute("class", "opr");
btnDivi.addEventListener("click", function () { doOperation("/") });

var buttons = [];
for (let i = 0; i < 10; i++) {
    var btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("value", i);
    btn.setAttribute("class", "num");
    btn.addEventListener("click", function () { doOperation(i) });
    buttons.push(btn);
}
var row1 = document.createElement("div");
row1.append(buttons[7], buttons[8], buttons[9], btnPlus);

var row2 = document.createElement("div");
row2.append(buttons[4], buttons[5], buttons[6], btnMinus);

var row3 = document.createElement("div");
row3.append(buttons[1], buttons[2], buttons[3], btnMulti);

var row4 = document.createElement("div");
row4.append(btnClear, buttons[0], btnEq, btnDivi);

form.append(row1, row2, row3, row4);

contentDiv.appendChild(form);


var number1 = "";
var number2 = "";
var operation = "";

function doOperation(value) {
    var operators = ["+", "-", "*", "/"];
    console.log("value: ", value);
    if (operators.includes(value)) {
        number1 = textbox.getAttribute("value");
        textbox.setAttribute("value", "");
        operation = value; //"+"
    } else if (value == "C") {
        number1 = "";
        number2 = "";
        textbox.setAttribute("value", "");
    } else if (value == "eq") {
        number2 = textbox.getAttribute("value");
        textbox.setAttribute("value", "");
        calc(number1, number2, operation);
    } else {
        let currValue = textbox.getAttribute("value"); 
        textbox.setAttribute("value", currValue + value);
    }
}

function calc(val1, val2, opr) {
    let n1 = Number.parseInt(val1);
    let n2 = Number.parseInt(val2);
    if(opr=="+") textbox.setAttribute("value",(n1+n2));
    else if(opr=="-") textbox.setAttribute("value",(n1-n2));
    else if(opr=="*") textbox.setAttribute("value",(n1*n2));
    else if(opr=="/") textbox.setAttribute("value",(n1/n2));
}