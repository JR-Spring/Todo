let input = 'Whales play an amazing role in ecosystem'
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
   for(let j = 0; j < vowels.length; j++) {
    if(input[i] === vowels[j]){
      if (input[i] === 'e') {
       resultArray.push('ee');
     
     } else if (input[i] === 'u') {
         resultArray.push('uu');

      } else if (input[i] === 'o') {
         resultArray.push('oo');

       } else if (input[i] === 'a') {
         resultArray.push('aaaaa');
       
     } else {
         resultArray.push(input[i]);
         //console.log(input[i]) //Will print vowels with no else if code block that being i
    
     }
    }
   }
 }

 console.log(resultArray.join('').toUpperCase())// Will print blocks of code and join and uppercase. 