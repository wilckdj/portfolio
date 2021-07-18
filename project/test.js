// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }

//   let div1 = document.getElementById("div1")
//   div1.setAttribute("ondragover", "allowDrop(event)")
//   div1.setAttribute("ondrop", "drop(event)")
//   let div2 = document.getElementById("div2")
//   div2.setAttribute("ondragover", "allowDrop(event)")
//   div2.setAttribute("ondrop", "drop(event)")

//   let dragged = document.getElementById("drag1");
//   dragged.setAttribute('draggable', true)
// dragged.setAttribute('ondragstart', 'drag(event)')

let card = document.querySelector(".card-container")
console.log(card)
card.addEventListener('dblclick', ()=> {card.classList.toggle("facedown")})