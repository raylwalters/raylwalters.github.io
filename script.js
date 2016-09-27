function setActive(){
	if($(window).width() > 850){
		var page = document.getElementById("nav").getElementsByTagName("a");
		for(i=0; i<page.length; i++){
			if(document.location.href.indexOf(page[i].href)>=0){
				page[i].className="active";
			}
		}
	}
}
window.onload = setActive;


function dropFunction(){
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e){
	if(!e.target.matches(".dropbtn")){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for(var d = 0; d<dropdowns.length; d++){
			var openDropdown = dropdowns[d];
			if(openDropdown.classList.contains("show")){
				openDropdown.classList.remove("show");
			}
		}
	}
}


function upCase(){
	var message = document.getElementById("message");
	var text = message.value;
	document.getElementById("message").value = (text.toUpperCase() + ", Your text is now capitalized!");

}




$(document).ready(function(){
//Fade on hover
	var $nav = $("li.topnav");
	$nav.hover(function(){
			$(this).fadeTo("fast", 0.25);
		},function(){
			$(this).fadeTo("fast", 1);
		}
	);

	//Click li to change background******
	var $skills = $("li.skills");
	$skills.click(function(e){
		var $clone = $(this).clone();
		$(this).css("background-color", "silver");
		//.append(" " + e.type);	
	});
	$skills.dblclick(function(e){
		$(this).css("background-color", "white");
		
	});
//Portfolio drop down*********
	var $port = $("li#port");
	var $projects = $("ul#projects");
	//$projects.hide();
	$port.hover(function(){
		$projects.show();
	// }
	// function(){
	// 	$projects.hide();
	});
	$(document).click(function(){
		$projects.hide();

	});

	var $list = $("#header");
	$list.hide();
	$list.slideToggle(1000, "swing");
	







});













