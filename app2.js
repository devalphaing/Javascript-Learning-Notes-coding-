//Window  Methods / Objects / Properties
//---------------------------------------

// window.console.log(45);

// //Alert
// window.alert('Hello World');

// //Prompt
// const input = prompt();
// alert(input);

// //Confirm
// if(confirm('Are you sure')){
//     console.log('yes');
// }else{
//     console.log('no');
// }
//------------------------------------
// let val;

// // //Outer height and width
// // val = window.outerHeight;
// // val = window.outerWidth;

// // //Inner height and width
// // val = window.innerHeight;
// // val = window.innerWidth;

// console.log(val);

// // Location object
//-------------------
// let val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// //val = window.location.search;

//Redirect
//--------
// window.location.href = 'google.com';

//reload
//------
//window.location.reload();

//History object
//--------------
//window.history.go(-2);

// let val = window.history.length;

// console.log(val);

// //Navigator Object
// //-----------------
// let val = window.navigator;

// console.log(val);
//----------------------------------------------------------------------------------------

// let val;

// val = document;
// val = document.all[5];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;

// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.images;
// val = document.scripts;

// console.log(val);

console.log(document.getElementById('task-title'));

//get things from the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Styling
document.getElementById('task-title').style.background = 'black';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px';

//document.getElementById('task-title').style.display = 'none';

