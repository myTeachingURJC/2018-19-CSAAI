function main()
{

  //-- Obtener el elemento canvas
  var canvas = document.getElementById("display");

  //-- Definir el tamaño del canvas
  canvas.width = 500;
  canvas.height = 250;

  //-- Obtener su contexto, para dibujar en él
  var ctx = canvas.getContext("2d");

  //-- Leer la imagen del documento html
  //-- Esta deshabilitada
  var logo = document.getElementById("logo-urjc");

  //-- Insertar la imagen en el canvas
  ctx.drawImage(logo, 15,18);
}
