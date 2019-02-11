
//-- Punto de entrada: una vez cargada la página se llama a esta
//-- funcion: ahí comienza nuestro programa principal
function main()
{
  //-- Leer el párrafo identificado como test
  test = document.getElementById('test')

  //-- Mostrar en la consola el contenido del párrafo
  //-- (es la propiedad innerHTML)
  console.log("Párrafo test leido. Dice:")
  console.log(test.innerHTML)

}
