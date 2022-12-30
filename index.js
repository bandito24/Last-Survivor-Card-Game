
const cards = [
    {name: 'twoClubs', img: './cards/2c.jpg', isFaceCard: false},
    {name: 'threeClubs', img: './cards/3c.jpg', isFaceCard: false},
    {name: 'fourClubs', img: './cards/4c.jpg', isFaceCard: false},
    {name: 'fiveClubs', img: './cards/5c.jpg', isFaceCard: false},
    {name: 'sixClubs', img: './cards/6c.jpg', isFaceCard: false},
    {name: 'sevenClubs', img: './cards/7c.jpg', isFaceCard: false},
    {name: 'eightClubs', img: './cards/8c.jpg', isFaceCard: false},
    {name: 'nineClubs', img: './cards/9c.jpg', isFaceCard: false},
    {name: 'tenClubs', img: './cards/10c.jpg', isFaceCard: false},
    {name: 'jackClubs', img: './cards/jc.jpg', isFaceCard: true},
    {name: 'queenClubs', img: './cards/qc.jpg', isFaceCard: true},
    {name: 'kingClubs', img: './cards/kc.jpg', isFaceCard: true},
    {name: 'aceClubs', img: './cards/ac.jpg', isFaceCard: false},
    {name: 'twoDiamonds', img: './cards/2d.jpg', isFaceCard: false},
    {name: 'threeDiamonds', img: './cards/3d.jpg', isFaceCard: false},
    {name: 'fourDiamonds', img: './cards/4d.jpg', isFaceCard: false},
    {name: 'fiveDiamonds', img: './cards/5d.jpg', isFaceCard: false},
    {name: 'sixDiamonds', img: './cards/6d.jpg', isFaceCard: false},
    {name: 'sevenDiamonds', img: './cards/7d.jpg', isFaceCard: false},
    {name: 'eightDiamonds', img: './cards/8d.jpg', isFaceCard: false},
    {name: 'nineDiamonds', img: './cards/9d.jpg', isFaceCard: false},
    // {name: 'tenDiamonds', img: './cards/10c.jpg', isFaceCard: false},
    // {name: 'jackDiamonds', img: './cards/jc.jpg', isFaceCard: true},
    // {name: 'queenDiamonds', img: './cards/qc.jpg', isFaceCard: true},
    // {name: 'kingDiamonds', img: './cards/kc.jpg', isFaceCard: true},
    {name: 'aceDiamonds', img: './cards/ac.jpg', isFaceCard: false},
    {name: 'twoSpades', img: './cards/2s.jpg', isFaceCard: false},
    {name: 'threeSpades', img: './cards/3s.jpg', isFaceCard: false},
    {name: 'fourSpades', img: './cards/4s.jpg', isFaceCard: false},
    {name: 'fiveSpades', img: './cards/5s.jpg', isFaceCard: false},
    {name: 'sixSpades', img: './cards/6s.jpg', isFaceCard: false},
    {name: 'sevenSpades', img: './cards/7s.jpg', isFaceCard: false},
    {name: 'eightSpades', img: './cards/8s.jpg', isFaceCard: false},
    {name: 'nineSpades', img: './cards/9s.jpg', isFaceCard: false},
    {name: 'tenSpades', img: './cards/10s.jpg', isFaceCard: false},
    {name: 'jackSpades', img: './cards/js.jpg', isFaceCard: true},
    {name: 'queenSpades', img: './cards/qs.jpg', isFaceCard: true},
    {name: 'kingSpades', img: './cards/ks.jpg', isFaceCard: true},
    {name: 'aceSpades', img: './cards/as.jpg', isFaceCard: false},
    {name: 'twoHearts', img: './cards/2h.jpg', isFaceCard: false},
    {name: 'threeHearts', img: './cards/3h.jpg', isFaceCard: false},
    {name: 'fourHearts', img: './cards/4h.jpg', isFaceCard: false},
    {name: 'fiveHearts', img: './cards/5h.jpg', isFaceCard: false},
    {name: 'sixHearts', img: './cards/6h.jpg', isFaceCard: false},
    {name: 'sevenHearts', img: './cards/7h.jpg', isFaceCard: false},
    {name: 'eightHearts', img: './cards/8h.jpg', isFaceCard: false},
    {name: 'nineHearts', img: './cards/9h.jpg', isFaceCard: false},
    {name: 'tenHearts', img: './cards/10h.jpg', isFaceCard: false},
    {name: 'jackHearts', img: './cards/jh.jpg', isFaceCard: true},
    {name: 'queenHearts', img: './cards/qh.jpg', isFaceCard: true},
    {name: 'kingHearts', img: './cards/kh.jpg', isFaceCard: true},
    {name: 'aceHearts', img: './cards/ah.jpg', isFaceCard: false},
]
let givenCards = [];
let winner = true;
let order = 0;
let lives = 6;
let stage = 1;


