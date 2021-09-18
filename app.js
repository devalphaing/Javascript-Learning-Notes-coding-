//1.
// console.log('Hello world');
// console.log(45);
// console.log(true);
// var v = 'Hello';
// console.log(v);
// console.log([1, 2, 3]);

// var map = {a:1, b:2, c:3};
// console.log(map.a);
// console.error('ERROR h bawa');
// console.warn('This is a warning');
// console.time('Hello');

// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');

// console.timeEnd('Hello');
//------------------------------------------------------

//2.

// var name = 'Devang Sharma';
// console.log(name);

// name = 'Steve smith';
// console.log(name);

// //Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// var firstName = 'John'; //Camel case
// var FirstName = 'John'; // Pascal case
// var first_name = 'John'; // Underscore

// //LET
// let name = 'John';
// console.log(name);

// var person = {
//     name: 'Devang',
//     surname: 'Sharma'
// }
// console.log(person);
// console.log(person.name + " " +person.surname);

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);

// var s = 'ser';
// s = 45;
// console.log(s + 45);

// //PRIMITIVE
// //------------

// //String
// const name = 'john doe';

// //Number
// const age = 45;

// //Boolean
// const right = false;

// //Null
// const car = null;

// //Undefined
// let test;

// //Symbol
// const sym = Symbol();

// console.log(typeof sym);

// // Reference Types - Objects
// //--------------------------

// //Array
// const hobbies = ['movies', 'music'];

// //Object literals
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }

// console.log(address.city);

// //Date
// const today = new Date();

// console.log(typeof today);

// let val;
// //Number to String
// val = String(5);
// val = String(4+4*9);

// //bool to String
// val = String(true);

// //Date to String
// val = String(new Date());

// //Array To String
// val = String([1, 2, 3]);

// //toString()
// val = (5).toString();
// val = (true).toString();
// val = (new Date()).toString();
// val = ([1, 2, 3, 4]).toString();


// //Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// let val;
// //String to Number
// val = Number('5.3');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3]);

// //Output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

//console.log(parseFloat('100.369').toFixed(2));

//-----------------------------------------------------------------------

// const num1 = 100;
// const num2 = 50;
// let val;

// //Simple
// val = num1*num2;
// val = num1-num2;
// val = num1+num2;
// val = num1%num2;

// //Math Object
// val = Math.pow(2,3);
// val = Math.PI;
// val = Math.abs(-96);
// val = Math.round(2.8);
// val = Math.ceil(2.1);
// val = Math.floor(2.9);
// val = Math.sqrt(64);
// val = Math.min(1, 3, -9, -96, 56);
// val = Math.max(1, 3, -9, -96, 56);
// val = Math.random();
// val = Math.round(Math.random() * 20);

// console.log(val);
//------------------------------------------------------------------

// const firstName = 'Devang';
// const lastName = 'Sharma';
// const age = 36;

// let val;

// //Concetination
// val = firstName + " " + lastName;

// //Append
// val = 'Brad ';
// val += 'Trave';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //Escaping
// val = "That's awesome, I can't wait";
// val = 'That\'s awesome, I can\'t wait';

// //Length
// val = firstName.length;

// //concat
// val = firstName.concat(' ', lastName, ' biddu');

// //change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// //
// val = firstName[0];

// //indexOf()
// val = firstName.indexOf('e');

// //charAt()
// val = firstName.charAt(1);

// //get last char
// val = firstName.charAt(firstName.length - 1);

// //substrings
// val = firstName.substring(0, 3);
// val = firstName.substr(0, 3);

// //slice
// val = firstName.slice(0, 3);
// val = firstName.slice(-3);

// //split()
// const str = 'hello there my name is devang';
// val = str.split(' ');

// //replace
// val = str.replace('my', 'your');

// //includes
// val = str.includes('devang');

// console.log(val);
//-----------------------------------------------------------------

// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// //without template strings(es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + 
//         '</li><li> '+job + '</li><li>City: ' + city + ' </li></ul>';

// document.body.innerHTML = html;

//***************
// //with template Strings(es6)

// function hello(){
//         return 'hello';
// }

// html = `
//  <ul>
//   <li>Name: ${name}</li> 
//   <li>Age: ${age}</li> 
//   <li>Job: ${job}</li> 
//   <li>City: ${city}</li> 
//   <li>${2+2}</li> 
//   <li>${hello()}</li> 
//   <li>${age > 30 ? 'Over 30' : 'under 30'}</li> 
//  </ul>
// `;

// document.body.innerHTML = html;

//---------------------------------------------------------------------------
//Arrays
//------

// const numbers = [1, 2, 3, 4, 5, 89, 54, 12, 3, 45];
// const num2 = new Array(22, 33, 44, 55, 66);
// const fruit = ['Apple', 'Banana', ' Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// //Get array Length
// val = numbers.length
// //check if is array
// val = Array.isArray(numbers);
// //get a single value from an array
// val = numbers[0];
// //insert into array
// numbers[2] = 100;
// //find index
// val = numbers.indexOf(5);

// //Mutating arrays

