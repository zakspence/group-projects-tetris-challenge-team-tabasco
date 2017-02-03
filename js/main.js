console.log("main.js connected");    

var canvas = document.getElementById('myCanvas'); // in your HTML this element appears as <canvas id="mycanvas"></canvas>
var ctx = canvas.getContext('2d');


// ctx.strokeStyle = "black";
// ctx.strokeRect(10,10,20,20);
// ctx.strokeRect(30,10,20,20);
// ctx.strokeRect(50,10,20,20);
// ctx.strokeRect(70,10,20,20);


// ctx.strokeStyle = "black";
// ctx.strokeRect(10,30,20,20);
// ctx.strokeRect(30,30,20,20);
// ctx.strokeRect(50,30,20,20);
// ctx.strokeRect(70,30,20,20);

// ctx.strokeStyle = "black";
// ctx.strokeRect(10,50,20,20);
// ctx.strokeRect(30,50,20,20);
// ctx.strokeRect(50,50,20,20);
// ctx.strokeRect(70,50,20,20);

// ctx.strokeStyle = "black";
// ctx.strokeRect(10,70,20,20);
// ctx.strokeRect(30,70,20,20);
// ctx.strokeRect(50,70,20,20);
// ctx.strokeRect(70,70,20,20);

var x = 30;
var y = 30;
var originalCoordinates;


function draw() {
    ctx.fillStyle = "red";
    originalCoordinates = (x, y, 19, 19);
    ctx.fillRect(originalCoordinates);
    ctx.fillRect(x, (y + 20),19,19);
    ctx.fillRect((x+20),y,19,19);
    ctx.fillRect((x+20),(y+20),19,19);
};

function moveDown() {
    ctx.clearRect(originalCoordinates);
    y = y + 20;
    draw();
}

setInterval(moveDown, 3000);









function shapeSetter() {
	var shape = (Math.rand() * 8 + 1);
	for (var i = 0; i < 1000; i++){
		console.log(shape);
	}
}

