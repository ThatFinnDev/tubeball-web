function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
  
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
  
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}
function hide(id)
{
  var x = document.getElementById(id);
  x.style.display = "none";
}
function show(id)
{
  var x = document.getElementById(id);
  x.style.display = "block";
}
function toggle(id)
{
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}