// //Add at the end
// numbers.push(250);
// //Add at front
// numbers.unshift(120);
// //Take off from end
// val = numbers.pop();
// //Take off from front
// val = numbers.shift();
// //splice values
// numbers.splice(0, 3);
// //Reverse
// numbers.reverse();
// //Concat array
// val = numbers.concat(num2);
// //sort
// val = val.sort(function(a, b){
//         return a - b;
// });

// //Find
// function under50(num){
//         return num < 50;
// }

// val = val.find(under50);

// console.log(numbers);
// console.log(val);

//-----------------------------------------------------------------------------
//object literals
//---------------

// const person = {
//         firstName: 'Steve',
//         lastName: 'Smith',
//         age: 30,
//         email: 'steve@gmail.com',
//         hobbies: ['music', 'sports'],
//         address: {
//                 city: 'Miami',
//                 state: 'FL'
//         },
//         getBirthYear: function(){
//                 return 1988;
//         }
// }

// let val;

// val = person;
// //Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.getBirthYear();

// console.log(val);

// const people = [
//         {name : 'john', age: 30},
//         {name: 'Mike', age: 23},
//         {name: 'Guddu', age: 33}
// ];

// for(let i = 0; i < people.length; i++){
//         console.log("name = " + people[i].name);
//         console.log("age = " + people[i].age);
//         console.log(" ");
// }

//--------------------------------------------------------------------------------
// //Date and Time
// //-------------

// let val;
// const today = new Date();
// let birthday = new Date('10-10-2000 11:25:00');
// birthday = new Date('October 10 2000');
// birthday = new Date('10/10/2000');

// val = birthday;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(0);
// birthday.setDate(12);
// birthday.setFullYear(1968);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);
//---------------------------------------------------------------------

// //If-else
// //-------

// // if(true){
// //     console.log('true');
// // }else{
// //     console.log(false);
// // }


// const id = '100';

// //Equal to
// if(id == 100){
//     console.log('Correct');
// }else{
//     console.log('Not Correct')
// }

// //not equal to
// if(id != 10){
//     console.log('Correct');
// }else{
//     console.log('Not Correct')
// }

// //three equal signs
// if(id === 100){
//     console.log('Correct');
// }else{
//     console.log('Not Correct')
// }

// //
// if(id !== 100){
//     console.log('Correct');
// }else{
//     console.log('Not Correct')
// }

// //to check variable is present or not(undefined)
// if(typeof id !== 'undefined'){
//     console.log(`The Id is ${id}`);
// }else{
//     console.log('No Id');
// }

//let id = 300;

// //Greater or less than
// if(id > 200){
//     console.log(`The Id is ${id}`);
// }else{
//     console.log('No Id');
// }

// const color = 'blue';

// if(color === 'red'){
//     console.log(`Color is ${color}`);
// }else if(color === 'blue'){
//     console.log(`Color is ${color}`);
// }else{
//     console.log("Nothing");
// }

//Logical operators
// const name = "Steve";
// const age = 70;

// //AND(&&)
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// }else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// }else{
//     console.log(`${name} is adult`);
// }

// //OR(||)
// if(age < 16 || age > 65){
//     console.log(`${name} cannot run in race`);
// }else{
//     console.log(`${name} can run`);
// }

// //Ternary operator
// const id = 100;
// console.log(id === 100 ? 'Correct' : 'Not Correct');

// //Without Braces
// if(100 === 100)
//     console.log("Correct");
// else   
//     console.log("Incorrect");
//--------------------------------------------------------------------------------

//Switches
//--------

// const color = 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;

//     case 'blue':
//         console.log('color is blue');
//         break;
    
//     default:
//         console.log('Color is not red or blue');
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
    
//     case 1:
//         day = 'Monday';
//         break;

//     case 2:
//         day = 'Tuesday';
//         break;

//     case 3:
//         day = 'Wednesday';
//         break;
    
//     case 4:
//         day = 'Thursday';
//         break;

//     case 5:
//         day = 'Friday';
//         break;

//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(day);

//------------------------------------------------------------------------

// //Function Declarations
// function greet(firstName = 'Devang', lastName = 'Sharma'){
//     //console.log('Hello');

//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet('John', 'Sharma'));

// //Function Expressions
// const square = function(x = 3){//default
//     return x*x;
// };

// console.log(square(2));

// //Immediately Invokable function expressions - IIFES
// (function(name){
//     console.log(`Hello ${name}`);
// })('kutte');

// //Property methods
// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(id){
//         console.log(`edit todo ${id}`);
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo');
// }

// todo.delete();
//------------------------------------------------------------------------------------------
//Loops and Iteration
//-------------------

// //For loop
// for(let i = 0; i <= 10; i++){
//     console.log(`${i}`);
//     console.log(i);
// }

// //while loop
// let i = 5;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// //do while
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10);

// const cars = ['Ford', 'Chevy', 'Honda', 'Tata', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// //For Each
// cars.forEach(function(x, index){
//     console.log(x + " " + index);
// });

// //MAP
// const users = [
//     {id: 1, name:'John'},
//     {id: 2, name:'Johny'},
//     {id: 3, name:'Johnarthan'},
//     {id: 4, name:'Jhu'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// //
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 45
// };

// for(let x in user){
//     console.log(user[x]);
// }
//-----------------------------------------------------------------------------------------

