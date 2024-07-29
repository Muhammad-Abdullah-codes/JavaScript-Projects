let boxs = document.getElementsByClassName("box");

function random() {
 let val1 = Math.ceil(0 + Math.random() * 255);
 let val2 = Math.ceil(0 + Math.random() * 255);
 let val3 = Math.ceil(0 + Math.random() * 255);
 return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxs).forEach(e => {
 setInterval(() => {
  e.style.backgroundColor = random();
  e.style.color = random();
 }, 500);
});