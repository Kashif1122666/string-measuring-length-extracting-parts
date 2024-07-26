// CHAPTER 22: Chapter 22: String measuring length and extracting parts:

// FINDING length OF String
// const student = "kashif afridi";
// const studentNameLength = student.length;
// console.log(studentNameLength);
// console.log("first".length);

// extract part of a string

// array recap
// const numbers = [1,2,3,4,5];
// const arraypart = numbers.slice(0,2);
// console.log(arraypart);

// slice with strings
// const language = "javascript";

// usning another variable
// const stringpart = language.slice(0,4);
// console.log(stringpart);

// not using another variable
// console.log(language.slice(0, 4));

// USERINPUT city name first letter should be capital
// const city = prompt("please enter your city name");
// const firstLetter = city.slice(0,1);
// const capitalFirstLetter = firstLetter.toUpperCase();
// const remaningLetters = city.slice(1);
// const lowerCaseRemainingletters = remaningLetters.toLowerCase();
// const fullNameWithCap = capitalFirstLetter + lowerCaseRemainingletters;
// console.log({firstLetter});
// console.log({capitalFirstLetter});
// console.log({remaningLetters});
// console.log({lowerCaseRemainingletters});
// console.log(fullNameWithCap);

// month name abbrevation if length > 3
// understanding problem
// january to jan
// may to may


// const monthname = prompt("enter month name please");
// let shortform = "";

// if(monthname.length > 3){
//     shortform = monthname.slice(0,3);
//     console.log(shortform);
// }
// else{
//     console.log(monthname);
// }