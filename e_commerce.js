const bar = document.querySelector("#menu");
const close = document.querySelector("#close");
const nav = document.querySelector(".nav");

bar.addEventListener('click', () =>{
  nav.classList.toggle("activeTwo");
})

close.addEventListener('click', () =>{
  nav.classList.remove("activeTwo");
})