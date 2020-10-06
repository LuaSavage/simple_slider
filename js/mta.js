let arrow = {
	left: document.getElementsByClassName('arrow-left')[0],
	right: document.getElementsByClassName('arrow-right')[0]
}

arrow.left.addEventListener("click", function(event) { 
	changer.select(-1);
	changer.setTimer();
});

arrow.right.addEventListener("click", function(event) { 
	changer.select(1);
	changer.setTimer();
});

arrow.left.addEventListener("mouseenter", function(event) { 

});

arrow.right.addEventListener("mouseenter", function(event) { 

});

