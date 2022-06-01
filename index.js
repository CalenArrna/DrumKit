document.querySelectorAll("button").forEach((item, i) => {
  item.addEventListener("click", function() {
    var button = this.innerHTML;
    playSound(button);
    buttonAnimation(button);
  });
});

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
})


function buttonAnimation(currentKey) {
    var pressedButton = document.querySelector("." + currentKey);

    pressedButton.classList.add("pressed");

    setTimeout(function () {pressedButton.classList.remove("pressed");},
     100);
}

function playSound(key) {
  switch (key) {
    case 'd':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'f':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case 'g':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case 'h':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case 'c':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case 'x':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case 'b':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:

  }
}
