numOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i < numOfDrums; i++){
    // detecting button press
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
        
    });

   // detecting keyboard press 
    document.addEventListener("keypress",function (event){
        makeSound(event.key);
        makeAnimation(event.key);
    })
}

function makeSound(buttonInnerHTML){
    switch (buttonInnerHTML){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function makeAnimation(buttonInnerHTML){
    var activeButton = document.querySelector("."+buttonInnerHTML);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}