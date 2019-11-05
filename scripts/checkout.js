
console.log('you made it to the console');

let total = 0.0;
function load(){

}

function save(whatToSave){
var blob = new Blob([whatToSave],
{type: "text/plain;charset=utf-8"});
saveAs(blob, "total.txt");
}

function CM(){
total = total + 1.99;
alert("order placed")
}

function C(){
total = total + 1999.99;
alert("order placed")
}

function L(){
total = total + 100000.00;
alert("order placed")
}

function RL(){
  total = total + 100.00;
  alert("order placed")
  toString(total)
  save(total)
}

function LR(){
total = total + 200.00;
alert("order placed")
}

function Main(){

document.getElementById('total').innerHTML = total;
}
