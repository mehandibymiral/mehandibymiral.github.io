﻿function toggle() {
	var ele = document.getElementById("toggleText");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
		ele.style.display = "none";
		text.innerHTML = "More Location";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Less Location";
	}
} 
