//JavaScript Dokument for Landingpage
//PRO1000 Animated Web Gruppe 3


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

//Indikasjon for å scrolle ned, som skal dukke opp etter noen sek
$(document).ready(function() {
$('.scrollned').fadeOut(0);
$('.scrollned').fadeIn(7000);
});



//Beveger bakgrunnsbildet i takt med musebevegelse.
$('.bg, .box').mousemove(function(e){
	var moveX = (e.pageX * -1 / 25); //Verdier som bestemmer hyppighet
	var moveY = (e.pageY * -1 / 25);
	$(this).css('background-position', moveX + 'px ' + moveY + 'px')
});




var w=window.innerHeight;

console.log(w);
var landingText = document.querySelector('.box');
var landingPosition = landingText.getBoundingClientRect().top;
var animePosition = window.innerHeight / 5;
console.log(landingPosition);


var Played8 = false;


