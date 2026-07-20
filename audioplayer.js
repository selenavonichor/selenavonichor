$(document).ready(function () {
  var track = 0;
  var audio = document.createElement("AUDIO");

  if (audio.canPlayType("audio/mpeg")) {
    audio.setAttribute("src", "assets/audio/the_mist_album.mp3");
  } else {
    audio.setAttribute("src", "assets/audio/the_mist_album.ogg");
  }
  audio.setAttribute("controls", "controls");
  $("#audio_player").append(audio);

  $("#play").on("click", function () {
    audio.play();
  });
  $("#pause").on("click", function () {
    audio.pause();
  });
  $("#next").on("click", function () {
    track++;
    track = track % 4;
    if (track == 0) audio.currentTime = 0;
    else if (track == 1) audio.currentTime = 204;
    else if (track == 2) audio.currentTime = 406;
    else if (track == 3) audio.currentTime = 568;
    audio.play();
  });
  $("#previous").on("click", function () {
    if (track == 0) track = 3;
    else track--;
    track = Math.abs(track % 4);
    if (track == 0) audio.currentTime = 0;
    else if (track == 1) audio.currentTime = 204;
    else if (track == 2) audio.currentTime = 406;
    else if (track == 3) audio.currentTime = 568;
    audio.play();
  });
  $(".track").on("click", function () {
    if (this.id == "possession") audio.currentTime = 0;
    else if (this.id == "the_mist") audio.currentTime = 204;
    else if (this.id == "msdr") audio.currentTime = 406;
    else if (this.id == "weeping_rose") audio.currentTime = 568;
    audio.play();
  });
});
