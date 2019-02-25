
function main()
{

  //-- Objeto a mover
  var objeto = {
    x : 10,   //-- Cooudenada x
    y : 40,   //-- Coordenada y
    vx: 4,    //-- Velocidad en x
    ctx : null,  //-- Contexto
    done: false, //-- Si el objeto ha llegado al final

    //-- Inicializar el objeto
    init : function (ctx) {
      this.ctx = ctx;
    },

    //-- Dibujar el objeto
    draw : function () {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.x, this.y, 20, 20)
      this.ctx.strokeRect(this.x, this.y, 20, 20)
    },

    //-- Actualizar la posicion del objeto y redibujar
    update : function () {
      this.x += this.vx;
      if (this.x > (tablero.canvas.width - 30))
        this.done = true;
      this.draw()
    },

    //-- Objeto a su estado inicial
    reset : function () {
      this.x = 10;
      this.done = false;
    }
  }

  //-- Objeto tablero
  var tablero = {
    canvas : document.getElementById("display"),
    start : document.getElementById("start"),
    ctx : null,
    timer : null,

    //-- Actualizar el tablero
    update : function () {
      this.clear();
      objeto.update();

      //-- Si objeto ha llegado al fial
      if (objeto.done) {

        //-- Eliminar el timer
        clearInterval(this.timer);
        this.timer = null;

        //-- Resetea objeto
        objeto.reset();

        //-- Borrar tablero
        this.clear();

        //-- Dibujar objeto en el origen
        objeto.draw();

      }
    },

    //-- Borrar el tablero
    clear : function () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    //-- Inicializar el tablero
    init : function () {
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 300;
      this.canvas.height = 100;

      //-- Cuando se pulsa el botón de start
      //-- se actualiza el tablero cada 20ms
      this.start.onclick = () => {
        if (!this.timer) {
          this.timer = setInterval(()=>{tablero.update()},20);
        }
      }
    },

  }

  //-- Inicializar tablero
  tablero.init()

  //-- Inicializar el objeto
  objeto.init(tablero.ctx)

  //-- Dibujar el objeto
  objeto.draw()

}
