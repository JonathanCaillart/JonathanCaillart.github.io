const pixel1 = document.querySelector('#pixel-1');
const pixel2 = document.querySelector('#pixel-2');
const pixel3 = document.querySelector('#pixel-3');

function updateAnimation(element) {
  // Adjust the amount of time it takes for the pixel to rise to the top
  const animationDuration = (Math.random() * 10) + 5;
  element.style.setProperty('--animation-time', animationDuration +'s'); 
  
  const xPositionMax= ((Math.random() < 0.5 ? -1 : 1) * 55);
  const xPositionMin= ((Math.random() < 0.5 ? -1 : 1) * 55);
  element.style.setProperty('--x-position-max', xPositionMax + "px");
  element.style.setProperty('--x-position-min', "-" + xPositionMin + "px");
}

setInterval(updateAnimation(pixel1), 1000);
setInterval(updateAnimation(pixel2), 1500);
setInterval(updateAnimation(pixel3), 2000);

// Tooltips Initialization
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  
  })

