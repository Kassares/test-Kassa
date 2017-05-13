$(document).ready(function(){


/* слайдер цен */

$("#slider").slider({
	min: 0,
	max: 6000,
	values: [800,5000],
	range: true,
	stop: function(event, ui) {
		$("input#minCost").val("€" + $("#slider").slider("values",0));
		$("input#maxCost").val("€" + $("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		$("input#minCost").val("€" + $("#slider").slider("values",0));
		$("input#maxCost").val("€" + $("#slider").slider("values",1));
    }
});

$("input#minCost").val("€" +800);
$("input#maxCost").val("€" +5000);

$("input#minCost").change(function(){

	var value1=$("input#minCost").val().substring(1);
	var value2=$("input#maxCost").val().substring(1);

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$("input#minCost").val(value1);
	}
	$("#slider").slider("values",0,value1);	
});

	
$("input#maxCost").change(function(){
		
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();
	
	if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$("input#maxCost").val(value2);
	}
	$("#slider").slider("values",1,value2);
});



// фильтрация ввода в поля
	$('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});


});


				// Date change
var dayRent = $('.rent-day');
var weekRent = $('.rent-week');

dayRent.addClass('active');

weekRent.click( () => {
	dayRent.removeClass('active');
	weekRent.addClass('active');
});

dayRent.click( () => {
	weekRent.removeClass('active');
	dayRent.addClass('active');
});


$('.filter-type_item').click(function(){
	 $(this).toggleClass("active");
});

$("#more-filters").click(() => {
	$(".top").hide();
	$(".content>.col-md-9").hide();
	$("#more-filters").hide();
	$(".filter").show("slow");
	$(".filter-apply").show("slow");
})

$(".filter-apply").click(() => {
	$(".filter").hide();
	$(".filter-apply").hide();
	$(".top").show();
	$(".content>.col-md-9").show();
	$("#more-filters").show();
})

		