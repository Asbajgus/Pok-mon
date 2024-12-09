let pikachuName = "Pikachu"

let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "Png/pikatchu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "Png/Bulbasaur.png",
  level: 12,
};

let squirtle = {
  name: "Squirtle",
  health: 170,
  image: "Png/squirtle.png",
  level: 45,
};

let charmander = {
  name: "Charmander",
  health: 90,
  image: "Png/charmander.png",
  level: 33,
};

let caterpie = {
    name: "Caterpie",
    health: 5,
    image: "Png/caterpie.png",
    level: 12,
  };

let possiblePokemon = [pikachu, bulbasaur, squirtle, charmander, caterpie];
let randomPokemon = null;

let player = {
  playerName: "Peter",
 playerImage: "Png/Red.png",
 playerPokemon: []
}
let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon()
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.playerImage}">
            <div>${player.playerName}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemon()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}

function caughtPokemonView(){
  app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>Du fanget ${player.playerPokemon[player.playerPokemon.length - 1].name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>
          </div>
  </div>
  `;
}

function showPokemonView(){
  
}
function catchPokemon(){
  player.playerPokemon.push(randomPokemon);
  caughtPokemonView();
}

function showPokemon(){
  console.log(player.playerPokemon);

}

function getRandomPokemon(){
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}