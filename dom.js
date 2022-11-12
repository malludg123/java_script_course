console.log("connected");
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all);
console.log(document.all[4]);

document.title = 12345;
document.all[2].textContent='tttiiittllee';

var age = prompt("please enter your age:");
if(age>20)
  alert("Great you are a valid user/visitor");
else
  alert("Try Again");

var head = document.getElementById("head1");

console.dir(head);

var list_of_hobbies = document.getElementsByClassName("hobby");
console.log(list_of_hobbies);

var list_of_para = document.querySelector("p");
console.log(list_of_para);

var I_D = document.getElementById("heading");

