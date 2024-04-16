const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
let seconds = 0, timerInterval;
cactus.classList.add("cactusAnimation");
let score = 0;

// Update score every 100 milliseconds
setInterval(function() {
  score++;
  // Update the score display
  document.getElementById('score').innerText = score;
}, 100);


startTimer();

function startTimer(){
    timerInterval = setInterval(function(){
        seconds++;
    }, 1000);
}

function stopTimer(){
    clearInterval(timerInterval);
}

document.addEventListener("keydown", function(){
    dino.classList.add("jump");
    setTimeout(function(){
        dino.classList.remove("jump");
    }, 300)
});

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if(cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140){
        cactus.classList.remove("cactusAnimation");
        stopTimer();
        alert("Game Over! Your score is: " + seconds + " secconds");
        cactus.classList.add("cactusAnimation");
        seconds = 0;
        startTimer();
    }
}, 10);