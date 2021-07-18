import * as solitaire from "./solitaire.js";

/*drag and drop API*/
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev, el, rules) {
    ev.preventDefault();
    switch (rules) {
        case "solitaire":
            solitaire.allowMove(ev, el);
            break;
        // case "yukon":
        //     yukon.allowMove(ev, el);
        //     break;
        // case "spider":
        //     spider.allowMove(ev, el);
        //     break;
        // case "freecell":
        //     freecell.allowMove(ev, el);
        //     break;
        // case...
        default:
            let data = ev.dataTransfer.getData("text");
            let card = document.getElementById(data)
            el.appendChild(card);
            break;
    }
}




/*click to move funtionality as backup for drag and drop


*/

function flip(cardElem, flipper) {
    if (flipper == true) {
        cardElem.classList.toggle("facedown")
    } else {
        if (cardElem.classList.contains("facedown")) {
            cardElem.classList.remove("facedown");
        }
    }
}




export {
    drag,
    drop,
    allowDrop,
    flip
};