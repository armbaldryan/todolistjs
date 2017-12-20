window.onload = function(){


//Variables define
var newNum = prompt("qani qarakusi eq uzum",3),
EMPTY = "&nbsp;",
array = [],
turn = "X",
counter,
score;
var container;


//Main function
function init() {
	container = document.createElement('div');
	document.body.appendChild(container);
	container.className = "container";
	container.style.width = newNum * 52 + 'px';
	container.style.height = newNum * 52 + 'px';
	array.length = newNum;
	for (var i = 0; i < array.length; i++){
		array[i] = new Array();
		for (var j = 0; j < array.length; j++){
			array[i][j] = document.createElement('div');
			array[i][j].className = "block";
			array[i][j].classList.add('col' + j,'row' + i);
			if (i == j) {
				array[i][j].classList.add('diagonal0');
			}
			if (j == newNum - i - 1) {
				array[i][j].classList.add('diagonal1');
			}
			array[i][j].addEventListener("click", comb);
			container.appendChild(array[i][j]);
			array[i][j].innerHTML = EMPTY;			
		}
	}
	Win();
	container.onmouseover = function(event){
		if(event.target.innerHTML == EMPTY)
			event.target.style.background = "#f3f3f3";
	};
	container.onmouseout = function(event){
		if(event.target.innerHTML == EMPTY)
			event.target.style.background = "red";
	};
	startNewGame();
}

//New Game Function

function startNewGame() {
	counter = 1;
	turn = "X";
	var blocks = document.getElementsByClassName("block");
	for(i=0;i<blocks.length;i++){
		blocks[i].innerHTML = EMPTY;
	}
}

//Combination

function comb(){
	this.classList.add("clicked");
	if (this.innerHTML !== EMPTY) {
		return;
	}
	this.innerHTML = turn;
	if(counter % 2 == 0){this.innerHTML = "0";}else{this.innerHTML = "X";}
	counter++;
	if (counter === (newNum * newNum) + 1) {
		alert("Draw");
		startNewGame();
	}
}

//Win Algorithm

function Win(){	
	var arrayturn = ["X","0"];
	for(t = 0; t < arrayturn.length; t++){
			for (var i = 0; i < array.length; i++){
		var arm = 0;
		for(var count = 0; count < array.length; count++){
			if(array[i][count].innerHTML == arrayturn[t]){
				if(arm == newNum - 1){
					alert("You Win" + arrayturn[t]); startNewGame();
				}
				arm+=1;
			}
		}
	}
	for (var i = 0; i < array.length; i++){
		var arm = 0;
		for(var col = 0; col < newNum; col ++){
			if(array[col][i].innerHTML == arrayturn[t]){
				if(arm == newNum - 1){
					alert("You Win" + arrayturn[t]); startNewGame(); 
				}
				arm+=1;
			}
		}
	}
	var arm = 0;
	for (var i = 0; i < array.length; i++){
		if(array[i][i].innerHTML == arrayturn[t]){
			console.log(arm);
			if(arm == newNum - 1){
				alert("You Win" + arrayturn[t]); startNewGame(); 
			}
			arm+=1;
		}
	}
	var arm = 0;
	var diagonal1 = newNum - 1;
	for (var i = 0; i < array.length; i++){
		if(array[i][diagonal1].innerHTML == arrayturn[t]){
			console.log(arm);
			if(arm == newNum - 1){
				alert("You Win" + arrayturn[t]); startNewGame(); 
			}
			diagonal1-=1;
			arm+=1;
		}
	}
	}
}

//INITIALIZE

init();	
container.onclick = Win;
};