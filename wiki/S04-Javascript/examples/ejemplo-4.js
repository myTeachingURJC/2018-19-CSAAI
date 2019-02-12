//-- Punto de entrada: una vez cargada la página se llama a esta
//-- funcion: ahí comienza nuestro programa principal
function main()
{
  console.log("En función main()...")

  //-- Leer el párrafo identificado como test
  test = document.getElementById('test')

  //-- Configurar el manejador para el evento de
  //-- pulsación de botón
  test.onclick = () => {
    console.log("Click sobre el párrafo...")
  }

}
