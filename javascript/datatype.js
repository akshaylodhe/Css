let myname = 'Akshay';
//let mynamelist = [] empty arrry
let mynamelist = ['ram', 'sham', 'king', 'Akshay', 40, 60, test()];

function test() {

}

console.log('mynamelist', mynamelist);
console.log(mynamelist[1]);
console.log(mynamelist.length);// 7


// let student = {}//empty object
let student = {

  name: 'Aksahy',
  age: '20',
  class: '22',
  failstatus: false
}
console.log(student);
console.log(student.name);


let employes = [{
  name: 'raj',
  age: 40
},

{
  name: 'rinki',
  age: 40

},
{
  name: 'ram',
  age: 25
}
]


console.log(employes);
console.log(employes[1].name);


let list = [
  ['pp', 'oo'],
  ['ppp', 'ooo', ['ppppp', 'oooooooo']],
  ['pppp', 'oooo',],];


console.log(list);
console.log(list[0][1]);
console.log(list[1][2][0]);

var obj = {
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  },
  "status": "succsess"
}
console.log(obj.posts[0].author)


// Data types in js

//string 
//number
//boolean
//object
//null
//undefined 

var car = 'null i am Akshay';//true, -9,0,90,-0
console.log(typeof(car));
console.log(typeof(20*40+'rinki'+20));

 
