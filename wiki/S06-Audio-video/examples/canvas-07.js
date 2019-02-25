function main()
{

  //-- Obtener el elemento canvas
  var canvas = document.getElementById("display");

  //-- Definir el tamaño del canvas
  canvas.width = 200;
  canvas.height = 100;

  //-- Obtener su contexto, para dibujar en él
  var ctx = canvas.getContext("2d");

  //-- Texto solido
  ctx.font = "25px Arial";
  ctx.fillStyle = 'yellow'
  ctx.fillText("Texo sólido", 10, 30);

  //-- Texto trazo
  ctx.strokeStyle = 'blue';
  ctx.strokeText("Texto trazo", 10, 70);

}
