var database;
var gameState=0;
var playerCount;
var player;
var game;
var form;
var allPlayers;
var canvas;
var car;
var car1;
var car2;
var car3;
var car4;

function setup(){
  database=firebase.database();
  canvas=createCanvas(displayWidth-30,displayHeight-30)
  game= new Game();
  game.getState();
  game.start();
  
}
function draw(){
  if(playerCount===4){
    game.update(1);    
  }
  if(gameState===1){
    clear();
    game.play();
  }
}