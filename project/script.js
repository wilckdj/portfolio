import {
    Deck, GameBoard
} from "./deck.js";
import * as move from "./move.js";
import { loadGame, readScore, saveGame, updatePlays } from "./score.js";
let gamerules

document.getElementById('subButton').addEventListener('click', ()=> {
    let form = document.getElementById("gameMenu")
    let high = document.getElementById("high").value
    let count = parseInt(document.getElementById('count').value)
    let joker = document.querySelector('input[name=joker]:checked').value === 'true'
    let cardImg = document.getElementById('cardImg').value
    gamerules = document.getElementById('gamerules').value
    gameStart(high, count, joker, cardImg, gamerules)
    
})


async function gameStart(high, count, joker, cardImg, gamerules) {
    
    document.getElementById("gameboard").removeChild(document.getElementById("gameMenu"));

    let gameboard = new GameBoard(gamerules)
    gameboard.renderGameboard()
    
    let deck = new Deck(high, count, joker, cardImg)
    let cards =  await deck.build() 
    
    await gameboard.setupCards()
    await gameboard.setGoal()
    // gameboard.setupCards()
    // gameboard.setGoal()
    let piles = document.querySelectorAll(".pile")
    
    for (let i = 0; i < piles.length; i++) {
        piles[i].addEventListener("drop", () => {move.drop(event, piles[i], gamerules)});
        piles[i].addEventListener("dragover", () => {move.allowDrop(event)});
    }
    
    let savebtn = document.getElementById("save")
    savebtn.addEventListener('click', saveGame)
    let loadbtn = document.getElementById("load")
    loadbtn.addEventListener('click', loadGame)
    
    
    
    readScore()
    updatePlays()
    
    
    if (gamerules == "") {
        console.log("No Game Rules were selected.")
    }
}

export {gamerules}