let cardOne = document.getElementById('card-one')
let cardTwo = document.getElementById('card-two')
let cardThree = document.getElementById('card-three')
let cardFour = document.getElementById('card-four')
let cardFive = document.getElementById('card-five')
let cardSix = document.getElementById('card-six')
let cardSeven = document.getElementById('card-seven')
let cardEight = document.getElementById('card-eight')
let cardNine = document.getElementById('card-nine')

let flippedSecondRow = false;
let flippedThirdRow = false;
let flippedFourthRow = false;

const levelCleared = document.getElementById('level-cleared')

function randomCardGenerate(){
    let i = 0;
    while (givenCards.length < 9){
        randomIndex2 = Math.floor(Math.random() * cards.length)
        if(givenCards.indexOf(cards[randomIndex2]) == -1){
            givenCards.push(cards[randomIndex2])
        } else {
            continue;
        }
    i++
    }
};

randomCardGenerate()

//For finding out and exiting directions

const directionsInfo = document.getElementById('directions-info')
const directions = document.getElementById('directions').querySelector('h2')
const exit = document.getElementById('exit')

function showDirections(){
directionsInfo.style.display = 'flex'
}
function exitDirections(){
directionsInfo.style.display = 'none'  
}

directions.addEventListener('click', showDirections)
exit.addEventListener('click', exitDirections)


//For changing directions based on screen size
let firstCard;

if(screen.width <= 601){
    firstCard = 'top of'
} else {
    firstCard = 'left side of'
}

document.getElementById('directions-paragraph').innerHTML = `You are a tired warrior determined to make it back to your homeland. Along your way, you will face many opponents you can defeat (represented by Aces and cards 2-10). However, if you encounter a lord and their army (represented by face cards), fate is unkind and you will be defeated. Start at the ${firstCard} the deck and choose one card per column. After each victorious round you will gain 1 life. If you can clear all five rounds before your lives run out you will be reunited with your homeland.`




//resetting deck


function resetDeck(){
    givenCards = [];
    randomCardGenerate();
    order = 0;
    winner = true;
    flippedSecondRow = false;
    flippedThirdRow = false;
    flippedFourthRow = false;
    const cardImages = document.getElementById('card-container').querySelectorAll('img')
    cardImages.forEach(image => image.src='./cards/cover.jpg')
    levelCleared.style.display = 'none';
    document.getElementById('level-failed').style.display = 'none';
    stateProgress()
    document.getElementById("loss-message").innerHTML = 'You have been defeated!'
    levelCleared.querySelector('h2').innerHTML = 'Congratulations! You have cleared the stage!';
    document.getElementById('continue-button').innerHTML = 'Click to Continue'
    document.getElementById('continue-button2').innerHTML = 'Click to Continue'
}

document.getElementById('continue-button').addEventListener('click', resetDeck)


//Evalutating game progress & wins/losses

let stagesLeft = document.getElementById('stages-info')
let livesLeft = document.getElementById('lives-info')

function stateProgress(){
    livesLeft.innerHTML = `Lives: ${lives}`
    stagesLeft.innerHTML = `Stage: ${stage}/5`
}

function youLose(){
    setTimeout(() => {
    document.getElementById('level-failed').style.display = 'flex';
    document.getElementById("lives-count").innerHTML = `You have ${lives} lives left`
}, '500')

    if(lives === 1){
        setTimeout(() => {
        document.getElementById("lives-count").innerHTML = `You have 1 life left. Don't be defeated again`
    }, '500')
    }

    if(lives === 0){
        setTimeout(() => {
        document.getElementById("loss-message").innerHTML = 'You have Died!'
        document.getElementById("lives-count").innerHTML = `You have no lives left`
        document.getElementById("continue-button2").innerHTML = `New game`
        lives = 6
        stage = 1
    }, '500')
    }

}

document.getElementById('continue-button2').addEventListener('click', resetDeck)


function victory(){
    setTimeout(() => {
    levelCleared.style.display = 'flex'
    levelCleared.querySelector('h2').innerHTML = 'Congratulations! You have won the game!'
    document.getElementById("continue-button").innerHTML = 'Continue as a God'
}, '500')
}

stateProgress()


//Functions for flipping each card


