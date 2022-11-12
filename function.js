console.log("connected with external js file");
function print()
{
  console.log("hello");
}
print.call();
print.apply();

let animal={
  name:'dog',
  eat(a,b){
    console.log( this.name + " is eating" +" " +a +" "+ b);
  }
};
let human={
  name:'mallu'
};
animal.eat(5,'bones');
let human_eat=animal.eat.bind(human);
human_eat(5,'apples');

let ob =
{
  name: 'basu',
  prnt: function () {
    console.log('a',this);
    var an_prnt = ()=>
    {
      console.log(this);
    }
    an_prnt();
  }
};
ob.prnt();
function canVote(age)
{
  return age>=18;
};
function canDrive(age)
{
  return age>=16;
};
function canMarry(age)
{
  return age>=21;
};
console.log(canDrive(11));
console.log(canVote(11));
console.log(canMarry(11));

console.log(canDrive(27));
console.log(canVote(27));
console.log(canMarry(27));

function age_req(r_age)
{
  return function (age) {
    return age>=r_age;
  };
};

let can_Vote = age_req(18);
console.log(can_Vote(27));
let can_Drive = age_req(16);
console.log(can_Drive(27));
let can_Marry = age_req(21);
console.log(can_Marry(27));