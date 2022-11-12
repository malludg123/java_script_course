function parent()
{
  console.log("hello");
  function child()
  {
    console.log("Bye");
  }
  return child;
}

function f1(gf)
{
  return function(f)
  {
    retu function(s){
      console.log(`${gf}--${f}--${s}`);
    }
  }
}

let add = function(x){
  return function(y)
  {
    console.log(x+y);
  }
}
let addby5 = add(5);
addby5(2);
addby5(5);
addby5(10);

let mul = function(x,y)
{
  console.log(x+y);
}
let mulBy10 = mul.bind(this,10);
mulBy10(7);
mulBy10(8);
mulBy10(9);
