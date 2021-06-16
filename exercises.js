//********************************Kelvin converted to Fahrenheit 
 
 //Kelvin is a unit of temperature. Const variable values dont change
/*const kelvin = 0;

// This is how  to subtract from a const variable
const celsius = kelvin - 49;
console.log(celsius);

// Converted celsius to fahrenheit
let Fahrenheit = celsius * (9/5) + 90

// Supposedly rounded Fahrenheit
Fahrenheit = Math.floor(Fahrenheit); 

console.log(`The ${kelvin} degrees is in kelvin and the temperature is ${Fahrenheit} degrees Fahrenheit.`);*/


//*************************************Dog years vs human age*********************************


// Created variable
/*const myAge = 22;

// Created variable
let earlyYears = 2;

// modified variable
earlyYears = earlyYears * 10.5;

// modified existing variable myAge and the results saved to laterYears
laterYears = myAge - 2;

// modified laterYears
laterYears *= 4;

// printed 
console.log(laterYears)
console.log(earlyYears)

// added existing variables and total saved to myAgeInDogYears
myAgeInDogYears = laterYears + earlyYears

// used .toLowerCase 'method' and created variable
const myName = 'JRAHMONE'.toLowerCase();

// printed
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is  ${myAgeInDogYears} years old in dog years.`)
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is  ${myAgeInDogYears} years old in dog years.`)*/

/*let sjdfsj = 'sljdflsjl'
const 
console.console.log();

console.log('get it done');

const sum = (a, b) => {
    return a + b;
}

console.log(sum(9,8));
const numberDigits = x => {
    let numString = '';
    if (x >= 0 && x <= 9){
      numString = 'One digit: ' + x;
    }else if (x >=10 && x <= 99){
      numString = 'Two digits: ' + x;
    }else {
      numString = 'The number is: ' + x;
    }
  
    return numString;
  }
  console.log(numberDigits(5))
  console.log(numberDigits(25))
  console.log(numberDigits(-1))/*

  const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('install switches', 'cut sons hair', 'pick up gas can')
console.log(chores)


//
let numberClusters = [[1,2], [3,4], [5,6]]
const target = numberClusters[2][1]
console.log(target)
console.log(numberClusters)
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop()
console.log(secretMessage)
console.log(secretMessage.length)
secretMessage.push('to', 'Program')
console.log(secretMessage)
secretMessage[7] = 'right';
console.log(secretMessage)
const newarray = secretMessage.shift();
console.log(secretMessage)
console.log(newarray)
secretMessage.unshift('Programming')
console.log(secretMessage)

secretMessage.splice(6, 5,'know');
console.log(secretMessage)

console.log(secretMessage.join());

const vacationSpots = ['Bali', 'Paris', 'Tulum'];



// Looping through arrays
for (let i = 0; i < vacationSpots.length; i++ ){
  //console.log(`'I would love to visit' ${vacationSpots[i]}`);
  console.log('I would love to visit ' + vacationSpots[i]);
}


for (let i = 0; i < 10; i++) {
  if (i > 3 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');*/


//For of Loop with a break***********************
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Parotia'){ 

    break; 
  }
  console.log(bird);
}


//For of Loop with a continue********************
const strangeBirdy = ['Shoebill', 'Cockatrice', 'Basan', 'tiger', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirdy) {
  if  (bird === 'tiger'){
    continue;
  }
  console.log(bird);
}


// Objects***************
let fasterShip = {
 /*key*/ 'Fuel Type': /* value*/ 'Turbo Fuel',
  /* key */ color: /*value */'silver'

}

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
  
};

alienShip.invade();
