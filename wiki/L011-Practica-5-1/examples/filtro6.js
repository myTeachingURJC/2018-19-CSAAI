function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al checkbutton de los grises
  grises = document.getElementById('grises')

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

  //-- Funcion de retrollamada del deslizador
  grises.onchange = () => {

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    if (grises.checked) {
      //-- Obtener la imagen del canvas en pixeles
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      var data = imgData.data

      //-- Filtro de grises
      for(var i = 0; i < data.length; i+=4) {
          var r = data[i];
          var g = data[i+1];
          var b = data[i+2];
          var brightness = (3*r+4*g+b)/8;
          data[i] = brightness;
          data[i+1] = brightness;
          data[i+2] = brightness;
      }

      //-- Poner la imagen modificada en el canvas
      ctx.putImageData(imgData, 0, 0);

    }


  }

}
