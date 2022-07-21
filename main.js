let bars = document.querySelector(".bars");
let dropDown = document.querySelector("header ul");
let closeButton = document.querySelector("header ul i");

bars.onclick = function(){
    dropDown.style.left = "0";
}
closeButton.onclick = function(){
    dropDown.style.left = "-1000px"
}

let upButton = document.querySelector(".up");
window.onscroll = function(){
    if (this.scrollY > 500){
        upButton.style.opacity = 1;
    }else{
        upButton.style.opacity = 0;
    }
}
upButton.addEventListener("click", function(){
    window.scrollTo(0,0);
});