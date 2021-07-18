/*drag and drop API*/
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);

// }
// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drop(ev, el) {
//     ev.preventDefault();
//     let data = ev.dataTransfer.getData("text");
//     console.log(el)
//     el.appendChild(document.getElementById(data));
// }





/*click to move funtionality as backup for drag and drop*/


function flip(cardElem) {
    cardElem.classList.toggle("faceDown")
}


export { flip};
// drag, drop, allowDrop,