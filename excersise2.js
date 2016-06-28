// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
var x= 1;
var y= 2;
function max(x,y){

    if (x > y){

    }  else  {
   return (x < y);

    }
}




// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
var x = 1;
var y = 2;
var z =3;

function maxOfThree(x,y,z){
  return Math.max.apply([x,[y,[z]]]);

}


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
//   var vowels = ['a','e','i','o','u'];
//
// function isVowel(char){
//
// if (char === vowels) {
//     return  "true";
// } else {
//     return  "False";
// }
// }
// console.log(isVowel('a'));



function isVowel (char){

var vowels = ['a','e','i','o','u'];

if (vowels.indexOf(char) > -1) {
return true;
} else {
return false;
}
}

console.log(isVowel('d'));
console.log(isVowel('l'));

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  if  translate  = (x ++ constanant) {

  }
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverseString(str){
var arr =  str.split('');
  var reversedArr= arr.reverse();
    var reversedStr= reversedArr.join('');
return reversedStr;
}
