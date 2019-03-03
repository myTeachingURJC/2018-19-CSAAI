function main()
{
  console.log("Teclas: Main: Start!")

  //-- Obtener el párrafo
  texto = document.getElementById('texto')

  //-- Función de retrollamada de la pulsación de una tecla
  window.onkeydown = (e) => {

    //-- Eliminar el comportamiento por defecto de la tecla
    e.preventDefault();

    //-- Detectar si es la tecla Espacio
    if (e.key == ' ') {

      //-- Cambiar el fondo del texto. Si no tenía se pone
      //-- rojo. Si ya era rojo se quita
      if (texto.style.backgroundColor == "") {
        texto.style.backgroundColor = "red"
      } else {
        texto.style.backgroundColor = ""
      }
    }
  }
}
