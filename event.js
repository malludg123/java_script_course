console.log("connected");

function change(id) {
  id.innerHTML = "Clicked";
}

var button = document.getElementById('btn');
btn.addEventListener('click',function()
{
  console.log("button was clicked");
});
