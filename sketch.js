var ball;
var database, ballPosition, position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();
    ballPosition=database.ref('ball/position');
    ballPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        wirtePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref('ball/position').set({
        'x': position.x+x,
        'y': position.y+y
    })
}

function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function showError(){
    console.log("hi, you're wrong");
}