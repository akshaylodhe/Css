var text = 'rinki \n patil';
console.log(text.length);
console.log(text);

var carNames = 'Audi, Jagaur, miniCup,Swift';
let res = carNames.slice(-7, -4)
console.log(res);
console.log(carNames.substring(-1, 5));//internally negative value will consider as 0
let text1 = "hello world";
let result = text1.substr(1, 4);
console.log(result);

console.log(carNames.replace('Jagaur', "bmw"));
let carName2 = carNames.replace('Jagaur', 'I20')
console.log(carName2);

let lastName = 'patil';
console.log(lastName.toUpperCase());


let firstName = 'Akshay is live is pune';
let last_Name = 'patil';
let fullName = firstName + ' ' + last_Name
console.log(fullName);

let fullName2 = last_Name.concat(firstName)
console.log(fullName2);
console.log(firstName.charAt(1));
console.log(firstName[1]);
console.log(firstName.indexOf('/is/'));
console.log(firstName.lastIndexOf('is'));
console.log(firstName.search(/is/));

var myname = '   Akshay   '
myname1 = myname.trim();
console.log(myname1);


var DOB = '10/10/2010'
let DOB1 = DOB.split("/")
console.log(DOB1);
