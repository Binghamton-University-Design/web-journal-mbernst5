document.addEventListener("DOMContentLoaded", function(){
var nav = document.querySelector('svg');

window.addEventListener('scroll', function(){
	if (window.pageYOffset > 100) {
		nav.classList += ' shrink'
	} else{
		nav.classList = 'svg'
	}
})
}