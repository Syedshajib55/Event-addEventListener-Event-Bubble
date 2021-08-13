function makeRed(){
	document.body.style.backgroundColor = 'Red';
}

//handle blue button click by setting function make
const blueButton = document.getElementById('makeBlueButton');
blueButton.onclick = makeBlue;
function makeBlue(){
	document.body.style.backgroundColor = 'blue';
}

//handle events using anonymous function
const greenButton = document.getElementById('make-green-button');
//  Anonymous function
greenButton.onclick = function makeGreen(){
		document.body.style.backgroundColor = 'Green';
	}
	// console.log(greenButton);

// handle by using add eventListener
const goldenButton = document.getElementById('make-goldenred');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod(){
		document.body.style.backgroundColor = 'goldenrod'
}

//add eventListener
const hotPinkButton = document.getElementById('makeHotPink');
hotPinkButton.addEventListener('click', function makePink()
{
	document.body.style.backgroundColor = 'hotpink';
})

//direct short cut
document.getElementById('makeLightBlue').addEventListener('click', function(){
		document.body.style.backgroundColor = 'lightblue';
})