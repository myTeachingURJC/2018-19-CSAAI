
function main()
{

  //-- Crear objeto gui, con los elementos de la interfaz gráfica
  //-- Al tenerlo agrupado podemos pasarlo como parámetro o asignarselo
  //-- a otro objeto
  var gui = {
    display: document.getElementById('display'),
    boton_inc: document.getElementById('boton_inc'),
    boton_dec: document.getElementById('boton_dec')
  }

  //-- Objeto contador: contiene el valor y el método para incrementarse
  var counter = {
    valor : 0,
    inc : function (value) {
      this.valor += value;
      gui.display.innerHTML = this.valor;
    }
  };

  //-- Acciones: Incrmentar contador
  gui.boton_inc.onclick = () => {
    counter.inc(1)
  }

  //-- Decrementar contador
  gui.boton_dec.onclick = () => {
    counter.inc(-1)
  }

}
