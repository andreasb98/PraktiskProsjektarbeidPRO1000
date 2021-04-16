/* Main JS Doucument */




//When you reload the page you get sent to the top of your current page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


//Giga Menu

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myContent").style.opacity = "1";
  document.getElementById("myCloseBtn").style.opacity = "1";
  document.getElementById("header").style.opacity = "0";
  window.addEventListener('scroll', noscroll);
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myContent").style.opacity = "0";
  document.getElementById("myCloseBtn").style.opacity = "0";
  document.getElementById("header").style.opacity = "1";
  window.removeEventListener('scroll', noscroll);
}


//Splitscreen

function splitScroll() {
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '400%', //Stays fixed for 4 window heights
		triggerElement:'.bo-title', //Starts from this class
		triggerHook: 0 //Makes it stay in the middle of the screen
	})

	.setPin('.bo-title')
	.addTo(controller)

	new ScrollMagic.Scene({
		duration: '400%', 
		triggerElement:'.porsgrunn-title',
		triggerHook: 0
	})


	.setPin('.porsgrunn-title')
	.addTo(controller);

	new ScrollMagic.Scene({
		duration: '400%', 
		triggerElement:'.notodden-title',
		triggerHook: 0
	})


	.setPin('.notodden-title')
	.addTo(controller);

	new ScrollMagic.Scene({
		duration: '400%', 
		triggerElement:'.tinn-title',
		triggerHook: 0
	})


	.setPin('.tinn-title')
	.addTo(controller);

}

splitScroll();


//Svg Animations

var Played = false; //Preventing animation to play more than onse onscroll
var Played2 = false;
var Played3 = false;
var Played4 = false;
var Played5 = false;
var Played6 = false;
var Played7 = false;


