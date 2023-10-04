var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChoosenColor);

    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);
    
    level++;

    $("#level-title").text("Level" + level);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
                userClickedPattern = [];
            },1000)
        }
    }else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}

$(".btn").click(function (){
    var userChoosenColor = $(this).attr('id');
    userClickedPattern.push(userChoosenColor);
    animatePress(userChoosenColor);
    playSound(userChoosenColor);

    checkAnswer(userClickedPattern.length-1);
});

$(document).keypress(function(event){
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

})

