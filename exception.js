console.log("connected with external js file");
try
{
  console.log(a);
}
console.log("hi bye");
catch (error)
{
  console.log("we got an error " + error);
}

function a(age)
{
  if(age<16)
  {
    try
    {
      throw new Error("you are under age");
    }
    catch (error)
    {
      console.log(error);
    }
    finally{
      console.log("Program ended");
    }
  }
  else
  {
            console.log("you can vote");
  }
}
a(13);