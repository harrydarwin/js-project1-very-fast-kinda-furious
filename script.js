$(function(){
let roll;
    
alert('Welcome to...');
alert('THE AMAZING RACING GAME!!!!')
    //Ask how many players are playing
    //store that # in a variable
    let players = prompt('How many players are racing? (1-6)');
    if(players < 1){
        players = prompt('If there are not any players racing...GET OFF MY BEACH! Last chance, how many want to race?');
    }if(players > 6){
        player = prompt("Due to safety protocals we only allow 6 racers at a time. We wouldn't wanna put anyone in more danger than necessary. So what'll it be?")
    }

//Listing all available players/cars
const cars = ['.player1', '.player2', '.player3', '.player4', '.player5', '.player6'];

//Reveals cars equal to the number of player the user inputs
for(let i = 0; i <= players - 1; i++){
    $(cars[i]).toggleClass('inactive');
}

//groups the players in the game into an array
let playing = cars.slice(0, players);

//set up turn taking
//store turn in variable by playing array index's
let turn = 0;
//players turn variable equal to their index in playing array
let takeTurns = () => {
    let currentPlayer = playing[turn];
    alert(`It is Player ${turn + 1}'s turn! `)
    
    }

takeTurns();
//select a random number and store it in variable
function diceRoll() {
    roll =	Math.floor(Math.random() * Math.floor(7));
        if(roll === 0) {
        roll =	Math.floor(Math.random() * Math.floor(10));
        } else console.log(roll);
        $('.dice').text(roll.valueOf());
    }

    //initiate dice roll on button click
    //multiply dic roll by 50 and add to curent length/widh of player element
    //add 1 to turn variable to rotate through plyer turns
    //if turn = lenght of playing array, reset 
    //if length reaches max - player wins
$('button').on('click', function(e) {
    e.preventDefault();
    diceRoll();
    let curLength = $(playing[turn]).width();
    let movement = roll * 35;
    let newLength = curLength + movement;
    $(playing[turn]).width(newLength);
    
    if($(playing[turn]).width() > 1120){
        $('div.wrapper').addClass('winner');
        $('.racer').css('border', 'none');
        $('h1').css('z-index', '15').addClass('winz').text(`PLAYER ${turn + 1} IS THE WINNER!`);
    } else {
        ++turn;
    if(turn == playing.length) {
        turn = 0;
    }
    setTimeout(function(){takeTurns() }, 2000);
    }   
});
    
});