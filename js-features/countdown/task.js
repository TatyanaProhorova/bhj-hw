const time = document.getElementById(`timer`);                
let circle = setInterval(() => {
  if (time.textContent == 0) {
    clearInterval(circle);
    alert(`Вы победили в конкурсе!`);
    return;};            
  time.textContent = Number(time.textContent) - 1;                    
}, 1000);

