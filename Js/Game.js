class Game{
    constructor(){
    }
  getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data){
        gameState=data.val();
    })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player= new Player();
            player.getCount();
            form = new Form();
            form.display();
            
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        car=[car1,car2,car3,car4]
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start!",120,100);
        Player.getPlayerInfo();
        if(allPlayers !==undefined){
            var display_position=130;
            for(var plr in allPlayers){
               index=index+1
               x=x+200;
               y=displayHeight-allPlayers[plr].distance;
               car[index-1].x=x;
               car[index-1].y=y;
                if(plr===player.index)
                    fill("red")
                    else fill("black")
                    display_position+=20;
                    text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
            }
        }
            if(keyIsDown(UP_ARROW)&&player.index!==null){
                player.distance+=50;
                player.update();
            }
        }
    }
