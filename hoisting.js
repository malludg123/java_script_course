console.log("connected with external js file");



for(let n =0;n<5;n++)
  console.log(n);




var a ="mallu";
console.log(name + " is 24 years old");
console.log(`${name} is 24 years old`);

var obj = {
  name:"mallu",
  roll_no:25,
  sing: function(){
    console.log(`${this.name} sings`);
  }
};
console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);