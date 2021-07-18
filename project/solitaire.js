/* Build the Card Table Layout */

/* Build the deck with correct parameters */

/* Rules for Drop Function */

function allowMove(ev, el) {
    let data = ev.dataTransfer.getData("text");
    let card = document.getElementById(data)
    // let card = cardContainer.childNodes[0]
    let cardtype = data.split(" ").pop().toLowerCase()
    let piletype = el.dataset.house
    let cardvalue = parseInt(card.dataset.value)
    let pilevalue
    let cardcolor = card.dataset.color;
    let pilecolor

// console.log(data +" " + card.dataset.value)

    try {
        pilevalue = parseInt(el.lastElementChild.dataset.value)
        // console.log(el.lastElementChild.dataset.value)
    } catch {
        if (piletype == "all") {
            pilevalue = 14
        } else {
            pilevalue = 0
        }
    }

    try {
        pilecolor = el.lastElementChild.dataset.color
    } catch {
        pilecolor = "none"
    }

    // console.log(card.classList.contains("facedown"))

    if (card.classList.contains("facedown") == false) {
        if (cardtype == piletype && cardvalue == (pilevalue + 1)) {
            el.appendChild(card);
        } else if (piletype == "all" && cardvalue == (pilevalue - 1) && pilecolor !== cardcolor) {
            el.appendChild(card);
        } else if (piletype == "discard") {
            el.appendChild(card);
        }
    }


}

export {
    allowMove
}