import {
    Deck, GameBoard
} from "./deck.js";
import * as move from "./move.js";

let gamerules = "solitaire"
let cardImg = "standard.png"

let gameboard = new GameBoard(gamerules)
gameboard.renderGameboard()

let deck = new Deck("K", 52, false, "standard.png")
let cards = await deck.build()
console.log(cards)

await gameboard.setupCards()
let piles = document.querySelectorAll(".pile")

for (let i = 0; i < piles.length; i++) {
    piles[i].addEventListener("drop", () => {move.drop(event, piles[i], gamerules)});
    piles[i].addEventListener("dragover", () => {move.allowDrop(event)});
}

// cardContainer.addEventListener('dblclick', () => {move.flip(cardContainer)})

if (gamerules == "") {
    console.log("No Game Rules were selected.")
}

export {gamerules}
