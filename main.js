"use strict";
const openBtn = document.getElementById("openBtn");
const menuImg = openBtn.querySelector("img");
const nav = document.getElementById("nav");

let openMenu = false;

openBtn.addEventListener("click", () => {
  openMenu = !openMenu;

  if (openMenu) {
    nav.classList.add("active");
    document.body.classList.add("overlay");
    menuImg.src = "images/icon-close.svg";
    menuImg.style.marginRight = "20px";
  } else {
    nav.classList.remove("active");
    document.body.classList.remove("overlay");
    menuImg.src = "images/icon-hamburger.svg";
    menuImg.style.marginRight = "initial";
  }
});
