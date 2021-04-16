// JavaScript for PRO1000 Praktisk Prosjektarbeid
// Animated Web - Visit Telemark - Gruppe 3

// SplitScreen Effekt

function splitScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: '.left-screen',
		triggerHook: 0,
	})
	.setPin('.left-screen')
	.addTo(controller);
}


splitScroll();

// Appear effekter (ScrollReveal)


ScrollReveal().reveal('.tittel-1');
ScrollReveal().reveal('.text-1', {delay: 250});

ScrollReveal().reveal('.tittel-2');
ScrollReveal().reveal('.text-2', {delay: 250});

ScrollReveal().reveal('.tittel-3');
ScrollReveal().reveal('.text-3', {delay: 250});





