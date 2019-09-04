var nav = document.querySelector('svg');

window.addEventListener('scroll', function(){
	if (window.pageYOffset > 60) {
		nav.classList += ' shrink'
	} else{
		nav.classList = 'svg'
	}
})
