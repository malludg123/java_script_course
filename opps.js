console.log("connected with external js file");
class box
{
  constructor()
  {
    this.length = length;
    console.log("constructor called");
  }
  display(){
    console.log(this);
  }
}
let obj = new box();
obj.display();

let father = {
  name: 'jhon'
};
let son1={};
let son = Object.create(father);
console.log(father.isPrototypeOf(son));
console.log(father.isPrototypeOf(son1));

var parent ={
  name:"Father",
  sing(){
    console.log("singing");
  },
  eat: function() {
    console.log("eating");
  },
  drink: ()=>{
    console.log("drinking");
  }
};
var child = {
  name:"son",
  eat()
  {
    console.log("eating");
  }
};

child.__proto__=parent;
for(let p in child)
{
  console.log(p + " "+ child.hasOwnProperty(p))
}

class Fruits
{
  constructor(color)
  {
    this.color=color;
  }
  
  print(size)
  {
    console.log(size);
  }
  print()
  {
    console.log("hello");
  }
  print(s1,s2)
  {
    console.log(s1+s2);
  }
}
class Apple extends Fruits
{
  constructor(color,type)
  {
    super(color);
    this.type= type;
  }
  print()
  {
    super.print();
  }
}

let obj = new Apple("red","apple");
obj.print();
let ob1 = new Fruits("red");
ob1.print();
ob1.print(10);
ob1.print(12,12);
class parent
{
  live()
  {
    console.log("Iran");
  }
}
class Child extends parent
{
  live()
  {
    console.log("India");
  }
}
var ob = new Child();
ob.live();