
//-- Manejador del evento click sobre el párrafo test
//-- Cada vez aue se hace click en el se invoca a esta funcion
function manejador_parrafo()
{
  console.log("Click sobre el párrafo...")
}

//-- Punto de entrada: una vez cargada la página se llama a esta
//-- funcion: ahí comienza nuestro programa principal
function main()
{
  console.log("En función main()...")

  //-- Leer el párrafo identificado como test
  test = document.getElementById('test')

  //-- Configurar el manejador para el evento de
  //-- pulsación de botón: que se ejecute la
  //-- funcion manejador_parrafo()
  test.onclick = manejador_parrafo;

}
