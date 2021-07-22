/* Build the Card Table Layout */

import {
    resetDeck
} from "./move.js";
import {
    updateScore
} from "./score.js";

function buildGameBoard() {
    let gameboard = document.getElementById("gameboard");

    if (!document.getElementById("deck")) {
        let deckElem = document.createElement("div");
        let draw = document.createElement("div");
        let discard = document.createElement("div");
        draw.setAttribute('id', 'draw')
        discard.setAttribute('id', 'discard')
        deckElem.setAttribute('id', 'deck');
        draw.classList.add("pile");
        discard.classList.add("pile");
        discard.setAttribute("data-house", "discard")
        deckElem.appendChild(draw);
        deckElem.appendChild(discard);
        gameboard.appendChild(deckElem);

        draw.addEventListener('dblclick', () => {
            if (draw.childNodes.length == 0) {
                resetDeck()
            }
        })
    }

    if (!document.getElementById("goal")) {
        let goalElem = document.createElement("div");
        goalElem.setAttribute('id', 'goal');

        let p1 = document.createElement("div");
        let p2 = document.createElement("div");
        let p3 = document.createElement("div");
        let p4 = document.createElement("div");
        p1.setAttribute('id', 'p1')
        p2.setAttribute('id', 'p2')
        p3.setAttribute('id', 'p3')
        p4.setAttribute('id', 'p4')
        p1.classList.add("pile", "uniform")
        p2.classList.add("pile", "uniform")
        p3.classList.add("pile", "uniform")
        p4.classList.add("pile", "uniform")
        p1.setAttribute("data-house", "hearts")
        p2.setAttribute("data-house", "spades")
        p3.setAttribute("data-house", "diamonds")
        p4.setAttribute("data-house", "clubs")

        goalElem.appendChild(p1);
        goalElem.appendChild(p2);
        goalElem.appendChild(p3);
        goalElem.appendChild(p4);

        gameboard.appendChild(goalElem);
    }

    if (!document.getElementById("play")) {
        let playElem = document.createElement("div");
        playElem.setAttribute('id', 'play');

        for (let i = 1; i <= 7; i++) {
            let pile = document.createElement("div");
            pile.classList.add("pile", "alternate");
            pile.setAttribute("data-house", "all")
            playElem.appendChild(pile);
        }

        gameboard.appendChild(playElem);
    }

    if(!document.getElementById('controls')) {
        let controlElem = document.createElement('div');
        controlElem.setAttribute('id',"controls")
        controlElem.innerHTML = `<input type="button" value="Save Game" id="save">
        <input type="button" value="Load Game" id="load">
        `
        gameboard.appendChild(controlElem)
    }

    

}

/* Build the deck with correct parameters */

function placeCards(cards) {
    console.log("PlaceCards")
    let piles = document.querySelectorAll('.alternate')
    let deck = document.getElementById('draw').childNodes

    for (let i = 0; i < 7; i++) {
        for (let x = 0; x <= i; x++) {
             
            try{
                deck[x].style.top = `${x*2}0px`
            }catch{

            }
            
            if (x == i) {
                deck[x].classList.remove('facedown')
            }
            piles[i].insertAdjacentElement('beforeend', deck[x])
        }
    }

}

/* Rules for Drop Function */

function allowMove(ev, el) {
    let data = ev.dataTransfer.getData("text");
    let card = document.getElementById(data)
    let cardStack = card.style.top
    let offset = 0
    // let card = cardContainer.childNodes[0]
    console.log(ev)
    let cardtype = data.split(" ").pop().toLowerCase()
    let piletype = el.dataset.house
    let cardvalue = parseInt(card.dataset.value)
    let pilevalue
    let cardcolor = card.dataset.color;
    let pilecolor

    try {
        offset = parseInt(el.lastElementChild.style.top, 10)


    } catch {
        offset = 0
    }

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
            card.style.top = `${offset}px`
        } else if ((piletype == "all" && cardvalue == (pilevalue - 1) && pilecolor !== cardcolor) || pilevalue == 14) {
            el.appendChild(card);
            if (pilevalue == 14) {
                card.style.top = `${offset}px`
            } else {
                card.style.top = `${offset+20}px`
            }

        } else if (piletype == "discard") {
            el.appendChild(card);
            card.style.top = '0px'
        }
    }

}

function gameGoal() {

    let goals = document.getElementById("goal")

    let goal = goals.children
    goals.addEventListener("stacked", () => {
        let cardCount = 0
        for (let i = 0; i < goal.length; i++) {
            

            if (goal[i].children.length == 13) {
                cardCount = cardCount + 13
                console.log(cardCount)
            }
            if (cardCount == 52) {
                alert("You Win!")
                updateScore()
            }
        }



    })

    for (let i = 0; i < goal.length; i++) {
        onAppend(goal[i], function (added) {
            if (goal[i].children.length == 13) {
                goal[i].dispatchEvent(gamecheck)
            }

        })
    }
    const gamecheck = new CustomEvent("stacked", {
        bubbles: true
    });

    // // for (let i = 0; i < goal.length; i++) {
    // //     goal[i].addEventListener('drop', e => {
    // //         console.log(goal[i].lastElementChild.dataset.value)
    // //         e.target.dispatchEvent(gamecheck)
    // //     })
    // // }
    // gameboard.addEventListener('stacked', () => {
    //     console.log("help me")

    //     // for (let i = 0; i < goal.length; i++) {
    //     //     try {
    //     //         console.log(`${goal[i].children.length}`)
    //     //         // console.log(el.lastElementChild.dataset.value)
    //     //     } catch {
    //     //         console.log(0)
    //     //     }


    //     // }


    // })
}

function onAppend(elem, callback) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
            if (m.type === 'childList') {
                callback(m.addedNodes)
            }
        })
    })
    observer.observe(elem, {
        childList: true
    })
}

const flipper = false

export {
    allowMove,
    flipper,
    buildGameBoard,
    placeCards,
    gameGoal
}