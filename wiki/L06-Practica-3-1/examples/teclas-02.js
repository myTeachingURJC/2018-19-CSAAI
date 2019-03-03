function main()
{
  console.log("Teclas: Main: Start!")

  //-- Obtener el parrafo donde mostra la info
  texto = document.getElementById('texto')

  //-- Evento: Tecla pulsada
  window.onkeydown = (e) => {

    //-- Eliminar comportamiento predeterminado de la tecla
    e.preventDefault();

    //-- Mostrar la info de la tecla: Nombre y código
    texto.innerHTML = "Tecla apretada: " + e.key + ' ' +
                      "Código: " + e.keyCode
  }

 //-- Evento: Tecla liberada
  window.onkeyup = (e) => {

    //-- Eliminar la info
    texto.innerHTML = ""
  }
}
