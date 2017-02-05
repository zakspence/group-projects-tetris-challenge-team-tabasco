
var canvas = document.getElementById('myCanvas'); // in your HTML this element appears as <canvas id="mycanvas"></canvas>
var ctx = canvas.getContext('2d');
var h = 19;
var w = 19;
var waitTime = 500;
var letterColor = {
	square: "red",
	T: "blue",
	S: "yellow",
	Z: "pink",
	J: "cyan",
	L: "orange",
	I: "green"
}
var myTimeout;
var lastLetter = [];
var moveCounter = 0;
var occupiedX = [];
var whoseMove = {
	me: square,
	move: moveDown,
	string: "square",
	color: "red",
	position: 0
}

function draw() {
	ctx.fillStyle = whoseMove.color;  
	lastLetter = [];
	potato = whoseMove.me
	for (var i = 0; i < potato.length; i++) {
	    ctx.fillRect(potato[i].x, potato[i].y, w, h);
	    var potatoBox = {};
	    potatoBox.x = Number(potato[i].x);
	    potatoBox.y = Number(potato[i].y);
	    lastLetter.push(potatoBox);
	}
};

function moveRight() {
	var superman = whoseMove.me
	for (var i = 0; i < superman.length; i++) {
    	superman[i].x += 20;
    }
}

function moveLeft() {
	var spiderman = whoseMove.me
	for (var i = 0; i < spiderman.length; i++) {
    	spiderman[i].x -= 20;
    }
}

function moveDown() {
	var dontjudgeme = whoseMove.me
    for (var i = 0; i < dontjudgeme.length; i++) {
    	dontjudgeme[i].y += 20;
    }
}

function rotateRight() {
	var potato = whoseMove.me;
	for (var i = 0; i < potato.length; i++) {
	    potato[i].x = Number(lastLetter[i].y + lastLetter[1].x - lastLetter[1].y);
	    potato[i].y = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].x);
	}
}

function rotateLeft() {
	var potato = whoseMove.me;
	for (var i = 0; i < potato.length; i++) {
	    potato[i].x = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].y);
		potato[i].y = Number(lastLetter[i].x + lastLetter[1].y - lastLetter[1].x);
	}
}

function clearToMove() {
	for (var i = 0; i < 4; i++) {
		ctx.clearRect(lastLetter[i].x, lastLetter[i].y, w, h);
	}
}

function playGame() {
	draw();
	myTimeout = setTimeout(function(){
		if (moveCounter !== 20) {
			moveCounter++;
			moveDown();
			clearToMove();
			playGame();
		} else {
			resetLetter();
			startOver();
			playGame();
		}
		
	}, waitTime);
}

document.addEventListener("keyup", function(event){
	if(event.which === 82) {
		// r button
		clearToMove();
		rotateRight();
		draw();
	}
	if(event.which === 87) {
		// w button
		clearToMove();
		rotateLeft();
		draw();
	}
	if(event.which === 32) {
		// space
		waitTime = 100;
	}
	if (event.which === 39) {
		// right arrow
		clearToMove();
		moveRight();
		draw();
	}
	if (event.which === 37) {
		// left arrow
		clearToMove();
		moveLeft();
		draw();
	}
});

function startOver() {
	var randoNum = Math.floor((Math.random() * 49) + 1)
	if (randoNum < 7) {
		whoseMove.me = square;
		whoseMove.move = moveDown;
		whoseMove.string = "square";
		whoseMove.color = "red";
		whoseMove.position = 0;
	} else if (randoNum >= 7 && randoNum < 14) {
		whoseMove.me = I;
		whoseMove.move = moveDown;
		whoseMove.string = "I";
		whoseMove.color = "green";
		whoseMove.position = 1;
	} else if (randoNum >= 14 && randoNum < 21) {
		whoseMove.me = J;
		whoseMove.move = moveDown;
		whoseMove.string = "J";
		whoseMove.color = "cyan";
		whoseMove.position = 2;
	} else if (randoNum >= 21 && randoNum < 28) {
		whoseMove.me = L;
		whoseMove.move = moveDown;
		whoseMove.string = "L";
		whoseMove.color = "orange";
		whoseMove.position = 3;
	} else if (randoNum >= 28 && randoNum < 35) {
		whoseMove.me = S;
		whoseMove.move = moveDown;
		whoseMove.string = "S";
		whoseMove.color = "yellow";
		whoseMove.position = 4;
	} else if (randoNum >= 35 && randoNum < 42) {
		whoseMove.me = T;
		whoseMove.move = moveDown;
		whoseMove.string = "T";
		whoseMove.color = "blue";
		whoseMove.position = 5;
	} else if (randoNum >= 42 && randoNum <= 49) {
		whoseMove.me = Z;
		whoseMove.move = moveDown;
		whoseMove.string = "Z";
		whoseMove.color = "pink";
		whoseMove.position = 6;
	}
	moveCounter = 0;
	waitTime = 500;
}

