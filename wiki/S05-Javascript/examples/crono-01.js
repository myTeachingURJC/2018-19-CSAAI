

function main()
{

  //-- Crear objeto gui, con los elementos de la interfaz gráfica
  //-- Al tenerlo agrupado podemos pasarlo como parámetro o asignarselo
  //-- a otro objeto
  var gui = {
    //-- For counter 1
    display: document.getElementById('display'),
    boton_start: document.getElementById('start'),
    boton_stop: document.getElementById('stop'),
  }

  var crono = {
    ms: 0,
    seg: 0,
    min: 0,
    timer: null,
    display: gui.display,
    inc : function() {
      this.ms += 10;
      if (this.ms >= 1000) {
        this.seg += 1;
        this.ms = this.ms - 1000;
      }

      if (this.seg >= 60 ) {
        this.min += min;
        this.seg = this.seg - 60;
      }

      //-- Show in the display
      time = this.min + ":" + this.seg + ":" + this.ms;
      this.display.innerHTML = time;
    }
  }

  //-- Acciones: Incrmentar contador 1
  gui.boton_start.onclick = () => {
    if (!crono.timer)
      crono.timer = setInterval(()=>{crono.inc()}, 10);
  }

  gui.boton_stop.onclick = () => {
    if (crono.timer) {
      clearInterval(crono.timer);
      crono.timer = null;
    }
  }

}
