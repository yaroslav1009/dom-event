let blockText = document.querySelector(".block_text");
let buttonColor = document.querySelector(".button_color");
var textColor = 0;
function colorRed() {
  if (textColor == 0) {
    blockText.style.color = "red";
    textColor = 1;
  } else {
    blockText.style.color = "black";
    textColor = 0;
  }
}

buttonColor.onclick = colorRed;

let buttonLink = document.querySelector(".button_link");
function enterLink() {
  let link;
  while (true) {
    link = prompt("Please enter link");
    if (link.trim().length > 0) break;
  }
  let link2 = "https://www." + link + ".com";
  let newElement = document.createElement("a");
  newElement.className = ".block_text";
  newElement.innerHTML = link2;
  newElement.setAttribute("href", link2);
  blockText.append(newElement);
}
buttonLink.onclick = enterLink;

let buttonImg = document.querySelector(".button_img");
function enterImg(){
    function getImage() {
        let random;
        while (true) {
            random = Math.floor(Math.random() * 10);
            if (random > 0) break;
        } 
        return '<img width = "200px" src="img/'+ random +'.png" border="0" />'; 
    }
    document.getElementById("imaaaga").innerHTML = getImage();
}
buttonImg.onclick = enterImg;


let table = document.createElement("table");
document.body.append(table);
for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let t = 0; t < 10; t++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerText = i === 0 ? t + 1 : (i * 10) + t;
    }
}
