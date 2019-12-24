var flag = true;
var ld=document.getElementById('ld');
ld.onclick=function(){
  if(flag == true) {
            ld.style.color="#fff";
            flag = false;
          } else {
            ld.style.color=" #7fbdff";
            flag = true;
          }
}