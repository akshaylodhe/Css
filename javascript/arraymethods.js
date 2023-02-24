var arrayItem = [10, 20, 30, 4000, 8888, 6666]
console.log(arrayItem.length);

let lastIndex = arrayItem.length - 1;
console.log(lastIndex);

delete arrayItem[lastIndex];
console.log(arrayItem);


console.log(arrayItem.toString());
let joinedArray = arrayItem.join(' ');


// console.log(joinedArray);
// console.log(popedArray);

let popedArray = arrayItem.pop();
console.log(arrayItem);



delete arrayItem[0];
console.log(arrayItem);

delete arrayItem[3];
console.log(arrayItem);

let num1 = [10, 111, 15, 555]
let num2 = [105, 1061, 623, 2622]
console.log(num2.concat(num1));
 
console.log(num2.slice(1));


console.log(num2.reverse());
let a = ['red','blue','white',]
console.log(a.sort());
console.log(num2.sort());

