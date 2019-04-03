function main() {
  console.log("En main()....")

  var img = document.getElementById('imagesrc')
  var canvas = document.getElementById('display');

  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");

  ctx.drawImage(img, 0,0);
}
