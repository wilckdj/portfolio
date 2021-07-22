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


let flipper

function flip(cardElem, rules) {
    let pile = cardElem.parentElement
    if (cardElem == pile.lastChild) {
        switch (rules) {
            case "solitaire":
                flipper = solitaire.flipper
                break;
                // case "yukon":
                //     flipper = solitaire.flipper
                //     break;
                // case "spider":
                //     flipper = solitaire.flipper
                //     break;
                // case "freecell":
                //     flipper = solitaire.flipper
                //     break;
                // case ...
            default:
                flipper = true
                break
        }
        if (flipper == true) {
            cardElem.classList.toggle("facedown")
        } else {
            if (cardElem.classList.contains("facedown")) {
                cardElem.classList.remove("facedown");
            }
        }
    }
}

function resetDeck() {
    let discard = document.getElementById('discard').childNodes
    let deck = document.getElementById('draw')
    let limit = discard.length
    for (let i = 0; i < limit; i++) {
        discard[0].classList.add('facedown')
        deck.insertAdjacentElement('afterbegin', discard[0])
    }
}

export {
    drag,
    drop,
    allowDrop,
    flip,
    resetDeck
};