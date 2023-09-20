const target = document.querySelectorAll(".number_target");
console.log(target);

let i = 0;

 target.forEach((btn) => {
   btn.onclick = () => {
     i = btn.innerText;
   };
 });

const ranking = document.getElementById("ranking");
const container = document.getElementById("container");
const state = document.getElementById("state-thank");
const btn = document.getElementById("btn-submit");

btn.addEventListener('click',()=>{
  container.style.display = "none";
  state.style.display = "flex";
  ranking.innerHTML = i;
})

const btn_home = document.getElementById('btn-home')

btn_home.addEventListener('click',()=>{
  window.location.href = "index.html";
})


