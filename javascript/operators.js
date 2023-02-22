//Assigment  operators:
//+= 
var x = 60;
let y = 20;
//x= x+y;
//x+=y;
x = x - y;
console.log(x);





//postfix prefix opretors

let value1 = -2;
console.log(value1);
console.log(value1++);// i= i+1 / i= 0 + 1
console.log(value1);



let value2 = 3;
console.log(value2);
console.log(++value2);//  j=j+1
console.log(value2);


let value3 = 4;
console.log(value3);
console.log(value3--);// value3 = value -1
console.log(value3);


let value4 = 4;
console.log(value4);
console.log(--value4);// value3 = value -1
console.log(value4);

// note..
// variable-name ++ : postfix opretors returns the variable  value first then got incremented  by 1
// ++ variable-name : prefix opretors returns the variable  value first then got incremented  by 1


//Logical oparetors :
// && Logical And 1 T && R T=T 1*1=1
// || logical or L F || R F = F 0*0=0
// ! logical  not 

var num1 = 20;

var num2 = 50;
if (num1 < 80 && num2 < 80) {
    console.log('ANDDDDDD');
}

if (num1 > 80 || num2 < 80) {
    console.log('ORRRRRRR');
}

if (num1 != 30) {
    console.log('iiiiiiiii');
}
// = == === difference

var myRank = '2' // Assigment oprerator used to assign value to the variable
var samRank = 2
// euality opretors
if (myRank == 'samRank') { // it will compare only value of variable
    console.log('equality opreators');
}
if (myRank === samRank) {// it will compare  value as well as data type of variable
    console.log('equality opretors');
}

if (myRank !== samRank) {
    console.log('!== condition');
}


// ternory opretor :
let city = 'mumbai'; 



if (city === 'mumbai') {   
    console.log('i live in mumbai'); 
} else {
    console.log('i live in pune');
}
 
city === 'mumbai' ? console.log('I live in mumbai') : console.log('i live pune')     