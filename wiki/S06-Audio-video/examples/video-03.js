function main()
{
  //-- Obtener el elemento canvas
  var video = document.getElementById("video");
  var play = document.getElementById("play");
  var big = document.getElementById("big");
  var small = document.getElementById("small");
  var time = document.getElementById("time2");

  play.onclick = () => {
    if (video.paused)
      video.play()
    else {
      video.pause()
    }
  }

  big.onclick = () => {
    video.width = 500;
    video.height = 300;
  }

  small.onclick = () => {
    video.width = 300;
    video.height = 200;
  }

  time.onclick = () => {
    video.currentTime = 2;
  }

}
