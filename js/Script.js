var i = 0;
var IntroductionTxt = 'Hello, World!'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {

  if (i < IntroductionTxt.length) {
    document.getElementById("demo").innerHTML += IntroductionTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
