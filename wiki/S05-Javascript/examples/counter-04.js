
function counter(display)
{
  this.valor = 0;

  //-- Almacenar el display donde mostrar el contador
  this.display = display;

  //-- Modificar contador (y mostrarlo)
  this.inc = function(value) {
    this.valor += value;
    this.display.innerHTML = this.valor
  }
}

function main()
{

  //-- Crear objeto gui, con los elementos de la interfaz gráfica
  //-- Al tenerlo agrupado podemos pasarlo como parámetro o asignarselo
  //-- a otro objeto
  var gui = {
    //-- For counter 1
    display1: document.getElementById('display1'),
    boton_inc1: document.getElementById('boton_inc1'),
    boton_dec1: document.getElementById('boton_dec1'),

    //-- For counter 2
    display2: document.getElementById('display2'),
    boton_inc2: document.getElementById('boton_inc2'),
    boton_dec2: document.getElementById('boton_dec2')

  }

  //-- Crear los dos objetos contadores
  var c1 = new counter(gui.display1)
  var c2 = new counter(gui.display2)

  //-- Acciones: Incrmentar contador 1
  gui.boton_inc1.onclick = () => {
    c1.inc(1)
  }

  //-- Decrementar contador 1
  gui.boton_dec1.onclick = () => {
    c1.inc(-1)
  }

  //-- Acciones: Incrmentar contador 2
  gui.boton_inc2.onclick = () => {
    c2.inc(1)
  }

  //-- Decrementar contador 2
  gui.boton_dec2.onclick = () => {
    c2.inc(-1)
  }



}
