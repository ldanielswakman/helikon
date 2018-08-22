var xspacing = 1;   // Distance between each horizontal location
var w;              // Width of entire wave
var maxwaves = 5;   // total # of waves to add together

var theta = 0.0;
var amplitude = new Array(maxwaves);   // Height of wave
// Value for incrementing X, to be calculated 
// as a function of period and xspacing
var dx = new Array(maxwaves);
// Using an array to store height values
// for the wave (not entirely necessary)
var yvalues;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	colorMode(RGB, 17, 22, 30, 255);
	w = width + 10;

	for (var i = 0; i < maxwaves; i++) {
		amplitude[i] = random(25,80); // valore amplitude che contiene tante variabili quanti gli indici presenti
		var period = random(200,400); // Num pixels before wave repeats
		dx[i] = (TWO_PI / period) * xspacing;
	}

	yvalues = new Array(floor(w/xspacing));
}

function draw() {
	calcWave();
	renderWave();
}



var tethaMouseX = 0;


function calcWave() {

	colorMode(RGB, 255);
	background(17, 22, 30, 80);


	// varibile col settata come posizione del mouse
	tethaMouseX = map(mouseX,0,width,-0.5,0.5);

	// for 'angular velocity' here
	theta += tethaMouseX;

	// Set all height values to zero
	for (var i = 0; i < yvalues.length; i++) {
		yvalues[i] = 0;
	}

	// Accumulate wave height values
	for (var j = 0; j < maxwaves; j++) {
		var x = theta;
		for (var i = 0; i < yvalues.length; i++) {
			// Every other wave is cosine instead of sine
			if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
			else yvalues[i] += cos(x)*amplitude[j];
			x+=dx[j];
		}
	}
}

function renderWave() {
	// A simple way to draw the wave with an ellipse at each location
	noStroke();
	stroke("#000");
	strokeWeight(2);
	fill("#000");
	ellipseMode(CENTER);
	for (var x = 0; x < yvalues.length; x++) {
		ellipse(x*xspacing,height/2+yvalues[x],2,2);
	}
}
