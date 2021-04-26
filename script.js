let text = document.querySelector("#text")
let bird1 = document.querySelector("#bird1")
let bird2 = document.querySelector("#bird2")
let btn = document.querySelector("#btn")
let rocks = document.querySelector("#rocks")
let forest = document.querySelector("#forest")
let water = document.querySelector("#water")
let header = document.querySelector("header")


window.addEventListener("scroll", function() {
    let value = window.scrollY

    text.style.top = 50 + value * -0.5 + "%"
    bird1.style.top = value * -1.5 + "px"
    bird1.style.left = value * 2 + "px"
    bird2.style.top = value * -1.5 + "px"
    bird2.style.left = value * -5 + "px"
    btn.style.marginTop = value * 1.5 + "px"
    rocks.style.top = value * -0.2 + "px"
    rocks.style.transform = "scale(" + (1 + value * 0.0005) + ")"
    forest.style.top = value * 0.25 + "px"
    header.style.top = value * 0.5 + "px"
})