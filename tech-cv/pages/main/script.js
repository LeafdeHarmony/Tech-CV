const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-list");
const lock = document.querySelector("body");
const double = document.querySelector(".logo");
const body = document.querySelector("body");
const div = document.createElement("div");

document.body.append(div);

function toggleMenu() {
  burger.classList.toggle("open");
  menu.classList.toggle("active");
  lock.classList.toggle("lock");
  double.classList.toggle("double");
  div.classList.toggle("overlay");
}

burger.addEventListener("click", toggleMenu);
div.addEventListener("click", toggleMenu);

const links = document.querySelectorAll(".nav-link");

function click() {
  burger.classList.remove("open");
  menu.classList.remove("active");
  lock.classList.remove("lock");
  double.classList.remove("double");
  div.classList.remove("overlay");
}

links.forEach((burger) => burger.addEventListener("click", click));
