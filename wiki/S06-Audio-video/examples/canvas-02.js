function main()
{
  console.log("En main()...")

  //-- Obtener el elemento canvas
  var canvas = document.getElementById("display");

  //-- Definir el tamaño del canvas
  canvas.width = 200;
  canvas.height = 100;

  //-- Obtener su contexto, para dibujar en él
  var ctx = canvas.getContext("2d");

  //-- Dibujar un rectangulo
  ctx.rect(5,5,canvas.width/2,canvas.height/2);
  ctx.stroke()

}
