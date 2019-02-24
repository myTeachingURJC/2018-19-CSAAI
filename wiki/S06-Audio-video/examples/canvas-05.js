function main()
{

  //-- Obtener el elemento canvas
  var canvas = document.getElementById("display");

  //-- Definir el tamaño del canvas
  canvas.width = 200;
  canvas.height = 100;

  //-- Obtener su contexto, para dibujar en él
  var ctx = canvas.getContext("2d");

  //-- Línea horizontal
  ctx.moveTo(10, 20);
  ctx.lineTo(100, 20);

  //-- Línea horizontal y vertical, unidas
  ctx.moveTo(10, 80);
  ctx.lineTo(150,80);
  ctx.lineTo(150,20);

  ctx.strokeStyle = 'blue';
  //-- Cambiar el tamaño de la linea del trazo
  ctx.lineWidth = 4;

  //-- Dibujar el trazo
  ctx.stroke()

}