function flipCard1(){
    if(order == 0){
        cardOne.src = givenCards[0]['img']
        order++;
        if (givenCards[0]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    } 
}
function flipCard2(){
    if(flippedSecondRow === false && order == 1 && winner == true){
        cardTwo.src = givenCards[1]['img']
        flippedSecondRow = true
        order++;
        stateProgress()
        if (givenCards[1]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    }
}
function flipCard3(){
    if(flippedSecondRow === false && order == 1 && winner == true){
        cardThree.src = givenCards[2]['img']
        flippedSecondRow = true;
        order++;
        stateProgress()
        if (givenCards[2]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    }
}
function flipCard4(){
    if(flippedThirdRow === false && order == 2 && winner == true){
        cardFour.src = givenCards[3]['img']
        flippedThirdRow = true;
        order++;
        stateProgress()
        if (givenCards[3]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    }
}
function flipCard5(){
    if(flippedThirdRow === false && order == 2 && winner == true){
        cardFive.src = givenCards[4]['img']
        flippedThirdRow = true;
        order++;
        stateProgress()
        if (givenCards[4]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    }
}
function flipCard6(){
    if(flippedThirdRow === false && order == 2 && winner == true){
        cardSix.src = givenCards[5]['img']
        flippedThirdRow = true;
        order++;
        stateProgress()
        if (givenCards[5]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    }
}
function flipCard7(){
    if(flippedFourthRow === false && order == 3 && winner == true){
        cardSeven.src = givenCards[6]['img']
        flippedFourthRow = true;
        order++;
        stateProgress()
        if (givenCards[6]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    }
}
function flipCard8(){
    if(flippedFourthRow === false && order == 3 && winner == true){
        cardEight.src = givenCards[7]['img']
        flippedFourthRow = true;
        order++;
        stateProgress()
        if (givenCards[7]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        }
    }
}
function flipCard9(){
    if(order == 4 && winner == true){
        cardNine.src = givenCards[8]['img']
        order++;
        stateProgress()
        if (givenCards[8]['isFaceCard'] == true){
            winner = false;
            lives--;
            stateProgress()
            youLose()
        } else {
            stage++;
            lives++;
            if(stage < 6){
        setTimeout(() => {
            stateProgress()
            levelCleared.style.display = 'flex'
        }, '500') 
            } else if(stage === 6){
                victory()
            } else {
                document.getElementById('congrats').innerHTML = 'Your power is beyond mortal comprehension'
                stateProgress()
                setTimeout(() => {
                levelCleared.style.display = 'flex'
            }, '500') 
            }
        }
    }
}


cardOne.addEventListener("click", flipCard1)
cardTwo.addEventListener("click", flipCard2)
cardThree.addEventListener("click", flipCard3)
cardFour.addEventListener("click", flipCard4)
cardFive.addEventListener("click", flipCard5)
cardSix.addEventListener("click", flipCard6)
cardSeven.addEventListener("click", flipCard7)
cardEight.addEventListener("click", flipCard8)
cardNine.addEventListener("click", flipCard9)


//For highlighting which cards are available to choose

function enterBorder1(){
    if(order === 0){
        cardOne.style.border = 'red solid 3.5px'
        cardOne.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder1(){
    cardOne.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder2(){
    if(order === 1 && winner == true){
        cardTwo.style.border = 'red solid 3.5px'
        cardTwo.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder2(){
    cardTwo.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder3(){
    if(order === 1 && winner == true){
        cardThree.style.border = 'red solid 3.5px'
        cardThree.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder3(){
    cardThree.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder4(){
    if(order === 2 && winner == true){
        cardFour.style.border = 'red solid 3.5px'
        cardFour.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder4(){
    cardFour.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder5(){
    if(order === 2 && winner == true){
        cardFive.style.border = 'red solid 3.5px'
        cardFive.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder5(){
    cardFive.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder6(){
    if(order === 2 && winner == true){
        cardSix.style.border = 'red solid 3.5px'
        cardSix.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder6(){
    cardSix.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder7(){
    if(order === 3 && winner == true){
        cardSeven.style.border = 'red solid 3.5px'
        cardSeven.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder7(){
    cardSeven.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder8(){
    if(order === 3 && winner == true){
        cardEight.style.border = 'red solid 3.5px'
        cardEight.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder8(){
    cardEight.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}
function enterBorder9(){
    if(order === 4 && winner == true){
        cardNine.style.border = 'red solid 3.5px'
        cardNine.style.transition = 'border 400ms ease-out'
    }
}
function exitBorder9(){
    cardNine.style.border = '3.5px rgba(0, 0, 0, 0) solid'
}

cardOne.addEventListener('mouseenter', enterBorder1)
cardOne.addEventListener('mouseleave', exitBorder1)
cardTwo.addEventListener('mouseenter', enterBorder2)
cardTwo.addEventListener('mouseleave', exitBorder2)
cardThree.addEventListener('mouseenter', enterBorder3)
cardThree.addEventListener('mouseleave', exitBorder3)
cardFour.addEventListener('mouseenter', enterBorder4)
cardFour.addEventListener('mouseleave', exitBorder4)
cardFive.addEventListener('mouseenter', enterBorder5)
cardFive.addEventListener('mouseleave', exitBorder5)
cardSix.addEventListener('mouseenter', enterBorder6)
cardSix.addEventListener('mouseleave', exitBorder6)
cardSeven.addEventListener('mouseenter', enterBorder7)
cardSeven.addEventListener('mouseleave', exitBorder7)
cardEight.addEventListener('mouseenter', enterBorder8)
cardEight.addEventListener('mouseleave', exitBorder8)
cardNine.addEventListener('mouseenter', enterBorder9)
cardNine.addEventListener('mouseleave', exitBorder9)




