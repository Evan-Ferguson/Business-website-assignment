
console.log('you made it to the console');

let total = 0.0;
function load(){

}
function save(){

}
function CM(){
total = total + 1.99;
alert("order placed")
return total
}

function C(){
total = total + 1999.99;
alert("order placed")
return total
}
function LL(){
  total = total + 100.00;
  alert("order placed")
  return total
}
function L(){
total = total + 100000.00;
alert("order placed")
return total
}

function LR(){
total = total + 200.00;
alert("order placed")
return total
}

function Main(){

document.getElementById('total').innerHTML = total;
}
