var creative = {}; //ad object

function init() {
	console.log("Ad Ready");
	creative.viewport = document.getElementById('viewport');
	gsap.set('#viewport, #border', {autoAlpha:1});

	// gsap.set('#tmp', {autoAlpha:0.5});
	
	frameOne();
}

const jitterFixProps = {force3D: true, rotationZ: 0.1, z: 0.1}

function frameOne() {
	const delay = 4.3

	gsap.set('.f1', {autoAlpha: 1})
	gsap.to('#f1-img', {scale: 1.05, duration: delay + 1.5, ...jitterFixProps})

	gsap.fromTo('#f1-img-con', {yPercent: 100}, {duration: 0.8, yPercent: 0, ease: 'power4.out'})
	gsap.fromTo('#f1-bg', {yPercent: -100}, {duration: 0.8, yPercent: 0, ease: 'power4.out'})
	
	gsap.fromTo('.f1.copy', {backgroundPosition: '0pc 130px', autoAlpha: 0}, {delay: 0.3, duration: 1, backgroundPosition: '0pc 0px', autoAlpha: 1, ease: 'power4.out'})

	gsap.delayedCall(delay, frameTwo)
}

function frameTwo() {
	const delay = 4.3

	gsap.set('.f2', {autoAlpha: 1})
	gsap.to('#f2-img', {x: -55, duration: delay + 1.5, ...jitterFixProps})

	gsap.fromTo('#f2-img-con', {xPercent: 100}, {duration: 0.8, xPercent: 0, ease: 'power4.out'})
	gsap.fromTo('#f2-bg', {xPercent: -100}, {duration: 0.8, xPercent: 0, ease: 'power4.out'})

	gsap.fromTo('.f2.copy', {backgroundPosition: '0pc -130px', autoAlpha: 0}, {delay: 0.3, duration: 1, backgroundPosition: '0pc 0px', autoAlpha: 1, ease: 'power4.out'})

	gsap.delayedCall(delay, frameThree)
}

function frameThree() {
	const delay = 4.3

	gsap.set('.f3', {autoAlpha: 1})
	gsap.to('#f3-img', {scale: 1.05, duration: delay + 1.5, ...jitterFixProps})

	gsap.fromTo('#f3-bg', {yPercent: -100}, {duration: 0.8, yPercent: 0, ease: 'power4.out'})
	gsap.fromTo('#f3-img-con', {yPercent: 100}, {duration: 0.8, yPercent: 0, ease: 'power4.out'})

	gsap.fromTo('.f3.copy', {backgroundPosition: '0pc 130px', autoAlpha: 0}, {delay: 0.3, duration: 1, backgroundPosition: '0pc 0px', autoAlpha: 1, ease: 'power4.out'})

	gsap.delayedCall(delay, frameFour)
}

function frameFour() {
	gsap.set('.f4', {autoAlpha: 1})
	gsap.to('#f4-img', {scale: 1.05, duration: 2.1, ...jitterFixProps})

	gsap.fromTo('#f4-img-con', {yPercent: -100}, {duration: 0.8, yPercent: 0, ease: 'power4.out'})
	gsap.fromTo('#f4-bg-bot', {yPercent: 100}, {duration: 0.8, yPercent: 0, ease: 'power4.out'})

	gsap.fromTo('.f4.copy', {backgroundPosition: '0pc -130px', autoAlpha: 0}, {delay: 0.3, duration: 1, backgroundPosition: '0pc 0px', autoAlpha: 1, ease: 'power4.out'})
	gsap.from('.f4.endmatter', {delay: 1.2, duration: 0.3, autoAlpha: 0})
}