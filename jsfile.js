const newLocal = '.download-button';
const downloadButton = document.querySelector(newLocal);
const totalDownloads = document.querySelector('.download-count');

// window.reload = myFunction;

let counter = localStorage.getItem('newcount') || 0;

totalDownloads.innerHTML = counter;


downloadButton.addEventListener('click', countDownloads);

function countDownloads() {
	
	let newCount = counter++;
	
	localStorage.setItem('newcount', counter);
	// 	console.log(newCount);
		
		totalDownloads.innerHTML = counter;
		// return localStorage.getItem('newcount');
	
		// localStorage.clear();
	console.log(counter);
}
// location.reload();

// window.onload() = () => { 
// 	myFunction();
// 	newCount++
// }



// const myslide = document.querySelectorAll('.myslide'),
// 	  dot = document.querySelectorAll('.dot');
// let counter = 1;
// slidefun(counter);

// let timer = setInterval(autoSlide, 8000);
// function autoSlide() {
// 	counter += 1;
// 	slidefun(counter);
// }
// function plusSlides(n) {
// 	counter += n;
// 	slidefun(counter);
// 	resetTimer();
// }
// function currentSlide(n) {
// 	counter = n;
// 	slidefun(counter);
// 	resetTimer();
// }
// function resetTimer() {
// 	clearInterval(timer);
// 	timer = setInterval(autoSlide, 8000);
// }

// function slidefun(n) {
	
// 	let i;
// 	for(i = 0;i<myslide.length;i++){
// 		myslide[i].style.display = "none";
// 	}
// 	for(i = 0;i<dot.length;i++) {
// 		dot[i].className = dot[i].className.replace(' active', '');
// 	}
// 	if(n > myslide.length){
// 	   counter = 1;
// 	   }
// 	if(n < 1){
// 	   counter = myslide.length;
// 	   }
// 	myslide[counter - 1].style.display = "block";
// 	dot[counter - 1].className += " active";
// }