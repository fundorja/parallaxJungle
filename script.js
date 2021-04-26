let body = document.querySelector("body")
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

  body.style.backdropFilter = "saturate(" + (1 + value * 0.04) + ")"

  text.style.top = 50 + value * -0.5 + "%"
  text.style.transform = "scale(" + (0.1 + value * 0.01) + ")"

  bird1.style.top = 70 + value * -1.5 + "px"
  bird1.style.left = -350 + value * 2 + "px"

  bird2.style.top = 280 + value * -1 + "px"
  bird2.style.left = 250 + value * -1 + "px"
  //   bird2.style.transform = "scale(" + (0.1 + value * 0.03) + ")"

  //   btn.style.marginTop = 150 + value * 1.5 + "px"
  btn.style.transform = "translateY(" + (-150 + value * 1.2) + "px)scale(" + (1.2 + value * -0.0015) + ")"

  rocks.style.top = value * -0.2 + "px"
  rocks.style.transform = "scale(" + (1 + value * 0.0005) + ")"

  forest.style.top = value * 0.25 + "px"
  header.style.top = value * 0.5 + "px"

  //   water.style.transform = "scale(" + (1 + value * 0.001) + ")"
  //   water.style.top = value * 0.001 + "px"
  //   sec.style.top = value * 0.5 + "px"
})
