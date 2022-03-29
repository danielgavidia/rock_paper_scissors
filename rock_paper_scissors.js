
function playerSelection2(string) {
    if (string == "ROCK") {
        return 1
    } else if (string == "PAPER") {
        return 2
    } else {
        return 3
    }
}

function game_outcome(player_move,computer_move) {
    if (player_move == 3 && computer_move == 1) {
        return 0
    } else if (player_move == 1 && computer_move == 3) {
        return 1
    } else if (player_move > computer_move) {
        return 1
    } else if (player_move < computer_move) {
        return 0
    } else {
        return 2
    }
}

function moves_strings(move) {
    if (move == 1) {
        return "Rock";
    } else if (move == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function game_outcome_string(outcome,player_move_string,computer_move_string) {
    if (outcome == 1) {
        return ` You win! ${player_move_string} beats ${computer_move_string} `;
    } else if (outcome == 0) {
        return ` You lose! ${computer_move_string} beats ${player_move_string} `;
    } else {
        return ` It's a tie! ${player_move_string} equals ${computer_move_string} `;
    }
}


const player_points = [];
const computer_points = [];
const ties = [];

const outcomes_stings = [];

function game() {    
    
    const computer_move = Math.floor(Math.random() * 3) + 1;
    const playerSelection = prompt("Rock? Paper? Scissors?").toUpperCase();
    const player_move = playerSelection2(playerSelection);
    const outcome = game_outcome(player_move,computer_move);
    const player_move_string = moves_strings(player_move);
    const computer_move_string = moves_strings(computer_move);
    const final_outcome = game_outcome_string(outcome,player_move_string,computer_move_string);
    
    if(outcome == 1) {
        player_points.push(1)
    } else if (outcome == 0) {
        computer_points.push(1)
    } else {
        ties.push(1)
    }
    
   outcomes_stings.push(final_outcome);

}

for (let i = 1; i <= 5; i++) {
    game();
}


console.log(`Round outcomes: ${outcomes_stings}.`);
console.log(`Player points: ${player_points.length}.`);
console.log(`Computer points: ${computer_points.length}.`);
console.log(`Ties: ${ties.length}.`);