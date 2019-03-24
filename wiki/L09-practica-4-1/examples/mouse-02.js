function main()
{
  console.log("Probando2...")

  parrafo = document.getElementById('parrafo')

  parrafo.onmouseover = () => {
    console.log("Mouse over!!")
    parrafo.style.backgroundColor = "red"
  }

  parrafo.onmouseout = () => {
    console.log("Mouse out!!")
    parrafo.style.backgroundColor = ""
  }
}
