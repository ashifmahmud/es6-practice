const wifey = "Morgina";
console.log(wifey);

const numbers = [12,13];
numbers[1]=99;
numbers.push(12);
console.log(numbers);
//you can't change a constant variable later
//in case of array you can change the element, but not the whole array
//you can't replace the variable name of const

let patient = "rahim chahcha";
patient = "fatema khala";
console.log(patient);

//can change those in let type

let sum=0;
for(let i = 0;i<0;i++){
  sum = sum+i;
}
//let i=0,i can't be used outside scope
console.log(i);