function main()
{

  //-- Obtener el elemento canvas
  var canvas = document.getElementById("display");

  //-- Definir el tamaño del canvas
  canvas.width = 200;
  canvas.height = 100;

  //-- Obtener su contexto, para dibujar en él
  var ctx = canvas.getContext("2d");

  //-- Definir un rectangulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(5,5, 100, 50);

  //-- Dibujar
  ctx.fillStyle = 'red';
  ctx.fill()
}
