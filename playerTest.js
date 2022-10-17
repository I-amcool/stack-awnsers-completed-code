

function keyPress(){
  const currentLeft = parseInt(document.getElementById("player").style.left) || 0;
  const currentUp = parseInt(document.getElementById("player").style.top) || 0;
if(window.event.keyCode == 87){
    document.getElementById("player").style.top = (currentUp - 10) + 'px';
}
if(window.event.keyCode == 83){
  document.getElementById("player").style.top = (currentUp + 10) + 'px';
}
if(window.event.keyCode == 65){
  document.getElementById("player").style.left = (currentLeft - 10) + 'px';
}
if(window.event.keyCode == 68){
  document.getElementById("player").style.left = (currentLeft + 10) + 'px';
}
}