function resetLetter() {
	if (whoseMove.string === "square") {
		for (var i = 0; i < square.length; i++) {
		square[i].x = Number(originals.square[i].x);
		square[i].y = Number(originals.square[i].y);
		}
	} else if (whoseMove.string === "L") {
		for (var i = 0; i < L.length; i++) {
		L[i].x = Number(originals.L[i].x);
		L[i].y = Number(originals.L[i].y);
		}
	} else if (whoseMove.string === "J") {
		for (var i = 0; i < J.length; i++) {
		J[i].x = Number(originals.J[i].x);
		J[i].y = Number(originals.J[i].y);
		}
	} else if (whoseMove.string === "Z") {
		for (var i = 0; i < Z.length; i++) {
		Z[i].x = Number(originals.Z[i].x);
		Z[i].y = Number(originals.Z[i].y);
		}
	} else if (whoseMove.string === "S") {
		for (var i = 0; i < S.length; i++) {
		S[i].x = Number(originals.S[i].x);
		S[i].y = Number(originals.S[i].y);
		}
	} else if (whoseMove.string === "I") {
		for (var i = 0; i < I.length; i++) {
		I[i].x = Number(originals.I[i].x);
		I[i].y = Number(originals.I[i].y);
		}
	} else if (whoseMove.string === "T") {
		for (var i = 0; i < T.length; i++) {
		T[i].x = Number(originals.T[i].x);
		T[i].y = Number(originals.T[i].y);
		}
	}
}

///////////////////////////////////////////////////////////////
//      Game Board stuff begins (with position storage)		 //
///////////////////////////////////////////////////////////////

function checkIfClearDown() {
	occupiedX = [];
	rowOfPiece = moveCounter + 1;
	rowInfrontOfPiece = moveCounter +2;
    for (var x = 0; x < gameboard[rowInfrontOfPiece].length; x++) {
        if (gameboard[rowOfPiece][x] === 2) {
            occupiedX.push(x);
        }
    }
    for (var i = 0; x < gameboard[rowOfPiece].length; i++) {
    	if (gameboard[rowInfrontOfPiece][occupiedX[i]] === 1) {
    		collisionDown = true;
    		//turn2sTo1s();
    		//checkIfRowIsFull();
    		return;
    	} else {
    		collisionDown = false;
    	}
    } 
}

function movePieceDown () {
	
}

var gameboard = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

var I = [

	boxA1 = {
		x: 60,
		y: 20
	},
	boxA2 = {
		x: 80,
		y: 20
	},
	boxA3 = {
		x: 100,
		y: 20
	},
	boxA4 = {
		x: 120,
		y: 20
	}
]

var J = [

	boxA2 = {
		x: 60,
		y: 0
	},
	boxA3 = {
		x: 80,
		y: 0
	},
	boxA4 = {
		x: 100,
		y: 0
	},
	boxB4 = {
		x: 100,
		y: 20
	}
]

var L = [

	boxB2 = {
		x: 60,
		y: 20
	},
	boxB3 = {
		x: 80,
		y: 20
	},
	boxB4 = {
		x: 100,
		y: 20
	},
	boxA4 = {
		x: 100,
		y: 0
	}
]

