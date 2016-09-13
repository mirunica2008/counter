var btn= document.getElementById("btn");
btn.onclick= function() {
  var cnt = document.getElementById("counter");
  var crtCnt= parseInt (cnt.innerHTML);
  crtCnt++;
  cnt.innerHTML =crtCnt;
}