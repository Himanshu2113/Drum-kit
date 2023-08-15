for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}
function handleclick(){
var button=this.innerHTML;
makeSound(button);
buttonAnimation(button);
}
function makeSound(button) {
    // var button = this.innerHTML;
    switch (button) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

    }
}
// document.addEventListener("keydown",handleClick);
// function handleclick(){
//     alert("hello");
// }
document.addEventListener("keydown",makesound);
function makesound(){
    var key=event.key;
    makeSound(key);
    buttonAnimation(key);
}
// function removes(b){
//     document.querySelector("."+b).classList.remove("pressed");
// }

function buttonAnimation(a){
    document.querySelector("."+a).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+a).classList.remove("pressed");  
    },100);
}