var square = [

	boxA2 = {
		x: 80,
		y: 0
	},
	boxA3 = {
		x: 100,
		y: 0
	},
	boxB2 = {
		x: 80,
		y: 20
	},
	boxB3 = {
		x: 100,
		y: 20
	}
]

var S = [

	boxA3 = {
		x: 80,
		y: 0
	},
	boxA4 = {
		x: 100,
		y: 0
	},
	boxB2 = {
		x: 60,
		y: 20
	},
	boxB3 = {
		x: 80,
		y: 20
	}
]

var T = [

	boxA2 = {
		x: 60,
		y: 0
	},
	boxA3 = {
		x: 80,
		y: 0
	},
	boxA4 = {
		x: 100,
		y: 0
	},
	boxB3 = {
		x: 80,
		y: 20
	}
]

var Z = [

	boxB2 = {
		x: 60,
		y: 0
	},
	boxA2 = {
		x: 80,
		y: 0
	},
	boxB2 = {
		x: 80,
		y: 20
	},
	boxB3 = {
		x: 100,
		y: 20
	}
]

var originals = {
	gameboardSquare: [
		[1,0,0,0,0,2,2,0,0,0,0,1],
    	[1,0,0,0,0,2,2,0,0,0,0,1]
	],
	gameboardI: [
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,2,2,2,2,0,0,0,1]
	],
	gameboardL: [
		[1,0,0,0,0,0,2,0,0,0,0,1],
    	[1,0,0,0,2,2,2,0,0,0,0,1]
	],
	gameboardJ: [
		[1,0,0,0,2,2,2,0,0,0,0,1],
    	[1,0,0,0,0,0,2,0,0,0,0,1]
	],
	gameboardS: [
		[1,0,0,0,0,2,2,0,0,0,0,1],
    	[1,0,0,0,2,2,0,0,0,0,0,1]
	],
	gameboardZ: [
		[1,0,0,0,2,2,0,0,0,0,0,1],
    	[1,0,0,0,0,2,2,0,0,0,0,1]
	],
	gameboardT: [
		[1,0,0,0,2,2,2,0,0,0,0,1],
    	[1,0,0,0,0,2,0,0,0,0,0,1]
	],
	square: [
		boxA2 = {
			x: 80,
			y: 0
		},
		boxA3 = {
			x: 100,
			y: 0
		},
		boxB2 = {
			x: 80,
			y: 20
		},
		boxB3 = {
			x: 100,
			y: 20
		}
	],
	I: [
		boxA1 = {
			x: 60,
			y: 20
		},
		boxA2 = {
			x: 80,
			y: 20
		},
		boxA3 = {
			x: 100,
			y: 20
		},
		boxA4 = {
			x: 120,
			y: 20
		}
	],
	J: [
		boxA2 = {
			x: 60,
			y: 0
		},
		boxA3 = {
			x: 80,
			y: 0
		},
		boxA4 = {
			x: 100,
			y: 0
		},
		boxB4 = {
			x: 100,
			y: 20
		}
	],
	L: [
		boxB2 = {
			x: 60,
			y: 20
		},
		boxB3 = {
			x: 80,
			y: 20
		},
		boxB4 = {
			x: 100,
			y: 20
		},
		boxA4 = {
			x: 100,
			y: 0
		}
	],
	S: [
		boxA3 = {
			x: 80,
			y: 0
		},
		boxA4 = {
			x: 100,
			y: 0
		},
		boxB2 = {
			x: 60,
			y: 20
		},
		boxB3 = {
			x: 80,
			y: 20
		}
	],
	T: [
		boxA2 = {
			x: 60,
			y: 0
		},
		boxA3 = {
			x: 80,
			y: 0
		},
		boxA4 = {
			x: 100,
			y: 0
		},
		boxB3 = {
			x: 80,
			y: 20
		}
	],
	Z: [
		boxB2 = {
			x: 60,
			y: 0
		},
		boxA2 = {
			x: 80,
			y: 0
		},
		boxB2 = {
			x: 80,
			y: 20
		},
		boxB3 = {
			x: 100,
			y: 20
		}
	]
}

startOver();







