function main() {
  console.log("Deslizador... main")

  deslizador = document.getElementById('deslizador')
  display = document.getElementById('display')

  deslizador.oninput = () => {
    display.innerHTML = deslizador.value
  }
}
