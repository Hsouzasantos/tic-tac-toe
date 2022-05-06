var player = null;
var selectedPlayer = document.getElementById(`selectPlayer`)

changePlayer(`x`);

function selectSquare(id) {
        var square = document.getElementById(id);

        square.innerHTML = player;
        square.style.color = `#000`;
}

function changePlayer(valor) {
        player = valor;
        selectedPlayer.innerHTML = player;
}