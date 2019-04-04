function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  var data = imgData.data
  //-- data[0] es el canal rojo del pixel de la posición 0,0
  //-- data[1] es el canal verde del pixel 0,0
  //-- data[2] es el canal azul del pixel 0,0
  //-- data[3] es el canal de transparencia del pixel 0,0
  //-- data[4] es el canal ROJO del pixel 1,0
  //-- ....
  //-- En general, para el pixel i
  //-- data[4*i] es el canal rojo
  //-- data[4*i + 1]: Canal verde
  //-- data[4*i + 2]: Canal azul
  //-- data[4*i + 3]: Canal de transparencia

  //-- Colocar un pixel rojo en (200,50)

  //-- Obtener el numero de pixel a partir de su posicion
  var i = 200 + 50*canvas.width;

  //-- Pixel rojo: canal rojo a tope. Resto de colores a 0
  //-- La transparencia no se modifica
  data[i*4] = 255;    //-- Canal Rojo
  data[i*4 + 1] = 0;  //-- Canal Verde
  data[i*4 + 2] = 0;  //-- Canal azul

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);

}
