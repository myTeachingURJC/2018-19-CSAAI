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

  //-- Eliminar el canal Rojo:recorrer el array de datos
  //-- eliminado el canal rojo y dejando el resto igual que
  //-- estaba
  for (var i = 0; i < data.length; i+=4) {
    data[i] = 0; //-- Canal rojo a 0
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);

}
