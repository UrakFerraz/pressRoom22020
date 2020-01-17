let slides = document.querySelectorAll('.slideUnitWrapper');
slides = Array.from(slides);
console.log(slides);

let cont = 0;

slidesTotal = slides.length -1;
console.log(slidesTotal);

function nextSlide() {
	if(cont < slidesTotal) {
		cont++;
		console.log(cont);
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	} else {
		cont = 0;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	}
};

function prevSlide() {
	if(cont > 0) {
		cont--;
		console.log(cont);
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	} else if (cont === 0) {
		cont = slidesTotal;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	}
};

document.querySelector('.slideRightBtn').addEventListener('click', nextSlide);
document.querySelector('.slideLeftBtn').addEventListener('click', prevSlide);

let imgs = document.querySelectorAll('amp-img');
imgs = Array.from(imgs);






document.querySelector('.hamburguerMenu').addEventListener('click', function() {
	document.querySelector('.mobileMenu').style.transform = 'translateX(0%)';
});


document.querySelector('.mobileMenuCloseBtn').addEventListener('click', function() {
	document.querySelector('.mobileMenu').style.transform = 'translateX(-110%)';
})