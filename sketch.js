var ball1,ball2, database, position, position2;

function setup(){
    database =firebase.database();
    createCanvas(500,500);
    ball1 = createSprite(5,5,10,10);
    ball1.shapeColor = "red";

    ball2 = createSprite(5,400,10,10);
    ball2.shapeColor = "green";

    var ball1position =database.ref('ball1/position');
    ball1position.on("value", readposition1, showerror);

    var ball2position =database.ref('ball2/position2');
    ball2position.on("value", readposition2, showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition1(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition1(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition1(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition1(0,+1);
    }

    if(keyDown("a")){
        writeposition2(-1,0);
    }
    else if(keyDown("d")){
        writeposition2(1,0);
    }
    else if(keyDown("w")){
        writeposition2(0,-1);
    }
    else if(keyDown("s")){
        writeposition2(0,+1);
    }
    drawSprites();
}

function readposition1(data){
    position =data.val();
    ball1.x =position.x;
    ball1.y =position.y;
}
function writeposition1(x,y){
    database.ref('ball1/position').set({
        'x': position.x+x,
        'y': position.y+y
    })
}
function readposition2(data){
    position2 =data.val();
    ball2.x =position2.x;
    ball2.y =position2.y;
}
function writeposition2(x,y){
    database.ref('ball2/position2').set({
        'x': position2.x+x,
        'y': position2.y+y,
    })
}
function showerror(){
   console.log ("Unable to connect to server of database");
}
