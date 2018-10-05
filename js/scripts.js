// Component: smoothScroll
$(document).ready(function() {
  $('a[href^="#"]').not('.item').smoothScroll({
    speed: 1000,
    easing: 'easeInOutQuart',
    afterScroll: function() {
      updateHash($(this).attr('href'));
    }
  });
});
// Update URL hash
function updateHash(href) {
  // Restore original URL + search query if href is ''
  if(href.length < 1) {
    href = window.location.origin + window.location.pathname + window.location.search;
  }
  if(history.pushState) {
    history.pushState(null, null, href);
  }
  else {
    location.hash = href;
  }
}





// Component: menuBehaviour
scrollevents = 'ready scroll resize scrollstart scrollstop';
$(document).on(scrollevents, function() {
  if($('.menu').offset().top > $(window).height()) {
  	$('.menu').addClass('isStuck');
  } else {
  	$('.menu').removeClass('isStuck');
  }
});





// Component: activeSections
scrollevents = 'ready scroll resize scrollstart scrollstop';
$(document).on(scrollevents, function() {
  navOnScroll($('section'), $('.menu'));
});

function navOnScroll($target, $nav) {
  scroll = $(window).scrollTop();
  delta = 100000; // big number
  active_id = null;

  $target.each(function() {
    scrollpoint = scroll + $(window).outerHeight()/2;
    midpoint = $(this).offset().top + $(this).outerHeight()/2;
    if (Math.abs(scrollpoint - midpoint) < delta) {
      delta = Math.abs(scrollpoint - midpoint);
      active_id = ($(this).attr('id').length > 0) ? $(this).attr('id') : null;
    }
  });

  if(active_id && active_id.length > 0 && $target.filter('.isActive').attr('id') !== active_id) {
    // add active class to slide
    $target.removeClass('isActive');
    $target.filter('[id="' + active_id + '"]').addClass('isActive');
    // add active class to nav
    $nav.find('a').removeClass('isActive');
    $nav.find('li').removeClass('isActive');
    $nav.find('a[href="#' + active_id + '"]').addClass('isActive');
    $nav.find('a[href="#' + active_id + '"]').closest('li').addClass('isActive');
  }
}





// Component: Modal Interaction
$(document).ready(function() {

  // on page load, check if dialog should be open
  if(window.location.hash.length > 0) {
    openModal(window.location.hash);
  }

  $('.item').click(function(e) {
    openModal($(this).attr('href'));
  });
});

function openModal(target) {
  closeModal();
  if($(target).length > 0) {
    $('body').addClass('hasModalOpen');
    $(target).addClass('isActive');

    $parent_id = $(target).closest('section').attr('id');
    
    $.smoothScroll({
      scrollTarget: '#' + $parent_id,
      speed: 300,
      easing: 'easeInOutQuart'
    });

  } else {
    console.log('not found...');
  }
}

function closeModal() {
  $('body').removeClass('hasModalOpen');
  $('.modal').removeClass('isActive');
  updateHash('');
}





// Component: Sine Curves on Canvas
var xspacing = 1;   // Distance between each horizontal location
var w;              // Width of entire wave
var maxwaves = 8;   // total # of waves to add together

var theta = 0.0;
var amplitude = new Array(maxwaves);   // Height of wave
// Value for incrementing X, to be calculated 
// as a function of period and xspacing
var dx = new Array(maxwaves);
// Using an array to store height values
// for the wave (not entirely necessary)
var yvalues;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvas');
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
	tethaMouseX = map(mouseX,0,width,-0.25,0.25);
  if(!mouseX || mouseX == 0) {
    tethaMouseX = -0.1;
  }

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
	stroke("#fff");
	strokeWeight(2);
	ellipseMode(CENTER);
	for (var x = 0; x < yvalues.length; x++) {
		ellipse(x*xspacing,(height/2+yvalues[x]),2,2);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
