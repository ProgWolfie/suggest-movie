const heart = document.querySelector(".heart");
const heart2 = document.querySelector("#heart");
let fill = false;
heart.addEventListener("click",function(){
    if(fill){
        heart2.setAttribute("fill","none");
        fill= false;
    }else{
        heart2.setAttribute("fill","");
        fill= true;
    }

});