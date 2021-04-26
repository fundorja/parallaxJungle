let text = document.querySelector("#text")
let bird1 = document.querySelector("#bird1")
let bird2 = document.querySelector("#bird2")
let btn = document.querySelector("#btn")
let rocks = document.querySelector("#rocks")
let forest = document.querySelector("#forest")
let water = document.querySelector("#water")
let header = document.querySelector("header")
let sec = document.querySelector(".sec")

window.addEventListener("scroll", function () {
  let value = window.scrollY

  text.style.top = 50 + value * -0.5 + "%"
  text.style.transform = "scale(" + (1 + value * 0.001) + ")"

  bird1.style.top = value * -1.5 + "px"
  bird1.style.left = value * 2 + "px"

  bird2.style.top = value * 4 + "px"
  bird2.style.left = value * -0.5 + "px"
  bird2.style.transform = "scale(" + (1 + value * 0.01) + ")"

  btn.style.marginTop = value * 1.5 + "px"

  rocks.style.top = value * -0.2 + "px"
  rocks.style.transform = "scale(" + (1 + value * 0.0005) + ")"

  forest.style.top = value * 0.25 + "px"
  header.style.top = value * 0.5 + "px"

  //   water.style.transform = "scale(" + (1 + value * 0.001) + ")"
  //   water.style.top = value * 0.001 + "px"
  //   sec.style.top = value * 0.5 + "px"
})
