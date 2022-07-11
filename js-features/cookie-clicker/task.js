const cookie = document.getElementById(`cookie`);
const counter = document.getElementById("clicker__counter");
const forStart = document.getElementById("clicker__counter").innerHTML;
let counterNumber = parseInt(forStart);

cookie.onclick = () => {
counterNumber++;
  counter.textContent = counterNumber;
  cookie.classList.toggle("clicker__cookie");
};
