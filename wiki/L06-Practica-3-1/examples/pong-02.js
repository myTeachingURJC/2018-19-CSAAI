function main()
{
  console.log("Pong: Main: Start!")

  var canvas = document.getElementById('display')
  canvas.width = 600;
  canvas.height = 400;

  var ctx = canvas.getContext("2d");


  //-- Raquetas
  ctx.fillStyle = 'white';
  ctx.fillRect(50,100, 10, 40)

}
