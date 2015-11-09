window.onload = function()
{
	

	//var puzzsq = $$("div#puzzlearea div");
	var puzzsq = document.getElementById('puzzlearea').children;
	var positionTop = 0;
	var positionLeft = 0;

	var emptyTop = 300;
	var emptyLeft = 300;


	puzzsq[0].style.backgroundPosition = "0px 0px";
	puzzsq[1].style.backgroundPosition = "-100px 0px";
	puzzsq[2].style.backgroundPosition = "-200px 0px";
	puzzsq[3].style.backgroundPosition = "-300px 0px";
	puzzsq[4].style.backgroundPosition = "0px -100px";
	puzzsq[5].style.backgroundPosition = "-100px -100px";
	puzzsq[6].style.backgroundPosition = "-200px -100px";
	puzzsq[7].style.backgroundPosition = "-300px -100px";
	puzzsq[8].style.backgroundPosition = "0px -200px";
	puzzsq[9].style.backgroundPosition = "-100px -200px";
	puzzsq[10].style.backgroundPosition = "-200px -200px";
	puzzsq[11].style.backgroundPosition = "-300px -200px";
	puzzsq[12].style.backgroundPosition = "0px -300px";
	puzzsq[13].style.backgroundPosition = "-100px -300px";
	puzzsq[14].style.backgroundPosition = "-200px -300px";

	for( i = 0; i < puzzsq.length; i++ )
	{
		//puzzsq[i].addClassName("puzzlepiece");
		puzzsq[i].className = 'puzzlepiece';
		//puzzsq[i].style.position = "relative";
		//puzzsq
		//puzzsq[i].style.float = "left";

		puzzsq[i].style.backgroundSize = "400px 400px";

		puzzsq[i].style.top = positionTop + "px";
        puzzsq[i].style.left = positionLeft + "px";
        
        if (positionLeft < 300) {
			positionLeft = positionLeft + 100;
		}
		else {
			positionLeft = 0;
			positionTop = positionTop + 100;
		}

		/*puzzsq[i].onmouseover = function () {
			var piece = this;
			//console.log(piece.style.left);
			 
			if (parseInt(piece.style.left) ) {
				console.log('can move');
			}
			else
				console.log("Can't Move")
		}*/
		//puzzsq[i].addClassName('movablepiece');
				
	}
	//puzzsq[14].AddclassName = ('movablepiece');

	/*var hoverover = function(v){
		puzzsq[v].onmouseover = function() {
			puzzsq[v].addClassName('movablepiece');
		}
	}*/

	document.getElementById('controls').onclick = function shuffle() {
		ranList = [];
		var ran = 0;
		newpostop = 0;
		newposleft = 0;
		while (ran !== 15){
			num = Math.floor(Math.random()*(puzzsq.length));
			//console.log(ranList.indexOf(num));
			//console.log(ranList.length);
			if(ranList.indexOf(num) === -1) {
				ranList.push(num);
				//alert('added a number');
				console.log(ranList);
				console.log(ranList.length);
				//console.log(ranList[num]);
				ran++;
			}	
		}
		for ( i = 0; i < ranList.length; i++ ) {
			puzzsq[ranList[i]].style.top = newpostop + "px";
			puzzsq[ranList[i]].style.left = newposleft + "px";
			//newposleft = newposleft + 100;
			if( newposleft < 300) {
				newposleft = newposleft + 100;
			}
			else{
				newposleft = 0;
				newpostop = newpostop + 100;
			}
		}
	};

	function extra() {
		winner = 0;
		checkpostop = 0;
		checkposleft = 0;
		atop = 0;
		aleft = 0;
		atop1 = 0;
		aleft1 = 0;
		for( i = 0; i < puzzsq.length; i++ ) {
			if( parseInt( puzzsq[i].style.top) === checkpostop && parseInt( puzzsq[i].style.left ) === checkposleft) {
				winner++
				if ( checkposleft < 300) {
					checkposleft = checkposleft + 100;
				}
				else {
					checkposleft = 0;
					checkpostop = checkpostop + 100;
				}
			}
		}
		if ( winner == 15 ){
			document.getElementsByTagName("h1")[0].innerHTML = "CONGRATULATIONS";
			document.getElementsByTagName("h1")[0].style.color = 'green';
			for ( i = 0; i <puzzsq.length; i++) {
				puzzsq[i].style.backgroundImage = "url('winpic.jpg')";
				puzzsq[i].style.borderColor = 'green';
				puzzsq[i].style.top = atop + "px";
				puzzsq[i].style.left = aleft + "px";
				if ( aleft < 300) {
					aleft = aleft + 100; 
				}
				else {
					aleft = 0;
					atop = atop + 100;
				}
			} 
		}
		if( winner == 14 ) {
			var help = prompt(" Looks like you in a pickle ... would you like to use your HELPING HAND CARD", "YES or NO");
			help = help.toUpperCase();
			if(help == "YES") {
				for ( i = 0; i <puzzsq[i].length; i++) {
					puzzsq[i].style.top = atop1 + "px";
					puzzsq[i].style.left = aleft1 + "px"
					if ( aleft1 < 300) {
						aleft1 = aleft1 + 100; 
					}
					else {
						aleft1 = 0;
						atop1 = atop1 + 100;
					}
					puzzsq[i].style.backgroundImage = "url('winpic.jpg')";
					puzzsq[i].style.borderColor = 'green';
				}
				document.getElementsByTagName("h1")[0].innerHTML = "CONGRATULATIONS";
				document.getElementsByTagName("h1")[0].style.color = 'green';
			}
		}
		if( winner == 13 ) {
			var help = prompt(" Looks like you in a pickle ... would you like to use your HELPING HAND CARD", "YES or NO");
			help = help.toUpperCase();
			if(help == "YES") {
				for ( i = 0; i <puzzsq[i].length; i++) {
					puzzsq[i].style.top = atop1 + "px";
					puzzsq[i].style.left = aleft1 + "px"
					if ( aleft1 < 300) {
						aleft1 = aleft1 + 100; 
					}
					else {
						aleft1 = 0;
						atop1 = atop1 + 100;
					}
					puzzsq[i].style.backgroundImage = "url('winpic.jpg')";
					puzzsq[i].style.borderColor = 'green';
				}
				document.getElementsByTagName("h1")[0].innerHTML = "CONGRATULATIONS";
				document.getElementsByTagName("h1")[0].style.color = 'green';
			}
		}
	}


	for ( i = 0; i < puzzsq.length; i++ )
	{
		
		//puzzsq[i].addEventListener("click", swap(parseInt(puzzsq[i].style.top.substring(0,3)), parseInt(puzzsq[i].style.left.substring(0,3)) ));
		//console.log(parseInt(puzzsq[i].style.top.substring(0,3)), parseInt(puzzsq[i].style.left.substring(0,3)));
		//puzzsq[i].addClassName('movablepiece');
		puzzsq[i].onclick = function(){
			postop = parseInt(this.style.top);
			posleft = parseInt(this.style.left);
			if (postop == emptyTop && posleft == (emptyLeft-100) || postop == emptyTop && posleft == (emptyLeft+100) || postop == (emptyTop-100) && posleft == emptyLeft || postop == (emptyTop+100) && posleft == emptyLeft){
				this.style.top = emptyTop + "px";
				this.style.left = emptyLeft + "px";
				emptyTop = postop;
				emptyLeft = posleft;
				if ( document.getElementById('shufflebutton').click )
				{
					extra();
				}				
			}
			
		}

		puzzsq[i].onmouseover = function(){
			postop = parseInt(this.style.top);
			posleft = parseInt(this.style.left);
			if (postop == emptyTop && posleft == (emptyLeft-100) || postop == emptyTop && posleft == (emptyLeft+100) || postop == (emptyTop-100) && posleft == emptyLeft || postop == (emptyTop+100) && posleft == emptyLeft){
				this.addClassName('movablepiece');
			}
			else{
				this.removeClassName('movablepiece');
			}
		}
	}
}