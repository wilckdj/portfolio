import {
    Deck
} from "./deck.js";
import * as move from "./move.js";

let deck = new Deck("K", 52, false)
let cards = await deck.build()

// document.getElementById("draw").addEventListener('click', () => {
//     deck.shuffle(cards)
// })


let piles = document.querySelectorAll(".pile")

// console.log(piles)


for (let i = 0; i < piles.length; i++) {
    piles[i].setAttribute("ondrop", 'drop(event, this)');
    piles[i].setAttribute("ondragover", 'allowDrop(event)')
}


