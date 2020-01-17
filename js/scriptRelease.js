document.querySelector('.hamburguerMenu').addEventListener('click', function() {
	document.querySelector('.mobileMenu').style.transform = 'translateX(0%)';
});


document.querySelector('.mobileMenuCloseBtn').addEventListener('click', function() {
	document.querySelector('.mobileMenu').style.transform = 'translateX(-110%)';
})