import {
    Deck
} from "./deck.js";

let deck = new Deck("A", 52, false)
let cards = await deck.build()

document.getElementById("draw").addEventListener('click', () => {
    deck.shuffle(cards)
})