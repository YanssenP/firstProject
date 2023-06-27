var ageRequiredToDrive = 16
var currentAge = 15
if(currentAge >= ageRequiredToDrive) {
    console.log('This person can drive')
}else {
    console.log('This person cannot legally drive')
}



var costOfEggs = 2.22;

var numberOfDozensOfEggsToPurchase = 0;

if (costOfEggs > 3) {

numberOfDozensOfEggsToPurchase = 1;

} else if (costOfEggs > 2) {

numberOfDozensOfEggsToPurchase = 2;

} else if (costOfEggs > 1) {

numberOfDozensOfEggsToPurchase = 3;

} else {

  numberOfDozensOfEggsToPurchase = 4;

}

console.log('I will buy ' + numberOfDozensOfEggsToPurchase + ' dozen eggs.');



var grade = 'A'; 

switch (grade) {

    case 'A':

        console.log('90-100');

        break;

    case 'B':

        console.log('80-89');

        break;

    case 'C':

        console.log('70-79');

        break;

    case 'D':

        console.log('60-69');

        break;

    default:

        console.log('0-59');

}


var cupsOfFlour = 0;

while (cupsOfFlour < 5) {

  console.log('Scooping a cup of flour into the bowl');

  cupsOfFlour += 1;

  console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 

}


for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {

    console.log('Scooping a cup of flour into the bowl');
  
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 
  
  }

  let i = 10;

  do {
  
    i++;
  
    console.log(i);
  
  } while (i < 3);



