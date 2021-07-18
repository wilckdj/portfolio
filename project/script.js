import {
    Deck
} from "./deck.js";
import * as move from "./move.js";

let gamerules = "solitaire"

let deck = new Deck("K", 52, false)
let cards = await deck.build()

let piles = document.querySelectorAll(".pile")

for (let i = 0; i < piles.length; i++) {
    piles[i].addEventListener("drop", () => {move.drop(event, piles[i], gamerules)});
    piles[i].addEventListener("dragover", () => {move.allowDrop(event)});
}

if (gamerules == "") {
    console.log("No Game Rules were selected.")
}


