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


  //-- Obtener el numero total de elementos en el array
  console.log("Tamaño de data: " + data.length)

  //-- El número total de pixeles es la altura por la anchura
  npixels = canvas.width * canvas.height
  console.log("Anchura (en pixeles): " + canvas.width)
  console.log("Altura (en pixeles): " + canvas.height)
  console.log("Pixeles totales: " + npixels)

  //-- Puesto que cada pixel ocupa 4 bytes, el array de píxeles
  //-- tiene un tamaño de 4 * numero de pixeles
  console.log("Total de datos de la imagen: " + npixels * 4)
}
