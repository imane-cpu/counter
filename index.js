
const dec = document.getElementById('decrease');
const reset = document.getElementById('reset');
const inc = document.getElementById('incease');
const count = document.getElementById('count');

let c = 0;


inc.onclick =function(){
   c++;
   count.textContent = c;
}
dec.onclick =function(){
   c--;
   count.textContent = c;
}

reset.onclick =function(){
   c=0;
   count.textContent = c;
}


document.getElementById('submit').onclick = function () {
   document.getElementById('p').textContent = `Your age is ${c}`;
}