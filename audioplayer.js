$(document).ready(function () {
    var track = 0;
  var audio = new Audio("assets/audio/snippet.mp3");
  $("#play").on("click", function () {
    audio.play();
  });
    $("#pause").on("click", function () {
    audio.pause();
  });
});
