var player = null;
var winner = null;
var selectedPlayer = document.getElementById(`selectPlayer`);
var selectedWinner = document.getElementById(`selectWinner`);
var squares = document.getElementsByClassName(`square`);

changePlayer(`X`);

function selectSquare(id) {

        if(winner !== null){
                return;
        }
        var square = document.getElementById(id);

        if(square.innerHTML !== `-`){
                return;
        }

        square.innerHTML = player;
        square.style.color = `#000`;

        if(player === `X`){
                player = `O`;
        } else {
                player = `X`;
        }

        changePlayer(player);
        checkWinner();
}

function changePlayer(valor) {
        player = valor;
        selectedPlayer.innerHTML = player;
}

function checkWinner(){
        let square1 = document.getElementById(1);
        let square2 = document.getElementById(2);
        let square3 = document.getElementById(3);
        let square4 = document.getElementById(4);
        let square5 = document.getElementById(5);
        let square6 = document.getElementById(6);
        let square7 = document.getElementById(7);
        let square8 = document.getElementById(8);
        let square9 = document.getElementById(9);

        if(checkSequencies(square1, square2,square3)){
                changeColorSquare(square1, square2, square3);
                changeWinner(square1);
                return;
        }
        if(checkSequencies(square4, square5,square6)){
                changeColorSquare(square4, square5, square6);
                changeWinner(square4);
                return;
        }
        if(checkSequencies(square7, square8,square9)){
                changeColorSquare(square7, square8, square9);
                changeWinner(square7);
                return;
        }
        if(checkSequencies(square1, square4,square7)){
                changeColorSquare(square1, square4, square7);
                changeWinner(square4);
                return;
        }
        if(checkSequencies(square2, square5,square8)){
                changeColorSquare(square2, square5,square8);
                changeWinner(square5);
                return;
        }
        if(checkSequencies(square3, square6,square9)){
                changeColorSquare(square3, square6,square9);
                changeWinner(square6);
                return;
        }
        if(checkSequencies(square1, square5,square9)){
                changeColorSquare(square1, square5,square9);
                changeWinner(square1);
                return;
        }
        if(checkSequencies(square3, square5,square7)){
                changeColorSquare(square3, square5,square7);
                changeWinner(square1);
        }




}

function checkSequencies(square1, square2, square3) {
        var isEqual = false;

        if(square1.innerHTML!== `-` && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
                isEqual = true;
        }

        return isEqual;
}

function changeColorSquare(square1, square2, square3){
        square1.style.background = `#0f0`
        square2.style.background = `#0f0`
        square3.style.background = `#0f0`
}
function changeWinner(square){
        winner = square.innerHTML;
        selectedWinner.innerHTML = winner;
}

function reset(){
        winner = null;
        selectedWinner.innerHTML = ``;

        for(var i = 1; i <= 9; i++){
                var square = document.getElementById(i);
                square.style.background = `#a9a9a9`;
                square.style.color = `#a9a9a9`;
                square.innerHTML = `-`;
        }

        changePlayer(`X`);
}
