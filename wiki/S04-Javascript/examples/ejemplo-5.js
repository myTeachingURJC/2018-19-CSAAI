//-- Punto de entrada: una vez cargada la página se llama a esta
//-- funcion: ahí comienza nuestro programa principal
function main()
{
  console.log("En función main()...")

  //-- Leer el elemento párrafo test2
  test2 = document.getElementById('test2')

  //-- Configurar el manejador para el evento de
  //-- pulsación de botón
  test2.onclick = () => {
    console.log("Click sobre el párrafo 2...")

    //-- Obtener el elemento párrafo 1 para modificarlo
    test1 = document.getElementById('test1')

    //-- Cambiar su texto
    test1.innerHTML = "¡TEXTO CAMBIADO!"
  }

}
