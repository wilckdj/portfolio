/*event listener for finished game */

import {
    gamerules
} from "./script.js"
import * as move from "./move.js";
import { gameGoal } from "./solitaire.js";





/*Read the score record from local storage*/
function readScore() {
    let games = parseInt(readFromLS("Plays"), 10)
    if (games == null) {
        games = 1
    }

    let score = parseInt(readFromLS("Wins"), 10)
    if (score == null) {
        score = 0
    }
    document.getElementById("stats").innerHTML = `<p>Games Played: ${games} <br> Games Won: ${score}</p>`
}


/*Write the score to local storage */

function updatePlays() {
    let games = parseInt(readFromLS("Plays"), 10)
    if (games == null) {
        games = 1
    }
    games = games + 1
    writeToLS("Plays", games)
}

function updateScore() {
    let score = parseInt(readFromLS("Wins"), 10)
    if (score == null) {
        score = 0
    }
    score = score + 1
    writeToLS("Wins", score)
    readScore()
}

/* backup the gameboard to localstorage */

/* intentionally save the gameboard to localstorage */

function saveGame() {
    let gameboard = document.getElementById("gameboard")
    writeToLS("Save", gameboard.innerHTML)
}

function loadGame() {
    console.log("Game Reloaded from Save")
    let gameboard = document.getElementById("gameboard")
    let data = readFromLS('Save')
    gameboard.innerHTML = data
    redoListeners()

}

function redoListeners() {
    let cardContainers = document.querySelectorAll(".card-container")
    for (let i = 0; i < cardContainers.length; i++) {
        cardContainers[i].addEventListener('dblclick', () => {
            move.flip(cardContainers[i], gamerules)
        })
        cardContainers[i].addEventListener("dragstart", () => {
            move.drag(event)
        })
    }
    let piles = document.querySelectorAll(".pile")

    for (let i = 0; i < piles.length; i++) {
        piles[i].addEventListener("drop", () => {
            move.drop(event, piles[i], gamerules)
        });
        piles[i].addEventListener("dragover", () => {
            move.allowDrop(event)
        });
    }

    let draw = document.getElementById('draw')
    draw.addEventListener('dblclick', () => {
        if (draw.childNodes.length == 0) {
            move.resetDeck()
        }
    })

    let savebtn = document.getElementById("save")
    savebtn.addEventListener('click', saveGame)
    let loadbtn = document.getElementById("load")
    loadbtn.addEventListener('click', loadGame)

    gameGoal()
}

function writeToLS(key, data) {
    // data = JSON.stringify(data);
    localStorage.setItem(key, data);
}

function readFromLS(key) {
    let savedGame = localStorage.getItem(key); //JSON.parse();
    return savedGame
}

export {
    saveGame,
    loadGame,
    updateScore,
    readScore,
    updatePlays
}