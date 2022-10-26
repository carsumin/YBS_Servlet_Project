/*처음 파일 열었을때*/
$(function(){
	$("#fileArea").hide();
	
	$("#addImages2").hide();
	$("#addImages3").hide();
	$("#addImages4").hide();
	
	$("#delImages1").hide();
	$("#delImages2").hide();
	$("#delImages3").hide();
	$("#delImages4").hide();
	});
	
/*add file 버튼 클릭할때*/	
function addClick(e){
	var btn = $(e).attr('class');
	switch(btn){
		case "addImages1":
			$("#thumbnailImg1").click();
		break;
		case "addImages2":
			$("#thumbnailImg2").click();
		break;
		case "addImages3":
			$("#thumbnailImg3").click();
		break;
		case "addImages4":
			$("#thumbnailImg4").click();
		break;
	}
}

/*첨부파일 이미지 띄우기*/
function LoadImg(value, num){ // num에 따라 src에 이미지를 집어넣는 작업
	if(value.files && value.files[0]){
		var reader = new FileReader();
							
		reader.onload = function(e){								
			switch(num){
				case 1: 
					$("#contentImg1").attr("src", e.target.result);
					$("#delImages1").show();
					$("#addImages2").show();
				break;
				case 2:
					$("#contentImg2").attr("src", e.target.result);
					$("#delImages2").show();
					$("#addImages3").show();
				break;
				case 3: 
					$("#contentImg3").attr("src", e.target.result);
					$("#delImages3").show();
					$("#addImages4").show();
				break;
				case 4:
					$("#contentImg4").attr("src", e.target.result);
					$("#delImages4").show();
				break;
			}
		}
							
		reader.readAsDataURL(value.files[0]); // 여러 개중 0번째 있는 1개만 집어넣겠다
	}
}
/*Delet file 버튼 클릭시*/
function delclick(e){
	var btn = $(e).attr('class');
	switch(btn){
		case "delImages1":
			$("#contentImg1").attr("src","resources/img/addPic_2.png");
			$("#delImages1").css("display","none");
		break;
		case "delImages2":
			$("#contentImg2").attr("src","resources/img/addPic_2.png");
			$("#delImages2").css("display","none");
		break;
		case "delImages3":
			$("#contentImg3").attr("src","resources/img/addPic_2.png");
			$("#delImages3").css("display","none");
		break;
		case "delImages4":
			$("#contentImg4").attr("src","resources/img/addPic_2.png");
			$("#delImages4").css("display","none");
		break;
	}
}


function thumbClick(e){
	var btn = $(e).attr('for');
	if($("input[name=thumbnail]:checked")){
			 $("#thumb").attr('value','Confirm')
	} else(
		$("#thumb").attr('value','Thumb')
	)
	
	if($(e).siblings("img").attr("src")==="resources/img/addPic_2.png"){
			 $(e).siblings("input[name=thumbnail]").attr('onclick','return(false);')
	}
	
}

function switchValue(z){
	var btn = $(z).attr('value');
	switch(btn){
		case 'Thumb':
			if($("img").attr("src") === "resources/img/addPic_2.png"){
		$(z).disabled = true;
	} else(
			$("label").css("display", "block"),
			$(z).disabled = false
			)
		break;
		case 'Confirm':
			$("label").css("display", "none");
			$("#thumb").attr('value','Thumb');
		break;
	}
	
	

}
