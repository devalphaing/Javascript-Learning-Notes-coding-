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

// console.log(document.getElementById('task-title'));

// //get things from the element

// const taskTitle = document.getElementById('task-title');

// console.log(taskTitle.id);
// console.log(taskTitle.className);

// //Styling
// taskTitle.style.background = 'black';
// taskTitle.style.color = 'white';
// taskTitle.style.padding = '5px';

// //document.getElementById('task-title').style.display = 'none';

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';

// taskTitle.innerHTML = '<span style = "color:red">Task List</span>';

// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'blue';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'purple';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').textContent = 'Hello World';