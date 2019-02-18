
function main()
{

  //-- Crear objeto gui, con los elementos de la interfaz gráfica
  //-- Al tenerlo agrupado podemos pasarlo como parámetro o asignarselo
  //-- a otro objeto
  var gui = {
    display: document.getElementById('display'),
    boton: document.getElementById('boton')
  }

  //-- Objeto contador: contiene el valor y el método para incrementarse
  var counter = {
    valor : 0,
    inc : function (value) {
      this.valor += value;
      gui.display.innerHTML = this.valor;
    }
  };

  //-- Acciones
  gui.boton.onclick = () => {
    counter.inc(1)
  }

}
