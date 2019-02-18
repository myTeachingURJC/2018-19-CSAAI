
function main()
{

  //-- Elementos de la interfaz gráfica
  display = document.getElementById('display')
  boton = document.getElementById('boton')

  //-- Contador
  var counter = 0;

  //-- Acciones
  boton.onclick = () => {
    //-- Incrementar el contador
    counter += 1

    //-- Mostrar contador en el display
    display.innerHTML = counter
  }

}
