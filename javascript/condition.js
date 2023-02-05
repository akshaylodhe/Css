//if(condition){
// cond  =='true'
//}

var number = 60;

if (number < 30) {
   console.log('number is greater');
}

else {
   console.log('nunber is smaller');
}

if (number == 40) {
   console.log(number);
} else if (number == 60) {
   console.log(number);
} else if (number == 50) {
   console.log(number);
}
else {
   console.log('else block', number);
}


//  if (number == 40) {
// console.log(number);
// } if (number == 60) {
//  console.log(number);
//  } if ( number == 50) {
//  console.log(number);
//  }
//else{
//console.log(number);
//}



//switch-statament:
switch (number) {
   case 40:
      console.log(number);
      break;
   case 50:
      console.log(number);
  
   case 80:
      console.log(number);
      break;

   default:
      console.log('default');
      break;
}
