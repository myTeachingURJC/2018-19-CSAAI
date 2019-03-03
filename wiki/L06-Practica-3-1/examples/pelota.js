function main()
{


  //-- Crear el canvas
  var canvas = document.getElementById('display')
  canvas.width = 600;
  canvas.height = 400;

  //-- Obtener el contexto del canvas
  var ctx = canvas.getContext("2d");

  //-- Definir el objeto BOLA
  var bola = {
    //-- Posición inicial de la pelota
    x_ini: 50,
    y_ini: 50,

    //-- Dimensiones de la Bola
    width: 5,
    height: 5,

    //-- Coornenadas
    x : 0,
    y : 0,

    //-- Velocidad
    vx : 4,
    vy : 1,

    //-- Contexto
    ctx: null,

    //-- Inicializar la bola
    init: function(ctx) {
      this.ctx = ctx;
      this.reset();
    },

    //-- Dibujar
    draw: function () {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(this.x, this.y, this.width, this.height)
    },

    //-- Update
    update: function () {
      this.x += this.vx;
      this.y += this.vy;
    },

    //-- Reset: Set the ball to the initial state
    reset: function() {
      this.x = this.x_ini;
      this.y = this.y_ini;
    }
  }

  //-- Inicializar y pintar la bola
  bola.init(ctx)
  bola.draw()

  //-- Crear timer para la animación
  //-- Inicialmente a null
  var timer = null;

  //-- Boton de salcar
  var sacar = document.getElementById('sacar')

  //-- Función de retrollamda del botón de sacar.
  //-- ¡Que comience la animación!
  sacar.onclick = () => {

    //-- Si la bola ya se está animando,
    //-- no hacer nada
    if (!timer) {

      //-- Lanzar el timer. Su funcion de retrollamada la definimos
      //-- en su primer parámetro
      timer = setInterval(()=>{

        //-- Esto se ejecuta cada 20ms

        //-- Actualizar la bola
        bola.update();

        //-- Borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //-- Dibuar la bola
        bola.draw();

        //-- Si la bola llega a la parte derecha del canvas:
        //-- Terminar
        if (bola.x > canvas.width) {

          //-- Eliminar el timer
          clearInterval(timer)
          timer = null;

          //-- Bola a su posicion inicial
          bola.reset();

          //-- Dibujar la bola en pos. inicial
          bola.draw();
        }
      },20); //-- timer
    }
  } //-- Fin onclick

}