function drawMap(){ //Draws the svg files

	var introText = document.querySelector('.intro-text-1'); //Selects class, connects to variable
	var introText6 = document.querySelector('.intro-text-6');
	var introText11 = document.querySelector('.intro-text-11');
	var introText16 = document.querySelector('.intro-text-16');
	var headText1 = document.querySelector('.headtext-porsgrunn');
	var headText2 = document.querySelector('.headtext-notodden');
	var headText3 = document.querySelector('.headtext-tinn');
	var introPosition = introText.getBoundingClientRect().top; //Sets position for variable
	var introPosition6 = introText6.getBoundingClientRect().top;
	var introPosition11 = introText11.getBoundingClientRect().top;
	var introPosition16 = introText16.getBoundingClientRect().top;
	var headPosition1 = headText1.getBoundingClientRect().top;
	var headPosition2 = headText2.getBoundingClientRect().top;
	var headPosition3 = headText3.getBoundingClientRect().top;
	var animePosition = window.innerHeight / 5; //Sets a triggerpoint in the window height
	var animePosition2 = window.innerHeight /2;

	if (!Played && introPosition < animePosition) { 

		function drawAppear1(){
			document.getElementById("lineDrawing").style.opacity = "1"; //Makes svg file visible
		} window.addEventListener('scroll', drawAppear1);
		
		var lineDrawing = anime({ //Draws svg
    		targets: '#lineDrawing .lines path', //Sets targets for the animation. Id, class and tag.
    		strokeDashoffset: [anime.setDashoffset, 0], //Draws the entire svg path, zero offset
    		easing: 'easeInOutSine', //The type of easing
    		duration: 3000 //3 seconds
		});

		Played=true; //Prevents animation to trigger again
	}
	if (!Played2 && introPosition6 < animePosition) {

		function drawAppear2(){
			document.getElementById("lineDrawing2").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear2);
		
		var lineDrawing2 = anime({
    		targets: '#lineDrawing2 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played2=true;
	}

	if (!Played3 && introPosition11 < animePosition) {

		function drawAppear3(){
			document.getElementById("lineDrawing3").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear3);
		
		var lineDrawing3 = anime({
    		targets: '#lineDrawing3 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played3=true;
	}

	if (!Played4 && introPosition16 < animePosition) {

		function drawAppear4(){
			document.getElementById("lineDrawing4").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear4);
		
		var lineDrawing4 = anime({
    		targets: '#lineDrawing4 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played4=true;
	}

	if (!Played5 && headPosition1 < animePosition) {

		function drawAppear5(){
			document.getElementById("headDrawing2").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear5);
		
		var headDrawing2 = anime({
    		targets: '#headDrawing2 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played5=true;
	}

	if (!Played6 && headPosition2 < animePosition) {

		function drawAppear6(){
			document.getElementById("headDrawing3").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear6);
		
		var headDrawing3 = anime({
    		targets: '#headDrawing3 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played6=true;
	}

	if (!Played7 && headPosition3 < animePosition) {

		function drawAppear7(){
			document.getElementById("headDrawing4").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear7);
		
		var headDrawing4 = anime({
    		targets: '#headDrawing4 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played7=true;
	}

}

	window.addEventListener('scroll', drawMap); //scroll trigger on function


	function firstDraw(){ //Drawing that happenes onload not onscroll

			document.getElementById("headDrawing1").style.opacity = "1";

		
		
		var headDrawing1 = anime({
    		targets: '#headDrawing1 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});


}
//Appeareffect for text

 function scollAppear(){
	
	var introText1 = document.querySelector('.intro-text-1'); //Selects class, connects to variable
	var introText2 = document.querySelector('.intro-text-2');
	var introText3 = document.querySelector('.intro-text-3');
	var introText4 = document.querySelector('.intro-text-4');	
	var introText5 = document.querySelector('.intro-text-5');
	var introText6 = document.querySelector('.intro-text-6');
	var introText7 = document.querySelector('.intro-text-7');
	var introText8 = document.querySelector('.intro-text-8');
	var introText9 = document.querySelector('.intro-text-9');
	var introText10 = document.querySelector('.intro-text-10');	
	var introText11 = document.querySelector('.intro-text-11');
	var introText12 = document.querySelector('.intro-text-12');
	var introText13 = document.querySelector('.intro-text-13');
	var introText14 = document.querySelector('.intro-text-14');
	var introText15 = document.querySelector('.intro-text-15');
	var introText16 = document.querySelector('.intro-text-16');	
	var introText17 = document.querySelector('.intro-text-17');
	var introText18 = document.querySelector('.intro-text-18');
	var introText19 = document.querySelector('.intro-text-19');
	var introText20 = document.querySelector('.intro-text-20');
	var headerText1 = document.querySelector('.header1');
	var headerText2 = document.querySelector('.header2');
	var headerText3 = document.querySelector('.header3');
	var headerText4 = document.querySelector('.header4');
	var pin1 = document.querySelector('.pin-1');
	var pin2 = document.querySelector('.pin-2');
	var pin3 = document.querySelector('.pin-3');
	var pin4 = document.querySelector('.pin-4');
	var pin5 = document.querySelector('.pin-5');
	var pin6 = document.querySelector('.pin-6');
	var pin7 = document.querySelector('.pin-7');
	var pin8 = document.querySelector('.pin-8');
	var pin9 = document.querySelector('.pin-9');
	var pin10 = document.querySelector('.pin-10');
	var pin11 = document.querySelector('.pin-11');
	var pin12 = document.querySelector('.pin-12');
	var pin13 = document.querySelector('.pin-13');
	var pin14 = document.querySelector('.pin-14');
	var pin15 = document.querySelector('.pin-15');
	var pin16 = document.querySelector('.pin-16');

	var introPosition1 = introText1.getBoundingClientRect().top; //Sets position for variable
	var introPosition2 = introText2.getBoundingClientRect().top;
	var introPosition3 = introText3.getBoundingClientRect().top;
	var introPosition4 = introText4.getBoundingClientRect().top;
	var introPosition5 = introText5.getBoundingClientRect().top;
	var introPosition6 = introText6.getBoundingClientRect().top;
	var introPosition7 = introText7.getBoundingClientRect().top;
	var introPosition8 = introText8.getBoundingClientRect().top;
	var introPosition9 = introText9.getBoundingClientRect().top;
	var introPosition10 = introText10.getBoundingClientRect().top;
	var introPosition11 = introText11.getBoundingClientRect().top;
	var introPosition12 = introText12.getBoundingClientRect().top;
	var introPosition13 = introText13.getBoundingClientRect().top;
	var introPosition14 = introText14.getBoundingClientRect().top;
	var introPosition15 = introText15.getBoundingClientRect().top;
	var introPosition16 = introText16.getBoundingClientRect().top;
	var introPosition17 = introText17.getBoundingClientRect().top;
	var introPosition18 = introText18.getBoundingClientRect().top;
	var introPosition19 = introText19.getBoundingClientRect().top;
	var introPosition20 = introText20.getBoundingClientRect().top;
	var headerPosition1 = headerText1.getBoundingClientRect().top;
	var headerPosition2 = headerText2.getBoundingClientRect().top;
	var headerPosition3 = headerText3.getBoundingClientRect().top;
	var headerPosition4 = headerText4.getBoundingClientRect().top;
	

	var screenPosition = window.innerHeight / 5; //Triggerpoint in window height
	var screenPosition2 = window.innerHeight /4; //Sightly higher triggerpoint

	if (introPosition1 < screenPosition){
		introText1.classList.add('intro-appear'); //Adds class with opacity: 1
		pin1.classList.add('intro-appear');
		pin2.classList.remove('intro-appear');
		pin3.classList.remove('intro-appear');
		pin4.classList.remove('intro-appear');
	}
	if (introPosition2 < screenPosition){
		introText2.classList.add('intro-appear');
		pin1.classList.remove('intro-appear');
		pin2.classList.add('intro-appear');
		pin3.classList.remove('intro-appear');
		pin4.classList.remove('intro-appear');
	}
	if (introPosition3 < screenPosition){
		introText3.classList.add('intro-appear');
		pin1.classList.remove('intro-appear');
		pin2.classList.remove('intro-appear');
		pin3.classList.add('intro-appear');
		pin4.classList.remove('intro-appear');
	}
	if (introPosition4 < screenPosition){
		introText4.classList.add('intro-appear');
		pin1.classList.remove('intro-appear');
		pin2.classList.remove('intro-appear');
		pin3.classList.remove('intro-appear');
		pin4.classList.add('intro-appear');
	}
	if (introPosition5 < screenPosition){
		introText5.classList.add('intro-appear');
		pin1.classList.remove('intro-appear');
		pin2.classList.remove('intro-appear');
		pin3.classList.remove('intro-appear');
		pin4.classList.remove('intro-appear');
		
	}
	if (introPosition6 < screenPosition){
		introText6.classList.add('intro-appear');
		pin6.classList.remove('intro-appear');
		pin5.classList.add('intro-appear');
		pin7.classList.remove('intro-appear');
		pin8.classList.remove('intro-appear');
	}
	if (introPosition7 < screenPosition){
		introText7.classList.add('intro-appear');
		pin5.classList.remove('intro-appear');
		pin7.classList.remove('intro-appear');
		pin6.classList.add('intro-appear');
		pin8.classList.remove('intro-appear');
	}
	if (introPosition8 < screenPosition){
		introText8.classList.add('intro-appear');
		pin5.classList.remove('intro-appear');
		pin6.classList.remove('intro-appear');
		pin8.classList.remove('intro-appear');
		pin7.classList.add('intro-appear');
	}
	if (introPosition9 < screenPosition){
		introText9.classList.add('intro-appear');
		pin5.classList.remove('intro-appear');
		pin6.classList.remove('intro-appear');
		pin7.classList.remove('intro-appear');
		pin8.classList.add('intro-appear');
	}
	if (introPosition10 < screenPosition){
		introText10.classList.add('intro-appear');
		pin5.classList.remove('intro-appear');
		pin6.classList.remove('intro-appear');
		pin7.classList.remove('intro-appear');
		pin8.classList.remove('intro-appear');
	}
	if (introPosition11 < screenPosition){
		introText11.classList.add('intro-appear');
		pin9.classList.add('intro-appear');
		pin10.classList.remove('intro-appear');
		pin11.classList.remove('intro-appear');
		pin12.classList.remove('intro-appear');
	}
	if (introPosition12 < screenPosition){
		introText12.classList.add('intro-appear');
		pin10.classList.add('intro-appear');
		pin9.classList.remove('intro-appear');
		pin11.classList.remove('intro-appear');
		pin12.classList.remove('intro-appear');
	}
	if (introPosition13 < screenPosition){
		introText13.classList.add('intro-appear');
		pin11.classList.add('intro-appear');
		pin9.classList.remove('intro-appear');
		pin10.classList.remove('intro-appear');
		pin12.classList.remove('intro-appear');
	}
	if (introPosition14 < screenPosition){
		introText14.classList.add('intro-appear');
		pin12.classList.add('intro-appear');
		pin9.classList.remove('intro-appear');
		pin10.classList.remove('intro-appear');
		pin11.classList.remove('intro-appear');
	}
	if (introPosition15 < screenPosition){
		introText15.classList.add('intro-appear');
		pin9.classList.remove('intro-appear');
		pin10.classList.remove('intro-appear');
		pin11.classList.remove('intro-appear');
		pin12.classList.remove('intro-appear');
	}
	if (introPosition16 < screenPosition){
		introText16.classList.add('intro-appear');
		pin13.classList.add('intro-appear');
		pin14.classList.remove('intro-appear');
		pin15.classList.remove('intro-appear');
		pin16.classList.remove('intro-appear');
	}
	if (introPosition17 < screenPosition){
		introText17.classList.add('intro-appear');
		pin14.classList.add('intro-appear');
		pin13.classList.remove('intro-appear');
		pin15.classList.remove('intro-appear');
		pin16.classList.remove('intro-appear');
	}
	if (introPosition18 < screenPosition){
		introText18.classList.add('intro-appear');
		pin15.classList.add('intro-appear');
		pin13.classList.remove('intro-appear');
		pin14.classList.remove('intro-appear');
		pin16.classList.remove('intro-appear');
	}
	if (introPosition19 < screenPosition){
		introText19.classList.add('intro-appear');
		pin13.classList.remove('intro-appear');
		pin14.classList.remove('intro-appear');
		pin15.classList.remove('intro-appear');
		pin16.classList.add('intro-appear');
	}
	if (introPosition20 < screenPosition){
		introText20.classList.add('intro-appear');
		pin13.classList.remove('intro-appear');
		pin14.classList.remove('intro-appear');
		pin15.classList.remove('intro-appear');
		pin16.classList.remove('intro-appear');
	}
	if (headerPosition1 < screenPosition2)
		headerText1.classList.add('intro-appear');
	if (headerPosition2 < screenPosition2)
		headerText2.classList.add('intro-appear');
	if (headerPosition3 < screenPosition2)
		headerText3.classList.add('intro-appear');
	if (headerPosition4 < screenPosition2)
		headerText4.classList.add('intro-appear');


}
	window.addEventListener('scroll',scollAppear);

// Hide navbar when scrolling down, show nav bar when scrolling up.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {	
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-8vh";
  }
  prevScrollpos = currentScrollPos;
}

//Slider 

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1000,
  rtl: true,
  pauseOnHover: true,
  
});

$('.variable-width1').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,

});


const slider = $(".slider-item");

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));

//Slider Slutt

//Lightbox start

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


// Thumbnail image controls
function currentSlide(t) {
  showSlides(slideIndex = t);
}
// Next/previous controls
function plusSlides(t) {
  showSlides(slideIndex += t);
}

function showSlides(t) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumb");
  var captionText = document.getElementById("caption", "caption1", "caption3", "caption4");
  if (t > slides.length) {slideIndex = 1}
  if (t < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//Lightbox slutt


/* JavaScript for Landingpage (ikke funksjonell, ligger i egen landing.js) 
// Wrapper hver eneste bokstav i et span, for å kunne animere en og en bokstav
$('.animate .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letters'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.animate .letters',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 900,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.animate .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  });


//Beveger bakgrunnsbildet i takt med musebevegelse.
$('.bg').mousemove(function(e){
	var moveX = (e.pageX * -1 / 25); //Verdier som bestemmer hyppighet
	var moveY = (e.pageY * -1 / 25);
	$(this).css('background-position', moveX + 'px ' + moveY + 'px')
}); */ 



