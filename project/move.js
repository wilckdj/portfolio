/*drag and drop API*/
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}





/*click to move funtionality as backup for drag and drop*/


function flip(cardElem) {
    cardElem.classList.toggle("faceDown")
}


export {drag, drop, allowDrop, flip};