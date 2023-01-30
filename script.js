
let turnSound = new Audio("ting.mp3");
let gameOverSound = new Audio("gameover.mp3");
let turn = "X";
let playGame = false;
let restButton = document.querySelector('.restBtn');
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(ele => {
            if((boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText) && (boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText) && boxTexts[ele[0]].innerText !==""){
                document.querySelector(".tunMsg").innerText = `${boxTexts[ele[0]].innerText} Won`;
                playGame = true;
                gameOverSound.play();
                turnSound.pause();
            }
        
    })

}


let boxes = document.querySelectorAll(".box");
// console.log(boxes);
boxes.forEach((element) => {
    // console.log(element);
    let boxText = element.querySelector(".boxText");
    // console.log(boxText);
    element.addEventListener('click', (e) => {
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if(!playGame){
                document.getElementsByClassName("tunMsg")[0].innerText = `Turn for ${turn}`;
            }
        }
    })
})

restButton.addEventListener('click', () =>{
    let boxText = document.querySelectorAll(".boxText");
    boxText.forEach(e => {
        e.innerText = "";
        turn = "X";
        playGame = false;
        document.getElementsByClassName("tunMsg")[0].innerText = `Turn for ${turn}`;
    })
})