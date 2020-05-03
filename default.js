function add(num1,num2){
  num2=num2 || 0;
  //if num2 has a value then use it, else use 0
  return num1+num2;

}

const total = add(15);
console.log(total);

function add1(num1,num2=20){
  
  //if num2 has a value then use it, else use 0
  return num1+num2;

}

const total1 = add1(15,1);
const total2 = add1(15);

console.log(total1);
console.log(total2);