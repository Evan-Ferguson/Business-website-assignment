
console.log('you made it to the console');

let total = 0.0;

function CM(){
total = total + 1.99;
alert("order placed")
//console.log('total is:' + total)
}

function C(){
total = total + 1999.99;
alert("order placed")
}

function L(){
total = total + 100000.00;
alert("order placed")
}

function LR(){
total = total + 200.00;
alert("order placed")
}

function Main(){
document.getElementById('total').innerHTML = Number(total);
}
