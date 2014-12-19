$(document).ready(function(){
	$("#image").change(function(){
		if($("#image").val() == "apple") {
			$("#canvas1").drawImage({
				source: "assets/apple.jpg",
				x: 365,
				y: 260,
				width: 730,
				height: 520
			});
		} else if($("#image").val() == "banana") {
			$("#canvas1").drawImage({
				source: "assets/banana.jpg",
				x: 365,
				y: 260,
				width: 730,
				height: 520
			});
		} else if($("#image").val() == "cherry") {
			$("#canvas1").drawImage({
				source: "assets/cherry.jpg",
				x: 365,
				y: 260,
				width: 730,
				height: 520
			});
		} else  if($("#image").val() == "orange") {
			$('#canvas1').drawImage({
				source: "assets/orange.jpg",
				x: 365,
				y: 260,
				width: 730,
				height: 520
			});
		} //end if
	}); //end change

	$("#create").click(function(){
		function invert(){ 
			$(this).setPixels({
				x: 365,
				y: 260,
				each: function(px) {
					px.r = 255 - px.r;
					px.g = 255 - px.g;
					px.b = 255 - px.b;
				}
			}); //end setPixels
		}

		var imgsrc = $("#image").val();
		switch(imgsrc){
			case "apple":
				imgsrc = "assets/apple.jpg";
				break;
			case "banana":
				imgsrc = "assets/banana.jpg";
				break;
			case "cherry":
				imgsrc = "assets/cherry.jpg";
				break;
			case "orange": 
				imgsrc = "assets/orange.jpg";
		} //end switch

		$("#canvas1").drawImage({
			source: imgsrc,
			x: 365,
			y: 260,
			width: 730,
			height: 520,
			load: invert
		}); //end invert

		var feeling = $("#excite").val();
		switch(feeling){
			case "normal":
				feeling = "Woah";
				break;
			case "excited":
				feeling = "WOAH";
				break;
			case "blown":
				feeling = "MIND BLOWN!";
		} //end switch

		$("#canvas1").drawLine({
			strokeStyle: "#000",
			strokeWidth: 4,
			rounded: true,
			startArrow: true,
			arrowRadius: 15,
			x1: 365, y1: 260,
			x2: 100, y2: 100,
		  }) //end drawLine
		  .drawText({
			fillStyle: "#fff",
			strokeStyle: "#000",
			strokeWidth: 3,
			x: 365,
			y: 470,
			fontSize: "5em",
			fontFamily: "Helvetica, sans-serif",
			text: feeling
		}); //end draw text

	}); // end create click 

	$("#clear").click(function(){
		$("#canvas1").clearCanvas();
	}); //end click-clear

}); //end ready
