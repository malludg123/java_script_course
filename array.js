 console.log("connected with external js file");

var arr =[1,2,3,4,5];
console.log(arr[2]);

var arr1 =[2,34,5,6,,77];
console.log(arr1[4]);

arr.push("mallu");
arr.push("DG");
console.log(arr.pop());

arr.unshift(1000);
arr.unshift(10);
console.log(arr[0]);
console.log(arr.shift());

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr.splice(1,3,"9999");

arr.splice(0,3);

var b_arr = [1,2,3,4,5,6];
var new_barr = b_arr.slice(0,4);

var c_arr = [1,2,3,4,5,6];
var new_carr = c_arr.slice(3);

var new_carr2 = c_arr.slice(3,7);

console.log(print(5,7));

var a=0;
console.log(a);
print();
function print()
{
  var b =0;
  a=10;
}
console.log(a);

var prnt = function () {
  console.log("awesome");
}
prnt();

(function(a, b)
{
  console.log(a+b);
}
)(4,4);
