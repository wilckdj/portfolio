import * as move from "./move.js";
import {
    gamerules
} from "./script.js";
import * as solitaire from "./solitaire.js";

const cardsJSON = 'deck.json'
let cardOrder = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export class GameBoard {
    constructor(gamerules) {
        this.gamerules = gamerules
    }

    renderGameboard() {
        switch (this.gamerules) {
            case "solitaire":

                solitaire.buildGameBoard();
                break;
                // case "yukon":
                //     solitaire.buildGameBoard;
                //     break;
                // case "spider":
                //     solitaire.buildGameBoard;
                //     break;
                // case "freecell":
                //     solitaire.buildGameBoard;
                //     break;
                // case...
                //      break;
        }

    }
    setupCards() {
        switch (this.gamerules) {
            case "solitaire":
                solitaire.placeCards();
                break;
                // case "yukon":
                //     solitaire.buildGameBoard;
                //     break;
                // case "spider":
                //     solitaire.buildGameBoard;
                //     break;
                // case "freecell":
                //     solitaire.buildGameBoard;
                //     break;
                // case...
                //      break;
        }
    }

    setGoal() {
        switch (this.gamerules) {
            case "solitaire":
                solitaire.gameGoal();
                break;
                // case "yukon":
                //     solitaire.buildGameBoard;
                //     break;
                // case "spider":
                //     solitaire.buildGameBoard;
                //     break;
                // case "freecell":
                //     solitaire.buildGameBoard;
                //     break;
                // case...
                //      break;
        }
    }

}
export class Deck {
    /**
     * @param {string} high - The symbol of the highest card value for the game being played. Default is "A"
     * @param {number} count - The number of cards being used for the game being played. Default is 52.
     * @param {boolean} joker - True/False: Jokers are included in the deck. Default is false. 
    
    */
    constructor(high = "A", count = 52, joker = true, design = "standard.png") {
        this.high = high;
        this.count = count;
        this.joker = joker;
        this.design = design;
        this.cards = []
    }

    async build() {
        console.log("Deck Rules: " + this.high + " " + this.count + " " + this.joker + " " + this.design)
        let cards = await fetch(cardsJSON)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {
                const cards = jsonObject['cards']
                return cards
            })
        if (this.joker == false) {
            cards = cards.filter(card => card.value !== "JOKER")
        }

        if (this.count == 40) {
            cards = cards.filter(card => !isNaN(card.value) || card.value == "A" || card.value == "JOKER")
        } else {
            this.count = 52
        }

        if (this.joker == true) {
            this.count = this.count + 2
        }

        valueOrder(cardOrder, this.high)
        cards.map(card => {
            card.numValue = cardOrder.indexOf(card.value) + 1
        })

        cards.map(card => {
            card.design = this.design;
        })

        this.shuffle(cards)
        renderDeck(cards);
        return cards
    }

    shuffle(cards) {
        return shuffleArray(cards)
    }

}

function renderDeck(cards) {
    // console.log(!document.getElementById("deck"));
    let gameboard = document.getElementById("gameboard");

    if (!document.getElementById("deck")) {
        let deckElem = document.createElement("div");
        let draw = document.createElement("div");
        let discard = document.createElement("div");
        draw.setAttribute('id', 'draw')

        deckElem.setAttribute('id', 'deck');
        draw.classList.add("pile");
        discard.classList.add("pile");
        discard.setAttribute("data-house", "discard")
        deckElem.appendChild(draw);
        deckElem.appendChild(discard);
        gameboard.appendChild(deckElem);
    }


    cards.forEach(item => {
        let cardElem = document.createElement('div');
        cardElem.innerHTML = item.symbol;
        cardElem.classList.add("card", "face")

        let cardBack = document.createElement('div');
        cardBack.classList.add("card", "back");
        cardBack.innerHTML = `<img src="images/${item.design}" class = "backImg" ></img>`;

        let cardBlock = document.createElement('div');
        cardBlock.classList.add("card", "block")

        let cardContainer = document.createElement('div');
        cardContainer.classList.add("card-container", "stacked", "facedown");
        // cardElem.setAttribute('id', item.id);
        cardContainer.setAttribute('id', item.name)
        cardContainer.setAttribute('data-value', item.numValue);
        cardContainer.setAttribute('data-color', item.color);
        cardContainer.addEventListener('dblclick', () => {
            move.flip(cardContainer, gamerules)
        })
        cardContainer.setAttribute('draggable', true);
        cardContainer.addEventListener("dragstart", () => {
            move.drag(event)
        })
        cardContainer.setAttribute("ondrop", "return false");
        cardContainer.setAttribute("ondragover", "return false");

        // console.log(cardElem)
        cardContainer.appendChild(cardBack);
        cardContainer.appendChild(cardElem);
        cardContainer.appendChild(cardBlock);

        draw.appendChild(cardContainer)
        // draw.appendChild(cardElem)
    })

}

function valueOrder(cards, high) {
    high = String(high)
    do {
        let temp = cards[0]
        cards.shift()
        cards.push(temp)
    } while (cards[12] !== high);

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * (i + 1));
        // let temp = array[i];
        // array[i] = array[x];
        // array[x] = temp;
        [array[i], array[x]] = [array[x], array[i]]
    }
    return array
}