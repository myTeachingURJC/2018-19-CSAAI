function main()
{

  //-- Obtener el elemento canvas
  var canvas = document.getElementById("display");

  //-- Definir el tamaño del canvas
  canvas.width = 200;
  canvas.height = 100;

  //-- Obtener su contexto, para dibujar en él
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  //-- Dibujar un circulo: coordenadas x,y del centro
  //-- Radio, Angulo inicial y angulo final
  ctx.arc(100, 50, 10, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 3;

  //-- Dibujar el trazo
  ctx.stroke()

  //-- Dibujar el relleno
  ctx.fillStyle = 'yellow';
  ctx.fill()

}
